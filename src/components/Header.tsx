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
    <header className="relative w-full flex flex-col items-center pt-8 pb-8 border-b-2 border-black dark:border-white transition-colors duration-200">
      
      {/* Top Utility Actions Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-neutral-300 dark:border-neutral-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-bold">
            {t.headerLocationBadge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle Button (EN / FI) */}
          <button
            onClick={onToggleLanguage}
            id="lang-toggle-btn"
            title={lang === 'en' ? 'Vaihda suomeksi (Switch to Suomi)' : 'Switch to English'}
            className="px-2.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span className="text-[11px] font-mono tracking-wider">
              {lang === 'en' ? 'SUOMI' : 'ENGLISH'}
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            id="share-btn"
            title="Share page"
            className="px-2.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5" />
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
            className="px-3 py-1.5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-all flex items-center gap-1.5 cursor-pointer font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300 dark:text-amber-500" />
                <span>{t.summerMode}</span>
              </>
            ) : (
              <>
                <Snowflake className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600" />
                <span>{t.winterMode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Profile Showcase */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full max-w-xl">
        
        {/* Nordic Topographic & Pine Pattern Visual Box */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 border-2 border-black dark:border-white p-2 bg-neutral-100 dark:bg-neutral-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-neutral-800 dark:text-neutral-200 stroke-current fill-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Topographic Contour Lines */}
              <path
                d="M -20 40 Q 50 10, 110 50 T 220 30"
                strokeWidth="1.2"
                strokeDasharray="4 3"
              />
              <path
                d="M -10 75 Q 60 45, 120 85 T 220 65"
                strokeWidth="1.2"
              />
              <path
                d="M -30 110 Q 40 85, 100 120 T 220 100"
                strokeWidth="0.8"
              />

              {/* Minimalist Line Pine / Spruce Trees */}
              {/* Tree 1 (Left Pine) */}
              <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="52" y1="115" x2="52" y2="195" />
                <path d="M 52 115 L 36 135 M 52 115 L 68 135" />
                <path d="M 52 135 L 28 158 M 52 135 L 76 158" />
                <path d="M 52 155 L 20 182 M 52 155 L 84 182" />
              </g>

              {/* Tree 2 (Center-Right Tall Pine) */}
              <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="135" y1="72" x2="135" y2="198" />
                <path d="M 135 72 L 118 95 M 135 72 L 152 95" />
                <path d="M 135 92 L 108 122 M 135 92 L 162 122" />
                <path d="M 135 115 L 98 150 M 135 115 L 172 150" />
                <path d="M 135 142 L 90 182 M 135 142 L 180 182" />
              </g>

              {/* Tree 3 (Far Right Small Pine) */}
              <g strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                <line x1="188" y1="135" x2="188" y2="198" />
                <path d="M 188 135 L 177 150 M 188 135 L 199 150" />
                <path d="M 188 150 L 170 170 M 188 150 L 206 170" />
                <path d="M 188 167 L 164 193 M 188 167 L 212 193" />
              </g>
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black text-white dark:bg-white dark:text-black text-[9px] font-mono px-2 py-0.5 font-bold uppercase tracking-widest border border-black dark:border-white select-none">
            {t.finlandBadge}
          </div>
        </div>

        {/* Name & Title Summary */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans uppercase leading-none">
            {t.name}
          </h1>
          
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
            {t.subtitle}
          </p>

          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-sm">
            {t.headerDesc}
          </p>

          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium">{t.locationText}</span>
          </div>
        </div>

      </div>

    </header>
  );
};

