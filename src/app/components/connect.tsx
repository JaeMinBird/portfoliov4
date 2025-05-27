'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ConnectProps {
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
}

const Connect: React.FC<ConnectProps> = ({ 
  socialLinks = {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  }
}) => {
  const eyesContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const socialPlatforms = [
    { name: 'INSTAGRAM', href: socialLinks.instagram },
    { name: 'LINKEDIN', href: socialLinks.linkedin }
  ];
  
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
            {socialPlatforms.map((platform, index) => (
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
          {/* Top Text with rollup hover animation */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="overflow-hidden leading-none" style={{ height: '9rem' }}> {/* Increased height for better animation */}
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-8xl lg:text-9xl font-extrabold leading-none cursor-pointer flex flex-col"
                style={{ color: '#3B3B3B', fontFamily: 'var(--font-fredoka)' }}
                initial={{ y: '1rem' }} // Start position slightly down
                whileHover={{ y: '-8rem' }} // Increased travel distance
                transition={{ duration: 0.2 }}
              >
                <span style={{ color: '#ff6b6b' }}>INSTAGRAM</span>
                <span style={{ color: '#ff6b6b' }}>INSTAGRAM</span>
              </motion.a>
            </div>
          </div>
          
          {/* Bottom Text with rollup hover animation */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="overflow-hidden leading-none" style={{ height: '9rem' }}> {/* Increased height for better animation */}
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-8xl lg:text-9xl font-extrabold leading-none cursor-pointer flex flex-col"
                style={{ color: '#3B3B3B', fontFamily: 'var(--font-fredoka)' }}
                initial={{ y: '1rem' }} // Start position slightly down
                whileHover={{ y: '-8rem' }} // Increased travel distance
                transition={{ duration: 0.2 }}
              >
                <span style={{ color: '#ff6b6b' }}>LINKEDIN</span>
                <span style={{ color: '#ff6b6b' }}>LINKEDIN</span>
              </motion.a>
            </div>
          </div>
          
          {/* Eyes Container */}
          <div className="flex items-center justify-center gap-8">
            {/* Left Eye */}
            <div 
              ref={leftEyeRef}
              className="w-32 h-32 rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: '#3B3B3B' }}
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
            </div>
            
            {/* Right Eye */}
            <div 
              ref={rightEyeRef}
              className="w-32 h-32 rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: '#3B3B3B' }}
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Connect;