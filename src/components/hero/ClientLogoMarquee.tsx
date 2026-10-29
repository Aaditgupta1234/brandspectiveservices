import React from 'react';
import { brandConfig } from '../../data/brandConfig';

export const ClientLogoMarquee: React.FC = () => {
  // Duplicated array to create an uninterrupted infinite marquee loop
  const marqueeItems = [...brandConfig.partnerLogos, ...brandConfig.partnerLogos];

  return (
    <div className="relative w-full border-t border-white/[0.08] bg-obsidian-950/75 backdrop-blur-md py-3.5 sm:py-4 mt-auto overflow-hidden z-20 select-none">
      
      {/* Edge gradient masks for seamless fade out on both sides */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-obsidian-950 via-obsidian-950/90 to-transparent pointer-events-none z-10" />

      {/* Scrolling Platform Track */}
      <div className="flex items-center gap-9 sm:gap-14 w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((platform, index) => (
          <div
            key={`${platform.name}-${index}`}
            className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-default group"
          >
            {/* Minimalist Monochrome Vector Mark */}
            <div className="w-6 h-6 rounded-md border border-white/25 bg-white/[0.05] flex items-center justify-center group-hover:border-white/50 transition-colors">
              <span className="text-[10px] font-bold tracking-tight text-white">
                {platform.name.slice(0, 2).toUpperCase()}
              </span>
            </div>

            {/* Platform Label */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-white/95 whitespace-nowrap">
                {platform.label}
              </span>
              <span className="text-[9.5px] text-slate-400 tracking-wider uppercase font-medium">
                {platform.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
