import React from 'react';
import { ExternalLink, Building2, ShieldCheck, Copy, Check } from 'lucide-react';
import { ADVISORY_INFO } from '../data/advisoryData';
import { LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface FooterInfoProps {
  lang: LanguageMode;
}

export const FooterInfo: React.FC<FooterInfoProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = React.useState(false);
  const t = getTranslation(lang);

  const copyBusinessId = async () => {
    await navigator.clipboard.writeText(ADVISORY_INFO.businessId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <footer className="w-full pt-8 pb-4 border-t-2 border-black dark:border-sky-300 text-xs font-mono text-neutral-900 dark:text-sky-100 space-y-4">
      
      {/* Registry Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        {/* Business ID Card */}
        <div className="p-3 border border-black dark:border-sky-300 bg-amber-50/50 dark:bg-slate-950/90 flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]">
          <div className="flex items-center gap-2 min-w-0">
            <Building2 className="w-4 h-4 shrink-0 text-black dark:text-sky-300" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase text-neutral-500 dark:text-sky-300 font-bold tracking-wider">
                {t.footerBizId}
              </span>
              <span className="font-bold tabular-nums text-sm text-black dark:text-sky-100 whitespace-nowrap">
                {ADVISORY_INFO.businessId}
              </span>
            </div>
          </div>

          <button
            onClick={copyBusinessId}
            title="Copy Business ID"
            id="copy-biz-id-btn"
            className="px-2.5 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all flex items-center gap-1 shrink-0 cursor-pointer font-bold"
          >
            {copiedId ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px]">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">{t.copy}</span>
              </>
            )}
          </button>
        </div>

        {/* YTJ Registration Card */}
        <div className="p-3 border border-black dark:border-sky-300 bg-amber-50/50 dark:bg-slate-950/90 flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]">
          <div className="flex items-center gap-2 min-w-0">
            <ShieldCheck className="w-4 h-4 shrink-0 text-black dark:text-sky-300" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase text-neutral-500 dark:text-sky-300 font-bold tracking-wider">
                {t.footerYtjLabel}
              </span>
              <span className="font-bold text-xs text-black dark:text-sky-100 truncate">
                {t.footerYtjValue}
              </span>
            </div>
          </div>

          <a
            href={ADVISORY_INFO.ytjUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="ytj-registry-link"
            className="px-2.5 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all flex items-center gap-1 shrink-0 font-bold text-[11px]"
          >
            <span>{t.footerVerify}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="pt-2 text-center text-[11px] text-neutral-500 dark:text-sky-300 font-sans tracking-wide">
        &copy; {new Date().getFullYear()} Sagar Tandon Advisory &bull; {t.footerCopyright} &bull; {t.locationText}
      </div>
    </footer>
  );
};

