import React from 'react';
import { brandConfig } from '../../data/brandConfig';
import { ShieldCheck, Scale, BarChart2, Target } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const iconList = [Scale, ShieldCheck, BarChart2, Target];

  return (
    <section 
      id="why-us" 
      className="py-24 sm:py-32 bg-white border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
            Operating Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.12]">
            Four principles that guide{' '}
            <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
              every commercial decision.
            </span>
          </h2>
          <p className="text-base text-ink-500 pt-2 leading-relaxed">
            Agency relationships often fail due to misaligned incentives, junior handoffs, and obsession with vanity metrics. We built BrandSpective on a foundation of operational candor and financial discipline.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {brandConfig.principles.map((principle, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={principle.number}
                className="group p-8 rounded-2xl bg-[#F8F8F5] border border-sand-300 hover:border-cobalt-700/40 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-subtle"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-sand-300/80">
                    <span className="font-editorial text-3xl sm:text-4xl font-normal text-cobalt-700">
                      {principle.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-sand-300 flex items-center justify-center text-ink-700 group-hover:text-cobalt-700 group-hover:border-cobalt-200 transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink-900 pt-6 group-hover:text-cobalt-700 transition-colors">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-ink-600 leading-relaxed pt-3">
                    {principle.description}
                  </p>
                </div>

                {/* Practical In-Market Application */}
                <div className="mt-8 pt-6 border-t border-sand-300/80 bg-white/70 -mx-4 -mb-4 p-4 rounded-xl border border-sand-200/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cobalt-700 font-semibold mb-1">
                    HOW THIS APPLIES TO YOUR BRAND:
                  </div>
                  <div className="text-xs text-ink-600 font-medium leading-normal">
                    {principle.practicalApplication}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Strip: Us vs Standard Agencies */}
        <div className="mt-16 rounded-2xl border border-sand-300 bg-[#F8F8F5] p-6 sm:p-8 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-4">
            COMMERCIAL STANDARD OF ACCOUNTABILITY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1.5 border-l-2 border-cobalt-700 pl-4">
              <div className="font-semibold text-ink-900">Direct Senior Access</div>
              <p className="text-xs text-ink-500">You communicate directly with strategists who hold ad account logins and write campaign copy.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-cobalt-700 pl-4">
              <div className="font-semibold text-ink-900">Net Margin Focus</div>
              <p className="text-xs text-ink-500">We optimize for bottom-line contribution margin, not just inflated top-line ROAS screenshots.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-cobalt-700 pl-4">
              <div className="font-semibold text-ink-900">Agile Inventory Pacing</div>
              <p className="text-xs text-ink-500">Ad budgets are dynamically synchronized with warehouse stock levels to eliminate out-of-stock waste.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
