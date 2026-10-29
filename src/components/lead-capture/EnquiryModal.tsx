import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  "Amazon Advertising",
  "Flipkart Advertising",
  "Google Ads",
  "Meta Ads (IG & FB)",
  "Quick Commerce (Blinkit/Zepto)",
  "Social Media Management",
  "Influencer Marketing",
  "Website Development",
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [submitted, setSubmitted] = useState(false);

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
    }, 900);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-electric-cyan/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-white">Opening WhatsApp...</h3>
            <p className="text-sm text-slate-400">
              Connecting you directly with BrandSpective&apos;s senior growth team.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-electric-cyan mb-2">
                <MessageSquare className="w-3 h-3" />
                <span>Dehradun Growth HQ</span>
              </div>
              <h2 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                Scale Your Brand With Us
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Share your brand details for a tailored audit & growth roadmap.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Brand Name / Website
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Naturals / acme.in"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-obsidian-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 shadow-glow-pill transition-all active:scale-98"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

