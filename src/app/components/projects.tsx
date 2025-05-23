'use client';

import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  year: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, company, year }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Combined hover state for animations
  const isHovered = isImageHovered || isButtonHovered;
  
  return (
    <div className="flex flex-col font-fredoka">
      <div 
        className="mb-4 rounded-lg overflow-hidden bg-gray-200 cursor-pointer transition-transform duration-200" 
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        style={{
          aspectRatio: '16/12.8',
          transform: isHovered ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 0.2s ease'
        }}
      >
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-lg">Image Placeholder</span>
        </div>
      </div>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-2xl font-fredoka flex-1 mr-4">{title}</h3>
        <button 
          className="bg-[#3B3B3B] text-white px-4 py-1 rounded-full text-sm font-fredoka inline-flex items-center transition-all duration-300 relative overflow-hidden cursor-pointer flex-shrink-0"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {/* Background animation overlay */}
          <div 
            className={`absolute inset-0 bg-[#141414] rounded-full transition-all duration-300 ease-out ${
              isHovered ? 'translate-x-0 scale-100' : '-translate-x-full scale-75'
            }`}
          />
          
          {/* Content */}
          <span className="relative z-10 mr-2">READ MORE</span>
          <span className="relative z-10 flex items-center justify-center w-5 h-5">
            {/* Dot that expands */}
            <span 
              className={`bg-white rounded-full transition-all duration-300 ${
                isHovered ? 'w-4 h-4' : 'w-2 h-2'
              }`}
            />
            
            {/* Arrow that fades in */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-3 w-3 absolute fill-none stroke-current transition-all duration-300 ${
                isHovered ? 'opacity-100 stroke-[#141414]' : 'opacity-0 stroke-white'
              }`} 
              viewBox="0 0 24 24" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
      <p className="text-gray-600 mb-4 font-fredoka">{description}</p>
      <div className="flex items-center text-gray-500 font-fredoka">
        <span className="font-medium">{company}</span>
        <span className="mx-2">•</span>
        <span>{year}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "First Draft relaunch",
      description: "Redesigning the underlying design system, creating web and mobile wireframing kits and supporting redesigning the UI as part of Figma's post-config relaunch of First Draft.",
      company: "Figma",
      year: "2024",
      image: "/images/first-draft.png"
    },
    {
      title: "Notifications",
      description: "Improving the information architecture and parseability of Figma's notification feed with a visual redesign. This includes a scalable and robust system to support future notifications.",
      company: "Figma",
      year: "2024",
      image: "/images/notifications.png"
    },
    {
      title: "Design System",
      description: "Building a comprehensive design system that scales across multiple products and platforms with consistent patterns and components.",
      company: "Figma",
      year: "2023",
      image: "/images/design-system.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          company={project.company}
          year={project.year}
        />
      ))}
    </div>
  );
}