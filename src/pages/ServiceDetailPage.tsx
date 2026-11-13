import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { BUSINESS_INFO, PREP_TIPS, QUOTE_FACTORS, SERVICES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface ServiceDetailPageProps {
  slug: ServiceSlug;
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === slug) ?? SERVICES[0];
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div>
      {/* Breadcrumb & Hero Split */}
      <section className="border-b border-[#303A35]/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-stretch lg:grid-cols-12">
            <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:col-span-6 lg:px-14 lg:py-20 xl:px-20">
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-[#526B5C] hover:text-[#303A35]"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to Home</span>
              </button>

              <p className="mt-6 text-xs font-medium text-[#526B5C]">
                <span className="font-mono tabular-nums">{service.index}</span>{' '}
                <span aria-hidden="true">·</span> Maid Co Cleaning Service
              </p>

              <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-5xl lg:leading-[1.08]">
                {service.name}
              </h1>

              <p className="mt-4 font-display text-xl italic text-[#526B5C]">
                {service.headline}
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
                {service.description}
              </p>

              {service.frequencyNote && (
                <p className="mt-4 text-sm font-medium text-[#303A35]">
                  {service.frequencyNote}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote', service.slug)}
                  className="inline-flex min-h-[46px] items-center bg-[#526B5C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#303A35]"
                >
                  Request a Free {service.shortName} Quote
                </button>
                <a
                  href={BUSINESS_INFO.phones.tulsa.href}
                  className="inline-flex min-h-[46px] items-center gap-2 border border-[#303A35]/20 bg-[#FFFFFF] px-5 py-3 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#526B5C]" aria-hidden="true" />
                  <span>Tulsa {BUSINESS_INFO.phones.tulsa.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src={service.image}
                alt={service.imageAlt}
                priority
                aspectClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Scope & Ideal For */}
      <section className="bg-[#FFFFFF] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Detailed Checklist Focus
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-[#303A35]">
                What Our Team Covers
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#303A35]/75">
                Every appointment is tailored to the exact rooms and priorities confirmed in your cleaning plan.
              </p>

              <div className="mt-8 space-y-6">
                {service.checklistGroups.map((group) => (
                  <div
                    key={group.area}
                    className="border border-[#303A35]/10 bg-[#FAF7F0] p-6 sm:p-8"
                  >
                    <h3 className="font-display text-xl font-medium text-[#303A35]">
                      {group.area}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#303A35]/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#526B5C]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="border border-[#303A35]/10 bg-[#DCE6DC]/35 p-6">
                <h3 className="font-display text-xl font-medium text-[#303A35]">
                  Ideal For
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#303A35]/85">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C88470]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#303A35]/10 bg-[#FAF7F0] p-6">
                <h3 className="font-display text-xl font-medium text-[#303A35]">
                  Before Your Visit
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#303A35]/75">
                  To help our team work smoothly and safely:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-[#303A35]/80">
                  {PREP_TIPS.map((tip) => (
                    <li key={tip.label}>
                      <strong className="text-[#303A35]">{tip.label}:</strong> {tip.detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#303A35]/10 bg-[#FFFFFF] p-6">
                <h3 className="font-display text-xl font-medium text-[#303A35]">
                  How Quotes Are Prepared
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#303A35]/75">
                  Free quotes are tailored around {QUOTE_FACTORS.slice(0, 4).map((f) => f.title.toLowerCase()).join(', ')}, and location availability.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/quote', service.slug)}
                  className="mt-4 flex min-h-[42px] w-full items-center justify-center bg-[#526B5C] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#303A35]"
                >
                  Start Free {service.shortName} Quote
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="border-t border-[#303A35]/10 bg-[#FAF7F0] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-2xl font-medium text-[#303A35]">
            Explore Other Services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((other) => (
              <button
                key={other.slug}
                type="button"
                onClick={() => onNavigate(`/services/${other.slug}`)}
                className="flex flex-col justify-between border border-[#303A35]/12 bg-[#FFFFFF] p-5 text-left transition-colors hover:border-[#526B5C]"
              >
                <div>
                  <span className="font-mono text-xs tabular-nums text-[#526B5C]">
                    {other.index}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-medium text-[#303A35]">
                    {other.name}
                  </h3>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#526B5C]">
                  Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
