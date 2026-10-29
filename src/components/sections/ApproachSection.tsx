import React from 'react';
import { brandConfig } from '../../data/brandConfig';
import { ArrowRight, ShieldCheck, Target, TrendingUp, Layers } from 'lucide-react';

interface ApproachSectionProps {
  onOpenContact?: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenContact }) => {
  const icons = [ShieldCheck, Target, Layers, TrendingUp];

  return (
    <section 
      id="approach" 
      className="py-24 sm:py-32 bg-[#111318] text-white relative overflow-hidden"
    >
      {/* Background Subtle Line Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-cobalt-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
            <span>Methodology & Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.025em] leading-[1.12]">
            A disciplined 90-day framework.{' '}
            <span className="font-editorial-italic font-normal text-cobalt-300 block sm:inline">
              Zero guesswork.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
            We reject the &ldquo;spray and pray&rdquo; agency mentality. Every engagement follows a phased commercial progression engineered to discover your real unit economics before scaling budget.
          </p>
        </div>

        {/* 4 Stages Progression Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {brandConfig.approach.map((stage, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stage.step}
                className="group relative p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cobalt-400/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Step Number & Timeline */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                    <div className="w-9 h-9 rounded-lg bg-cobalt-950/80 border border-cobalt-500/30 flex items-center justify-center text-cobalt-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cobalt-300 px-2.5 py-1 rounded bg-cobalt-950/60 border border-cobalt-500/20">
                      {stage.timeline}
                    </span>
                  </div>

                  {/* Stage Step & Title */}
                  <div className="pt-6">
                    <span className="text-[11px] font-mono text-slate-400 block pb-1">
                      STAGE {stage.step}
                    </span>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cobalt-300 transition-colors">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed pt-3">
                    {stage.summary}
                  </p>

                  {/* Action Points Checklist */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2.5">
                    {stage.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400 mt-1.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Index Stamp */}
                <div className="pt-8 mt-8 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  <span>Deliverable Gate {stage.step}</span>
                  <span className="text-cobalt-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Commitment */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cobalt-950/70 via-white/[0.03] to-white/[0.02] border border-cobalt-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold text-white">
              Ready to evaluate your current channel efficiency?
            </h4>
            <p className="text-sm text-slate-300">
              We provide a complimentary initial audit of your Amazon, Flipkart, or Google Ads accounts.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-ink-950 font-medium text-sm hover:bg-slate-100 transition-colors whitespace-nowrap focus-ring shadow-md"
          >
            <span>Request Account Audit</span>
            <ArrowRight className="w-4 h-4 text-ink-900" />
          </button>
        </div>

      </div>
    </section>
  );
};

