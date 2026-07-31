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
    <header className="relative w-full flex flex-col items-center pt-8 pb-8 border-b-2 border-black dark:border-sky-300 transition-colors duration-300">
      
      {/* Top Utility Actions Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-neutral-300 dark:border-sky-800/60 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-600 dark:text-sky-300 font-bold">
            {t.headerLocationBadge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle Button (EN / FI) */}
          <button
            onClick={onToggleLanguage}
            id="lang-toggle-btn"
            title={lang === 'en' ? 'Vaihda suomeksi (Switch to Suomi)' : 'Switch to English'}
            className="px-2.5 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-950 text-black dark:text-sky-100 hover:bg-amber-100/50 dark:hover:bg-sky-900/60 transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-600 dark:text-sky-300" />
            <span className="text-[11px] font-mono tracking-wider">
              {lang === 'en' ? 'SUOMI' : 'ENGLISH'}
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            id="share-btn"
            title="Share page"
            className="px-2.5 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-950 text-black dark:text-sky-100 hover:bg-neutral-100 dark:hover:bg-sky-900/60 transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.copied}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.share}</span>
              </>
            )}
          </button>

          {/* Season Theme Toggle (Summer / Winter) */}
          <button
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            title={`Switch season: ${theme === 'light' ? t.winterMode : t.summerMode}`}
            className="px-2.5 sm:px-3 py-1.5 border-2 border-black dark:border-sky-300 bg-amber-100/80 dark:bg-sky-950 text-amber-950 dark:text-sky-100 hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)] text-xs"
          >
            {theme === 'light' ? (
              <>
                <Snowflake className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span className="text-amber-950 text-[11px] sm:text-xs">{t.winterMode}</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-sky-100 text-[11px] sm:text-xs">{t.summerMode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Profile Showcase */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 w-full max-w-xl">
        
        {/* Nordic Archipelago & Green Forest Lake Visual Box - Optimised for Mobile, Tablet & Desktop */}
        <div className="relative shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 border-2 sm:border-3 border-black dark:border-sky-300 p-1.5 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50/70 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(56,189,248,0.8)] relative overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for Baltic Sea / Finnish Lake Water */}
                <linearGradient id="lakeWater" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
                </linearGradient>

                {/* Gradient for Forest Silhouette */}
                <linearGradient id="forestGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>

                <linearGradient id="deepForest" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#064e3b" />
                </linearGradient>
              </defs>

              {/* Sky Background & Sun/Ice Glow */}
              <circle cx="155" cy="40" r="22" className="fill-amber-300/70 dark:fill-sky-300/40" />
              <circle cx="155" cy="40" r="32" className="fill-amber-200/30 dark:fill-sky-400/20" />

              {/* Soaring Seagulls over Baltic Waters */}
              <path d="M 20 32 Q 25 26, 30 32 Q 35 26, 40 32" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neutral-700 dark:text-sky-200" />
              <path d="M 45 22 Q 49 17, 53 22 Q 57 17, 61 22" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-700 dark:text-sky-200" />

              {/* Distant Forest Ridge Across the Lake */}
              <path
                d="M 0 115 L 12 105 L 20 115 L 32 98 L 42 115 L 58 95 L 70 115 L 85 102 L 98 115 L 118 96 L 132 115 L 155 106 L 170 115 L 190 108 L 200 115 L 200 138 L 0 138 Z"
                className="fill-emerald-800/50 dark:fill-sky-900/70"
              />

              {/* Baltic Sea / Lake Surface */}
              <rect x="0" y="130" width="200" height="70" fill="url(#lakeWater)" />

              {/* Water Wave Ripples */}
              <g fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-100 dark:text-sky-200 opacity-80">
                <path d="M 8 138 Q 30 134, 55 138 T 105 138 T 155 138" />
                <path d="M 65 150 Q 90 146, 115 150 T 165 150" />
                <path d="M 15 164 Q 45 160, 75 164 T 135 164" />
                <path d="M 100 178 Q 125 174, 150 178" />
              </g>

              {/* Rocky Granite Island Shoreline (Foreground Right & Center) */}
              <path
                d="M 50 200 C 50 168, 75 145, 115 145 C 150 145, 185 158, 200 172 L 200 200 Z"
                className="fill-stone-300 dark:fill-slate-800 stroke-neutral-800 dark:stroke-sky-300"
                strokeWidth="1.2"
              />

              {/* Wooden Sauna Jetty / Pier into Lake */}
              <g stroke="currentColor" strokeWidth="1.5" className="text-neutral-800 dark:text-sky-200" fill="none">
                {/* Support Stilts */}
                <line x1="20" y1="158" x2="20" y2="172" />
                <line x1="40" y1="156" x2="40" y2="168" />
                <line x1="60" y1="154" x2="60" y2="164" />
                {/* Pier Planks */}
                <line x1="10" y1="158" x2="70" y2="154" strokeWidth="2.5" />
              </g>

              {/* Lush Green Pine & Spruce Trees on Shore - Crisp & Large */}
              {/* Spruce 1 - Big Tall Main Pine Tree */}
              <g className="text-neutral-900 dark:text-sky-100">
                <line x1="125" y1="85" x2="125" y2="160" stroke="#451a03" strokeWidth="3" />
                <path d="M 125 60 L 110 88 H 140 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="1" />
                <path d="M 125 80 L 104 110 H 146 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="1" />
                <path d="M 125 100 L 98 132 H 152 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="1" />
                <path d="M 125 120 L 92 155 H 158 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="1" />
              </g>

              {/* Spruce 2 - Medium Pine Tree Right */}
              <g className="text-neutral-900 dark:text-sky-100">
                <line x1="168" y1="105" x2="168" y2="168" stroke="#451a03" strokeWidth="2.5" />
                <path d="M 168 88 L 154 112 H 182 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 168 106 L 148 132 H 188 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 168 125 L 142 154 H 194 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="0.8" />
              </g>

              {/* Spruce 3 - Left Pine Tree on Shore Rock */}
              <g className="text-neutral-900 dark:text-sky-100">
                <line x1="88" y1="120" x2="88" y2="158" stroke="#451a03" strokeWidth="2" />
                <path d="M 88 102 L 76 122 H 100 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 88 116 L 72 138 H 104 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 88 130 L 66 154 H 110 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-black text-white dark:bg-sky-400 dark:text-slate-950 text-[9px] sm:text-[10px] font-mono px-2 py-0.5 font-bold uppercase tracking-widest border border-black dark:border-sky-300 select-none shadow-md z-10">
            {t.finlandBadge}
          </div>
        </div>

        {/* Name & Title Summary */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans uppercase leading-none text-black dark:text-sky-100">
            {t.name}
          </h1>
          
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-800 dark:text-sky-300 uppercase">
            {t.subtitle}
          </p>

          <p className="text-xs text-neutral-600 dark:text-sky-200 font-sans leading-relaxed max-w-sm">
            {t.headerDesc}
          </p>

          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-sky-300">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium">{t.locationText}</span>
          </div>
        </div>

      </div>

    </header>
  );
};

