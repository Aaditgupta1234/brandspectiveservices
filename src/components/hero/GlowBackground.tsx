import React from 'react';

export const GlowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep dark backdrop */}
      <div className="absolute inset-0 bg-[#02040a]" />

      {/* Main diagonal electric-blue anamorphic light beam */}
      <div 
        className="absolute top-[-15%] left-[10%] w-[85vw] max-w-[1300px] h-[75vh] max-h-[750px] opacity-75 blur-[120px] rounded-full transform -rotate-[22deg]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.75) 0%, rgba(14, 116, 144, 0.45) 45%, rgba(2, 6, 23, 0) 75%)'
        }}
      />

      {/* Intense electric cyan focal hotspot behind the 3D cube and right horizon */}
      <div 
        className="absolute top-[12%] right-[5%] w-[48vw] max-w-[700px] h-[55vh] max-h-[550px] opacity-65 blur-[100px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(29, 78, 216, 0.45) 40%, rgba(2, 6, 23, 0) 80%)'
        }}
      />

      {/* Subtle magenta / violet ambient bounce lighting */}
      <div 
        className="absolute top-[32%] left-[28%] w-[42vw] max-w-[600px] h-[38vh] max-h-[400px] opacity-35 blur-[110px] rounded-full transform rotate-[15deg]"
        style={{
          background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.5) 0%, rgba(217, 70, 239, 0.25) 40%, rgba(2, 6, 23, 0) 75%)'
        }}
      />

      {/* Secondary deep indigo atmosphere */}
      <div 
        className="absolute bottom-[8%] right-[18%] w-[35vw] max-w-[500px] h-[30vh] opacity-40 blur-[90px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(30, 27, 75, 0.2) 50%, rgba(2, 6, 23, 0) 80%)'
        }}
      />

      {/* Subtle film grain / vignette mask overlay */}
      <div 
        className="absolute inset-0 bg-radial-vignette opacity-80"
        style={{
          background: 'radial-gradient(circle at 50% 40%, transparent 40%, rgba(2, 4, 10, 0.8) 95%)'
        }}
      />

      {/* Subtle horizontal light streak across mid-ground */}
      <div 
        className="absolute top-[52%] left-[-10%] w-[120%] h-[1px] opacity-25"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.6) 35%, rgba(168, 85, 247, 0.6) 65%, transparent 100%)',
          filter: 'blur(1px)'
        }}
      />
    </div>
  );
};

