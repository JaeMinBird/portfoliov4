'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Logo() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const pivotRef = useRef<THREE.Group | null>(null)
  const frameId = useRef<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const isMobile = useRef(false)
  const mobileTime = useRef(0)

  useEffect(() => {
    if (!mountRef.current) return

    // Detect mobile device
    isMobile.current = window.innerWidth <= 768

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 2)
    scene.add(directionalLight)

    const loader = new GLTFLoader()
    loader.load(
      '/logo.glb',
      (gltf) => {
        const model = gltf.scene

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshBasicMaterial({
              color: 0xF8C46F,
              wireframe: true,
              transparent: true,
              opacity: 0.9,
            })
          }
        })

        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        model.position.sub(center)

        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 4 / maxDim
        model.scale.setScalar(scale)

        // Create pivot and add model
        const pivot = new THREE.Group()
        pivot.add(model)
        scene.add(pivot)
        pivotRef.current = pivot
      },
      undefined,
      (error) => console.error('Model load error:', error)
    )

    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile.current) return // Disable mouse interaction on mobile
      
      const rect = mountRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      mousePosition.current = { x, y }
    }

    const animate = () => {
      frameId.current = requestAnimationFrame(animate)

      if (pivotRef.current) {
        if (isMobile.current) {
          // Mobile: Smooth automatic rotation
          mobileTime.current += 0.005
          
          // Reduced left/right rotation with pauses at extremes
          const rotationProgress = Math.sin(mobileTime.current * 0.5)
          const smoothRotation = Math.sin(rotationProgress * Math.PI * 0.5)
          
          pivotRef.current.rotation.y = smoothRotation * 0.3 // Reduced from 0.8 to 0.3
          
          // More dramatic up/down movement
          const verticalOffset = Math.sin(mobileTime.current * 0.4) * 0.4 // Increased from 0.1 to 0.4
          pivotRef.current.rotation.x = verticalOffset
        } else {
          // Desktop: Mouse-controlled rotation
          const targetY = mousePosition.current.x * 1
          const targetX = -mousePosition.current.y * 0.4

          pivotRef.current.rotation.y += (targetY - pivotRef.current.rotation.y) * 0.05
          pivotRef.current.rotation.x += (targetX - pivotRef.current.rotation.x) * 0.05
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && mountRef.current) {
        // Update mobile detection on resize
        isMobile.current = window.innerWidth <= 768
        
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
      }
    }

    mountRef.current.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current)
      mountRef.current?.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement)
      }
      rendererRef.current?.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden"
      style={{ pointerEvents: 'auto' }}
    />
  )
}