import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
        isScrolled 
          ? 'py-2.5 sm:py-3.5 bg-obsidian-950/85 backdrop-blur-lg border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'py-4 sm:py-6'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        
        {/* Brand Monogram Mark (Left) */}
        <a 
          href="#hero" 
          className="pointer-events-auto flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-electric-cyan/40 rounded-full py-1 transition-all"
          aria-label="BrandSpective Services"
        >
          {/* Architectural Stylized Glyph */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-white/25 transition-all duration-200">
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 transition-transform group-hover:scale-105" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sleek architectural ribbon monogram */}
              <path 
                d="M5 6C5 4.89543 5.89543 4 7 4H14C17.3137 4 20 6.68629 20 10C20 12.2206 18.7915 14.1593 17 15.1973C18.8353 16.2081 20 18.2144 20 20.5C20 21.3284 19.3284 22 18.5 22H7C5.89543 22 5 21.1046 5 20V6Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M5 13H14C15.6569 13 17 11.6569 17 10C17 8.34315 15.6569 7 14 7H5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
            BrandSpective
          </span>
        </a>

        {/* Floating Capsule Menu (Center) - Authentic Reference Styling */}
        <nav 
          aria-label="Main Navigation" 
          className="pointer-events-auto hidden md:flex items-center gap-1 px-1.5 py-1 rounded-full glass-pill"
        >
          {brandConfig.navigation.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1 ${
                  isActive 
                    ? 'bg-white/12 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-slate-400 opacity-75" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Contact CTA (Right) */}
        <div className="pointer-events-auto flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="group inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm tracking-tight hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
