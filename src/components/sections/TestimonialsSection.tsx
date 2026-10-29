import React from 'react';
import { Quote, MessageSquare, ArrowUpRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenContact?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenContact }) => {
  const testimonials = [
    {
      quote: "BrandSpective brought operational discipline to our Amazon ad accounts. Rather than simply spending budget on broad keywords, they restructured our campaigns around our actual contribution margins and slashed our wasted ad spend within weeks.",
      category: "D2C Nutrition Brand",
      role: "Founder & CEO",
      channel: "Amazon Advertising & Quick Commerce"
    },
    {
      quote: "The direct access to their senior strategists makes all the difference. We don't wait three days for an account manager to relay a question; adjustments to ad pacing and creative testing happen in real time.",
      category: "Direct-to-Consumer Apparel",
      role: "Head of Growth",
      channel: "Meta Ads & Shopify Storefront"
    },
    {
      quote: "Their preparation for Big Billion Days was meticulous. They mapped our inventory pacing directly to our bid schedules, resulting in our strongest festive sell-through to date without blowing out our ROAS guardrails.",
      category: "Home & Kitchen Manufacturer",
      role: "Commercial Director",
      channel: "Flipkart Advertising & PLA"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-white border-b border-sand-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
            Client Perspectives & Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.12]">
            What founders and growth heads{' '}
            <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
              say about working with us.
            </span>
          </h2>
          <p className="text-base text-ink-500 pt-2 leading-relaxed">
            Real commercial growth is measured by repeat partnerships, protected margins, and predictable unit economics.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#F8F8F5] border border-sand-300 flex flex-col justify-between hover:border-cobalt-700/40 hover:bg-white transition-all duration-300 shadow-subtle"
            >
              <div>
                {/* Quote Icon & Channel Tag */}
                <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                  <div className="w-8 h-8 rounded-lg bg-cobalt-50 border border-cobalt-200 flex items-center justify-center text-cobalt-700">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
                    {item.channel}
                  </span>
                </div>

                {/* Editorial Quote Body */}
                <p className="font-editorial text-base sm:text-lg text-ink-800 leading-relaxed pt-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-sand-200">
                <div className="text-sm font-semibold text-ink-900">
                  {item.role}
                </div>
                <div className="text-xs text-ink-500 font-mono pt-0.5">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Transparency Notice */}
        <div className="mt-12 p-6 rounded-xl bg-sand-100 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-cobalt-700 flex-shrink-0" />
            <p className="text-xs text-ink-600">
              <strong className="text-ink-900">Direct Founder References Available:</strong> For brands considering an engagement, we connect you directly with existing client founders during confidential discovery.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="text-xs font-semibold text-cobalt-700 hover:text-cobalt-800 whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>Request Reference Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

