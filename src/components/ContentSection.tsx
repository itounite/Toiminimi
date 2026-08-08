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
    <div className="space-y-10 text-neutral-900 dark:text-sky-100 font-sans">
      
      {/* 1. Core Practice Overview */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b-2 border-black dark:border-sky-300 pb-2">
          <Landmark className="w-4 h-4 text-black dark:text-sky-300" />
          <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-sky-300">
            {t.sec1Header}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-neutral-800 dark:text-sky-100 leading-relaxed font-normal">
          <strong className="font-bold text-black dark:text-white">{t.sec1Text1}</strong> ({t.sec1BusinessIdLabel}: <span className="font-mono font-bold tabular-nums text-black dark:text-sky-200">{ADVISORY_INFO.businessId}</span>) {t.sec1Text2}
        </p>

        {/* Specialization Pills Grid */}
        <div className="pt-2">
          <span className="text-[11px] font-mono text-neutral-500 dark:text-sky-300 uppercase tracking-wider block mb-2 font-semibold">
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
                  className={`text-xs font-mono px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 font-bold ${
                    isSelected
                      ? 'bg-black text-white dark:bg-sky-400 dark:text-slate-950 border-black dark:border-sky-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]'
                      : 'bg-amber-50/80 dark:bg-sky-950/80 text-neutral-800 dark:text-sky-200 border-neutral-300 dark:border-sky-800 hover:border-black dark:hover:border-sky-300'
                  }`}
                >
                  <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'opacity-100' : 'opacity-40'}`} />
                  <span>{localizedLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Governance, Advisory & Ecosystem Mandates */}
      <section className="space-y-5">
        <div className="flex items-center gap-2 border-b-2 border-black dark:border-sky-300 pb-2">
          <Compass className="w-4 h-4 text-black dark:text-sky-300" />
          <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-sky-300">
            {t.sec2Header}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVISORY_INFO.roles.map((group, idx) => {
            const localizedCategory = (t.roleCategories as Record<string, string>)[group.category] || group.category;
            return (
              <div
                key={idx}
                className="p-4 border-2 border-black dark:border-sky-300 bg-white dark:bg-slate-950/90 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(56,189,248,0.8)] flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-black dark:text-sky-100 uppercase tracking-wider border-b border-neutral-200 dark:border-sky-800/80 pb-1.5 mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 opacity-70" />
                      {localizedCategory}
                    </span>
                    <span className="text-[10px] text-neutral-500 dark:text-sky-300 font-normal">
                      {group.entities.length} {group.entities.length === 1 ? t.roleSingle : t.rolePlural}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {group.entities.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-sm font-sans">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-black dark:text-sky-100 hover:underline group"
                        >
                          <span>{item.name}</span>
                          {item.location && (
                            <span className="text-[11px] font-mono font-normal text-neutral-500 dark:text-sky-300">
                              ({item.location === 'Finland' && lang === 'fi' ? 'Suomi' : item.location})
                            </span>
                          )}
                          <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline text-black dark:text-sky-300" />
                        </a>
                        {item.note && (
                          <span className="block text-[11px] text-neutral-500 dark:text-sky-300 font-mono italic">
                            {lang === 'fi' && item.note === 'Strategic Informal Advisor'
                              ? 'Epävirallinen strateginen neuvonantaja'
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
      <section className="p-5 border-2 border-black dark:border-sky-300 bg-amber-50/60 dark:bg-slate-950/90 space-y-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(56,189,248,0.8)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-sky-300">
            <Lightbulb className="w-4 h-4 text-black dark:text-sky-300 shrink-0" />
            <span>{t.sec3Tag}</span>
          </div>

          {/* Two Action Buttons: Website & White Paper */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={ADVISORY_INFO.researchInitiative.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border-2 border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.sec3VisitWeb}</span>
            </a>

            <a
              href={ADVISORY_INFO.researchInitiative.whitePaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border-2 border-black dark:border-sky-300 bg-emerald-100 dark:bg-sky-950 text-emerald-950 dark:text-sky-100 hover:bg-emerald-900 hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(56,189,248,0.8)]"
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
            className="group inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-black dark:text-sky-100 tracking-tight hover:underline"
          >
            <span>{ADVISORY_INFO.researchInitiative.name}</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-neutral-800 dark:text-sky-100 leading-relaxed font-sans">
          {t.researchInitiative.description}
        </p>

        <div className="pt-2 border-t border-neutral-300 dark:border-sky-800">
          <span className="text-[11px] font-mono font-bold uppercase text-neutral-500 dark:text-sky-300 block mb-1.5">
            {t.sec3GuidanceLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {ADVISORY_INFO.researchInitiative.guidanceMentors.map((m, idx) => (
              <a
                key={idx}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-3 py-1 border border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 transition-all flex items-center gap-1 font-bold"
              >
                <span>{m.name}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Research Publications Suite (Substacks) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black dark:border-sky-300 pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-black dark:text-sky-300" />
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-sky-300">
              {t.sec4Header}
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase bg-black text-white dark:bg-sky-400 dark:text-slate-950 px-2 py-0.5 font-bold">
            {t.sec4Tag}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 dark:text-sky-200">
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
                className="p-4 sm:p-5 border-2 border-black dark:border-sky-300 bg-white dark:bg-slate-950/90 space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(56,189,248,0.8)] group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm bg-black text-white dark:bg-sky-400 dark:text-slate-950 px-2 py-0.5">
                      ({index === 0 ? 'a' : 'b'})
                    </span>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-black dark:text-sky-100 group-hover:underline">
                        {title}
                      </h3>
                      <p className="text-xs font-mono font-semibold uppercase text-neutral-500 dark:text-sky-300">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenNewsletter(newsletter.id)}
                    id={`open-newsletter-${newsletter.id}`}
                    className="px-3 py-1.5 border border-black dark:border-sky-300 bg-white dark:bg-slate-900 text-black dark:text-sky-100 hover:bg-black hover:text-white dark:hover:bg-sky-400 dark:hover:text-slate-950 font-mono text-xs font-bold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>{t.explore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-neutral-800 dark:text-sky-100 font-sans leading-relaxed">
                  {description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topics.map((tp, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-sky-950 border border-neutral-300 dark:border-sky-800 text-neutral-800 dark:text-sky-200"
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

