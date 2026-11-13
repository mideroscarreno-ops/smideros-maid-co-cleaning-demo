import { useState } from 'react';
import { ChevronDown, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { QuoteSection } from '../components/QuoteSection';
import {
  BUSINESS_INFO,
  CLEANING_EXPERIENCE_STEPS,
  FAQS,
  HERO_MEDIA,
  PREP_TIPS,
  QUOTE_FACTORS,
  REVIEW_THEMES,
  WHY_MAID_CO,
} from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface PageNavProps {
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function OurApproachPage({ onNavigate }: PageNavProps) {
  return (
    <div>
      <section className="border-b border-[#303A35]/10 bg-[#FAF7F0] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Our Cleaning Approach
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
                Consistent Checklists. Thoughtful Care.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#303A35]/80">
                Every space deserves dependable standards rather than rushed shortcuts. Maid Co Cleaning pairs structured checklists and professional cleaning supplies with flexible scheduling and clear communication.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/quote')}
                className="mt-7 inline-flex min-h-[46px] items-center bg-[#526B5C] px-7 py-3 text-sm font-semibold text-white hover:bg-[#303A35]"
              >
                Request a Free Cleaning Quote
              </button>
            </div>
            <div className="lg:col-span-6">
              <EditorialImage
                src={HERO_MEDIA.editorial.src}
                alt={HERO_MEDIA.editorial.alt}
                aspectClassName="aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl font-medium text-[#303A35]">
            How We Approach Every Visit
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_MAID_CO.map((item, idx) => (
              <div key={item.title} className="border border-[#303A35]/10 bg-[#FAF7F0] p-7">
                <span className="font-mono text-xs tabular-nums text-[#9F5A46]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-medium text-[#303A35]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#303A35]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#303A35]/10 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-medium text-[#303A35]">
                Three Clear Steps
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#303A35]/75">
                Requesting a quote starts a direct conversation with our team—we confirm your scope, pricing, and schedule together before any appointment is booked.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {CLEANING_EXPERIENCE_STEPS.map((s) => (
                <div key={s.step} className="border border-[#303A35]/10 p-5">
                  <span className="font-mono text-xs font-semibold text-[#9F5A46]">
                    {s.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-medium text-[#303A35]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#303A35]/75">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 border border-[#303A35]/10 bg-[#DCE6DC]/30 p-7 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-[#303A35]">
              Preparing Your Space Before Service
            </h2>
            <p className="mt-2 text-sm text-[#303A35]/80">
              Helpful steps to keep pets, valuables, and documents safe during your appointment:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {PREP_TIPS.map((tip) => (
                <div key={tip.label} className="bg-[#FFFFFF] p-5">
                  <h3 className="font-display text-lg font-medium text-[#526B5C]">
                    {tip.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#303A35]/80">
                    {tip.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutPage({ onNavigate }: PageNavProps) {
  return (
    <div>
      <section className="border-b border-[#303A35]/10 bg-[#FAF7F0] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
              About Maid Co Cleaning
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
              Family-Owned Care for Oklahoma Homes & Workplaces.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#303A35]/80">
              Maid Co Cleaning is a family-owned cleaning company anchored in Tulsa with service channels supporting Northeast and Central Oklahoma. Our focus is simple: deliver thorough, reliable cleaning with clear communication so clients can spend more time enjoying their lives and spaces.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EditorialImage
                src={HERO_MEDIA.main.src}
                alt={HERO_MEDIA.main.alt}
                aspectClassName="aspect-[16/10]"
              />
            </div>
            <div className="flex flex-col justify-between border border-[#303A35]/12 bg-[#FFFFFF] p-7 sm:p-9 lg:col-span-5">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-medium text-[#303A35]">
                  What Defines Our Service
                </h2>
                <ul className="space-y-3 text-sm leading-relaxed text-[#303A35]/80">
                  <li>Family-owned accountability and attentive service.</li>
                  <li>Detailed room-by-room checklists tailored to each property.</li>
                  <li>Professional cleaning supplies brought to every job.</li>
                  <li>Flexible weekly, biweekly, monthly, and one-time scheduling.</li>
                  <li>Residential, Airbnb, move-in/move-out, commercial, and post-construction expertise.</li>
                </ul>
              </div>
              <div className="mt-8 border-t border-[#303A35]/10 pt-5">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="inline-flex min-h-[44px] w-full items-center justify-center bg-[#526B5C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#303A35]"
                >
                  Request a Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ReviewsPage({ onNavigate }: PageNavProps) {
  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
            Client Feedback
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
            Client Feedback & Review Themes
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
            Rather than displaying unverified numbers or fabricated testimonials, this redesign highlights the core feedback themes published on Maid Co Cleaning’s homepage and links directly to their live official site for current Google reviews.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REVIEW_THEMES.map((theme, idx) => (
            <div
              key={theme.category}
              className="border border-[#303A35]/12 bg-[#FFFFFF] p-7 sm:p-9"
            >
              <span className="font-mono text-xs tabular-nums text-[#9F5A46]">
                0{idx + 1}
              </span>
              <h2 className="mt-2 font-display text-2xl font-medium text-[#303A35]">
                {theme.category}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#303A35]/80">
                {theme.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-[#303A35]/12 bg-[#DCE6DC]/40 p-6 sm:p-8">
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-medium text-[#303A35]">
              View Live Customer Reviews
            </h2>
            <p className="mt-1 text-sm text-[#303A35]/80">
              Visit Maid Co Cleaning’s official website to view their active Google review feed and current rating count.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={BUSINESS_INFO.originalWebsite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 border border-[#303A35]/20 bg-[#FFFFFF] px-5 py-2.5 text-sm font-semibold text-[#303A35] hover:border-[#526B5C]"
            >
              <span>Visit maidcocleaningservices.com</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/quote')}
              className="inline-flex min-h-[44px] items-center bg-[#526B5C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#303A35]"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqsPage({ onNavigate }: PageNavProps) {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
          Frequently Asked Questions
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
          Helpful Answers Before You Book
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
          Everything you need to know about quotes, service frequencies, Oklahoma coverage areas, and preparing your space.
        </p>

        <div className="mt-10 divide-y divide-[#303A35]/12 border-y border-[#303A35]/12 bg-[#FFFFFF]">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#FAF7F0]/70"
                >
                  <div>
                    <span className="block text-[11px] font-semibold text-[#526B5C] uppercase">
                      {faq.category}
                    </span>
                    <span className="mt-1 block font-display text-lg font-medium text-[#303A35] sm:text-xl">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#526B5C] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#303A35]/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pricing Factors Summary */}
        <div className="mt-14 border border-[#303A35]/12 bg-[#FFFFFF] p-7 sm:p-9">
          <h2 className="font-display text-2xl font-medium text-[#303A35]">
            What Goes Into Your Cleaning Quote?
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {QUOTE_FACTORS.map((f) => (
              <div key={f.title} className="text-sm">
                <strong className="font-semibold text-[#303A35]">{f.title}: </strong>
                <span className="text-[#303A35]/75">{f.detail}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/quote')}
            className="mt-6 inline-flex min-h-[44px] items-center bg-[#526B5C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#303A35]"
          >
            Request My Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export function ContactPage({ onNavigate }: PageNavProps) {
  const [activeRegion, setActiveRegion] = useState<'tulsa' | 'okc'>('tulsa');
  const activePhone =
    activeRegion === 'tulsa' ? BUSINESS_INFO.phones.tulsa : BUSINESS_INFO.phones.okc;

  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
            Contact Maid Co Cleaning
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#303A35]/80">
            Reach our team directly by phone or email to ask about service availability, discuss a commercial or Airbnb turnover plan, or request a free cleaning quote.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Regional Phone Selector & Direct Links */}
          <div className="border border-[#303A35]/12 bg-[#FFFFFF] p-7 sm:p-10 lg:col-span-7">
            <h2 className="font-display text-2xl font-medium text-[#303A35]">
              Select Your Regional Phone Line
            </h2>
            <p className="mt-2 text-sm text-[#303A35]/75">
              Choose Tulsa & Northeast Oklahoma or Oklahoma City & Central Oklahoma for direct click-to-call.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setActiveRegion('tulsa')}
                className={`min-h-[48px] border px-4 py-3 text-left text-xs font-semibold transition-colors ${
                  activeRegion === 'tulsa'
                    ? 'border-[#526B5C] bg-[#526B5C] text-white'
                    : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35]'
                }`}
              >
                Tulsa & Northeast Oklahoma
              </button>
              <button
                type="button"
                onClick={() => setActiveRegion('okc')}
                className={`min-h-[48px] border px-4 py-3 text-left text-xs font-semibold transition-colors ${
                  activeRegion === 'okc'
                    ? 'border-[#526B5C] bg-[#526B5C] text-white'
                    : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35]'
                }`}
              >
                Oklahoma City & Central Oklahoma
              </button>
            </div>

            <div className="mt-6 border border-[#303A35]/10 bg-[#FAF7F0] p-6">
              <p className="text-xs font-semibold text-[#526B5C] uppercase">
                {activePhone.region}
              </p>
              <a
                href={activePhone.href}
                className="mt-2 inline-flex items-center gap-3 text-2xl font-semibold tabular-nums text-[#303A35] hover:text-[#526B5C] sm:text-3xl"
              >
                <Phone className="h-5 w-5 text-[#526B5C]" aria-hidden="true" />
                <span>{activePhone.display}</span>
              </a>
              <p className="mt-2 text-xs text-[#303A35]/70">{activePhone.note}</p>
            </div>

            <div className="mt-6 grid gap-6 border-t border-[#303A35]/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-[#526B5C] uppercase">
                  Primary Published Email
                </p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#303A35] underline underline-offset-4 break-all hover:text-[#526B5C]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#526B5C]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#526B5C] uppercase">
                  Published Office Address
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-sm text-[#303A35]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#526B5C]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps & Shortcuts */}
          <div className="flex flex-col justify-between border border-[#303A35]/12 bg-[#DCE6DC]/40 p-7 sm:p-10 lg:col-span-5">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-[#303A35]">
                What Happens Next
              </h2>
              <p className="text-sm leading-relaxed text-[#303A35]/80">
                When you reach out, Maid Co Cleaning reviews your cleaning service, property size, and location to confirm coverage for your exact address and prepare a personalized quote.
              </p>
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="flex min-h-[46px] w-full items-center justify-center bg-[#526B5C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#303A35]"
                >
                  Request a Free Quote
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/service-areas')}
                  className="flex min-h-[46px] w-full items-center justify-center border border-[#303A35]/20 bg-[#FFFFFF] px-6 py-3 text-sm font-semibold text-[#303A35] hover:border-[#526B5C]"
                >
                  Check Service Areas & Counties
                </button>
              </div>
            </div>

            <p className="mt-8 border-t border-[#303A35]/10 pt-4 text-xs text-[#303A35]/70">
              Tulsa: {BUSINESS_INFO.phones.tulsa.display} · Oklahoma City: {BUSINESS_INFO.phones.okc.display}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuotePage({
  initialService,
  onNavigate,
}: {
  initialService?: ServiceSlug | 'not-sure';
  onNavigate: (path: RoutePath) => void;
}) {
  return (
    <div className="bg-[#FAF7F0] pb-16">
      <QuoteSection initialService={initialService} onNavigate={onNavigate} />
    </div>
  );
}

export function LegalPage({
  type,
  onNavigate,
}: {
  type: 'privacy' | 'terms';
  onNavigate: (path: RoutePath) => void;
}) {
  const isPrivacy = type === 'privacy';
  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
          Redesign Information Notice
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-[#303A35] sm:text-4xl">
          {isPrivacy ? 'Privacy Policy Information' : 'Terms & Conditions Information'}
        </h1>
        <div className="mt-6 space-y-4 border border-[#303A35]/12 bg-[#FFFFFF] p-7 text-sm leading-relaxed text-[#303A35]/80 sm:p-10">
          <p>
            This website is an independent UX/UI redesign concept created by S.Mideros Agency to showcase an improved digital experience for Maid Co Cleaning. It does not collect, store, or transmit personal information to external servers.
          </p>
          <p>
            In this redesign, service quote communications and optional promotional SMS/call consent are intentionally separated so customers can request a cleaning estimate without opting into marketing messages.
          </p>
          <p>
            For Maid Co Cleaning’s official published Privacy Policy and Terms & Conditions, please visit{' '}
            <a
              href={BUSINESS_INFO.originalWebsite}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#526B5C] underline underline-offset-4"
            >
              maidcocleaningservices.com
            </a>{' '}
            or contact{' '}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="font-semibold text-[#526B5C] underline underline-offset-4"
            >
              {BUSINESS_INFO.email}
            </a>
            .
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('/quote')}
              className="inline-flex min-h-[42px] items-center bg-[#526B5C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#303A35]"
            >
              Return to Quote Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
