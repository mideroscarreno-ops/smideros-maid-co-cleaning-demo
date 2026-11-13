import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PATHWAYS, SERVICES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';
import { EditorialImage } from './EditorialImage';

interface FindPerfectCleanProps {
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function FindPerfectClean({ onNavigate }: FindPerfectCleanProps) {
  const [selectedId, setSelectedId] = useState<'home' | 'moving' | 'rental' | 'business'>('home');
  const activePathway = PATHWAYS.find((p) => p.id === selectedId) ?? PATHWAYS[0];

  const primaryRecService =
    SERVICES.find((s) => s.slug === activePathway.recommendations[0].serviceSlug) ?? SERVICES[0];

  return (
    <section
      aria-labelledby="perfect-clean-heading"
      className="border-y border-[#303A35]/10 bg-[#DCE6DC]/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
            Guided Service Selection
          </p>
          <h2
            id="perfect-clean-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl lg:text-[42px] lg:leading-[1.12]"
          >
            Not Sure Where to Start? Find Your Perfect Clean.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
            Choose what best describes your space right now to compare recommended services and explore the right scope before requesting a quote.
          </p>
        </div>

        {/* 4 Interactive Customer Pathway Buttons */}
        <div
          role="tablist"
          aria-label="Customer cleaning needs"
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PATHWAYS.map((pathway, idx) => {
            const isActive = pathway.id === selectedId;
            return (
              <button
                key={pathway.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedId(pathway.id)}
                className={`flex min-h-[76px] flex-col justify-between border p-5 text-left transition-all duration-200 ${
                  isActive
                    ? 'border-[#526B5C] bg-[#526B5C] text-white'
                    : 'border-[#303A35]/12 bg-[#FFFFFF] text-[#303A35] hover:border-[#526B5C]/50'
                }`}
              >
                <span
                  className={`font-mono text-xs tabular-nums ${
                    isActive ? 'text-[#DCE6DC]' : 'text-[#526B5C]'
                  }`}
                >
                  0{idx + 1}
                </span>
                <span className="mt-2 font-display text-lg font-medium leading-snug">
                  {pathway.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Panel */}
        <div
          role="tabpanel"
          className="mt-6 grid items-stretch border border-[#303A35]/10 bg-[#FFFFFF] lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
            <div>
              <p className="text-xs font-medium text-[#9F5A46]">
                {activePathway.questionPrompt}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-[#303A35] sm:text-3xl">
                {activePathway.label}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
                {activePathway.explanation}
              </p>

              <div className="mt-8 space-y-4 border-t border-[#303A35]/10 pt-6">
                {activePathway.recommendations.map((rec) => (
                  <div
                    key={rec.serviceSlug}
                    className="flex flex-col gap-3 border border-[#303A35]/10 bg-[#FAF7F0] p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-1">
                      <h4 className="font-display text-xl font-medium text-[#303A35]">
                        {rec.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#303A35]/75">
                        {rec.rationale}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onNavigate(`/services/${rec.serviceSlug}`)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 border border-[#303A35]/20 bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#303A35] whitespace-nowrap transition-colors hover:border-[#526B5C] hover:text-[#526B5C]"
                      >
                        <span>View Scope</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/quote', rec.serviceSlug)}
                        className="inline-flex min-h-[40px] items-center bg-[#526B5C] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#303A35]"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-[#303A35]/65">
              Selecting a service above helps tailor your quote inquiry—our team confirms final scope and availability directly with you before any appointment is scheduled.
            </p>
          </div>

          <div className="lg:col-span-5">
            <EditorialImage
              src={primaryRecService.image}
              alt={primaryRecService.imageAlt}
              aspectClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
