import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const serviceOptions = [
  "Amazon Advertising & Management",
  "Flipkart Advertising & PLA",
  "Quick Commerce (Blinkit / Zepto / Instamart)",
  "Google Ads & Performance Max",
  "Meta Ads (Instagram & Facebook)",
  "Social Media Strategy",
  "Performance Influencer Marketing",
  "Custom E-Commerce Storefront",
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose,
  defaultService = serviceOptions[0]
}) => {
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp direct message
    const message = `*New Brand Enquiry - BrandSpective Services*%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Brand:* ${encodeURIComponent(brandName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Service Required:* ${encodeURIComponent(selectedService)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${message}`, '_blank');
      onClose();
      setSubmitted(false);
    }, 700);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-sand-300 shadow-2xl p-6 sm:p-8 z-10 text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-ink-400 hover:text-ink-900 hover:bg-sand-100 transition-colors focus-ring"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-ink-900">Connecting to WhatsApp...</h3>
            <p className="text-sm text-ink-500 max-w-xs mx-auto">
              Opening a direct conversation with BrandSpective&apos;s senior growth team.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sand-100 border border-sand-300 text-[10px] font-mono uppercase tracking-wider text-cobalt-700 font-semibold mb-2">
                <MessageSquare className="w-3 h-3" />
                <span>Dehradun Growth HQ · Direct Connect</span>
              </div>
              <h2 id="modal-title" className="text-2xl font-semibold text-ink-900 tracking-tight">
                Let&apos;s discuss your brand.
              </h2>
              <p className="text-xs text-ink-500 mt-1">
                Tell us about your requirements and we will review your brand within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditi Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                />
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  Brand / Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Auric Organics"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                />
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  Primary Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-sand-300 bg-sand-50/50 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-cobalt-700/20 focus:border-cobalt-700 transition-colors"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-ink-900 text-white font-medium text-sm hover:bg-cobalt-700 active:scale-[0.99] transition-all duration-200 shadow-sm focus-ring"
              >
                <span>Connect via WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-[11px] font-mono text-ink-400 text-center">
              Direct connection to agency founders. No spam guaranteed.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
