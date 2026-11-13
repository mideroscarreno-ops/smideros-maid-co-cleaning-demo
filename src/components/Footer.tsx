import { BUSINESS_INFO, SERVICES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface FooterProps {
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const linkClass =
    'text-sm text-[#FAF7F0]/80 transition-colors hover:text-[#FFFFFF] text-left';

  return (
    <footer className="border-t border-[#303A35]/15 bg-[#303A35] text-[#FAF7F0]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="font-display text-2xl font-medium tracking-tight text-[#FFFFFF]"
              >
                {BUSINESS_INFO.name}
              </button>
              <p className="mt-2 text-sm text-[#DCE6DC]">
                {BUSINESS_INFO.tagline}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#FAF7F0]/75">
                Family-owned residential, short-term rental, commercial, and post-construction cleaning serving communities in Tulsa and Central Oklahoma.
              </p>
            </div>

            <div className="space-y-3 border-t border-[#FAF7F0]/12 pt-5 text-sm">
              <div>
                <span className="block text-xs text-[#DCE6DC]/80">Published Office Address</span>
                <span className="mt-0.5 block text-[#FAF7F0]">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <span className="block text-xs text-[#DCE6DC]/80">Tulsa</span>
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="mt-0.5 inline-block font-medium tabular-nums text-[#FFFFFF] hover:underline"
                  >
                    {BUSINESS_INFO.phones.tulsa.display}
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-[#DCE6DC]/80">Oklahoma City</span>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="mt-0.5 inline-block font-medium tabular-nums text-[#FFFFFF] hover:underline"
                  >
                    {BUSINESS_INFO.phones.okc.display}
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-xs text-[#DCE6DC]/80">Email</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="mt-0.5 inline-block text-[#FFFFFF] hover:underline break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCE6DC] uppercase">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className={linkClass}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCE6DC] uppercase">
              Company & Coverage
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('/our-approach')} className={linkClass}>
                  Our Cleaning Approach
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/service-areas')} className={linkClass}>
                  Service Areas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/about')} className={linkClass}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/reviews')} className={linkClass}>
                  Reviews & Feedback
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/faqs')} className={linkClass}>
                  FAQs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/contact')} className={linkClass}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Quote & Legal Column */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div>
              <h2 className="font-sans text-xs font-semibold tracking-wider text-[#DCE6DC] uppercase">
                Start Here
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#FAF7F0]/75">
                Every space is unique. Request a free, no-obligation quote tailored to your rooms and schedule.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/quote')}
                className="mt-5 inline-flex min-h-[42px] items-center justify-center bg-[#526B5C] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#DCE6DC] hover:text-[#303A35]"
              >
                Get a Free Quote
              </button>
            </div>

            <div className="space-y-2 border-t border-[#FAF7F0]/12 pt-4">
              <button type="button" onClick={() => onNavigate('/privacy')} className={`block ${linkClass}`}>
                Privacy Policy
              </button>
              <button type="button" onClick={() => onNavigate('/terms')} className={`block ${linkClass}`}>
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Discreet Redesign Disclosure */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[#FAF7F0]/12 pt-8 text-xs text-[#FAF7F0]/65 sm:flex-row sm:items-center sm:justify-between">
          <p>{BUSINESS_INFO.agencyDisclosure}</p>
          <p>
            Official business website:{' '}
            <a
              href={BUSINESS_INFO.originalWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-[#DCE6DC] underline underline-offset-4 hover:text-white"
            >
              maidcocleaningservices.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
