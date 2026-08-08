import React from 'react';
import { Sun, Snowflake, Share2, Check, MapPin, Globe } from 'lucide-react';
import { ThemeMode, LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  lang: LanguageMode;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  lang,
  onToggleLanguage,
}) => {
  const [copiedShare, setCopiedShare] = React.useState(false);
  const t = getTranslation(lang);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Sagar Tandon Advisory',
          text: 'Sagar Tandon Advisory — Helsinki-based Strategic Advisory & Conscious Finance Practice',
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <header className="relative w-full flex flex-col items-center pb-8 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      
      {/* Top Utility Actions Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-medium">
            {t.headerLocationBadge}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Toggle Button (EN / FI) */}
          <button
            onClick={onToggleLanguage}
            id="lang-toggle-btn"
            title={lang === 'en' ? 'Vaihda suomeksi' : 'Switch to English'}
            className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium text-xs"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            <span className="text-[11px] font-mono tracking-wider">
              {lang === 'en' ? 'FI' : 'EN'}
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            id="share-btn"
            title="Share page"
            className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium text-xs"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px] font-mono">{t.copied}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span className="text-[11px] font-mono">{t.share}</span>
              </>
            )}
          </button>

          {/* Season Theme Toggle (Summer / Winter) */}
          <button
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            title={`Switch season: ${theme === 'light' ? t.winterMode : t.summerMode}`}
            className="px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium text-xs"
          >
            {theme === 'light' ? (
              <>
                <Snowflake className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="text-[11px] font-mono">{t.winterMode}</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] font-mono">{t.summerMode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Profile Showcase */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full">
        
        {/* Minimalist Black & White Stick Art Sauna Illustration */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl border border-neutral-300 dark:border-neutral-700 p-2 bg-white dark:bg-[#16181d] relative overflow-hidden flex items-center justify-center shadow-xs">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-neutral-900 dark:text-neutral-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Minimal Sun / Moon outline */}
              <circle cx="160" cy="35" r="14" strokeWidth="1.5" strokeDasharray="3 2" className="opacity-40" />

              {/* Distant Minimal Pine Stick Trees */}
              <g strokeWidth="1.2" className="opacity-50">
                {/* Tree 1 */}
                <line x1="22" y1="75" x2="22" y2="120" />
                <path d="M 22 75 L 14 88 M 22 75 L 30 88" />
                <path d="M 22 88 L 10 102 M 22 88 L 34 102" />
                {/* Tree 2 */}
                <line x1="38" y1="85" x2="38" y2="125" />
                <path d="M 38 85 L 32 96 M 38 85 L 44 96" />
                <path d="M 38 96 L 28 110 M 38 96 L 48 110" />
              </g>

              {/* Sauna Cabin Outline */}
              {/* Cabin Roof */}
              <path d="M 45 90 L 105 60 L 115 65 L 55 95 Z" fill="currentColor" className="fill-neutral-900 dark:fill-neutral-100" />
              {/* Cabin Walls */}
              <rect x="50" y="90" width="55" height="45" strokeWidth="1.75" />
              {/* Wooden Plank Lines on Sauna */}
              <line x1="50" y1="102" x2="105" y2="102" strokeWidth="1" className="opacity-40" />
              <line x1="50" y1="114" x2="105" y2="114" strokeWidth="1" className="opacity-40" />
              <line x1="50" y1="126" x2="105" y2="126" strokeWidth="1" className="opacity-40" />
              {/* Door */}
              <rect x="60" y="100" width="16" height="35" strokeWidth="1.5" />
              <circle cx="72" cy="118" r="1" fill="currentColor" />
              {/* Small Window */}
              <rect x="84" y="102" width="12" height="12" strokeWidth="1.2" />
              <line x1="90" y1="102" x2="90" y2="114" strokeWidth="1" />

              {/* Chimney */}
              <rect x="92" y="62" width="6" height="12" strokeWidth="1.5" />
              {/* Steam / Smoke rising loops from Sauna Stove */}
              <path d="M 95 58 Q 90 48, 98 40 T 93 25" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-70" />
              <path d="M 99 56 Q 105 48, 97 38 T 102 22" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-50" />

              {/* Wooden Pier / Dock */}
              <line x1="40" y1="135" x2="185" y2="135" strokeWidth="2.2" />
              {/* Pier Posts */}
              <line x1="110" y1="135" x2="110" y2="160" strokeWidth="1.5" />
              <line x1="140" y1="135" x2="140" y2="162" strokeWidth="1.5" />
              <line x1="170" y1="135" x2="170" y2="165" strokeWidth="1.5" />

              {/* Water Level / Wave Lines */}
              <path d="M 10 152 Q 30 148, 55 152 T 105 152 T 155 152 T 195 152" strokeWidth="1" className="opacity-50" />
              <path d="M 25 165 Q 55 162, 85 165 T 145 165 T 185 165" strokeWidth="1" strokeDasharray="4 3" className="opacity-30" />

              {/* STICK FIGURES (Sauna & Cooling Off on Dock) */}
              
              {/* Stick Figure #1: Sitting on edge of pier dangling legs */}
              {/* Head */}
              <circle cx="155" cy="115" r="5" strokeWidth="1.5" />
              {/* Torso */}
              <line x1="155" y1="120" x2="155" y2="135" strokeWidth="1.5" />
              {/* Arm (resting on dock) */}
              <path d="M 155 124 L 148 132 L 145 135" strokeWidth="1.5" />
              {/* Leg dangling into lake */}
              <path d="M 155 135 L 157 146 L 157 154" strokeWidth="1.5" />

              {/* Stick Figure #2: Sitting next to figure #1 on pier */}
              {/* Head */}
              <circle cx="135" cy="116" r="5" strokeWidth="1.5" />
              {/* Torso */}
              <line x1="135" y1="121" x2="135" y2="135" strokeWidth="1.5" />
              {/* Arm */}
              <path d="M 135 125 L 128 133 L 125 135" strokeWidth="1.5" />
              {/* Leg dangling */}
              <path d="M 135 135 L 137 145 L 137 152" strokeWidth="1.5" />

              {/* Stick Figure #3: Walking out of Sauna Door */}
              {/* Head */}
              <circle cx="68" cy="92" r="4" strokeWidth="1.3" />
              {/* Torso */}
              <line x1="68" y1="96" x2="68" y2="108" strokeWidth="1.3" />
              {/* Arms */}
              <path d="M 68 100 L 63 105 M 68 100 L 73 105" strokeWidth="1.3" />
              {/* Legs */}
              <path d="M 68 108 L 65 118 M 68 108 L 71 118" strokeWidth="1.3" />

              {/* Sauna Birch Whisk (Vasta / Vihta) on pier */}
              <path d="M 175 130 L 180 126 M 177 127 L 183 123" strokeWidth="1.2" className="opacity-80" />

            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-black text-white dark:bg-white dark:text-black text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-widest select-none shadow-xs border border-neutral-800 dark:border-neutral-200">
            HELSINKI &bull; FI
          </div>
        </div>

        {/* Name & Title Summary */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans text-neutral-900 dark:text-neutral-100">
            {t.name}
          </h1>
          
          <p className="font-mono text-xs font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 uppercase">
            {t.subtitle}
          </p>

          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-md">
            {t.headerDesc}
          </p>

          <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{t.locationText}</span>
          </div>
        </div>

      </div>

    </header>
  );
};
