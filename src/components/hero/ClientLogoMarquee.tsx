import React from 'react';
import { brandConfig } from '../../data/brandConfig';

export const ClientLogoMarquee: React.FC = () => {
  // Duplicated array to create a seamless infinite scrolling loop
  const marqueeItems = [...brandConfig.partnerLogos, ...brandConfig.partnerLogos];

  return (
    <div className="relative w-full border-t border-white/[0.06] bg-obsidian-950/40 backdrop-blur-sm py-6 mt-8 sm:mt-12 overflow-hidden z-20">
      
      {/* Edge gradient masks for seamless fade out on both sides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-obsidian-950 via-obsidian-950/80 to-transparent pointer-events-none z-10" />

      {/* Scrolling Track */}
      <div className="flex items-center gap-12 sm:gap-16 w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center gap-3 opacity-40 hover:opacity-85 transition-opacity duration-300 cursor-default select-none group"
          >
            {/* Minimalist Stylized Vector Monogram for each channel */}
            <div className="w-7 h-7 rounded-lg border border-white/20 bg-white/[0.04] flex items-center justify-center group-hover:border-electric-cyan/40 transition-colors">
              <span className="text-[11px] font-bold tracking-tighter text-white">
                {partner.name.slice(0, 2).toUpperCase()}
              </span>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white whitespace-nowrap">
                {partner.label}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                {partner.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

