import React from 'react';
import { GlowBackground } from './GlowBackground';
import { HeroHeadline } from './HeroHeadline';
import { HeroActions } from './HeroActions';
import { Hero3DCube } from './Hero3DCube';
import { ClientLogoMarquee } from './ClientLogoMarquee';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 overflow-hidden bg-obsidian-950"
    >
      {/* Cinematic Layered Lighting Beam & Glow */}
      <GlowBackground />

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Narrative, Typography & Actions (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 py-4 sm:py-6">
            <HeroHeadline />
            <HeroActions onOpenEnquiry={onOpenEnquiry} />
          </div>

          {/* Right Column: High-Fidelity 3D Metallic Cage Sculpture (Spans 5 cols on desktop, overflowing slightly to the right) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[540px] lg:max-w-none lg:w-[125%] lg:-mr-[18%]">
              <Hero3DCube />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hero Partner Logo Strip */}
      <ClientLogoMarquee />

    </section>
  );
};

