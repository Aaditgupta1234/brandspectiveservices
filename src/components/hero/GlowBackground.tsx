import React from 'react';

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Obsidian Canvas Foundation */}
      <div className="absolute inset-0 bg-[#020409]" />

      {/* Signature Cinematic Anamorphic Blue Light Beam */}
      {/* Sweeps diagonally across the composition from mid-left through center-right behind the 3D cage */}
      <div 
        className="absolute top-[2%] left-[-5%] w-[95vw] max-w-[1350px] h-[70vh] max-h-[680px] opacity-75 blur-[95px] rounded-full transform -rotate-[17deg]"
        style={{
          background: 'radial-gradient(ellipse 65% 45% at 52% 48%, rgba(37, 99, 235, 0.65) 0%, rgba(14, 116, 144, 0.35) 45%, rgba(2, 6, 23, 0) 75%)'
        }}
      />

      {/* Radiant Luminous Hotspot behind the 3D Cage Sculpture */}
      <div 
        className="absolute top-[12%] right-[4%] w-[48vw] max-w-[650px] h-[55vh] max-h-[550px] opacity-60 blur-[85px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.5) 0%, rgba(29, 78, 216, 0.35) 45%, rgba(2, 4, 10, 0) 75%)'
        }}
      />

      {/* Subtle Violet Rim Reflection Whisper */}
      <div 
        className="absolute top-[32%] left-[30%] w-[35vw] max-w-[480px] h-[32vh] max-h-[350px] opacity-25 blur-[90px] rounded-full transform rotate-[12deg]"
        style={{
          background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.4) 0%, rgba(217, 70, 239, 0.15) 45%, rgba(2, 6, 23, 0) 75%)'
        }}
      />

      {/* Calibrated Vignette Mask for High-Contrast Edge Falloff */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 48%, transparent 48%, rgba(2, 4, 10, 0.8) 100%)'
        }}
      />
    </div>
  );
};
