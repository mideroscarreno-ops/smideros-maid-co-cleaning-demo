import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (callRef.current && !callRef.current.contains(e.target as Node)) {
        setCallOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setCallOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (path: RoutePath) => {
    setServicesOpen(false);
    setCallOpen(false);
    setMobileOpen(false);
    onNavigate(path);
  };

  const isServiceRoute = currentPath.startsWith('/services');

  const navLinkClass = (active: boolean) =>
    `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
      active
        ? 'text-[#303A35] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-[#C88470]'
        : 'text-[#303A35]/75 hover:text-[#303A35] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#526B5C] hover:after:w-full after:transition-all after:duration-200'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#303A35]/10 bg-[#FAF7F0]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[74px] lg:gap-8 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="font-display text-xl font-medium tracking-tight text-[#303A35] whitespace-nowrap shrink-0 sm:text-[22px]"
        >
          Maid Co Cleaning
        </a>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex xl:gap-7"
        >
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className={navLinkClass(currentPath === '/')}
          >
            Home
          </a>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                isServiceRoute
                  ? 'text-[#303A35] underline decoration-[#C88470] decoration-[1.5px] underline-offset-4'
                  : 'text-[#303A35]/75 hover:text-[#303A35]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-72 border border-[#303A35]/12 bg-[#FFFFFF] p-2 shadow-lg"
              >
                <div className="px-3 py-2 text-[11px] font-semibold tracking-wider text-[#526B5C] uppercase">
                  Six Core Cleaning Services
                </div>
                {SERVICES.map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick(`/services/${service.slug}`)}
                    className={`flex w-full items-baseline justify-between px-3 py-2.5 text-left text-sm transition-colors ${
                      currentPath === `/services/${service.slug}`
                        ? 'bg-[#DCE6DC]/60 font-medium text-[#303A35]'
                        : 'text-[#303A35]/85 hover:bg-[#FAF7F0] hover:text-[#303A35]'
                    }`}
                  >
                    <span>{service.name}</span>
                    <span className="font-mono text-[11px] tabular-nums text-[#526B5C]">
                      {service.index}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#/our-approach"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/our-approach');
            }}
            className={navLinkClass(currentPath === '/our-approach')}
          >
            Our Approach
          </a>

          <a
            href="#/service-areas"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/service-areas');
            }}
            className={navLinkClass(currentPath === '/service-areas')}
          >
            Service Areas
          </a>

          <a
            href="#/about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/about');
            }}
            className={navLinkClass(currentPath === '/about')}
          >
            About
          </a>

          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className={navLinkClass(currentPath === '/contact')}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Call Our Team + Primary CTA */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <div ref={callRef} className="relative">
            <button
              type="button"
              aria-expanded={callOpen}
              onClick={() => setCallOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-[#526B5C] whitespace-nowrap shrink-0 transition-colors hover:text-[#303A35]"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Call Our Team</span>
            </button>

            {callOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-72 border border-[#303A35]/12 bg-[#FFFFFF] p-4 shadow-lg">
                <p className="text-xs font-medium text-[#303A35]/70">
                  Select your Oklahoma region
                </p>
                <div className="mt-3 space-y-2.5">
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="block border border-[#303A35]/10 bg-[#FAF7F0] p-3 transition-colors hover:border-[#526B5C]"
                  >
                    <span className="block text-xs font-medium text-[#526B5C]">
                      Tulsa & Northeast Oklahoma
                    </span>
                    <span className="mt-0.5 block text-base font-semibold tabular-nums text-[#303A35]">
                      {BUSINESS_INFO.phones.tulsa.display}
                    </span>
                  </a>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="block border border-[#303A35]/10 bg-[#FAF7F0] p-3 transition-colors hover:border-[#526B5C]"
                  >
                    <span className="block text-xs font-medium text-[#526B5C]">
                      Oklahoma City & Central Oklahoma
                    </span>
                    <span className="mt-0.5 block text-base font-semibold tabular-nums text-[#303A35]">
                      {BUSINESS_INFO.phones.okc.display}
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="inline-flex min-h-[40px] items-center justify-center bg-[#526B5C] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#303A35]"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="inline-flex min-h-[40px] items-center justify-center bg-[#526B5C] px-3.5 py-2 text-xs font-medium text-white whitespace-nowrap shrink-0"
          >
            Free Quote
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center text-[#303A35] transition-colors hover:bg-[#DCE6DC]/40"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#303A35]/10 bg-[#FAF7F0] px-4 py-6 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile" className="space-y-6">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handleLinkClick('/')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/our-approach')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                Our Approach
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/service-areas')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                Service Areas
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/about')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/reviews')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                Reviews
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/faqs')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                FAQs
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/contact')}
                className="block w-full py-2.5 text-left text-base font-medium text-[#303A35]"
              >
                Contact
              </button>
            </div>

            <div className="border-t border-[#303A35]/10 pt-4">
              <p className="mb-2 text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Cleaning Services
              </p>
              <div className="grid grid-cols-1 gap-1">
                {SERVICES.map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => handleLinkClick(`/services/${service.slug}`)}
                    className="flex items-center justify-between py-2.5 text-left text-sm text-[#303A35]/90"
                  >
                    <span>{service.name}</span>
                    <span className="font-mono text-xs tabular-nums text-[#526B5C]">
                      {service.index}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#303A35]/10 pt-4 space-y-2.5">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Call Our Team
              </p>
              <a
                href={BUSINESS_INFO.phones.tulsa.href}
                className="flex items-center justify-between border border-[#303A35]/12 bg-[#FFFFFF] px-4 py-3 text-sm"
              >
                <span className="text-[#303A35]/80">Tulsa</span>
                <span className="font-semibold tabular-nums text-[#303A35]">
                  {BUSINESS_INFO.phones.tulsa.display}
                </span>
              </a>
              <a
                href={BUSINESS_INFO.phones.okc.href}
                className="flex items-center justify-between border border-[#303A35]/12 bg-[#FFFFFF] px-4 py-3 text-sm"
              >
                <span className="text-[#303A35]/80">Oklahoma City</span>
                <span className="font-semibold tabular-nums text-[#303A35]">
                  {BUSINESS_INFO.phones.okc.display}
                </span>
              </a>
              <button
                type="button"
                onClick={() => handleLinkClick('/quote')}
                className="mt-2 flex min-h-[44px] w-full items-center justify-center bg-[#526B5C] px-6 py-3 text-sm font-medium text-white"
              >
                Get My Free Cleaning Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
