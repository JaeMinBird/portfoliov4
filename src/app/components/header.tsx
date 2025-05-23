'use client';

import React from 'react';

interface HeaderProps {
  id: number;
  total: number;
  title: string;
  color?: string;
}

export default function Header({ id, total, title, color = '#000' }: HeaderProps) {
  const formattedId = String(id).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
      <div 
        className="flex flex-col items-start h-full rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[500px] md:min-h-0"
        style={{ backgroundColor: color }}
      >
        <div className="relative z-10 flex flex-col w-full h-full">
          <div className="w-full">
            <h2 className="text-6xl md:text-7xl font-sans text-jet leading-none">
              <span className="font-light text-white">{formattedId}</span> | {formattedTotal}
            </h2>
          </div>
          <div className="w-full mt-auto -mb-2">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-sans text-white leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
  );
}
