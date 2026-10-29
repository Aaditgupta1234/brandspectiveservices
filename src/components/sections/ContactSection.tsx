import React, { useState } from 'react';
import { brandConfig } from '../../data/brandConfig';
import { ArrowRight, CheckCircle2, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    service: 'Marketplace Growth (Amazon / Flipkart)',
    monthlySpend: '₹1L – ₹5L per month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous polished response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-[#F8F8F5] border-b border-sand-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Contact Metadata (Spans 5 cols) */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cobalt-700">
                Initiate a Conversation
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-ink-900 tracking-[-0.025em] leading-[1.12]">
                Let&apos;s make your next{' '}
                <span className="font-editorial-italic font-normal text-cobalt-700 block sm:inline">
                  move count.
                </span>
              </h2>
              <p className="text-base text-ink-500 pt-1 leading-relaxed">
                Whether you need to scale marketplace sales on Amazon and Flipkart, untangle ad fatigue on Meta, or launch a custom e-commerce storefront, we welcome a thoughtful conversation.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-2">
              
              {/* WhatsApp Quick Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white border border-sand-300 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all duration-200 flex items-center justify-between shadow-subtle"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
                      FASTEST RESPONSE · WHATSAPP
                    </span>
                    <span className="text-sm font-semibold text-ink-900">
                      Message the Leadership Team
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="group p-5 rounded-xl bg-white border border-sand-300 hover:border-cobalt-700/50 hover:bg-cobalt-50/20 transition-all duration-200 flex items-center justify-between shadow-subtle"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cobalt-50 border border-cobalt-200 flex items-center justify-center text-cobalt-700 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cobalt-700 font-semibold block">
                      OFFICIAL INQUIRIES
                    </span>
                    <span className="text-sm font-semibold text-ink-900">
                      {brandConfig.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cobalt-700 transition-transform group-hover:translate-x-1" />
              </a>

            </div>

            {/* Studio Coordinates */}
            <div className="p-6 rounded-xl bg-white border border-sand-300 shadow-subtle space-y-3 text-xs text-ink-600">
              <div className="flex items-center gap-2 text-ink-900 font-semibold">
                <MapPin className="w-4 h-4 text-cobalt-700" />
                <span>Headquarters & Studio</span>
              </div>
              <p className="leading-relaxed">
                BrandSpective Services<br />
                Dehradun, Uttarakhand 248001, India
              </p>
              <div className="pt-2 border-t border-sand-200 flex items-center gap-2 text-[11px] font-mono text-ink-400">
                <Clock className="w-3.5 h-3.5 text-cobalt-700" />
                <span>Business hours: Mon – Sat, 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Inquiry Form (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-sand-300 shadow-card text-left">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-ink-900">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-ink-500 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}. A senior growth strategist from our Dehradun team will review your brand details and reach out within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono uppercase tracking-wider text-cobalt-700 hover:text-cobalt-800 underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-sand-200 pb-4">
                    <h3 className="text-xl font-semibold text-ink-900">
                      Project & Brand Inquiry
                    </h3>
                    <p className="text-xs text-ink-500 pt-1">
                      Share details regarding your brand and current growth bottlenecks.
                    </p>
                  </div>

                  {/* 2-Column Inputs: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                      />
                    </div>
                  </div>

                  {/* 2-Column Inputs: Brand & Primary Practice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Brand / Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Naturals"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                      >
                        <option value="Marketplace Growth (Amazon / Flipkart)">Marketplace Growth (Amazon / Flipkart)</option>
                        <option value="Quick Commerce Scaling (Blinkit, Zepto, Instamart)">Quick Commerce Scaling (Blinkit, Zepto, Instamart)</option>
                        <option value="Google Ads & Performance Max">Google Ads & Performance Max</option>
                        <option value="Meta Ads (Instagram & Facebook)">Meta Ads (Instagram & Facebook)</option>
                        <option value="E-Commerce Custom Website">E-Commerce Custom Website</option>
                        <option value="Full-Funnel Commerce Strategy">Full-Funnel Commerce Strategy</option>
                      </select>
                    </div>
                  </div>

                  {/* Monthly Ad Budget Range */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                      Approximate Monthly Ad Budget
                    </label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                    >
                      <option value="< ₹1,00,000 / month">&lt; ₹1,00,000 / month (Early Stage)</option>
                      <option value="₹1L – ₹5L per month">₹1,00,000 – ₹5,00,000 / month (Growth)</option>
                      <option value="₹5L – ₹20L per month">₹5,00,000 – ₹20,00,000 / month (Scale)</option>
                      <option value="₹20L+ per month">₹20,00,000+ / month (Enterprise / Category Leader)</option>
                      <option value="Website / Creative Project Only">Website / Creative Project Only</option>
                    </select>
                  </div>

                  {/* Message / Growth Challenge */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                      Current Growth Challenge / Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand, your current ROAS or conversion bottlenecks, and what you aim to achieve over the next 90 days..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-ink-900 text-white font-medium text-base hover:bg-cobalt-700 active:scale-[0.99] transition-all duration-200 shadow-md focus-ring disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting Details...' : 'Submit Growth Inquiry'}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-ink-400 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Non-disclosure protected. We never share your sales data.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
