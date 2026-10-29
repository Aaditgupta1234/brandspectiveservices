import React from 'react';

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Deep Space Obsidian Canvas Foundation */}
      <div className="absolute inset-0 bg-[#030511]" />

      {/* 2. Intense Royal Violet / Ultramarine Atmosphere (Behind Headline "future" & Upper Center) */}
      {/* Exact color match: #1f069b - #280bae - #321d9c */}
      <div 
        className="absolute top-[8%] left-[22%] w-[65vw] max-w-[950px] h-[52vh] max-h-[520px] opacity-90 blur-[90px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(48, 12, 195, 0.9) 0%, rgba(28, 6, 140, 0.6) 42%, rgba(10, 2, 70, 0.25) 70%, transparent 88%)'
        }}
      />

      {/* 3. The Signature Anamorphic Light Beam (Diagonal / Horizontal Radiant Sweep) */}
      {/* Sweeps from left edge across the middle-horizon through the 3D cube */}
      {/* Exact color match: #6a90d5 - #587ee5 - #8ab8f4 */}
      <div 
        className="absolute top-[34%] left-[-6%] w-[112vw] max-w-[1600px] h-[36vh] max-h-[360px] opacity-95 blur-[65px] rounded-full pointer-events-none transform -rotate-[7deg]"
        style={{
          background: 'radial-gradient(ellipse 70% 32% at 36% 50%, rgba(105, 155, 255, 0.95) 0%, rgba(60, 115, 245, 0.8) 32%, rgba(25, 60, 205, 0.5) 60%, rgba(10, 25, 110, 0.2) 80%, transparent 95%)'
        }}
      />

      {/* 4. High-Luminance Lens Flare Hotspot (Under "Leading the" & origin on left) */}
      {/* Sampled at #8ab8f4 to #dcefff in reference */}
      <div 
        className="absolute top-[42%] left-[4%] w-[58vw] max-w-[800px] h-[18vh] max-h-[180px] opacity-85 blur-[40px] rounded-full pointer-events-none transform -rotate-[5deg]"
        style={{
          background: 'radial-gradient(ellipse 60% 36% at 35% 50%, rgba(225, 242, 255, 0.98) 0%, rgba(145, 198, 255, 0.82) 42%, rgba(59, 130, 246, 0.45) 70%, transparent 88%)'
        }}
      />

      {/* 5. Deep Royal Cobalt Basin (Lower Midground behind Buttons) */}
      {/* Sampled at #1e3884 - #111f90 in reference */}
      <div 
        className="absolute top-[50%] left-[8%] w-[60vw] max-w-[850px] h-[42vh] max-h-[420px] opacity-80 blur-[85px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 45% at 42% 45%, rgba(28, 62, 185, 0.75) 0%, rgba(16, 32, 130, 0.5) 50%, rgba(5, 10, 60, 0.15) 75%, transparent 90%)'
        }}
      />

      {/* 6. Luminous Blue Field Behind and Through the 3D Cube */}
      {/* Sampled at #0a077e - #292e8f - #1246b8 in reference */}
      <div 
        className="absolute top-[14%] right-[2%] w-[52vw] max-w-[750px] h-[60vh] max-h-[600px] opacity-85 blur-[75px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 48% 48%, rgba(42, 92, 245, 0.75) 0%, rgba(22, 50, 180, 0.55) 45%, rgba(8, 18, 90, 0.25) 70%, transparent 88%)'
        }}
      />

      {/* 7. Subtle Violet / Magenta Diagonal Rim Accent (Above the 3D Cube) */}
      {/* Sampled at #584fb3 - #4f29a7 in reference */}
      <div 
        className="absolute top-[5%] right-[14%] w-[36vw] max-w-[500px] h-[30vh] max-h-[300px] opacity-45 blur-[70px] rounded-full pointer-events-none transform rotate-[14deg]"
        style={{
          background: 'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(175, 95, 255, 0.7) 0%, rgba(225, 75, 245, 0.3) 45%, transparent 75%)'
        }}
      />

      {/* 8. Top Edge (Header) & Bottom Edge (Ribbon) Depth Mask */}
      {/* Preserves pristine dark obsidian at the top navigation and bottom marquee */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(3, 5, 17, 0.8) 0%, transparent 14%, transparent 82%, rgba(2, 3, 10, 0.98) 100%)'
        }}
      />
    </div>
  );
};
