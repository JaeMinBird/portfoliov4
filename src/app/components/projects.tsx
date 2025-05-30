'use client';

import React, { useState } from 'react';
import { projects, type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Combined hover state for animations
  const isHovered = isImageHovered || isButtonHovered;
  
  // Split company string by commas and trim whitespace
  const companyTags = project.company.split(',').map(tag => tag.trim());
  
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
        <h3 className="text-2xl font-fredoka flex-1 mr-4">{project.title}</h3>
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
      <p className="text-gray-600 mb-4 font-fredoka">{project.description}</p>
      <div className="flex flex-wrap items-center text-gray-500 font-fredoka gap-x-2 gap-y-1">
        {/* Company tags with dots */}
        <div className="flex flex-wrap items-center gap-x-2">
          {companyTags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="font-medium">{tag}</span>
              {index < companyTags.length - 1 && (
                <span className="text-gray-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Separator between company tags and year */}
        <span className="text-gray-400">•</span>
        
        {/* Year */}
        <span>{project.year}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}