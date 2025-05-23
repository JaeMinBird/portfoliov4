"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import { getExperienceById, type ExperienceData } from "../data/experience";

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
  color = "#3B3B3B", // Default color
}: ExperienceProps) {
  return (
    <motion.div 
      className="rounded-2xl bg-white border-2 border-[#3B3B3B] p-6 md:p-6 lg:p-12 xl:p-12" // Changed from border-[#5a9bd5]
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top section - split into thirds with even spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 xl:gap-8">
        {/* First third - logo (2x bigger) */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="w-[200px] md:w-[140px] lg:w-[240px] h-[200px] md:h-[140px] lg:h-[240px] flex items-center justify-center">
            {typeof logo === "string" ? (
              <Image src={logo as string} alt={`${company} logo`} width={240} height={240} className="md:scale-90 lg:scale-100" />
            ) : (
              <div className="md:scale-90 lg:scale-100">{logo}</div>
            )}
          </div>
        </div>

        {/* Second third - company and role side by side (on both mobile and desktop) */}
        <div className="flex flex-row gap-4 justify-center">
          <div 
            className="text-xl md:text-lg lg:text-xl xl:text-3xl font-normal p-2 md:p-2 lg:p-4 xl:p-4 w-1/2 font-fredoka"
            style={{ color }}
          >
            {company}
          </div>
          <div 
            className="text-xl md:text-lg lg:text-xl xl:text-3xl font-normal p-2 md:p-2 lg:p-4 xl:p-4 w-1/2 font-fredoka"
            style={{ color }}
          >
            {role}
          </div>
        </div>

        {/* Third third - quote */}
        <div>
          <blockquote className="text-xl md:text-base lg:text-lg xl:text-3xl font-normal leading-tight md:leading-snug lg:leading-snug xl:leading-tight font-fredoka">
            "{quote}"
          </blockquote>
        </div>
      </div>

      {/* Mobile-only WHEN/WHERE section that appears between quote and divider */}
      <div className="grid grid-cols-2 gap-4 mt-6 mb-8 md:hidden">
        <div className="flex flex-col gap-4">
          <span className="bg-[#3B3B3B] text-white px-4 py-1 rounded-full text-sm font-fredoka inline-block w-fit">WHEN</span> {/* Changed from bg-[#5a9bd5] */}
          <span className="bg-[#3B3B3B] text-white px-4 py-1 rounded-full text-sm font-fredoka inline-block w-fit">WHERE</span> {/* Changed from bg-[#5a9bd5] */}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm py-1 text-[#3B3B3B] font-fredoka">{when}</span> {/* Changed from text-[#5a9bd5] */}
          <span className="text-sm py-1 text-[#3B3B3B] font-fredoka">{where}</span> {/* Changed from text-[#5a9bd5] */}
        </div>
      </div>

      {/* Divider line - now #3B3B3B and thicker */}
      <hr className="my-6 md:my-4 lg:my-8 xl:my-8 border-[#3B3B3B] border-[1.5px]" /> {/* Changed from border-[#5a9bd5] */}

      {/* Bottom section - maintain the same three-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 xl:gap-8">
        {/* First third - tags section aligns with logo column */}
        <div>
          <div className="flex flex-wrap gap-2 max-h-24 md:max-h-16 lg:max-h-16 xl:max-h-24">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1 md:px-3 md:py-0.5 lg:px-3 lg:py-1 xl:px-5 xl:py-1.5 rounded-full border border-[#3B3B3B] text-[#3B3B3B] text-sm md:text-xs lg:text-sm xl:text-base font-fredoka inline-flex items-center h-fit my-1" // Changed from border-[#5a9bd5] and text-[#5a9bd5]
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Second third - empty column */}
        <div></div>

        {/* Third third - attribution section aligns with quote column (desktop only) */}
        <div className="hidden md:flex md:flex-col gap-2 lg:gap-2 xl:gap-4">
          {/* Row 1 */}
          <div className="flex gap-2 lg:gap-2 xl:gap-4">
            <div className="w-1/2 py-0.5">
              <span className="bg-[#3B3B3B] text-xs lg:text-sm xl:text-base text-white px-3 py-0.5 lg:px-3 lg:py-1 xl:px-5 xl:py-1.5 rounded-full font-fredoka inline-flex items-center h-fit my-1">WHEN</span> {/* Changed from bg-[#5a9bd5] */}
            </div>
            <span className="text-xs lg:text-sm xl:text-base py-1 lg:py-2 xl:py-3 text-[#3B3B3B] font-fredoka w-1/2">{when}</span> {/* Changed from text-[#5a9bd5] */}
          </div>
          {/* Row 2 */}
          <div className="flex gap-2 lg:gap-2 xl:gap-4">
            <div className="w-1/2 py-0.5">
              <span className="bg-[#3B3B3B] text-xs lg:text-sm xl:text-base text-white px-3 py-0.5 lg:px-3 lg:py-1 xl:px-5 xl:py-1.5 rounded-full font-fredoka inline-flex items-center h-fit my-1">WHERE</span> {/* Changed from bg-[#5a9bd5] */}
            </div>
            <span className="text-xs lg:text-sm xl:text-base py-1 lg:py-2 xl:py-3 text-[#3B3B3B] font-fredoka w-1/2">{where}</span> {/* Changed from text-[#5a9bd5] */}
          </div>
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
      logo={experienceData.logo}
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