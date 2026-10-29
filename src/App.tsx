import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { PlatformsSection } from './components/sections/PlatformsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { AboutSection } from './components/sections/AboutSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { EnquiryModal } from './components/lead-capture/EnquiryModal';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8F8F5] text-ink-900 flex flex-col font-sans selection:bg-cobalt-700/15 selection:text-ink-900 antialiased">
      {/* 01. Refined Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {/* 02. Asymmetric Editorial Hero */}
        <HeroSection onOpenContact={() => handleOpenContact()} />

        {/* 03. Advertising Platforms & Channels */}
        <PlatformsSection />

        {/* 04. Service Architecture (3 Groups, 8 Services) */}
        <ServicesSection onSelectService={(s) => handleOpenContact(s)} />

        {/* 05. Our Approach (Disciplined 90-Day Progression) */}
        <ApproachSection onOpenContact={() => handleOpenContact()} />

        {/* 06. Selected Work & Commercial Outcomes */}
        <SelectedWorkSection onOpenContact={() => handleOpenContact()} />

        {/* 07. Why BrandSpective (Core Principles) */}
        <WhyUsSection />

        {/* 08. About the Agency (Dehradun Heritage & National Scale) */}
        <AboutSection onOpenContact={() => handleOpenContact()} />

        {/* 09. Client Perspectives & Testimonials */}
        <TestimonialsSection onOpenContact={() => handleOpenContact()} />

        {/* 10. Contact & Growth Inquiry */}
        <ContactSection />
      </main>

      {/* 11. Editorial Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Direct Quick-Inquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;
