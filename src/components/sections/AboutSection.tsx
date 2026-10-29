import React from 'react';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-[#F8F8F5] border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Narrative (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
              Agency Heritage & Stance
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.14]">
              Grounded in Dehradun.{' '}
              <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
                Scaling brands across India.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-ink-600 font-normal leading-relaxed">
              <p>
                BrandSpective Services was founded with a clear thesis: ambitious e-commerce brands and growing businesses do not need bloated agency layers or decorative awards decks. They need commercial partners who treat every advertising rupee with the fiduciary rigor of an internal founder.
              </p>
              <p>
                Operating from Dehradun, Uttarakhand, our studio combines the clarity of deep focused work with real-time fluency in the rapidly evolving Indian retail ecosystem — from high-stakes marketplace algorithms on Amazon and Flipkart to hyper-local quick commerce on Blinkit and Zepto.
              </p>
              <p>
                We intentionally keep our client roster selective. This guarantees that your business is managed directly by experienced operators who understand contribution margins, inventory pacing, and creative velocity.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-ink-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-700 flex-shrink-0" />
                <span>Full-Funnel Commerce Strategy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-700 flex-shrink-0" />
                <span>Amazon & Flipkart Advertising</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-700 flex-shrink-0" />
                <span>Quick Commerce Media Sync</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cobalt-700 flex-shrink-0" />
                <span>Sub-Second Custom Storefronts</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-900 text-white font-medium text-sm hover:bg-cobalt-700 transition-colors focus-ring"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Studio Artifact / Regional Monograph Plate (Spans 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-white border border-sand-300 p-8 shadow-card space-y-6">
              
              {/* Studio Identifier Card */}
              <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cobalt-700 font-semibold">
                    STUDIO LOCATION
                  </div>
                  <div className="text-lg font-semibold text-ink-900">
                    Dehradun, Uttarakhand
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cobalt-50 border border-cobalt-200 flex items-center justify-center text-cobalt-700">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Geographical Coordinates & Region */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-sand-100 border border-sand-200 text-xs font-mono">
                <div>
                  <span className="text-ink-400 block text-[10px]">COORDINATES</span>
                  <span className="text-ink-800 font-semibold">30.3165° N, 78.0322° E</span>
                </div>
                <div>
                  <span className="text-ink-400 block text-[10px]">TIME ZONE</span>
                  <span className="text-ink-800 font-semibold">IST (UTC +5:30)</span>
                </div>
              </div>

              {/* Studio Operating Metrics */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center text-sm py-2 border-b border-sand-200">
                  <span className="text-ink-500">Practice Focus</span>
                  <span className="font-semibold text-ink-900">Performance & Marketplaces</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-sand-200">
                  <span className="text-ink-500">Service Coverage</span>
                  <span className="font-semibold text-ink-900">Pan-India & Global Exporters</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-sand-200">
                  <span className="text-ink-500">Accountability Model</span>
                  <span className="font-semibold text-ink-900">Dedicated Growth Operators</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-ink-500">Client Threshold</span>
                  <span className="font-semibold text-ink-900">Selective Roster (Capped)</span>
                </div>
              </div>

              {/* Stance Quote Callout */}
              <div className="p-4 rounded-xl bg-cobalt-50/60 border border-cobalt-200 text-xs text-ink-700 leading-relaxed font-editorial italic">
                &ldquo;We deliberately chose Dehradun for its clarity of focus. High-performance work requires uninterrupted focus, strategic conviction, and rapid iteration.&rdquo;
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
