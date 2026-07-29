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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-950 text-black dark:text-sky-100 border-2 border-black dark:border-sky-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(56,189,248,0.8)] p-6 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black dark:border-sky-300 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-black dark:text-sky-300" />
            <h2 className="font-mono font-bold text-lg uppercase tracking-wider text-black dark:text-sky-300">{t.contactTitle}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-contact-modal"
            className="p-1 border border-black dark:border-sky-300 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Email Copy Box */}
        <div className="mb-5 p-3 bg-amber-50/50 dark:bg-sky-950/80 border border-black dark:border-sky-800 flex items-center justify-between gap-2 font-mono text-xs sm:text-sm">
          <div className="truncate">
            <span className="text-neutral-500 dark:text-sky-300 block text-[10px] uppercase">{t.contactDirectEmail}</span>
            <span className="font-bold select-all text-black dark:text-sky-100">{ADVISORY_INFO.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-2.5 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all flex items-center gap-1 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-xs">{t.copy}</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Quick Mail Form */}
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label className="block font-mono text-xs uppercase mb-1 font-semibold dark:text-sky-200">{t.contactSubjectLabel}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.contactSubjectPlaceholder}
              className="w-full p-2.5 bg-white dark:bg-slate-900 border border-black dark:border-sky-300 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-sky-300 text-black dark:text-sky-100"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase mb-1 font-semibold dark:text-sky-200">{t.contactMessageLabel}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder={t.contactMessagePlaceholder}
              className="w-full p-2.5 bg-white dark:bg-slate-900 border border-black dark:border-sky-300 text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-sky-300 text-black dark:text-sky-100 resize-none"
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-black text-white dark:bg-sky-400 dark:text-slate-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.contactSendBtn}</span>
            </button>

            <a
              href={`mailto:${ADVISORY_INFO.email}`}
              className="py-2.5 px-3 border border-black dark:border-sky-300 text-xs font-mono flex items-center gap-1 hover:bg-neutral-100 dark:hover:bg-slate-900 transition-colors text-black dark:text-sky-100"
            >
              <span>{t.contactMailApp}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};

