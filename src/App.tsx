import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { EnquiryModal } from './components/lead-capture/EnquiryModal';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-electric-cyan/20 selection:text-white">
      {/* Sticky / Floating Navigation */}
      <Navbar onOpenContact={() => setIsEnquiryOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
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
