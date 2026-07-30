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
            className="px-3 py-1.5 border-2 border-black dark:border-sky-300 bg-amber-100/80 dark:bg-sky-950 text-amber-950 dark:text-sky-100 hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]"
          >
            {theme === 'light' ? (
              <>
                <Snowflake className="w-3.5 h-3.5 text-sky-700" />
                <span className="text-amber-950">{t.winterMode}</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-sky-100">{t.summerMode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Profile Showcase */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full max-w-xl">
        
        {/* Nordic Archipelago & Green Forest Lake Visual Box */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 border-2 border-black dark:border-sky-300 p-1 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(56,189,248,0.8)] relative overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for Baltic Sea / Finnish Lake Water */}
                <linearGradient id="lakeWater" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
                </linearGradient>

                {/* Gradient for Forest Silhouette */}
                <linearGradient id="forestGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>

                <linearGradient id="deepForest" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#064e3b" />
                </linearGradient>
              </defs>

              {/* Sky Background & Midnight Sun / Horizon Glow */}
              <circle cx="150" cy="45" r="22" className="fill-amber-300/60 dark:fill-sky-300/30" />
              <circle cx="150" cy="45" r="32" className="fill-amber-200/20 dark:fill-sky-400/10" />

              {/* Soaring Seagulls over Baltic Waters */}
              <path d="M 25 38 Q 30 32, 35 38 Q 40 32, 45 38" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-neutral-700 dark:text-sky-200" />
              <path d="M 50 28 Q 54 23, 58 28 Q 62 23, 66 28" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-700 dark:text-sky-200" />

              {/* Distant Forest Ridge Across the Lake */}
              <path
                d="M 0 120 L 15 110 L 22 120 L 35 105 L 45 120 L 60 100 L 72 120 L 88 108 L 100 120 L 120 102 L 135 120 L 160 112 L 175 120 L 200 115 L 200 140 L 0 140 Z"
                className="fill-emerald-800/40 dark:fill-sky-900/60"
              />

              {/* Baltic Sea / Lake Surface */}
              <rect x="0" y="132" width="200" height="68" fill="url(#lakeWater)" />

              {/* Water Wave Ripples */}
              <g fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-100 dark:text-sky-200 opacity-70">
                <path d="M 10 142 Q 35 138, 60 142 T 110 142 T 160 142" />
                <path d="M 70 154 Q 95 150, 120 154 T 170 154" />
                <path d="M 20 168 Q 50 164, 80 168 T 140 168" />
                <path d="M 110 182 Q 135 178, 160 182" />
              </g>

              {/* Rocky Granite Island Shoreline (Foreground Right & Center) */}
              <path
                d="M 60 200 C 60 170, 80 148, 120 148 C 155 148, 190 160, 200 175 L 200 200 Z"
                className="fill-stone-300 dark:fill-slate-800 stroke-neutral-800 dark:stroke-sky-300"
                strokeWidth="1.2"
              />

              {/* Wooden Sauna Jetty / Pier into Lake */}
              <g stroke="currentColor" strokeWidth="1.5" className="text-neutral-800 dark:text-sky-200" fill="none">
                {/* Support Stilts */}
                <line x1="25" y1="162" x2="25" y2="175" />
                <line x1="45" y1="160" x2="45" y2="172" />
                <line x1="65" y1="158" x2="65" y2="168" />
                {/* Pier Planks */}
                <line x1="15" y1="162" x2="75" y2="158" strokeWidth="2.5" />
              </g>

              {/* Lush Green Pine & Spruce Trees on Shore */}
              {/* Spruce 1 - Big Foreground Pine */}
              <g className="text-neutral-900 dark:text-sky-100">
                {/* Trunk */}
                <line x1="135" y1="100" x2="135" y2="162" stroke="#451a03" strokeWidth="3" />
                {/* Foliage Layers */}
                <path d="M 135 80 L 118 108 H 152 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="1" />
                <path d="M 135 98 L 112 128 H 158 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="1" />
                <path d="M 135 118 L 105 152 H 165 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="1" />
              </g>

              {/* Spruce 2 - Medium Pine */}
              <g className="text-neutral-900 dark:text-sky-100">
                <line x1="172" y1="120" x2="172" y2="170" stroke="#451a03" strokeWidth="2.5" />
                <path d="M 172 105 L 158 128 H 186 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 172 122 L 152 148 H 192 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="0.8" />
              </g>

              {/* Spruce 3 - Small Left Pine on Rock */}
              <g className="text-neutral-900 dark:text-sky-100">
                <line x1="95" y1="130" x2="95" y2="160" stroke="#451a03" strokeWidth="2" />
                <path d="M 95 120 L 83 138 H 107 Z" fill="url(#forestGreen)" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 95 132 L 78 152 H 112 Z" fill="url(#deepForest)" stroke="currentColor" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black text-white dark:bg-sky-400 dark:text-slate-950 text-[9px] font-mono px-2 py-0.5 font-bold uppercase tracking-widest border border-black dark:border-sky-300 select-none shadow-sm">
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

