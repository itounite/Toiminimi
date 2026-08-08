import React, { useState } from 'react';
import { X, Mail, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { ADVISORY_INFO } from '../data/advisoryData';
import { LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface ContactModalProps {
  lang: LanguageMode;
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ lang, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const t = getTranslation(lang);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(ADVISORY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${ADVISORY_INFO.email}?subject=${encodeURIComponent(
      subject || 'Advisory Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl p-6 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <h2 className="font-mono font-semibold text-base uppercase tracking-wider">{t.contactTitle}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-contact-modal"
            className="p-1 rounded text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Email Copy Box */}
        <div className="mb-5 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/80 flex items-center justify-between gap-2 font-mono text-xs sm:text-sm">
          <div className="truncate">
            <span className="text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase font-medium">{t.contactDirectEmail}</span>
            <span className="font-semibold select-all text-neutral-900 dark:text-neutral-100">{ADVISORY_INFO.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-2.5 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all flex items-center gap-1 cursor-pointer shrink-0 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-60" />
                <span className="text-xs">{t.copy}</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Quick Mail Form */}
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label className="block font-mono text-xs uppercase mb-1 font-medium text-neutral-700 dark:text-neutral-300">{t.contactSubjectLabel}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.contactSubjectPlaceholder}
              className="w-full p-2.5 rounded bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500 text-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase mb-1 font-medium text-neutral-700 dark:text-neutral-300">{t.contactMessageLabel}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder={t.contactMessagePlaceholder}
              className="w-full p-2.5 rounded bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500 text-neutral-900 dark:text-neutral-100 resize-none"
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{t.contactSendBtn}</span>
            </button>

            <a
              href={`mailto:${ADVISORY_INFO.email}`}
              className="py-2.5 px-3 rounded border border-neutral-300 dark:border-neutral-700 text-xs font-mono flex items-center gap-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200"
            >
              <span>{t.contactMailApp}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};
