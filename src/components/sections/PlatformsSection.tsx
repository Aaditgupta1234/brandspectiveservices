import React from 'react';
import { brandConfig } from '../../data/brandConfig';

export const PlatformsSection: React.FC = () => {
  return (
    <section 
      id="platforms" 
      className="py-16 sm:py-20 bg-[#F8F8F5] border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-sand-300">
          <div className="space-y-2 max-w-xl text-left">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
              Expertise & Advertising Channels
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink-900 tracking-tight">
              Engineered for the platforms where modern commerce happens.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-ink-500 max-w-sm text-left md:text-right">
            Channel-specific campaign structures designed to balance gross margins with aggressive market share.
          </div>
        </div>

        {/* 5-Column Grid of Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
          {brandConfig.platforms.map((platform) => (
            <div
              key={platform.id}
              className="group p-5 rounded-xl bg-white border border-sand-300 hover:border-cobalt-700/50 transition-all duration-200 shadow-subtle flex flex-col justify-between text-left"
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between pb-3 border-b border-sand-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
                    {platform.badge}
                  </span>
                  <div className="w-6 h-6 rounded bg-sand-100 border border-sand-300 flex items-center justify-center text-[10px] font-bold text-ink-700 group-hover:bg-cobalt-700 group-hover:text-white transition-colors">
                    {platform.name.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-semibold text-ink-900 pt-3 group-hover:text-cobalt-700 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-ink-500 leading-relaxed pt-2">
                  {platform.description}
                </p>
              </div>

              {/* Execution Channels Tag Strip */}
              <div className="pt-4 mt-4 border-t border-sand-200/80 flex flex-wrap gap-1.5">
                {platform.channels.map((ch) => (
                  <span 
                    key={ch} 
                    className="text-[10px] font-medium text-ink-700 bg-sand-100 px-2 py-0.5 rounded border border-sand-200"
                  >
                    {ch}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

