import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo (Left) */}
        <a 
          href="#hero" 
          className="pointer-events-auto flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-electric-cyan/40 rounded-full py-1 px-1 transition-all"
          aria-label="BrandSpective Services Home"
        >
          {/* Official Geometric Monogram */}
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-electric-cyan/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300">
            <svg 
              className="w-6 h-6 text-white transition-transform group-hover:scale-105" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Architectural stylized 'B' / perspective frame */}
              <path 
                d="M8 6C8 4.89543 8.89543 4 10 4H18C22.4183 4 26 7.58172 26 12C26 14.8624 24.4965 17.3734 22.2355 18.7844C24.7836 20.1989 26.5 22.8988 26.5 26C26.5 27.1046 25.6046 28 24.5 28H10C8.89543 28 8 27.1046 8 26V6Z" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-90"
              />
              <path 
                d="M8 16H20C22.2091 16 24 14.2091 24 12C24 9.79086 22.2091 8 20 8H8" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
              <circle cx="14" cy="22" r="2" fill="#38BDF8" className="animate-pulse" />
            </svg>
          </div>
          <span className="hidden sm:inline font-semibold text-sm tracking-wide text-white/90 group-hover:text-white transition-colors">
            BrandSpective
          </span>
        </a>

        {/* Floating Capsule Menu (Center) */}
        <nav 
          aria-label="Main Navigation" 
          className="pointer-events-auto hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass-pill"
        >
          {brandConfig.navigation.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-white/10 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-slate-400 opacity-80" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Contact CTA (Right) */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenContact}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm tracking-tight shadow-glow-pill hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </header>
  );
};

