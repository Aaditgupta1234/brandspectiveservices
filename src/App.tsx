import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { EnquiryModal } from './components/lead-capture/EnquiryModal';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-electric-cyan/20 selection:text-white">
      {/* Sticky / Floating Pill Navigation */}
      <Navbar onOpenContact={() => setIsEnquiryOpen(true)} />

      {/* Hero Section (Pixel-accurate reproduction of the design reference) */}
      <main className="flex-1">
        <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </main>

      {/* Conversion Lead Capture Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
      />
    </div>
  );
};

export default App;

