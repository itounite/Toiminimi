import React from 'react';
import { X, ExternalLink, Check, Bookmark } from 'lucide-react';
import { NEWSLETTERS } from '../data/advisoryData';
import { LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface NewsletterModalProps {
  lang: LanguageMode;
  newsletterId: string | null;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ lang, newsletterId, onClose }) => {
  if (!newsletterId) return null;

  const newsletter = NEWSLETTERS.find((n) => n.id === newsletterId);
  if (!newsletter) return null;

  const t = getTranslation(lang);
  const localizedNews = (t.newsletters as Record<string, typeof t.newsletters.idex>)[newsletter.id];
  const title = localizedNews?.title || newsletter.title;
  const subtitle = localizedNews?.subtitle || newsletter.subtitle;
  const description = localizedNews?.description || newsletter.description;
  const topics = localizedNews?.topics || newsletter.topics;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl p-6 font-sans">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium block">{t.newsletterSubstackTag}</span>
            <h2 className="font-mono font-semibold text-lg leading-snug">{title}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-newsletter-modal"
            className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subtitle */}
        <div className="mb-4 text-xs font-mono font-medium uppercase tracking-wide px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300">
          {subtitle}
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Topics Covered */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase font-semibold mb-2 flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
            <Bookmark className="w-3.5 h-3.5 opacity-60" />
            <span>{t.newsletterKeyThemes}</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {topics.map((topic, i) => (
              <span
                key={i}
                className="text-xs font-mono px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 flex items-center gap-1"
              >
                <Check className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Substack Action Button */}
        <a
          href={newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <span>{t.newsletterSubscribeBtn}</span>
          <ExternalLink className="w-4 h-4 opacity-70" />
        </a>

      </div>
    </div>
  );
};
