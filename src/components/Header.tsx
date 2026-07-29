import React from 'react';
import { Moon, Sun, Share2, Check, MapPin } from 'lucide-react';
import { ThemeMode } from '../types';
import { ADVISORY_INFO } from '../data/advisoryData';
import sagarPhoto from '../assets/images/st_umito.jpg';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [copiedShare, setCopiedShare] = React.useState(false);

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
      <div className="w-full flex items-center justify-between mb-8 pb-3 border-b border-neutral-300 dark:border-neutral-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-bold">
            HELSINKI &bull; EST. ADVISORY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            id="share-btn"
            title="Share page"
            className="px-2.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-1.5 cursor-pointer font-bold"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>SHARE</span>
              </>
            )}
          </button>

          <button
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            className="px-3 py-1.5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-all flex items-center gap-1.5 cursor-pointer font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-3.5 h-3.5" />
                <span>DARK</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5" />
                <span>LIGHT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Profile Showcase */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full max-w-xl">
        
        {/* Crisp B&W Editorial Portrait Image */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 border-2 border-black dark:border-white p-1 bg-white dark:bg-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]">
            <img
              src={sagarPhoto}
              alt="Sagar Tandon"
              className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black text-white dark:bg-white dark:text-black text-[9px] font-mono px-2 py-0.5 font-bold uppercase tracking-widest border border-black dark:border-white">
            FINLAND
          </div>
        </div>

        {/* Name & Title Summary */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans uppercase leading-none">
            Sagar Tandon
          </h1>
          
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
            Strategic Advisory &bull; Conscious Capital
          </p>

          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-sm">
            Specializing in Impact Investing, Investment Research, Private Markets, Accelerator Design & Nordic Market Entry.
          </p>

          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium">{ADVISORY_INFO.location}</span>
          </div>
        </div>

      </div>

    </header>
  );
};
