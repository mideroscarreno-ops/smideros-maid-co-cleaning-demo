import { useState, type FormEvent } from 'react';
import { ArrowRight, Info, MapPin, Phone, Search } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_COUNTIES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface ServiceAreasPageProps {
  onNavigate: (path: RoutePath, preselectService?: ServiceSlug | 'not-sure') => void;
}

export function ServiceAreasPage({ onNavigate }: ServiceAreasPageProps) {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'tulsa' | 'okc'>('all');
  const [lookupInput, setLookupInput] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    query: string;
    regionHint: 'tulsa' | 'okc' | 'verify';
    message: string;
  } | null>(null);

  const visibleCounties = SERVICE_COUNTIES.filter((item) => {
    if (selectedRegion === 'tulsa') return item.region.includes('Tulsa');
    if (selectedRegion === 'okc') return item.region.includes('Oklahoma City');
    return true;
  });

  const handleLookup = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = lookupInput.trim();
    if (!cleaned) return;

    const lower = cleaned.toLowerCase();
    const zipMatch = cleaned.match(/\b(7[34]\d{3})\b/);

    if (lower.includes('tulsa') || (zipMatch && zipMatch[1].startsWith('74'))) {
      setLookupResult({
        query: cleaned,
        regionHint: 'tulsa',
        message:
          'Your inquiry appears to align with Tulsa & Northeast Oklahoma (74xxx / Tulsa area). Because availability varies by street and route schedule, please confirm your exact address with our Tulsa team or include it in a free quote request.',
      });
    } else if (
      lower.includes('oklahoma city') ||
      lower.includes('okc') ||
      (zipMatch && zipMatch[1].startsWith('73'))
    ) {
      setLookupResult({
        query: cleaned,
        regionHint: 'okc',
        message:
          'Your inquiry appears to align with Oklahoma City & Central Oklahoma (73xxx / OKC metro). Exact street availability must be confirmed directly by our team—call our Oklahoma City line or submit your address in a quote request.',
      });
    } else {
      setLookupResult({
        query: cleaned,
        regionHint: 'verify',
        message:
          'Maid Co Cleaning publishes coverage across Tulsa, Creek, Oklahoma, Canadian, Cleveland, and Pottawatomie counties, and availability is always confirmed for your exact street address. Reach out by phone or submit a quote inquiry to verify coverage at your location.',
      });
    }
  };

  return (
    <div>
      {/* Header Band */}
      <section className="border-b border-[#303A35]/10 bg-[#FAF7F0] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
            Oklahoma Service Coverage
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-[#303A35] sm:text-5xl">
            Local Cleaning, Wherever We Serve You.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#303A35]/80">
            Maid Co Cleaning serves communities across Northeast and Central Oklahoma, supported by a physical Tulsa office and dedicated regional contact numbers for both Tulsa and Oklahoma City.
          </p>

          {/* Interactive City / ZIP Inquiry Field */}
          <div className="mt-10 max-w-2xl border border-[#303A35]/12 bg-[#FFFFFF] p-6 sm:p-8">
            <h2 className="font-display text-xl font-medium text-[#303A35]">
              Check Your City or ZIP Code
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-[#303A35]/75">
              Enter your Oklahoma city or 5-digit ZIP code to find the right regional contact channel. Service availability must always be confirmed for your exact street address.
            </p>

            <form onSubmit={handleLookup} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="area-lookup" className="sr-only">
                City or ZIP Code
              </label>
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#303A35]/45"
                  aria-hidden="true"
                />
                <input
                  id="area-lookup"
                  type="text"
                  value={lookupInput}
                  onChange={(e) => setLookupInput(e.target.value)}
                  placeholder="Enter city or ZIP (e.g., Tulsa, 74137, Oklahoma City, 73102)"
                  className="w-full border border-[#303A35]/20 bg-[#FAF7F0] py-3 pl-10 pr-4 text-sm text-[#303A35] placeholder:text-[#303A35]/45 focus:border-[#526B5C] focus:bg-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="min-h-[46px] bg-[#526B5C] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#303A35]"
              >
                Check Region
              </button>
            </form>

            {lookupResult && (
              <div className="mt-5 border-t border-[#303A35]/10 pt-4 text-sm">
                <p className="font-medium text-[#303A35]">
                  Inquiry for “{lookupResult.query}”
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#303A35]/80">
                  {lookupResult.message}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {lookupResult.regionHint !== 'okc' && (
                    <a
                      href={BUSINESS_INFO.phones.tulsa.href}
                      className="inline-flex items-center gap-1.5 bg-[#DCE6DC]/60 px-3.5 py-2 text-xs font-semibold text-[#303A35] hover:bg-[#DCE6DC]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#526B5C]" aria-hidden="true" />
                      Call Tulsa {BUSINESS_INFO.phones.tulsa.display}
                    </a>
                  )}
                  {lookupResult.regionHint !== 'tulsa' && (
                    <a
                      href={BUSINESS_INFO.phones.okc.href}
                      className="inline-flex items-center gap-1.5 bg-[#DCE6DC]/60 px-3.5 py-2 text-xs font-semibold text-[#303A35] hover:bg-[#DCE6DC]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#526B5C]" aria-hidden="true" />
                      Call OKC {BUSINESS_INFO.phones.okc.display}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onNavigate('/quote')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#526B5C] underline underline-offset-4"
                  >
                    <span>Confirm via Quote Form</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Two Visually Distinct Regional Pathways */}
      <section className="bg-[#FFFFFF] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tulsa & Northeast Oklahoma */}
            <div className="border border-[#303A35]/12 bg-[#FAF7F0] p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Regional Pathway 01
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-[#303A35]">
                Tulsa & Northeast Oklahoma
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#303A35]/80">
                Anchored by Maid Co Cleaning’s published Tulsa office address, serving homes, rentals, offices, and renovation projects across Northeast Oklahoma coverage zones.
              </p>

              <div className="mt-6 space-y-3 border-t border-[#303A35]/10 pt-5 text-sm">
                <div>
                  <span className="block text-xs text-[#303A35]/60">Tulsa Contact Phone</span>
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="mt-1 inline-flex items-center gap-2 text-xl font-semibold tabular-nums text-[#526B5C] hover:text-[#303A35]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phones.tulsa.display}</span>
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-[#303A35]/60">Published Tulsa Office Address</span>
                  <span className="mt-1 inline-flex items-center gap-2 text-sm text-[#303A35]">
                    <MapPin className="h-4 w-4 text-[#526B5C]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.address}</span>
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-[#303A35]/60">Published Counties in Region</span>
                  <span className="mt-1 block font-medium text-[#303A35]">
                    Tulsa County · Creek County
                  </span>
                </div>
              </div>
            </div>

            {/* Oklahoma City & Central Oklahoma */}
            <div className="border border-[#303A35]/12 bg-[#DCE6DC]/30 p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
                Regional Pathway 02
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-[#303A35]">
                Oklahoma City & Central Oklahoma
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#303A35]/80">
                Dedicated Central Oklahoma phone support for residential, Airbnb, commercial, and post-construction cleaning inquiries across the Central Oklahoma counties listed below.
              </p>

              <div className="mt-6 space-y-3 border-t border-[#303A35]/10 pt-5 text-sm">
                <div>
                  <span className="block text-xs text-[#303A35]/60">Oklahoma City Contact Phone</span>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="mt-1 inline-flex items-center gap-2 text-xl font-semibold tabular-nums text-[#526B5C] hover:text-[#303A35]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phones.okc.display}</span>
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-[#303A35]/60">Published Email Channel</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="mt-1 inline-block text-sm font-medium text-[#303A35] underline underline-offset-4"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-[#303A35]/60">Published Counties in Region</span>
                  <span className="mt-1 block font-medium text-[#303A35]">
                    Oklahoma County · Canadian County · Cleveland County · Pottawatomie County
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Published Counties Filterable List */}
          <div className="mt-16 border-t border-[#303A35]/10 pt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-medium text-[#303A35]">
                  Published Coverage Counties
                </h2>
                <p className="mt-1 text-xs text-[#303A35]/70">
                  Listing a county does not guarantee coverage for every address within it; exact address verification is provided during quote review.
                </p>
              </div>

              <div className="inline-flex border border-[#303A35]/15 bg-[#FAF7F0] p-1 self-start">
                {(
                  [
                    { id: 'all', label: 'All (6)' },
                    { id: 'tulsa', label: 'Tulsa & NE' },
                    { id: 'okc', label: 'OKC & Central' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedRegion(tab.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedRegion === tab.id
                        ? 'bg-[#526B5C] text-white'
                        : 'text-[#303A35]/75 hover:text-[#303A35]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCounties.map((item) => (
                <div
                  key={item.county}
                  className="border border-[#303A35]/10 bg-[#FAF7F0] p-5"
                >
                  <p className="text-[11px] font-semibold text-[#526B5C] uppercase">
                    {item.region}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-medium text-[#303A35]">
                    {item.county}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#303A35]/75">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-[#FAF7F0] p-4 text-xs text-[#303A35]/80">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#526B5C]" aria-hidden="true" />
              <p>
                Need to confirm a specific neighborhood or street? Request a free quote with your city and ZIP code, or call our Tulsa or Oklahoma City phone line directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
