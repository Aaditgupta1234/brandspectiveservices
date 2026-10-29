import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface HeroActionsProps {
  onOpenEnquiry?: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1 w-full">
      
      {/* Primary White Rounded Action Button */}
      <button
        type="button"
        onClick={onOpenEnquiry}
        className="group inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm tracking-tight hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
      >
        <span>Explore Solutions</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      {/* Restrained Secondary Consultation Capsule (Zero fabricated claims or fake avatars) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full glass-pill hover:bg-white/[0.08] active:scale-98 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 text-xs sm:text-sm font-medium text-slate-200 hover:text-white"
        title="Schedule a consultation with our strategy team"
      >
        <MessageCircle className="w-3.5 h-3.5 text-slate-300 group-hover:text-electric-cyan transition-colors" />
        <span>Direct Consultation</span>
      </a>

    </div>
  );
};
