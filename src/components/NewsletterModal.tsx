import React from 'react';
import { X, ExternalLink, Sparkles, Check, Bookmark } from 'lucide-react';
import { NEWSLETTERS } from '../data/advisoryData';

interface NewsletterModalProps {
  newsletterId: string | null;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ newsletterId, onClose }) => {
  if (!newsletterId) return null;

  const newsletter = NEWSLETTERS.find((n) => n.id === newsletterId);
  if (!newsletter) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 font-sans">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-black dark:border-white pb-3 mb-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block">Substack Publication</span>
            <h2 className="font-mono font-bold text-lg leading-snug">{newsletter.title}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-newsletter-modal"
            className="p-1 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subtitle */}
        <div className="mb-4 text-xs font-mono font-semibold uppercase tracking-wide px-2 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
          {newsletter.subtitle}
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-5">
          {newsletter.description}
        </p>

        {/* Topics Covered */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase font-bold mb-2 flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Key Themes & Focus Areas</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {newsletter.topics.map((topic, i) => (
              <span
                key={i}
                className="text-xs font-mono px-2 py-1 border border-black dark:border-white bg-white dark:bg-black flex items-center gap-1"
              >
                <Check className="w-3 h-3 text-black dark:text-white" />
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
          className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
        >
          <span>Read & Subscribe on Substack</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
