import React from 'react';

export const HeroHeadline: React.FC = () => {
  return (
    <div className="space-y-6 max-w-2xl text-left">
      
      {/* Badge matching "Welcome to Axioma" capsule */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-xs font-medium text-slate-300 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
        <span>Dehradun&apos;s Premier Growth Partner</span>
      </div>

      {/* Main Display Headline with selected italic gradient words */}
      <h1 className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[76px] font-extrabold text-white tracking-tight leading-[1.08]">
        Leading the{' '}
        <span className="italic font-normal gradient-accent-future font-serif inline-block pr-1">
          future
        </span>
        <br />
        <span className="italic font-normal gradient-accent-of font-serif inline-block pr-2">
          of
        </span>
        commerce.
      </h1>

      {/* Supporting Subtext */}
      <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
        A high-performance digital marketing & marketplace growth agency engineered to scale Amazon, Flipkart, Quick Commerce, and direct-to-consumer brands.
      </p>

    </div>
  );
};

