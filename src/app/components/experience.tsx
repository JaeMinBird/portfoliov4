"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import { getExperienceById } from "../data/experience";

type Tag = {
  label: string;
};

type ExperienceProps = {
  logo?: ReactNode | string; // Can be a component, image URL, or SVG
  company: string;
  role: string;
  quote: string;
  when: string;
  where: string;
  tags: Tag[];
  color?: string; // New color prop
};

export default function Experience({
  logo,
  company,
  role,
  quote,
  when,
  where,
  tags,
  color = "#3B3B3B",
}: ExperienceProps) {
  return (
    <motion.div 
      className="rounded-2xl bg-white border border-[#3B3B3B] p-6 md:p-6 lg:p-12 xl:p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top section - split into two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-8 xl:gap-8">
        {/* First column - company and role in vertical halves */}
        <div className="flex flex-col md:flex-col h-full">
          <div 
            className="text-xl md:text-lg lg:text-xl xl:text-3xl font-bold md:h-1/2 font-fredoka flex items-start justify-between md:justify-start"
            style={{ color }}
          >
            <span>{company}</span>
            <span className="md:hidden font-normal">{role}</span>
          </div>
          <div 
            className="hidden md:flex text-xl md:text-lg lg:text-xl xl:text-3xl font-normal h-1/2 font-fredoka items-start"
            style={{ color }}
          >
            {role}
          </div>
        </div>

        {/* Second column - quote */}
        <div>
          <blockquote className="text-xl md:text-base lg:text-lg xl:text-3xl font-normal leading-tight md:leading-snug lg:leading-snug xl:leading-tight font-fredoka">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Divider line */}
      <hr className="my-6 md:my-2 lg:my-4 xl:my-4 border-[#3B3B3B] border-t" />

      {/* Bottom section - two columns with labels and info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-8 xl:gap-8">
        {/* First column - When */}
        <div className="flex items-start">
          <span className="bg-[#3B3B3B] text-white px-3 py-1 rounded-full text-sm font-fredoka">WHEN</span>
          <span className="ml-auto w-1/2 text-sm text-gray-600 font-fredoka px-3 py-1">{when}</span>
        </div>

        {/* Second column - Where */}
        <div className="flex items-start">
          <span className="bg-[#3B3B3B] text-white px-3 py-1 rounded-full text-sm font-fredoka">WHERE</span>
          <span className="ml-auto w-1/2 text-sm text-gray-600 font-fredoka px-3 py-1">{where}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Or create a more generic component that takes an ID
export function ExperienceById({ id, color }: { id: string; color?: string }) {
  const experienceData = getExperienceById(id);
  
  if (!experienceData) {
    return <div>Experience not found</div>;
  }

  return (
    <Experience
      company={experienceData.company}
      role={experienceData.role}
      quote={experienceData.quote}
      when={experienceData.when}
      where={experienceData.where}
      tags={experienceData.tags}
      color={color}
    />
  );
}