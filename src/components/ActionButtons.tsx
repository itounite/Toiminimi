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
    <div className="w-full pt-6 pb-2 space-y-4">
      <div className="text-center font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
        {t.actionHeader}
      </div>

      {/* Primary Action Buttons Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        
        {/* IDEX Button */}
        <button
          onClick={() => onOpenNewsletter('idex')}
          id="btn-idex"
          className="w-full py-3 px-4 border-2 border-black dark:border-sky-300 bg-white dark:bg-slate-950 text-black dark:text-sky-100 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(56,189,248,0.8)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer group"
        >
          <Layers className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>IDEX</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>

        {/* First Followers Button */}
        <button
          onClick={() => onOpenNewsletter('first-followers')}
          id="btn-first-followers"
          className="w-full py-3 px-4 border-2 border-black dark:border-sky-300 bg-white dark:bg-slate-950 text-black dark:text-sky-100 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(56,189,248,0.8)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer group"
        >
          <BookOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span>First Followers</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>

        {/* Email Contact Button */}
        <button
          onClick={onOpenContact}
          id="btn-email"
          className="w-full py-3 px-4 border-2 border-black dark:border-sky-300 bg-black text-white dark:bg-sky-400 dark:text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:opacity-90 transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(56,189,248,0.8)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer group"
        >
          <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>{t.btnDirectEmail}</span>
        </button>

      </div>
    </div>
  );
};

