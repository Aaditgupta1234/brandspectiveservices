import React from 'react';
import { ArrowUpRight, Check, ShoppingCart, Zap, Globe } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const marketplaceGroup = brandConfig.serviceGroups.find(g => g.groupName === 'Marketplace & Commerce');
  const performanceGroup = brandConfig.serviceGroups.find(g => g.groupName === 'Performance & Brand');
  const digitalGroup = brandConfig.serviceGroups.find(g => g.groupName === 'Digital Experience');

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 bg-white border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
            Service Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.12]">
            Three specialized practices.{' '}
            <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
              One unified commercial focus.
            </span>
          </h2>
          <p className="text-base text-ink-500 pt-2 leading-relaxed">
            We do not operate in isolated marketing silos. Our services are structured to capture existing demand on marketplaces, generate profitable new intent through paid media, and convert buyers on high-speed storefronts.
          </p>
        </div>

        {/* Group 01: Marketplace & Commerce */}
        <div className="mt-16 pt-12 border-t border-sand-300 text-left">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cobalt-50 border border-cobalt-200 flex items-center justify-center text-cobalt-700">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-cobalt-700 font-semibold">
                  Practice 01
                </span>
                <h3 className="text-2xl font-semibold text-ink-900">Marketplace & Commerce</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 max-w-md">
              {marketplaceGroup?.leadText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketplaceGroup?.services.map((service, index) => (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8F8F5] border border-sand-300 flex flex-col justify-between hover:border-sand-400 transition-colors shadow-subtle text-left group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-sand-300 text-[10px] font-mono text-ink-400 uppercase tracking-wider">
                    <span>0{index + 1} / MARKETPLACE</span>
                    <button
                      type="button"
                      onClick={() => onSelectService?.(service.title)}
                      className="text-cobalt-700 hover:underline flex items-center gap-0.5 font-sans font-medium text-xs"
                    >
                      Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xl font-semibold text-ink-900 pt-4 group-hover:text-cobalt-700 transition-colors">
                    {service.title}
                  </h4>
                  <div className="text-xs font-editorial-italic text-ink-500 pt-1">
                    {service.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-ink-500 leading-relaxed pt-3">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-5 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ink-400 font-semibold">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-ink-700">
                        <Check className="w-3.5 h-3.5 text-cobalt-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Commercial Benefit */}
                <div className="mt-6 pt-4 border-t border-sand-300 bg-white/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cobalt-700 font-semibold">
                    Commercial Impact
                  </div>
                  <div className="text-xs font-medium text-ink-800 mt-1">
                    {service.benefit}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Group 02: Performance & Brand */}
        <div className="mt-20 pt-12 border-t border-sand-300 text-left">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lavender-50 border border-lavender-200 flex items-center justify-center text-lavender-700">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-lavender-700 font-semibold">
                  Practice 02
                </span>
                <h3 className="text-2xl font-semibold text-ink-900">Performance & Brand</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 max-w-md">
              {performanceGroup?.leadText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performanceGroup?.services.map((service, index) => (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8F8F5] border border-sand-300 flex flex-col justify-between hover:border-sand-400 transition-colors shadow-subtle text-left group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-sand-300 text-[10px] font-mono text-ink-400 uppercase tracking-wider">
                    <span>0{index + 1} / PERFORMANCE</span>
                    <button
                      type="button"
                      onClick={() => onSelectService?.(service.title)}
                      className="text-cobalt-700 hover:underline flex items-center gap-0.5 font-sans font-medium text-xs"
                    >
                      Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xl font-semibold text-ink-900 pt-4 group-hover:text-cobalt-700 transition-colors">
                    {service.title}
                  </h4>
                  <div className="text-xs font-editorial-italic text-ink-500 pt-1">
                    {service.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-ink-500 leading-relaxed pt-3">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-5 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-ink-400 font-semibold">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-ink-700">
                        <Check className="w-3.5 h-3.5 text-cobalt-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Commercial Benefit */}
                <div className="mt-6 pt-4 border-t border-sand-300 bg-white/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cobalt-700 font-semibold">
                    Commercial Impact
                  </div>
                  <div className="text-xs font-medium text-ink-800 mt-1">
                    {service.benefit}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Group 03: Digital Experience (Featured Showcase) */}
        <div className="mt-20 pt-12 border-t border-sand-300 text-left">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cobalt-50 border border-cobalt-200 flex items-center justify-center text-cobalt-700">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-cobalt-700 font-semibold">
                  Practice 03
                </span>
                <h3 className="text-2xl font-semibold text-ink-900">Digital Experience</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-ink-500 max-w-md">
              {digitalGroup?.leadText}
            </p>
          </div>

          {/* Featured Wide Card for Website Development */}
          {digitalGroup?.services.map((service) => (
            <div 
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#F8F8F5] via-white to-sand-100 border border-sand-300 shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cobalt-700 bg-white px-2.5 py-1 rounded border border-sand-300">
                    E-Commerce Web Architecture
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-semibold text-ink-900">
                    {service.title}
                  </h4>
                  <div className="text-sm font-editorial-italic text-ink-500">
                    {service.tagline}
                  </div>
                  <p className="text-sm text-ink-500 leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-ink-700">
                        <Check className="w-3.5 h-3.5 text-cobalt-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-sand-300 space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cobalt-700 font-semibold">
                    Conversion-Engineered Specifications
                  </div>
                  <div className="space-y-3 text-xs text-ink-600">
                    <div className="flex justify-between pb-2 border-b border-sand-200">
                      <span className="text-ink-400">Target Mobile Speed</span>
                      <span className="font-semibold text-ink-900">&lt; 1.0s LCP</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-sand-200">
                      <span className="text-ink-400">Platform Specialism</span>
                      <span className="font-semibold text-ink-900">Shopify / Headless Next.js</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-sand-200">
                      <span className="text-ink-400">Payment Gateways</span>
                      <span className="font-semibold text-ink-900">Razorpay, Cashfree, UPI & COD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-400">Core Metric</span>
                      <span className="font-semibold text-cobalt-700">Checkout Velocity</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService?.(service.title)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-ink-900 text-white font-medium text-xs hover:bg-cobalt-700 transition-colors shadow-sm"
                  >
                    <span>Request Web Architecture Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
