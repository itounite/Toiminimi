import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ContentSection } from './components/ContentSection';
import { ActionButtons } from './components/ActionButtons';
import { FooterInfo } from './components/FooterInfo';
import { ContactModal } from './components/ContactModal';
import { NewsletterModal } from './components/NewsletterModal';
import { NordicBackground } from './components/NordicBackground';
import { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sagar_advisory_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white transition-colors duration-200 py-6 sm:py-12 px-3 sm:px-6 flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      
      {/* Black & White Artistic Nordic Line Art Background */}
      <NordicBackground />

      {/* Main Single Page Frame */}
      <main className="w-full max-w-3xl bg-white dark:bg-black border-2 sm:border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-5 sm:p-10 space-y-10 relative z-10 overflow-hidden transition-all duration-200">
        
        {/* Header with Headshot & Profile */}
        <Header theme={theme} onToggleTheme={toggleTheme} />

        {/* Elevating Content Section */}
        <ContentSection onOpenNewsletter={(id) => setActiveNewsletter(id)} />

        {/* Action Buttons: IDEX, First Followers, Email */}
        <ActionButtons
          onOpenNewsletter={(id) => setActiveNewsletter(id)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Footer Info: Business ID, YTJ, Address */}
        <FooterInfo />

      </main>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <NewsletterModal
        newsletterId={activeNewsletter}
        onClose={() => setActiveNewsletter(null)}
      />

    </div>
  );
}
