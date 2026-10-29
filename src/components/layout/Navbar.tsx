import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { BrandLogo } from '../brand/BrandLogo';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#contact' && onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-[#F8F8F5]/90 backdrop-blur-md border-b border-sand-300 shadow-subtle' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo (Left) */}
        <a 
          href="#hero" 
          className="group flex items-center focus-ring rounded-lg py-1 pr-2 transition-opacity hover:opacity-90"
          aria-label="BrandSpective Services Home"
        >
          <BrandLogo variant="dark" />
        </a>

        {/* Desktop Navigation Links (Center) */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {brandConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-ink-700 hover:text-cobalt-700 transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-cobalt-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary Contact CTA (Right) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenContact}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ink-900 text-white font-medium text-xs sm:text-sm tracking-tight hover:bg-cobalt-700 active:scale-[0.98] transition-all duration-200 focus-ring shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-ink-800 hover:bg-sand-200 focus-ring transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-50 bg-[#F8F8F5] border-t border-sand-300 flex flex-col justify-between p-6 sm:hidden overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {brandConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-serif font-medium text-ink-900 hover:text-cobalt-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-sand-300">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-ink-900 text-white font-medium text-sm hover:bg-cobalt-700 transition-colors shadow-sm"
            >
              <span>Start an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-ink-500">
              Dehradun, Uttarakhand, India
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
