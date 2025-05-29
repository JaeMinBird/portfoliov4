'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Experience, experiences, lineConfigs } from '../data/metro';

export default function Metro() {
  const [visibleLines, setVisibleLines] = useState<Set<string>>(new Set(['I', 'R', 'S']));
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const toggleLine = (lineKey: string) => {
    const newVisibleLines = new Set(visibleLines);
    if (newVisibleLines.has(lineKey)) {
      newVisibleLines.delete(lineKey);
    } else {
      newVisibleLines.add(lineKey);
    }
    setVisibleLines(newVisibleLines);
  };

  const groupedExperiences = experiences.reduce((acc, exp) => {
    if (!acc[exp.line]) acc[exp.line] = [];
    acc[exp.line].push(exp);
    return acc;
  }, {} as Record<string, Experience[]>);

  return (
    <div className="p-0 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Key Section */}
          <div className="lg:w-[30%] order-1 lg:order-none">
            <div className="pt-4 pb-2 md:pt-4 md:pb-3 lg:p-6 text-center lg:text-center">
              {/* Desktop: Show KEY text */}
              <div className="hidden lg:block">
                <h2 className="text-4xl font-bold mb-2 text-[#3B3B3B] text-center">KEY</h2>
                <p className="text-sm text-gray-600 mb-6 text-center">click to filter</p>
              </div>
              
              {/* Mobile vertical: Show KEY text on left, bigger */}
              <div className="w-full flex justify-center">
                <div className="flex sm:hidden items-center mb-4">
                  <div className="flex flex-col mr-6 flex-shrink-0">
                    <h2 className="text-5xl font-bold text-[#3B3B3B]">KEY</h2>
                    <p className="text-xs text-gray-600 mt-1">tap to filter</p>
                  </div>
                  <div className="flex flex-col space-y-4 items-start flex-1">
                    {Object.entries(lineConfigs).map(([key, config]) => (
                      <motion.div
                        key={key}
                        className="flex items-center cursor-pointer"
                        onClick={() => toggleLine(key)}
                        onHoverStart={() => setHoveredKey(key)}
                        onHoverEnd={() => setHoveredKey(null)}
                      >
                        <div className="relative w-8 h-8 flex-shrink-0">
                          {/* Outer circle (outline) */}
                          <motion.div 
                            className="absolute inset-0 w-8 h-8 rounded-full border-2"
                            style={{ 
                              borderColor: config.color
                            }}
                            animate={{
                              scale: !visibleLines.has(key) && hoveredKey === key ? 0.8 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          />
                          {/* Inner circle */}
                          <motion.div
                            className="absolute inset-0 w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ 
                              backgroundColor: visibleLines.has(key) ? config.color : 'transparent'
                            }}
                            animate={{
                              scale: visibleLines.has(key) ? (hoveredKey === key ? 0.7 : 1) : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span
                              className="text-sm font-bold text-white select-none pointer-events-none"
                              animate={{
                                scale: visibleLines.has(key) ? 1 : 0,
                              }}
                            >
                              {config.letter}
                            </motion.span>
                          </motion.div>
                          {/* Letter when toggled off */}
                          {!visibleLines.has(key) && (
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-sm font-bold select-none pointer-events-none"
                              style={{ color: config.color }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {config.letter}
                            </motion.span>
                          )}
                        </div>
                        <span 
                          className="text-lg font-medium select-none ml-3"
                          style={{ color: config.color }}
                        >
                          {config.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet horizontal: Show KEY text above */}
              <div className="hidden sm:block lg:hidden">
                <h2 className="text-4xl font-bold mb-2 text-[#3B3B3B] text-center">KEY</h2>
                <p className="text-xs text-gray-600 mt-1 mb-4">tap to filter</p>
              </div>
              
              {/* Keys layout for tablet horizontal */}
              <div className="hidden sm:flex lg:hidden flex-row justify-center space-x-6">
                {Object.entries(lineConfigs).map(([key, config]) => (
                  <motion.div
                    key={key}
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleLine(key)}
                    onHoverStart={() => setHoveredKey(key)}
                    onHoverEnd={() => setHoveredKey(null)}
                  >
                    <div className="relative w-8 h-8 flex-shrink-0">
                      {/* Outer circle (outline) */}
                      <motion.div 
                        className="absolute inset-0 w-8 h-8 rounded-full border-2"
                        style={{ 
                          borderColor: config.color
                        }}
                        animate={{
                          scale: !visibleLines.has(key) && hoveredKey === key ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {/* Inner circle */}
                      <motion.div
                        className="absolute inset-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: visibleLines.has(key) ? config.color : 'transparent'
                        }}
                        animate={{
                          scale: visibleLines.has(key) ? (hoveredKey === key ? 0.7 : 1) : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="text-sm font-bold text-white select-none pointer-events-none"
                          animate={{
                            scale: visibleLines.has(key) ? 1 : 0,
                          }}
                        >
                          {config.letter}
                        </motion.span>
                      </motion.div>
                      {/* Letter when toggled off */}
                      {!visibleLines.has(key) && (
                        <motion.span
                          className="absolute inset-0 flex items-center justify-center text-sm font-bold select-none pointer-events-none"
                          style={{ color: config.color }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {config.letter}
                        </motion.span>
                      )}
                    </div>
                    <span 
                      className="text-lg font-medium select-none ml-3"
                      style={{ color: config.color }}
                    >
                      {config.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Desktop keys layout */}
              <div className="hidden lg:flex flex-col space-y-4 items-center">
                {Object.entries(lineConfigs).map(([key, config]) => (
                  <motion.div
                    key={key}
                    className="flex items-center cursor-pointer w-36"
                    onClick={() => toggleLine(key)}
                    onHoverStart={() => setHoveredKey(key)}
                    onHoverEnd={() => setHoveredKey(null)}
                  >
                    <div className="relative w-8 h-8 flex-shrink-0">
                      {/* Outer circle (outline) */}
                      <motion.div 
                        className="absolute inset-0 w-8 h-8 rounded-full border-2"
                        style={{ 
                          borderColor: config.color
                        }}
                        animate={{
                          scale: !visibleLines.has(key) && hoveredKey === key ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {/* Inner circle */}
                      <motion.div
                        className="absolute inset-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: visibleLines.has(key) ? config.color : 'transparent'
                        }}
                        animate={{
                          scale: visibleLines.has(key) ? (hoveredKey === key ? 0.7 : 1) : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="text-sm font-bold text-white select-none pointer-events-none"
                          animate={{
                            scale: visibleLines.has(key) ? 1 : 0,
                          }}
                        >
                          {config.letter}
                        </motion.span>
                      </motion.div>
                      {/* Letter when toggled off */}
                      {!visibleLines.has(key) && (
                        <motion.span
                          className="absolute inset-0 flex items-center justify-center text-sm font-bold select-none pointer-events-none"
                          style={{ color: config.color }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {config.letter}
                        </motion.span>
                      )}
                    </div>
                    <span 
                      className="text-lg font-medium select-none ml-3"
                      style={{ color: config.color }}
                    >
                      {config.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Metro Map Section */}
          <div className="lg:w-[70%] order-2 lg:order-none">
            <div className="relative p-4 md:p-8 min-h-[600px]">
              {/* Vertical Lines */}
              <div className="absolute left-4 md:left-8 top-4 md:top-8 bottom-4 md:bottom-8 flex">
                {Object.entries(lineConfigs).map(([key, config], index) => (
                  <motion.div
                    key={key}
                    className="relative"
                    style={{ left: `${index * 0}px` }}
                    animate={{
                      opacity: visibleLines.has(key) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-4 h-full rounded-full"
                      style={{ backgroundColor: config.color }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Experience Entries */}
              <div className="ml-16 md:ml-20 space-y-12">
                {Object.entries(groupedExperiences).map(([lineKey, lineExperiences]) => (
                  <div key={lineKey} className="space-y-12">
                    {lineExperiences.map((experience, expIndex) => {
                      const lineIndex = Object.keys(lineConfigs).indexOf(lineKey);
                      const config = lineConfigs[lineKey];
                      
                      return (
                        <motion.div
                          key={experience.id}
                          className="relative flex items-start"
                          style={{ marginLeft: `${lineIndex * 0}px` }}
                          animate={{
                            opacity: visibleLines.has(lineKey) ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: expIndex * 0.1 }}
                        >

                          {/* Stop Circle - Mobile Only */}
                          <div 
                            className="absolute top-3 md:hidden"
                            style={{ 
                              left: lineIndex === 0 ? '-64px' : 
                                    lineIndex === 1 ? '-48px' : 
                                    '-32px' 
                            }}
                          >
                            <div className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: config.color }}
                              />
                            </div>
                          </div>

                          {/* Stop Circle - Desktop Only */}
                          <div 
                            className="absolute top-3 hidden md:block"
                            style={{ 
                              left: lineIndex === 0 ? '-80px' : 
                                    lineIndex === 1 ? '-64px' : 
                                    '-48px' 
                            }}
                          >
                            <div className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: config.color }}
                              />
                            </div>
                          </div>

                          {/* Experience Content */}
                          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Left Column - Company Info */}
                            <div>
                              <h3 
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: config.color }}
                              >
                                {experience.company}
                              </h3>
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <span 
                                    className="text-white px-3 py-1 rounded-full text-sm font-fredoka"
                                    style={{ backgroundColor: config.color }}
                                  >
                                    WHAT
                                  </span>
                                  <span className="ml-auto w-1/2 text-sm text-[#3B3B3B] font-fredoka px-3 py-1">
                                    {experience.what}
                                  </span>
                                </div>
                                <div className="flex items-start">
                                  <span 
                                    className="text-white px-3 py-1 rounded-full text-sm font-fredoka"
                                    style={{ backgroundColor: config.color }}
                                  >
                                    WHEN
                                  </span>
                                  <span className="ml-auto w-1/2 text-sm text-[#3B3B3B] font-fredoka px-3 py-1">
                                    {experience.when}
                                  </span>
                                </div>
                                <div className="flex items-start">
                                  <span 
                                    className="text-white px-3 py-1 rounded-full text-sm font-fredoka"
                                    style={{ backgroundColor: config.color }}
                                  >
                                    WHERE
                                  </span>
                                  <span className="ml-auto w-1/2 text-sm text-[#3B3B3B] font-fredoka px-3 py-1">
                                    {experience.where}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Description */}
                            <div>
                              <p className="text-xl text-[#3B3B3B] leading-relaxed">
                                {experience.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}