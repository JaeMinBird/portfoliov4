'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  id: string;
  line: 'I' | 'R' | 'S';
  company: string;
  what: string;
  when: string;
  where: string;
  description: string;
}

interface LineConfig {
  label: string;
  color: string;
  letter: 'I' | 'R' | 'S';
}

const lineConfigs: Record<string, LineConfig> = {
  I: { label: 'Internship', color: '#3B82F6', letter: 'I' }, // blue
  R: { label: 'Research', color: '#EF4444', letter: 'R' }, // red
  S: { label: 'Startup', color: '#10B981', letter: 'S' }, // green
};

// Sample data - replace with your actual experiences
const experiences: Experience[] = [
  {
    id: '1',
    line: 'I',
    company: 'Tech Corp',
    what: 'Software Engineer Intern',
    when: 'Summer 2024',
    where: 'San Francisco, CA',
    description: 'Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  },
  {
    id: '2',
    line: 'R',
    company: 'University Lab',
    what: 'Research Assistant',
    when: '2023-2024',
    where: 'University Campus',
    description: 'Conducted research on machine learning algorithms for natural language processing. Published findings in peer-reviewed conferences.'
  },
  {
    id: '3',
    line: 'S',
    company: 'StartupCo',
    what: 'Co-founder & CTO',
    when: '2022-Present',
    where: 'Remote',
    description: 'Founded and built a SaaS platform from the ground up. Led technical architecture decisions and managed a team of 5 developers.'
  },
];

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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Key Section */}
          <div className="lg:w-[30%] order-1 lg:order-none">
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#3B3B3B]">KEY</h2>
              <div className="space-y-4">
                {Object.entries(lineConfigs).map(([key, config]) => (
                  <motion.div
                    key={key}
                    className="flex items-center gap-3 cursor-pointer justify-center"
                    onClick={() => toggleLine(key)}
                    onHoverStart={() => setHoveredKey(key)}
                    onHoverEnd={() => setHoveredKey(null)}
                  >
                    <div className="relative w-8 h-8">
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
                      className="text-lg font-medium select-none"
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
              <div className="absolute left-4 md:left-8 top-8 bottom-8 flex">
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
                  <div key={lineKey}>
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
                          {/* Stop Circle */}
                          <div className="absolute -left-8 top-6">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center">
                              <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: config.color }}
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="ml-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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