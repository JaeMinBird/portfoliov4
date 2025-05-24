'use client';

import React from 'react';

interface HeaderProps {
  id: number;
  total: number;
  title: string;
  color?: string;
}

export default function Header({ id, total, title, color = '#3B3B3B' }: HeaderProps) {
  const formattedId = String(id).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
      <div 
        className="flex flex-col items-start h-full rounded-2xl p-8 md:p-12 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="relative z-10 flex flex-col w-full h-full">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-fredoka text-jet leading-none">
              <span className="font-light text-white">{formattedId}</span> | {formattedTotal}
            </h2>
          </div>
          <div className="w-full mt-4 md:mt-auto mb-0 md:-mb-2">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-fredoka text-white leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
  );
}