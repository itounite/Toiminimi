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
    <div className="min-h-screen bg-gradient-to-br from-amber-50/70 via-neutral-100 to-amber-100/40 dark:from-slate-950 dark:via-sky-950 dark:to-indigo-950 text-neutral-900 dark:text-sky-50 transition-colors duration-300 py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      
      {/* Black & White Artistic Nordic Line Art + Seasonal Background (Sunlight Radiation in Summer / Ice Frost in Winter) */}
      <NordicBackground theme={theme} />

      {/* Main Single Page Frame */}
      <main className="w-full max-w-3xl bg-white/95 dark:bg-slate-900/90 border-2 sm:border-4 border-neutral-900 dark:border-sky-300 shadow-[8px_8px_0px_0px_rgba(180,83,9,0.3)] dark:shadow-[8px_8px_0px_0px_rgba(56,189,248,0.7)] p-5 sm:p-10 space-y-10 relative z-10 overflow-hidden transition-all duration-300 backdrop-blur-sm">
        
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

