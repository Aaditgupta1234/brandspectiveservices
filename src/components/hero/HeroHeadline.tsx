import React from 'react';

export const HeroHeadline: React.FC = () => {
  return (
    <div className="space-y-3.5 sm:space-y-4 max-w-xl text-left min-w-0 w-full">
      
      {/* Pill Badge matching reference "Welcome to Axioma" capsule */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-xs font-medium text-slate-300 tracking-wide select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
        <span>Welcome to BrandSpective</span>
      </div>

      {/* Main Display Headline with authentic editorial serif italic gradient accents */}
      <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-white tracking-[-0.03em] leading-[1.12] break-words">
        Leading the{' '}
        <span className="gradient-accent-future font-editorial-italic font-normal inline-block pr-1">
          future
        </span>
        <br />
        <span className="gradient-accent-of font-editorial-italic font-normal inline-block pr-1.5">
          of
        </span>
        commerce.
      </h1>

      {/* Concise, restrained subtext */}
      <p className="text-xs sm:text-sm lg:text-[15px] text-slate-400 font-normal leading-relaxed max-w-[460px]">
        A performance marketing & marketplace growth agency engineered to scale Amazon, Flipkart, Quick Commerce, and direct-to-consumer brands.
      </p>

    </div>
  );
};
