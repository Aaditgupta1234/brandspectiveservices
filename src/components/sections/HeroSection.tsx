import React from 'react';
import { ArrowRight, Compass, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F8F8F5] border-b border-sand-300"
    >
      {/* Background Subtle Architectural Grid Accent */}
      <div className="absolute inset-0 editorial-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Narrative (Spans 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            
            {/* Concise Positioning Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-sand-300 shadow-subtle text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt-700 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-700" />
              <span>Digital Marketing & E-Commerce Growth · Dehradun, India</span>
            </div>

            {/* Display Headline with Sans-Serif and Editorial Serif Interplay */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] xl:text-[68px] font-semibold text-ink-900 tracking-[-0.03em] leading-[1.08]">
              Good brands deserve{' '}
              <span className="font-editorial-italic font-normal text-cobalt-700 inline-block">
                better growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-[19px] text-ink-500 font-normal leading-relaxed max-w-xl">
              We help ambitious brands grow through performance marketing, marketplace expertise, and digital experiences designed around their business goals.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-ink-900 text-white font-medium text-sm sm:text-base tracking-tight hover:bg-cobalt-700 active:scale-[0.98] transition-all duration-200 shadow-sm focus-ring"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-white border border-sand-300 text-ink-800 font-medium text-sm sm:text-base tracking-tight hover:bg-sand-200 hover:border-sand-400 active:scale-[0.98] transition-all duration-200 shadow-subtle focus-ring"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-cobalt-700 transition-colors" />
              </a>
            </div>

            {/* Credibility Snapshot Metadata */}
            <div className="pt-4 border-t border-sand-300/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-ink-500">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cobalt-700" />
                <span>Headquartered in Dehradun, Uttarakhand</span>
              </div>
              <div className="hidden sm:inline text-sand-400">·</div>
              <div>Amazon & Flipkart Specialists</div>
              <div className="hidden sm:inline text-sand-400">·</div>
              <div>Quick Commerce Integration</div>
            </div>

          </div>

          {/* Right Column: Art-Directed Editorial Visual Composition (Spans 5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Editorial Canvas Frame */}
            <div className="relative w-full max-w-[460px] lg:max-w-none bg-white rounded-2xl border border-sand-300 p-6 sm:p-7 shadow-card">
              
              {/* Header Index Strip */}
              <div className="flex items-center justify-between pb-5 border-b border-sand-300 text-[10px] font-mono uppercase tracking-[0.18em] text-ink-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-700" />
                  PERSPECTIVE / FRAME 01
                </span>
                <span>DEHRADUN · 30.31°N</span>
              </div>

              {/* Central Art-Directed Campaign Vignette */}
              <div className="my-5 relative rounded-xl overflow-hidden bg-gradient-to-br from-sand-200 to-cobalt-50/60 border border-sand-300 p-6">
                
                {/* Structural Graphic Elements */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-cobalt-700 bg-white px-2 py-0.5 rounded border border-sand-300">
                  REF. Q1-Q4
                </div>

                {/* Layered Monograph Typography */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
                    Growth Architecture
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl font-medium text-ink-900 leading-tight">
                    Where creative storytelling meets unit economics.
                  </div>
                  <div className="text-xs text-ink-500 font-sans leading-relaxed pt-1">
                    Structured media acquisition models designed for Indian consumer brands scaling past product-market fit.
                  </div>
                </div>

                {/* Editorial Data Pill Matrix */}
                <div className="grid grid-cols-2 gap-2 pt-5">
                  <div className="p-3 bg-white/90 rounded-lg border border-sand-300">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ink-400">Pillar 01</div>
                    <div className="text-xs font-semibold text-ink-900 mt-0.5">Marketplace Scale</div>
                    <div className="text-[11px] text-ink-500 mt-0.5">Amazon & Flipkart</div>
                  </div>
                  <div className="p-3 bg-white/90 rounded-lg border border-sand-300">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ink-400">Pillar 02</div>
                    <div className="text-xs font-semibold text-ink-900 mt-0.5">Paid Acquisition</div>
                    <div className="text-[11px] text-ink-500 mt-0.5">Meta & Google Ads</div>
                  </div>
                </div>

              </div>

              {/* Lower Editorial Footnote */}
              <div className="pt-2 flex items-center justify-between text-xs text-ink-500 font-sans">
                <span className="font-medium text-ink-800">BrandSpective Services</span>
                <span className="text-sand-400">|</span>
                <span>Commercial Awareness</span>
                <span className="text-sand-400">|</span>
                <span className="font-editorial-italic text-cobalt-700 text-sm">Craft & Precision</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
