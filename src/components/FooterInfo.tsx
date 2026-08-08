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
    <footer className="w-full pt-8 pb-2 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-900 dark:text-neutral-100 space-y-4">
      
      {/* Registry Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        {/* Business ID Card */}
        <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <Building2 className="w-4 h-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400 font-semibold tracking-wider">
                {t.footerBizId}
              </span>
              <span className="font-semibold tabular-nums text-sm text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                {ADVISORY_INFO.businessId}
              </span>
            </div>
          </div>

          <button
            onClick={copyBusinessId}
            title="Copy Business ID"
            id="copy-biz-id-btn"
            className="px-2.5 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all flex items-center gap-1 shrink-0 cursor-pointer font-medium text-[11px] shadow-sm"
          >
            {copiedId ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-60" />
                <span>{t.copy}</span>
              </>
            )}
          </button>
        </div>

        {/* YTJ Registration Card */}
        <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <ShieldCheck className="w-4 h-4 shrink-0 text-neutral-500 dark:text-neutral-400" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400 font-semibold tracking-wider">
                {t.footerYtjLabel}
              </span>
              <span className="font-semibold text-xs text-neutral-900 dark:text-neutral-100 truncate">
                {t.footerYtjValue}
              </span>
            </div>
          </div>

          <a
            href={ADVISORY_INFO.ytjUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="ytj-registry-link"
            className="px-2.5 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all flex items-center gap-1 shrink-0 font-medium text-[11px] shadow-sm"
          >
            <span>{t.footerVerify}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="pt-3 text-center text-[11px] text-neutral-500 dark:text-neutral-400 font-sans tracking-wide">
        &copy; {new Date().getFullYear()} Sagar Tandon Advisory &bull; {t.footerCopyright} &bull; {t.locationText}
      </div>
    </footer>
  );
};
