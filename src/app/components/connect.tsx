'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ConnectProps {
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
    [key: string]: string | undefined;
  };
}

const Connect: React.FC<ConnectProps> = ({ 
  socialLinks = {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:your.email@example.com',
  }
}) => {
  const eyesContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '50px' // Start a bit before the component enters view
      }
    );

    // Copy ref value to variable to fix the warning
    const currentRef = eyesContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const calculateEyePosition = (eyeRef: HTMLDivElement | null, maxMovement: number) => {
    if (!eyeRef || isMobile) return { x: 0, y: 0 };
    
    const rect = eyeRef.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200; // Maximum distance to consider for movement
    
    if (distance === 0) return { x: 0, y: 0 };
    
    const normalizedX = deltaX / distance;
    const normalizedY = deltaY / distance;
    
    const movement = Math.min(distance / maxDistance, 1) * maxMovement;
    
    return {
      x: normalizedX * movement,
      y: normalizedY * movement
    };
  };

  const calculateParallaxPosition = () => {
    if (isMobile || !isInView) return { x: 0, y: 0 };
    
    // Create more balanced movement with stronger upward motion
    const baseMovement = scrollY * 0.1;
    
    return {
      x: 0, // No horizontal movement
      y: baseMovement > 0 ? -baseMovement * 1 : baseMovement * 2  // More upward movement, less downward
    };
  };

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const socialPlatforms = [
    { name: 'GITHUB', href: socialLinks.github },
    { name: 'LINKEDIN', href: socialLinks.linkedin },
    { name: 'EMAIL', href: socialLinks.email }
  ];

  const parallaxPosition = calculateParallaxPosition();
  
  return (
    <div 
      ref={eyesContainerRef}
      className={`relative w-full p-8 ${isMobile ? 'flex flex-col items-center' : 'min-h-screen flex items-center justify-center'}`}
    >
      {isMobile ? (
        // Mobile Layout (lg and below)
        <>
          {/* Eyes at top looking down */}
          <div className="flex items-center justify-center gap-8 mb-16">
            {/* Left Eye */}
            <div 
              ref={leftEyeRef}
              className="w-24 h-24 rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: '#3B3B3B' }}
            >
              <div className="w-16 h-16 bg-white rounded-full absolute flex items-center justify-center">
                <div 
                  className="w-8 h-8 rounded-full absolute"
                  style={{ 
                    backgroundColor: '#3B3B3B',
                    transform: 'translate(3px, 12px)' // Looking more down and slightly inward
                  }}
                />
              </div>
            </div>
            
            {/* Right Eye */}
            <div 
              ref={rightEyeRef}
              className="w-24 h-24 rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: '#3B3B3B' }}
            >
              <div className="w-16 h-16 bg-white rounded-full absolute flex items-center justify-center">
                <div 
                  className="w-8 h-8 rounded-full absolute"
                  style={{ 
                    backgroundColor: '#3B3B3B',
                    transform: 'translate(-3px, 12px)' // Looking more down and slightly inward
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stacked text list - no hover effects on mobile */}
          <div className="flex flex-col items-center space-y-6">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl font-extrabold leading-none"
                style={{ color: '#ff6b6b', fontFamily: 'var(--font-fredoka)' }}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </>
      ) : (
        // Desktop Layout (xl and above)
        <>
          {/* Centered text with tight spacing */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-8xl lg:text-9xl font-extrabold" style={{ color: '#3B3B3B', fontFamily: 'var(--font-fredoka)', lineHeight: '1' }}>
              {/* LinkedIn Link with slide effect */}
              <div className="overflow-hidden leading-none" style={{ height: '1em' }}>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer flex flex-col leading-none"
                  style={{ color: '#ff6b6b' }}
                  whileHover={{ y: '-1em' }}
                  transition={{ duration: 0.2 }}
                >
                  <span>LINKEDIN</span>
                  <span>LINKEDIN</span>
                </motion.a>
              </div>
              {/* GitHub Link with slide effect */}
              <div className="overflow-hidden leading-none" style={{ height: '1em' }}>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer flex flex-col leading-none"
                  style={{ color: '#ff6b6b' }}
                  whileHover={{ y: '-1em' }}
                  transition={{ duration: 0.2 }}
                >
                  <span>GITHUB</span>
                  <span>GITHUB</span>
                </motion.a>
              </div>
              {/* Email Link with slide effect */}
              <div className="overflow-hidden leading-none" style={{ height: '1em' }}>
                <motion.a
                  href={socialLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer flex flex-col leading-none"
                  style={{ color: '#ff6b6b' }}
                  whileHover={{ y: '-1em' }}
                  transition={{ duration: 0.2 }}
                >
                  <span>EMAIL</span>
                  <span>EMAIL</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Eyes positioned over the text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center justify-center gap-8">
              {/* Left Eye */}
              <motion.div 
                ref={leftEyeRef}
                className="w-32 h-32 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: '#3B3B3B' }}
                animate={{
                  y: parallaxPosition.y * 0.8
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25
                }}
              >
                <div 
                  className="w-24 h-24 bg-white rounded-full absolute flex items-center justify-center"
                  style={{
                    transform: `translate(${calculateEyePosition(leftEyeRef.current, 4).x}px, ${calculateEyePosition(leftEyeRef.current, 4).y}px)`,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full absolute"
                    style={{
                      backgroundColor: '#3B3B3B',
                      transform: `translate(${calculateEyePosition(leftEyeRef.current, 20).x}px, ${calculateEyePosition(leftEyeRef.current, 20).y}px)`,
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Right Eye */}
              <motion.div 
                ref={rightEyeRef}
                className="w-32 h-32 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: '#3B3B3B' }}
                animate={{
                  y: parallaxPosition.y * 0.8
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25
                }}
              >
                <div 
                  className="w-24 h-24 bg-white rounded-full absolute flex items-center justify-center"
                  style={{
                    transform: `translate(${calculateEyePosition(rightEyeRef.current, 4).x}px, ${calculateEyePosition(rightEyeRef.current, 4).y}px)`,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full absolute"
                    style={{
                      backgroundColor: '#3B3B3B',
                      transform: `translate(${calculateEyePosition(rightEyeRef.current, 20).x}px, ${calculateEyePosition(rightEyeRef.current, 20).y}px)`,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Connect;