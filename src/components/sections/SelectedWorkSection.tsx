import React from 'react';
import { brandConfig } from '../../data/brandConfig';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenContact?: () => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="work" 
      className="py-24 sm:py-32 bg-[#F8F8F5] border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-sand-300 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
              Selected Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.12]">
              Selected work.{' '}
              <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
                Thoughtful execution.
              </span>
            </h2>
            <p className="text-base text-ink-500 pt-1 leading-relaxed">
              Every project represents a commercial challenge solved through structured channel engineering, creative testing, and operational discipline.
            </p>
          </div>

          <div className="text-xs text-ink-500 max-w-xs space-y-1 md:text-right">
            <span className="font-mono uppercase tracking-wider text-[10px] text-cobalt-700 block">
              PORTFOLIO ARCHIVE · 2024–2026
            </span>
            <p>Case summaries reflect actual client engagements anonymized for confidentiality.</p>
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {brandConfig.projects.map((project, idx) => {
            // Asymmetric layout spans: alternate between 7 cols and 5 cols
            const isWide = idx % 2 === 0;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                className={`${colSpan} group rounded-2xl bg-white border border-sand-300 hover:border-cobalt-700/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-subtle text-left`}
              >
                <div>
                  {/* Top Bar: Category & Case Index */}
                  <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt-700 font-medium">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-ink-400">
                      CASE {`0${idx + 1}`}
                    </span>
                  </div>

                  {/* Editorial Plate / Visual Graphic Canvas */}
                  <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-sand-100 to-cobalt-50/50 border border-sand-200 relative overflow-hidden group-hover:border-cobalt-200 transition-colors">
                    <div className="flex items-center justify-between pb-4 border-b border-sand-300/60 text-[10px] font-mono uppercase tracking-wider text-ink-400">
                      <span>ENGAGEMENT ARCHIVE</span>
                      <span className="text-cobalt-700 font-semibold">{project.clientPlaceholder}</span>
                    </div>

                    <div className="py-4 space-y-2">
                      <div className="text-[11px] font-mono text-ink-400">COMMERCIAL DIRECTIVE:</div>
                      <div className="font-editorial text-lg sm:text-xl text-ink-800 leading-snug">
                        &ldquo;{project.summary}&rdquo;
                      </div>
                    </div>

                    {/* Scope Chips inside plate */}
                    <div className="pt-4 flex flex-wrap gap-1.5 border-t border-sand-300/60">
                      {project.scope.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 rounded bg-white/90 border border-sand-300 text-[10px] font-mono text-ink-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink-900 group-hover:text-cobalt-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-400">
                      Key Outcomes
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700">
                        <CheckCircle2 className="w-4 h-4 text-cobalt-700 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link / CTA */}
                <div className="pt-6 mt-6 border-t border-sand-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-ink-500">
                    Interested in similar commercial results?
                  </span>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt-700 group-hover:text-cobalt-800 transition-colors"
                  >
                    <span>Discuss Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
