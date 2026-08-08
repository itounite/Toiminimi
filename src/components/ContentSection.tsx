import React, { useState } from 'react';
import { ExternalLink, Sparkles, Compass, Lightbulb, Landmark, ArrowUpRight, CheckCircle2, Globe, Users, FileText } from 'lucide-react';
import { ADVISORY_INFO, NEWSLETTERS } from '../data/advisoryData';
import { LanguageMode } from '../types';
import { getTranslation } from '../data/translations';

interface ContentSectionProps {
  lang: LanguageMode;
  onOpenNewsletter: (id: string) => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ lang, onOpenNewsletter }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const t = getTranslation(lang);

  return (
    <div className="space-y-10 text-neutral-900 dark:text-neutral-100 font-sans">
      
      {/* 1. Core Practice Overview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500">01 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>{t.sec1Header}</span>
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/60 font-medium">
            HELSINKI, FI
          </span>
        </div>

        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
          <strong className="font-semibold text-neutral-900 dark:text-white">{t.sec1Text1}</strong> ({t.sec1BusinessIdLabel}: <span className="font-mono font-medium tabular-nums text-neutral-900 dark:text-neutral-200">{ADVISORY_INFO.businessId}</span>) {t.sec1Text2}
        </p>

        {/* Specialization Pills Grid */}
        <div className="pt-2">
          <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest block mb-2.5 font-semibold">
            {t.sec1FocusLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {ADVISORY_INFO.specializations.map((specKey, index) => {
              const localizedLabel = (t.specializations as Record<string, string>)[specKey] || specKey;
              const isSelected = selectedSpecialization === specKey;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedSpecialization(isSelected ? null : specKey)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-medium ${
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100 shadow-xs'
                      : 'bg-neutral-50/80 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'opacity-100' : 'opacity-30'}`} />
                  <span>{localizedLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Governance, Advisory & Ecosystem Mandates */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500">02 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>{t.sec2Header}</span>
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/60 font-medium">
            PORTFOLIO
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVISORY_INFO.roles.map((group, idx) => {
            const localizedCategory = (t.roleCategories as Record<string, string>)[group.category] || group.category;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 flex flex-col justify-between space-y-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3.5">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      {localizedCategory}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono font-normal">
                      [{group.entities.length}]
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {group.entities.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-sm font-sans">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
                        >
                          <span className="underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 group-hover:decoration-neutral-900 dark:group-hover:decoration-white transition-colors">
                            {item.name}
                          </span>
                          {item.location && (
                            <span className="text-[10px] font-mono font-normal text-neutral-500 dark:text-neutral-400">
                              ({lang === 'fi' ? (item.location === 'Finland' ? 'Suomi' : item.location === 'Italy' ? 'Italia' : item.location === 'Sweden' ? 'Ruotsi' : item.location) : item.location})
                            </span>
                          )}
                          <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline" />
                        </a>
                        {item.note && (
                          <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                            &rarr; {lang === 'fi'
                              ? item.note === 'Strategic Informal Advisor'
                                ? 'Epävirallinen strateginen neuvonantaja'
                                : item.note === 'Developed - Vantaa Innovation Activator, Finland'
                                ? 'Kehitetty - Vantaa Innovation Activator, Suomi'
                                : item.note
                              : item.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Upstream Institute Research Initiative */}
      <section className="p-5 sm:p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3.5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            <span className="text-neutral-400 dark:text-neutral-500 font-bold">03 //</span>
            <Lightbulb className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
            <span>{t.sec3Tag}</span>
          </div>

          {/* Two Action Buttons: Website & White Paper */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={ADVISORY_INFO.researchInitiative.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-mono text-xs font-semibold uppercase transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>{t.sec3VisitWeb}</span>
            </a>

            <a
              href={ADVISORY_INFO.researchInitiative.whitePaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-mono text-xs font-semibold uppercase transition-all flex items-center gap-1.5 shadow-xs hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.sec3WhitePaper}</span>
            </a>
          </div>
        </div>

        <div>
          <a
            href={ADVISORY_INFO.researchInitiative.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <span>{ADVISORY_INFO.researchInitiative.name}</span>
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
          {t.researchInitiative.description}
        </p>

        <div className="pt-3.5 border-t border-neutral-200 dark:border-neutral-800">
          <span className="text-[10px] font-mono font-semibold uppercase text-neutral-500 dark:text-neutral-400 block mb-2 tracking-widest">
            {t.sec3GuidanceLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {ADVISORY_INFO.researchInitiative.guidanceMentors.map((m, idx) => (
              <a
                key={idx}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex items-center gap-1 font-medium"
              >
                <span>{m.name}</span>
                <ExternalLink className="w-3 h-3 opacity-40" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Research Publications Suite (Substacks) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500">04 //</span>
            <h2 className="font-mono text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>{t.sec4Header}</span>
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700/60 font-medium">
            PUBLICATIONS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
          {t.sec4Intro}
        </p>

        <div className="grid grid-cols-1 gap-4 pt-1">
          {NEWSLETTERS.map((newsletter, index) => {
            const localizedNews = (t.newsletters as Record<string, typeof t.newsletters.idex>)[newsletter.id];
            const title = localizedNews?.title || newsletter.title;
            const subtitle = localizedNews?.subtitle || newsletter.subtitle;
            const description = localizedNews?.description || newsletter.description;
            const topics = localizedNews?.topics || newsletter.topics;

            return (
              <div
                key={newsletter.id}
                className="p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-300 bg-neutral-200/70 dark:bg-neutral-800 px-2 py-0.5 rounded-md">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs font-mono font-medium uppercase text-neutral-500 dark:text-neutral-400 tracking-wider">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenNewsletter(newsletter.id)}
                    id={`open-newsletter-${newsletter.id}`}
                    className="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-mono text-xs font-semibold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <span>{t.explore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                  {description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topics.map((tp, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-400"
                    >
                      #{tp}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
