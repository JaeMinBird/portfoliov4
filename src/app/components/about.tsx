'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Three.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'Data Analysis', category: 'AI/ML' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'CI/CD', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
  { name: 'UI/UX Design', category: 'Design' },
  { name: 'Prototyping', category: 'Design' },
  { name: 'Adobe Creative Suite', category: 'Design' },
  { name: 'Design Systems', category: 'Design' }
]

const categories = ['Frontend', 'Backend', 'AI/ML', 'DevOps', 'Design']

const categoryColors = {
  'Frontend': '#4285F4',    // Google Blue
  'Backend': '#34A853',     // Google Green
  'AI/ML': '#EA4335',       // Google Red
  'DevOps': '#FBBC04',      // Google Yellow
  'Design': '#9C27B0'       // Google Purple
}

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('Frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredResumeButton, setHoveredResumeButton] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full space-y-8" ref={containerRef}>
      {/* Hero Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Main Description */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold text-[#3B3B3B] leading-tight">
              Hey, I'm{' '}
              <motion.span 
                className="text-[#F8C46F]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Jae
              </motion.span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-fredoka leading-relaxed">
              A software engineer and researcher passionate about creating meaningful digital experiences. 
              I specialize in full-stack development and machine learning, with a focus on solving real 
              problems for real people.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-600 font-fredoka">
              Currently building innovative solutions at the intersection of technology and user experience. 
              When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
              or diving deep into the latest ML research.
            </p>
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#6ABF6F] font-fredoka">3+</div>
              <div className="text-sm text-gray-500 font-fredoka">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#5a9bd5] font-fredoka">15+</div>
              <div className="text-sm text-gray-500 font-fredoka">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ff6b6b] font-fredoka">5+</div>
              <div className="text-sm text-gray-500 font-fredoka">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Skills Section */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-fredoka font-bold text-[#3B3B3B] mb-6">
              Skills
            </h3>
            
            {/* Category Filter - Google Material Design Style */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 outline-none cursor-pointer ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-700 bg-white'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category ? categoryColors[category as keyof typeof categoryColors] : undefined,
                    border: 'none'
                  }}
                >
                  {/* Outer border (always visible) */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2"
                    style={{ 
                      borderColor: categoryColors[category as keyof typeof categoryColors]
                    }}
                    animate={{
                      scale: selectedCategory !== category ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Inner filled background */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      backgroundColor: categoryColors[category as keyof typeof categoryColors]
                    }}
                    animate={{
                      scale: selectedCategory === category ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <motion.div
                    className="relative z-10"
                    animate={{
                      color: selectedCategory === category ? '#ffffff' : categoryColors[category as keyof typeof categoryColors]
                    }}
                  >
                    {category}
                  </motion.div>
                </motion.button>
              ))}
            </div>

            {/* Skills Grid - Material Design Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md"
              layout
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05
                  }}
                  className="relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className="p-4 rounded-lg border bg-white cursor-pointer transition-all duration-300"
                    style={{
                      borderColor: hoveredSkill === skill.name 
                        ? categoryColors[skill.category as keyof typeof categoryColors] 
                        : '#e5e7eb'
                    }}
                    whileHover={{ 
                      scale: 1.01,
                      y: -1
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: categoryColors[skill.category as keyof typeof categoryColors] }}
                        />
                        <span className="font-medium text-gray-900">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: categoryColors[skill.category as keyof typeof categoryColors] }}
                        animate={{
                          scale: hoveredSkill === skill.name ? 1 : 0,
                          opacity: hoveredSkill === skill.name ? 1 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    
                    {/* Background highlight on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ 
                        backgroundColor: categoryColors[skill.category as keyof typeof categoryColors]
                      }}
                      animate={{
                        opacity: hoveredSkill === skill.name ? 0.05 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Resume Button Section */}
      <motion.div 
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="relative cursor-pointer"
          onClick={() => {
            window.open('/resume.pdf', '_blank')
          }}
          onHoverStart={() => setHoveredResumeButton(true)}
          onHoverEnd={() => setHoveredResumeButton(false)}
        >
          <div className="relative px-6 py-3 rounded-full">
            {/* Outer border (always visible) */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2"
              style={{ 
                borderColor: '#F8C46F'
              }}
              animate={{
                scale: hoveredResumeButton ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Inner filled background */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ 
                backgroundColor: '#F8C46F'
              }}
              animate={{
                scale: hoveredResumeButton ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Text (always visible) */}
            <span
              className="relative z-10 text-lg font-bold font-fredoka select-none"
              style={{ 
                color: hoveredResumeButton ? '#F8C46F' : '#ffffff'
              }}
            >
              View Resume
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}