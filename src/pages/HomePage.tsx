import { ArrowRight, ExternalLink, MapPin, Phone } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { FindPerfectClean } from '../components/FindPerfectClean';
import { QuoteSection } from '../components/QuoteSection';
import {
  BUSINESS_INFO,
  CLEANING_EXPERIENCE_STEPS,
  HERO_MEDIA,
  PREP_TIPS,
  QUOTE_FACTORS,
  REVIEW_THEMES,
  SERVICE_COUNTIES,
  SERVICES,
  VALUE_PILLARS,
  WHY_MAID_CO,
} from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface HomePageProps {
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToServices = () => {
    const el = document.getElementById('services-directory');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* B. CINEMATIC LIFESTYLE HERO */}
      <section aria-labelledby="hero-heading" className="border-b border-[#303A35]/10 bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-[1440px] items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 lg:col-span-6 lg:px-14 lg:py-24 xl:px-20">
            <p className="text-xs font-medium tracking-wide text-[#526B5C]">
              Family-Owned <span aria-hidden="true">·</span> Detail-Focused{' '}
              <span aria-hidden="true">·</span> Proudly Serving Oklahoma
            </p>

            <h1
              id="hero-heading"
              className="mt-5 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl lg:text-[56px] lg:leading-[1.07]"
            >
              A Cleaner Home. A Lighter Life.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#303A35]/80 sm:text-lg">
              Thoughtful professional cleaning for homes, businesses, and guest-ready spaces across the communities we serve in Oklahoma.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate('/quote')}
                className="inline-flex min-h-[48px] items-center justify-center bg-[#526B5C] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#303A35]"
              >
                Get My Free Cleaning Quote
              </button>
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#303A35]/20 bg-[#FFFFFF] px-6 py-3.5 text-sm font-medium text-[#303A35] transition-colors duration-200 hover:border-[#526B5C] hover:text-[#526B5C]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-8 text-xs text-[#303A35]/65">
              More Life. Less Cleaning. Free, no-obligation quotes tailored to your space.
            </p>
          </div>

          <div className="lg:col-span-6">
            <EditorialImage
              src={HERO_MEDIA.main.src}
              alt={HERO_MEDIA.main.alt}
              priority
              aspectClassName="aspect-[16/10] lg:aspect-auto lg:h-full"
            />
          </div>
        </div>

        {/* Full-Width Regional & Schedule Strip below Hero */}
        <div className="border-t border-[#303A35]/10 bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-[#303A35]/10 px-4 sm:grid-cols-2 sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:divide-x lg:px-10">
            <a
              href={BUSINESS_INFO.phones.tulsa.href}
              className="flex flex-col justify-center py-4 sm:pr-6 transition-colors hover:bg-[#FAF7F0]/60"
            >
              <span className="text-[11px] font-semibold tracking-wider text-[#526B5C] uppercase">
                Tulsa & Northeast OK
              </span>
              <span className="mt-1 text-base font-semibold tabular-nums text-[#303A35]">
                {BUSINESS_INFO.phones.tulsa.display}
              </span>
            </a>

            <a
              href={BUSINESS_INFO.phones.okc.href}
              className="flex flex-col justify-center py-4 sm:pl-6 lg:px-6 transition-colors hover:bg-[#FAF7F0]/60"
            >
              <span className="text-[11px] font-semibold tracking-wider text-[#526B5C] uppercase">
                Oklahoma City & Central OK
              </span>
              <span className="mt-1 text-base font-semibold tabular-nums text-[#303A35]">
                {BUSINESS_INFO.phones.okc.display}
              </span>
            </a>

            <div className="flex flex-col justify-center py-4 sm:pr-6 lg:px-6">
              <span className="text-[11px] font-semibold tracking-wider text-[#526B5C] uppercase">
                Flexible Frequencies
              </span>
              <span className="mt-1 text-sm font-medium text-[#303A35]">
                Weekly · Biweekly · Monthly · One-Time
              </span>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/service-areas')}
              className="flex flex-col justify-center py-4 text-left sm:pl-6 transition-colors hover:bg-[#FAF7F0]/60"
            >
              <span className="text-[11px] font-semibold tracking-wider text-[#526B5C] uppercase">
                Published Coverage
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[#303A35]">
                <span>6 Oklahoma Counties</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#C88470]" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* C. THE VALUE OF A BEAUTIFULLY CLEAN SPACE */}
      <section aria-labelledby="value-heading" className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <EditorialImage
                src={HERO_MEDIA.editorial.src}
                alt={HERO_MEDIA.editorial.alt}
                aspectClassName="aspect-[4/3] lg:aspect-[4/4.3]"
              />
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                More Life. Less Cleaning.
              </p>
              <h2
                id="value-heading"
                className="mt-3 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl lg:text-[42px] lg:leading-[1.12]"
              >
                Your Time Is Valuable. Your Space Should Feel Wonderful.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#303A35]/80">
                A calm, well-kept space quietly changes how the rest of the day feels—whether you are returning home after work, welcoming weekend guests, handing keys to incoming tenants, or opening your office doors.
              </p>

              <div className="mt-10 grid gap-x-8 gap-y-6 border-t border-[#303A35]/10 pt-8 sm:grid-cols-2">
                {VALUE_PILLARS.map((pillar, idx) => (
                  <div key={pillar.title} className="space-y-1.5">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs tabular-nums text-[#9F5A46]">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-lg font-medium text-[#303A35]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#303A35]/75">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. SIX DIFFERENTIATED SERVICES */}
      <section
        id="services-directory"
        aria-labelledby="services-heading"
        className="border-t border-[#303A35]/10 bg-[#FFFFFF] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 border-b border-[#303A35]/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Six Specialized Cleaning Services
              </p>
              <h2
                id="services-heading"
                className="mt-2 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl lg:text-[42px]"
              >
                Thoughtful Care for Every Stage of Your Space
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#303A35]/75">
              From weekly residential routines to short-term rental turnovers and post-renovation dust removal.
            </p>
          </div>

          {/* Asymmetric Editorial Grid (No repetitive identical card clones) */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {SERVICES.map((service, index) => {
              const isFeatureWide = index === 0 || index === 3;
              return (
                <article
                  key={service.slug}
                  className={`group flex flex-col justify-between border border-[#303A35]/10 bg-[#FAF7F0] transition-colors duration-200 hover:border-[#526B5C]/45 ${
                    isFeatureWide ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <div>
                    <div className="overflow-hidden">
                      <EditorialImage
                        src={service.image}
                        alt={service.imageAlt}
                        aspectClassName={isFeatureWide ? 'aspect-[16/10]' : 'aspect-[4/3]'}
                        className="group-hover:[&_img]:scale-[1.02]"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-medium text-[#526B5C]">
                        <span className="font-mono tabular-nums">{service.index}</span>{' '}
                        <span aria-hidden="true">·</span> {service.name}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#303A35] sm:text-[26px] sm:leading-snug">
                        {service.headline}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#303A35]/80">
                        {service.summary}
                      </p>

                      <ul className="mt-5 grid gap-1.5 border-t border-[#303A35]/10 pt-4 text-xs text-[#303A35]/75 sm:grid-cols-2">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#C88470]" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#303A35]/10 px-6 py-4 sm:px-8">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/services/${service.slug}`)}
                      className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#526B5C] transition-colors hover:text-[#303A35]"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('/quote', service.slug)}
                      className="text-xs font-medium text-[#303A35]/70 underline underline-offset-4 hover:text-[#303A35]"
                    >
                      Free Quote
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNATURE FEATURE: FIND YOUR PERFECT CLEAN */}
      <FindPerfectClean onNavigate={onNavigate} />

      {/* WHY CHOOSE MAID CO + PREPARATION TIPS */}
      <section aria-labelledby="why-heading" className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Why Choose Maid Co
              </p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl"
              >
                Thoughtful Cleaning. The Details Make the Difference.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
                Dependable home and commercial care comes down to consistent checklists, professional supplies, and clear communication from start to finish.
              </p>

              {/* Helpful Customer Preparation Card */}
              <div className="mt-8 border border-[#303A35]/12 bg-[#FFFFFF] p-6">
                <h3 className="font-display text-xl font-medium text-[#303A35]">
                  Helpful Visit Preparation Tips
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#303A35]/75">
                  Before your cleaning appointment begins, we recommend taking a moment to secure:
                </p>
                <ul className="mt-4 space-y-3">
                  {PREP_TIPS.map((tip) => (
                    <li key={tip.label} className="border-t border-[#303A35]/8 pt-3 text-xs leading-relaxed">
                      <span className="font-semibold text-[#526B5C]">{tip.label}: </span>
                      <span className="text-[#303A35]/80">{tip.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7">
              {WHY_MAID_CO.map((strength, idx) => (
                <div
                  key={strength.title}
                  className="border-t border-[#303A35]/15 pt-5"
                >
                  <span className="font-mono text-xs tabular-nums text-[#9F5A46]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-[#303A35]">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#303A35]/75">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE CLEANING EXPERIENCE (3 STEPS) + PRICING TRANSPARENCY */}
      <section className="border-y border-[#303A35]/10 bg-[#FFFFFF] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          {/* 3-Step Experience */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
              The Cleaning Experience
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl">
              From First Inquiry to a Freshly Maintained Space
            </h2>
          </div>

          <div className="mt-10 grid gap-8 border-b border-[#303A35]/10 pb-16 lg:grid-cols-3">
            {CLEANING_EXPERIENCE_STEPS.map((item) => (
              <div key={item.step} className="bg-[#FAF7F0] p-7">
                <span className="font-mono text-sm font-semibold tabular-nums text-[#9F5A46]">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-[#303A35]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#303A35]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Transparency: What Goes Into Your Cleaning Quote? */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Pricing Transparency
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#303A35]">
                What Goes Into Your Cleaning Quote?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#303A35]/80">
                Every space is different. Tell us a little about yours, and our team can prepare a quote based on your cleaning needs—with no guesswork or rigid one-size pricing.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/quote')}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 bg-[#526B5C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#303A35]"
              >
                <span>Request My Free Quote</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {QUOTE_FACTORS.map((factor) => (
                <div
                  key={factor.title}
                  className="border border-[#303A35]/10 bg-[#FAF7F0] p-5"
                >
                  <h3 className="font-display text-lg font-medium text-[#303A35]">
                    {factor.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#303A35]/75">
                    {factor.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE PREVIEW */}
      <section aria-labelledby="coverage-heading" className="bg-[#FAF7F0] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Regional Service Coverage
              </p>
              <h2
                id="coverage-heading"
                className="mt-2 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl"
              >
                Serving Communities Across Northeast & Central Oklahoma
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#303A35]/80">
                With a physical office in Tulsa and dedicated regional phone channels for both Tulsa and Oklahoma City, Maid Co Cleaning serves residential and commercial clients across six published counties. Exact street coverage is always confirmed directly for your address.
              </p>

              <button
                type="button"
                onClick={() => onNavigate('/service-areas')}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 border border-[#303A35]/20 bg-[#FFFFFF] px-5 py-2.5 text-sm font-semibold text-[#303A35] transition-colors hover:border-[#526B5C] hover:text-[#526B5C]"
              >
                <MapPin className="h-4 w-4 text-[#526B5C]" aria-hidden="true" />
                <span>Explore Service Areas & ZIP Check</span>
              </button>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-[#303A35]/12 bg-[#FFFFFF] p-6">
                  <p className="text-xs font-semibold text-[#526B5C] uppercase">
                    Tulsa & Northeast Oklahoma
                  </p>
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="mt-2 inline-flex items-center gap-2 text-xl font-semibold tabular-nums text-[#303A35] hover:text-[#526B5C]"
                  >
                    <Phone className="h-4 w-4 text-[#526B5C]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phones.tulsa.display}</span>
                  </a>
                  <p className="mt-2 text-xs text-[#303A35]/70">
                    Tulsa County · Creek County
                  </p>
                </div>

                <div className="border border-[#303A35]/12 bg-[#FFFFFF] p-6">
                  <p className="text-xs font-semibold text-[#526B5C] uppercase">
                    Oklahoma City & Central Oklahoma
                  </p>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="mt-2 inline-flex items-center gap-2 text-xl font-semibold tabular-nums text-[#303A35] hover:text-[#526B5C]"
                  >
                    <Phone className="h-4 w-4 text-[#526B5C]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phones.okc.display}</span>
                  </a>
                  <p className="mt-2 text-xs text-[#303A35]/70">
                    Oklahoma · Canadian · Cleveland · Pottawatomie Counties
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border border-[#303A35]/10 bg-[#FFFFFF] p-5 sm:grid-cols-3">
                {SERVICE_COUNTIES.map((c) => (
                  <div key={c.county} className="py-1.5">
                    <span className="block text-sm font-medium text-[#303A35]">
                      {c.county}
                    </span>
                    <span className="block text-[11px] text-[#303A35]/60">
                      {c.region.split(' & ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC CLIENT FEEDBACK & REVIEW THEMES */}
      <section
        aria-labelledby="reviews-heading"
        className="border-t border-[#303A35]/10 bg-[#526B5C] py-20 text-[#FAF7F0] lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 border-b border-[#FAF7F0]/15 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#DCE6DC] uppercase">
                Client Feedback Themes
              </p>
              <h2
                id="reviews-heading"
                className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
              >
                What Oklahoma Clients Value Most
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/reviews')}
                className="text-sm font-medium text-[#DCE6DC] underline underline-offset-4 hover:text-white"
              >
                View Reviews & Attribution Notes
              </button>
              <a
                href={BUSINESS_INFO.originalWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FAF7F0]/80 hover:text-white"
              >
                <span>Live reviews on official site</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEW_THEMES.map((theme) => (
              <div
                key={theme.category}
                className="border border-[#FAF7F0]/15 bg-[#303A35]/35 p-6"
              >
                <h3 className="font-display text-xl font-medium text-white">
                  {theme.category}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#FAF7F0]/85">
                  {theme.summary}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-[#DCE6DC]/80">
            Note: To avoid fabricating quotes or unverified counts, this redesign concept summarizes published client review themes and links directly to Maid Co Cleaning’s official Google-connected website for live customer ratings.
          </p>
        </div>
      </section>

      {/* EMBEDDED QUOTE SECTION */}
      <QuoteSection onNavigate={onNavigate} embedded />
    </div>
  );
}
