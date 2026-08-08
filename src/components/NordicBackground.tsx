import React from 'react';
import { ThemeMode } from '../types';

interface NordicBackgroundProps {
  theme: ThemeMode;
}

export const NordicBackground: React.FC<NordicBackgroundProps> = ({ theme }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-all duration-500">
      
      {/* Micro-grid Dot Matrix Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-15"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'radial-gradient(#a3a3a3 0.75px, transparent 0.75px)' 
            : 'radial-gradient(#525252 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle Ambient Light Glow - Summer vs Winter */}
      {theme === 'light' ? (
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100/40 dark:bg-amber-950/10 rounded-full blur-3xl pointer-events-none" />
      ) : (
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-950/30 rounded-full blur-3xl pointer-events-none" />
      )}

      {/* Minimalist Topographic Line Art - Left Edge */}
      <svg
        className="absolute top-0 left-0 h-full w-48 sm:w-64 text-neutral-300/40 dark:text-neutral-800/40 stroke-current fill-none hidden sm:block"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -20 100 Q 60 180, 120 280 T 40 500 T 150 800 T -20 950" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M -40 180 Q 40 260, 100 360 T 20 580 T 120 860" strokeWidth="0.8" />
        <path d="M -10 300 Q 80 380, 140 480 T 60 700" strokeWidth="0.8" strokeDasharray="2 4" />
        
        {/* Minimalist Spruce Icon Accent */}
        <g strokeWidth="1" strokeLinecap="round" opacity="0.6">
          <line x1="30" y1="420" x2="30" y2="480" />
          <path d="M 30 420 L 18 440 M 30 420 L 42 440" />
          <path d="M 30 438 L 12 462 M 30 438 L 48 462" />
        </g>
      </svg>

      {/* Minimalist Topographic Line Art - Right Edge */}
      <svg
        className="absolute top-0 right-0 h-full w-48 sm:w-64 text-neutral-300/40 dark:text-neutral-800/40 stroke-current fill-none hidden sm:block"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 220 150 Q 140 250, 80 350 T 160 600 T 60 880" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 240 220 Q 160 320, 100 420 T 180 680" strokeWidth="0.8" />
        
        {/* Baltic Water Wave Accent */}
        <path d="M 80 720 Q 120 710, 160 720 T 240 720" strokeWidth="1" />
        <path d="M 100 740 Q 140 730, 180 740" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>

    </div>
  );
};
