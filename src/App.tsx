import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ContentSection } from './components/ContentSection';
import { ActionButtons } from './components/ActionButtons';
import { FooterInfo } from './components/FooterInfo';
import { ContactModal } from './components/ContactModal';
import { NewsletterModal } from './components/NewsletterModal';
import { NordicBackground } from './components/NordicBackground';
import { ThemeMode, LanguageMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sagar_advisory_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const [lang, setLang] = useState<LanguageMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sagar_advisory_lang');
      if (saved === 'en' || saved === 'fi') return saved;
    }
    return 'en';
  });

  const [activeNewsletter, setActiveNewsletter] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }

    localStorage.setItem('sagar_advisory_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('sagar_advisory_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fi' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0b0c0e] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      
      {/* Clean Minimal Background with Dot Pattern and Topographic accents */}
      <NordicBackground theme={theme} />

      {/* Main Single Page Frame */}
      <main className="w-full max-w-3xl bg-white dark:bg-[#121418] border border-neutral-200 dark:border-neutral-800 shadow-sm rounded-xl p-5 sm:p-10 space-y-10 relative z-10 transition-all duration-300">
        
        {/* Header with Headshot & Profile */}
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          lang={lang}
          onToggleLanguage={toggleLanguage}
        />

        {/* Elevating Content Section */}
        <ContentSection
          lang={lang}
          onOpenNewsletter={(id) => setActiveNewsletter(id)}
        />

        {/* Action Buttons: IDEX, First Followers, Email */}
        <ActionButtons
          lang={lang}
          onOpenNewsletter={(id) => setActiveNewsletter(id)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Footer Info: Business ID, YTJ, Address */}
        <FooterInfo lang={lang} />

      </main>

      {/* Modals */}
      <ContactModal
        lang={lang}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <NewsletterModal
        lang={lang}
        newsletterId={activeNewsletter}
        onClose={() => setActiveNewsletter(null)}
      />

    </div>
  );
}
