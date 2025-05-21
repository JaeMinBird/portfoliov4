"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

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
};

export default function Experience({
  logo,
  company,
  role,
  quote,
  when,
  where,
  tags,
}: ExperienceProps) {
  return (
    <motion.div 
      className="rounded-2xl bg-white border-2 border-black p-6 md:p-6 lg:p-12 xl:p-12"
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
          <div className="text-[#ff5722] text-xl md:text-lg lg:text-lg xl:text-3xl font-normal p-2 md:p-2 lg:p-4 xl:p-4 w-1/2 font-fredoka">
            {company}
          </div>
          <div className="text-[#ff5722] text-xl md:text-lg lg:text-lg xl:text-3xl font-normal p-2 md:p-2 lg:p-4 xl:p-4 w-1/2 font-fredoka">
            {role}
          </div>
        </div>

        {/* Third third - quote */}
        <div>
          <blockquote className="text-xl md:text-base lg:text-base xl:text-3xl font-normal leading-tight md:leading-snug lg:leading-snug xl:leading-tight font-fredoka">
            "{quote}"
          </blockquote>
        </div>
      </div>

      {/* Mobile-only WHEN/WHERE section that appears between quote and divider */}
      <div className="grid grid-cols-2 gap-4 mt-6 mb-8 md:hidden">
        <div className="flex flex-col gap-4">
          <span className="bg-[#333] text-white px-4 py-1 rounded-full text-sm font-fredoka inline-block w-fit">WHEN</span>
          <span className="bg-[#333] text-white px-4 py-1 rounded-full text-sm font-fredoka inline-block w-fit">WHERE</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm py-1 text-[#333] font-fredoka">{when}</span>
          <span className="text-sm py-1 text-[#333] font-fredoka">{where}</span>
        </div>
      </div>

      {/* Divider line - now black and thicker */}
      <hr className="my-6 md:my-4 lg:my-8 xl:my-8 border-black border-[1.5px]" />

      {/* Bottom section - maintain the same three-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 xl:gap-8">
        {/* First third - tags section aligns with logo column */}
        <div>
          <div className="flex flex-wrap gap-2 max-h-24 md:max-h-16 lg:max-h-16 xl:max-h-24">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1 md:px-3 md:py-0.5 lg:px-3 lg:py-0.5 xl:px-5 xl:py-1.5 rounded-full border border-[#333] text-[#333] text-sm md:text-xs lg:text-xs xl:text-base font-fredoka inline-flex items-center h-fit my-1"
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
              <span className="bg-[#333] text-xs lg:text-xs xl:text-base text-white px-3 py-0.5 lg:px-3 lg:py-0.5 xl:px-5 xl:py-1.5 rounded-full font-fredoka inline-flex items-center h-fit my-1">WHEN</span>
            </div>
            <span className="text-xs lg:text-xs xl:text-base py-1 lg:py-1 xl:py-3 text-[#333] font-fredoka w-1/2">{when}</span>
          </div>
          {/* Row 2 */}
          <div className="flex gap-2 lg:gap-2 xl:gap-4">
            <div className="w-1/2 py-0.5">
              <span className="bg-[#333] text-xs lg:text-xs xl:text-base text-white px-3 py-0.5 lg:px-3 lg:py-0.5 xl:px-5 xl:py-1.5 rounded-full font-fredoka inline-flex items-center h-fit my-1">WHERE</span>
            </div>
            <span className="text-xs lg:text-xs xl:text-base py-1 lg:py-1 xl:py-3 text-[#333] font-fredoka w-1/2">{where}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Example usage
export function PeacockExperience() {
  return (
    <Experience
      logo={
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none">
          <path d="M126 80L172 126" stroke="black" strokeWidth="10" />
          <path d="M126 120L172 74" stroke="black" strokeWidth="10" />
          <path d="M80 126L126 172" stroke="black" strokeWidth="10" />
          <path d="M80 74L126 120" stroke="black" strokeWidth="10" />
          <path d="M28 126L74 172" stroke="black" strokeWidth="10" />
          <path d="M28 74L74 120" stroke="black" strokeWidth="10" />
          <circle cx="126" cy="74" r="15" fill="#5956e9" />
          <circle cx="172" cy="126" r="15" fill="#2ec5ce" />
          <circle cx="172" cy="74" r="15" fill="#24ae88" />
          <circle cx="74" cy="172" r="15" fill="#feb240" />
          <circle cx="126" cy="172" r="15" fill="#fa3755" />
          <circle cx="28" cy="126" r="15" fill="#ff8b43" />
        </svg>
      }
      company="Peacock TV"
      role="Design Partnership"
      quote="Peacock has an incredible design team. Our partnership brings the best out of one other, and this relationship has shaped much about how RM thinks."
      when="Jun - Aug 2024"
      where="New York, New York"
      tags={[
        { label: "PRODUCT & UX" },
        { label: "ENTERTAINMENT" },
      ]}
    />
  );
}