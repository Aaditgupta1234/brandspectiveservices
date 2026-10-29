import React from 'react';
import { BrandLogo } from '../brand/BrandLogo';
import { brandConfig } from '../../data/brandConfig';
import { ArrowUp, MapPin, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <footer className="bg-white border-t border-sand-300 text-ink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Top Row: Brand & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-sand-200 text-left">
          
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-sm text-ink-500 max-w-sm pt-2 leading-relaxed">
              Performance marketing, marketplace scale, and bespoke digital experiences engineered for ambitious brands from Dehradun, Uttarakhand.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-cobalt-700" />
              <span>Dehradun, Uttarakhand 248001, India</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Practices */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cobalt-700 font-semibold">
                Practices
              </div>
              <ul className="space-y-2 text-xs text-ink-600">
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Amazon Advertising</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Flipkart PLA & Media</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Quick Commerce Sync</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Google Ads & PMax</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Meta Paid Social</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Custom Storefronts</a></li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cobalt-700 font-semibold">
                Navigation
              </div>
              <ul className="space-y-2 text-xs text-ink-600">
                <li><a href="#hero" className="hover:text-cobalt-700 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-cobalt-700 transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-cobalt-700 transition-colors">Selected Work</a></li>
                <li><a href="#approach" className="hover:text-cobalt-700 transition-colors">Our Approach</a></li>
                <li><a href="#why-us" className="hover:text-cobalt-700 transition-colors">Why BrandSpective</a></li>
                <li><a href="#about" className="hover:text-cobalt-700 transition-colors">About Agency</a></li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cobalt-700 font-semibold">
                Direct Channels
              </div>
              <ul className="space-y-2.5 text-xs text-ink-600">
                <li>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Studio</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${brandConfig.contact.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-cobalt-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{brandConfig.contact.email}</span>
                  </a>
                </li>
                <li className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="px-3.5 py-1.5 rounded-md bg-ink-900 text-white text-[11px] font-medium hover:bg-cobalt-700 transition-colors shadow-xs"
                  >
                    Let&apos;s Talk
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Row: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} BrandSpective Services. All rights reserved.</span>
            <span>·</span>
            <span>Dehradun, Uttarakhand, India</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-ink-600 hover:text-cobalt-700 transition-colors font-mono text-[11px] uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

