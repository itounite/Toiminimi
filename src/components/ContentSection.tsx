import React, { useState } from 'react';
import { ExternalLink, Sparkles, Compass, Lightbulb, Landmark, ArrowUpRight, CheckCircle2, Globe, Users } from 'lucide-react';
import { ADVISORY_INFO, NEWSLETTERS } from '../data/advisoryData';

interface ContentSectionProps {
  onOpenNewsletter: (id: string) => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ onOpenNewsletter }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);

  return (
    <div className="space-y-10 text-neutral-900 dark:text-neutral-100 font-sans">
      
      {/* 1. Core Practice Overview */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-2">
          <Landmark className="w-4 h-4 text-black dark:text-white" />
          <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-white">
            01 &bull; Strategic Practice Overview
          </h2>
        </div>

        <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
          <strong className="font-bold text-black dark:text-white">Sagar Tandon Advisory</strong> (Business ID: <span className="font-mono font-bold tabular-nums">{ADVISORY_INFO.businessId}</span>) is a Helsinki-based strategic advisory practice specializing in impact investing, investment research, private markets, accelerator design, Nordic market entry, and conscious finance.
        </p>

        {/* Specialization Pills Grid */}
        <div className="pt-2">
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
            Core Competencies &amp; Focus Areas:
          </span>
          <div className="flex flex-wrap gap-2">
            {ADVISORY_INFO.specializations.map((spec, index) => {
              const isSelected = selectedSpecialization === spec;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedSpecialization(isSelected ? null : spec)}
                  className={`text-xs font-mono px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 font-bold ${
                    isSelected
                      ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white'
                  }`}
                >
                  <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'opacity-100' : 'opacity-40'}`} />
                  <span>{spec}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Governance, Advisory & Ecosystem Mandates */}
      <section className="space-y-5">
        <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-2">
          <Compass className="w-4 h-4 text-black dark:text-white" />
          <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-white">
            02 &bull; Governance, Advisory &amp; Ecosystem Mandates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVISORY_INFO.roles.map((group, idx) => (
            <div
              key={idx}
              className="p-4 border-2 border-black dark:border-white bg-white dark:bg-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-black dark:text-white uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-800 pb-1.5 mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 opacity-70" />
                    {group.category}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-normal">
                    {group.entities.length} {group.entities.length === 1 ? 'ROLE' : 'ROLES'}
                  </span>
                </div>

                <ul className="space-y-2">
                  {group.entities.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs sm:text-sm font-sans">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-black dark:text-white hover:underline group"
                      >
                        <span>{item.name}</span>
                        {item.location && (
                          <span className="text-[11px] font-mono font-normal text-neutral-500 dark:text-neutral-400">
                            ({item.location})
                          </span>
                        )}
                        <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline" />
                      </a>
                      {item.note && (
                        <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono italic">
                          {item.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Upstream Institute Research Initiative */}
      <section className="p-5 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-900 space-y-3.5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white">
            <Lightbulb className="w-4 h-4 text-black dark:text-white" />
            <span>Research Initiative &bull; Think Tank</span>
          </div>

          <a
            href={ADVISORY_INFO.researchInitiative.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-[11px] font-bold uppercase transition-all flex items-center gap-1"
          >
            <span>Visit Website</span>
            <Globe className="w-3.5 h-3.5" />
          </a>
        </div>

        <div>
          <a
            href={ADVISORY_INFO.researchInitiative.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-black dark:text-white tracking-tight hover:underline"
          >
            <span>{ADVISORY_INFO.researchInitiative.name}</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
          {ADVISORY_INFO.researchInitiative.description}
        </p>

        <div className="pt-2 border-t border-neutral-300 dark:border-neutral-700">
          <span className="text-[11px] font-mono font-bold uppercase text-neutral-500 dark:text-neutral-400 block mb-1.5">
            Guidance &amp; Philosophical Framework:
          </span>
          <div className="flex flex-wrap gap-2">
            {ADVISORY_INFO.researchInitiative.guidanceMentors.map((m, idx) => (
              <a
                key={idx}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-3 py-1 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-1 font-bold"
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
        <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-black dark:text-white" />
            <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-black dark:text-white">
              04 &bull; Research &amp; Writing (Substack)
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold">
            2 PUBLICATIONS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          Sagar serves clients including First Followers and EIT Community New European Bauhaus. For First Followers, he authors two specialized research newsletters:
        </p>

        <div className="grid grid-cols-1 gap-4 pt-1">
          {NEWSLETTERS.map((newsletter, index) => (
            <div
              key={newsletter.id}
              className="p-4 sm:p-5 border-2 border-black dark:border-white bg-white dark:bg-black space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
                    ({index === 0 ? 'a' : 'b'})
                  </span>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black dark:text-white group-hover:underline">
                      {newsletter.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold uppercase text-neutral-500 dark:text-neutral-400">
                      {newsletter.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenNewsletter(newsletter.id)}
                  id={`open-newsletter-${newsletter.id}`}
                  className="px-3 py-1.5 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-mono text-xs font-bold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {newsletter.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {newsletter.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
