import React from 'react';

export const NordicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none text-neutral-600 dark:text-neutral-100 opacity-65 dark:opacity-85 transition-colors duration-300">
      
      {/* Left Margin - Nordic Pine Forest & Archipelago Topography */}
      <svg
        className="absolute top-0 left-0 h-full w-48 sm:w-80 md:w-96"
        viewBox="0 0 300 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        {/* Topographic archipelago contours */}
        <path
          d="M -50 120 C 20 100, 80 180, 150 140 C 210 110, 240 200, 180 280 C 130 340, 200 420, 120 480 C 60 520, -20 460, -50 400"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <path
          d="M -30 150 C 30 130, 70 200, 130 170 C 180 150, 200 230, 150 290 C 100 340, 160 400, 90 450"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M -10 180 C 40 160, 60 210, 100 190 C 140 170, 160 230, 120 280 C 80 320, 120 370, 70 410"
          stroke="currentColor"
          strokeWidth="0.8"
        />

        {/* Minimalist Line Pine / Spruce Trees */}
        {/* Tree 1 */}
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="60" y1="520" x2="60" y2="780" />
          <path d="M 60 520 L 40 560 M 60 520 L 80 560" />
          <path d="M 60 550 L 30 600 M 60 550 L 90 600" />
          <path d="M 60 590 L 20 650 M 60 590 L 100 650" />
          <path d="M 60 630 L 10 700 M 60 630 L 110 700" />
          <path d="M 60 680 L 5 750 M 60 680 L 115 750" />
        </g>

        {/* Tree 2 (Taller, Background) */}
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
          <line x1="140" y1="450" x2="140" y2="760" />
          <path d="M 140 450 L 125 485 M 140 450 L 155 485" />
          <path d="M 140 475 L 115 520 M 140 475 L 165 520" />
          <path d="M 140 510 L 105 565 M 140 510 L 175 565" />
          <path d="M 140 550 L 95 620 M 140 550 L 185 620" />
          <path d="M 140 600 L 85 680 M 140 600 L 195 680" />
          <path d="M 140 650 L 80 730 M 140 650 L 200 730" />
        </g>

        {/* Tree 3 (Distant Pine) */}
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <line x1="210" y1="600" x2="210" y2="820" />
          <path d="M 210 600 L 195 630 M 210 600 L 225 630" />
          <path d="M 210 625 L 188 665 M 210 625 L 232 665" />
          <path d="M 210 655 L 180 705 M 210 655 L 240 705" />
          <path d="M 210 690 L 170 755 M 210 690 L 250 755" />
        </g>

        {/* Baltic Water Ripples at bottom left */}
        <path d="M -20 850 Q 30 840, 80 850 T 180 850 T 280 850" stroke="currentColor" strokeWidth="1" />
        <path d="M 10 880 Q 70 870, 130 880 T 230 880" stroke="currentColor" strokeWidth="0.8" />
        <path d="M -10 910 Q 40 900, 90 910 T 190 910 T 260 910" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 30 940 Q 80 935, 140 940 T 220 940" stroke="currentColor" strokeWidth="0.7" />
      </svg>

      {/* Right Margin - Baltic Sea Waves, Sail & Coastal Archipelago Contour */}
      <svg
        className="absolute top-0 right-0 h-full w-48 sm:w-80 md:w-96"
        viewBox="0 0 300 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMin slice"
      >
        {/* Baltic Sea Gentle Horizon Waves */}
        <g stroke="currentColor" strokeWidth="1">
          <path d="M 20 180 Q 70 170, 120 180 T 220 180 T 320 180" />
          <path d="M 60 210 Q 110 200, 160 210 T 260 210" strokeWidth="0.8" />
          <path d="M 100 240 Q 150 230, 200 240 T 300 240" strokeWidth="1.2" />
          <path d="M 40 270 Q 90 260, 140 270 T 240 270 T 310 270" strokeWidth="0.7" />
        </g>

        {/* Coastal Rock Island Lines (Bohuslän / Finnish Archipelago Skärgård) */}
        <path
          d="M 320 320 C 260 300, 180 340, 150 400 C 120 460, 180 540, 240 580 C 290 610, 310 680, 260 740 C 220 790, 280 860, 320 890"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M 300 350 C 250 335, 195 370, 170 415 C 145 465, 195 530, 245 565 C 285 590, 300 650, 275 700"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="5 3"
        />

        {/* Tree on Coastal Cliff (Right Edge) */}
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="220" y1="410" x2="220" y2="620" />
          <path d="M 220 410 L 205 440 M 220 410 L 235 440" />
          <path d="M 220 435 L 195 475 M 220 435 L 245 475" />
          <path d="M 220 465 L 185 515 M 220 465 L 255 515" />
          <path d="M 220 500 L 175 560 M 220 500 L 265 560" />
        </g>

        {/* Minimalist Water & Wind Flow Lines at Bottom Right */}
        <g stroke="currentColor">
          <path d="M 80 780 C 140 760, 200 800, 280 770" strokeWidth="1" />
          <path d="M 50 820 C 120 800, 180 830, 260 810" strokeWidth="0.8" />
          <path d="M 110 860 C 170 845, 220 870, 300 850" strokeWidth="1.2" />
          <path d="M 70 900 C 130 885, 200 915, 270 895" strokeWidth="0.7" />
          <path d="M 120 935 C 180 920, 240 940, 310 925" strokeWidth="1" />
        </g>
      </svg>

    </div>
  );
};
