'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [hoveredResumeButton, setHoveredResumeButton] = useState(false)
  const [hoveredGuitar, setHoveredGuitar] = useState(false)
  const [hoveredCar, setHoveredCar] = useState(false)

  return (
    <div className="w-full space-y-8">
      {/* Hero Text Section */}
      <div className="flex justify-center">
        {/* Main Description */}
        <motion.div 
          className="space-y-6 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold text-[#3B3B3B] leading-tight">
              Hey, I&apos;m{' '}
              <motion.span 
                className="text-[#F8C46F]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Jae
              </motion.span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-fredoka leading-relaxed">
              A <span style={{ color: '#1E407C' }}>Penn State</span> computer science student researching{' '}
              <span style={{ color: '#FF6B6B' }}>Computer Assisted Driving</span> at the HTI Lab 
              and working on <span style={{ color: '#5A9BD5' }}>Augmented Reality</span> at{' '}
              <span style={{ color: '#6ABF6F' }}>JiaYou Tennis</span>.
              Outside of work I&apos;m either{' '}
              <span 
                className="relative cursor-pointer"
                style={{ color: '#F8C46F' }}
                onMouseEnter={() => setHoveredGuitar(true)}
                onMouseLeave={() => setHoveredGuitar(false)}
              >
                playing guitar
                {hoveredGuitar && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none block">
                    Ibanez AS53 ( ◡̀_◡́)ᕤ
                  </span>
                )}
              </span>{' '}
              or{' '}
              <span 
                className="relative cursor-pointer"
                style={{ color: '#F8C46F' }}
                onMouseEnter={() => setHoveredCar(true)}
                onMouseLeave={() => setHoveredCar(false)}
              >
                wrenching on my car
                {hoveredCar && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none block">
                    2017 WRX STI \(`v´)/
                  </span>
                )}
              </span>
            </p>
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