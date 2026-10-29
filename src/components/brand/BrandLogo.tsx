import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = true
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Geometric Monogram Glyph in Confident Cobalt #245C86 */}
      <div className="relative w-8 h-8 rounded-lg bg-[#245C86] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-[1.03]">
        <svg 
          className="w-5 h-5 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural Perspective Frame / Dynamic 'B' Monogram */}
          <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.35" />
          <path 
            d="M7 6.5C7 5.67157 7.67157 5 8.5 5H13C15.4853 5 17.5 7.01472 17.5 9.5C17.5 11.2323 16.5165 12.7351 15.0844 13.4831C16.8041 14.195 18 15.8927 18 17.8571C18 18.4883 17.4883 19 16.8571 19H8.5C7.67157 19 7 18.3284 7 17.5V6.5Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M7 12H13.5C14.8807 12 16 10.8807 16 9.5C16 8.11929 14.8807 7 13.5 7H7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <circle cx="11.5" cy="15.5" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col text-left">
        <span className={`font-semibold text-[15px] tracking-tight leading-none ${isDark ? 'text-ink-900' : 'text-white'}`}>
          BrandSpective
        </span>
        {showSubtitle && (
          <span className={`text-[10px] uppercase tracking-[0.16em] font-medium mt-1 leading-none ${isDark ? 'text-ink-500' : 'text-sand-400'}`}>
            Services
          </span>
        )}
      </div>
    </div>
  );
};

