import React from 'react';
import { Mail, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface ActionButtonsProps {
  lang: LanguageMode;
  onOpenNewsletter: (id: string) => void;
  onOpenContact: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  lang,
  onOpenNewsletter,
  onOpenContact,
}) => {
  const t = getTranslation(lang);

  return (
    <div className="w-full pt-4 pb-2 space-y-4">
      <div className="text-center font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        // {t.actionHeader}
      </div>

      {/* Primary Action Buttons Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        
        {/* IDEX Button */}
        <button
          onClick={() => onOpenNewsletter('idex')}
          id="btn-idex"
          className="w-full py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/90 text-neutral-900 dark:text-neutral-100 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
        >
          <Layers className="w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform group-hover:scale-110" />
          <span>IDEX</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>

        {/* First Followers Button */}
        <button
          onClick={() => onOpenNewsletter('first-followers')}
          id="btn-first-followers"
          className="w-full py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/90 text-neutral-900 dark:text-neutral-100 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
        >
          <BookOpen className="w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform group-hover:scale-110" />
          <span>First Followers</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>

        {/* Email Contact Button */}
        <button
          onClick={onOpenContact}
          id="btn-email"
          className="w-full py-3 px-4 rounded-xl border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
        >
          <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>{t.btnDirectEmail}</span>
        </button>

      </div>
    </div>
  );
};
