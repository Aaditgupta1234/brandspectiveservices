import React from 'react';
import { ArrowRight } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface HeroActionsProps {
  onOpenEnquiry?: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
      
      {/* Primary White Rounded Action Button matching "See Pricing ->" */}
      <button
        type="button"
        onClick={onOpenEnquiry}
        className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm sm:text-base tracking-tight shadow-glow-pill hover:bg-slate-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
      >
        <span>Explore Solutions</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Floating Availability Pill matching "Grab 15 minutes with us / • Open and ready" */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3.5 px-4 py-2 rounded-full glass-pill hover:bg-white/[0.08] hover:border-white/20 active:scale-98 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-cyan/40"
        title="Chat directly with our growth strategist on WhatsApp"
      >
        {/* Strategist Avatar with online badge */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-gradient-to-tr from-electric-blue to-violet-accent flex items-center justify-center shrink-0">
          <svg 
            className="w-5 h-5 text-white/90" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
        </div>

        {/* Text Block */}
        <div className="text-left pr-2">
          <div className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
            Grab 15 minutes with us
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span>Open and ready</span>
          </div>
        </div>
      </a>

    </div>
  );
};

