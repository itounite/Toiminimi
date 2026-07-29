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
      <div className="relative w-full max-w-md bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black dark:border-white pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <h2 className="font-mono font-bold text-lg uppercase tracking-wider">{t.contactTitle}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-contact-modal"
            className="p-1 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Email Copy Box */}
        <div className="mb-5 p-3 bg-neutral-100 dark:bg-neutral-900 border border-black dark:border-white flex items-center justify-between gap-2 font-mono text-xs sm:text-sm">
          <div className="truncate">
            <span className="text-neutral-500 block text-[10px] uppercase">{t.contactDirectEmail}</span>
            <span className="font-bold select-all">{ADVISORY_INFO.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-2.5 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-1 cursor-pointer shrink-0"
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
            <label className="block font-mono text-xs uppercase mb-1 font-semibold">{t.contactSubjectLabel}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.contactSubjectPlaceholder}
              className="w-full p-2.5 bg-white dark:bg-neutral-950 border border-black dark:border-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase mb-1 font-semibold">{t.contactMessageLabel}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder={t.contactMessagePlaceholder}
              className="w-full p-2.5 bg-white dark:bg-neutral-950 border border-black dark:border-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.contactSendBtn}</span>
            </button>

            <a
              href={`mailto:${ADVISORY_INFO.email}`}
              className="py-2.5 px-3 border border-black dark:border-white text-xs font-mono flex items-center gap-1 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
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

