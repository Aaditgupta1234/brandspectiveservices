import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const isLight = variant === 'light';
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official BrandSpective Logo Asset */}
      <img
        src={`${baseUrl}${isLight ? 'logo-white.png' : 'logo.png'}`}
        alt="BrandSpective Services"
        className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};

