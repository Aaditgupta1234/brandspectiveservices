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
      className="relative min-h-[100dvh] lg:h-[100dvh] w-full flex flex-col justify-between pt-16 sm:pt-20 lg:pt-16 overflow-hidden bg-obsidian-950"
    >
      {/* Cinematic Anamorphic Lighting Beam */}
      <GlowBackground />

      {/* Hero Viewport Content Grid */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto flex-1 flex flex-col justify-center min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-2 lg:py-0 w-full min-w-0">
          
          {/* Left Column: Authentic Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 min-w-0 w-full">
            <HeroHeadline />
            <HeroActions onOpenEnquiry={onOpenEnquiry} />
          </div>

          {/* Right Column: 3D Metallic Sculpture with Complete Silhouette Visibility */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-w-0 w-full overflow-hidden">
            <div className="w-full max-w-[480px] lg:max-w-none">
              <Hero3DCube />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hero Platform Ribbon */}
      <ClientLogoMarquee />

    </section>
  );
};
