import { useEffect, useState, type FormEvent } from 'react';
import { Check, ChevronLeft, ChevronRight, Info, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/maidCoData';
import type { RoutePath, ServiceSlug } from '../types';

interface QuoteSectionProps {
  initialService?: ServiceSlug | 'not-sure';
  onNavigate: (path: RoutePath) => void;
  embedded?: boolean;
}

type QuoteMode = 'quick' | 'detailed';
type ServiceChoice = ServiceSlug | 'not-sure';

const SERVICE_OPTIONS: { value: ServiceChoice; label: string }[] = [
  ...SERVICES.map((s) => ({ value: s.slug as ServiceChoice, label: s.name })),
  { value: 'not-sure', label: 'Not Sure Yet' },
];

export function QuoteSection({
  initialService = 'house-cleaning',
  onNavigate,
  embedded = false,
}: QuoteSectionProps) {
  const [mode, setMode] = useState<QuoteMode>('quick');

  // Quick Quote State
  const [quickFirstName, setQuickFirstName] = useState('');
  const [quickContactMethod, setQuickContactMethod] = useState<'email' | 'phone'>('email');
  const [quickContactValue, setQuickContactValue] = useState('');
  const [quickCityZip, setQuickCityZip] = useState('');
  const [quickService, setQuickService] = useState<ServiceChoice>(initialService);
  const [quickMessage, setQuickMessage] = useState('');
  const [quickMarketingOptIn, setQuickMarketingOptIn] = useState(false);
  const [quickError, setQuickError] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // Detailed Quote State (5 Steps)
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [detService, setDetService] = useState<ServiceChoice>(initialService);
  // Dynamic property fields
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [sqFt, setSqFt] = useState('');
  const [frequency, setFrequency] = useState('Biweekly');
  const [priorities, setPriorities] = useState('');
  const [airbnbPropertyType, setAirbnbPropertyType] = useState('Single-Family Home');
  const [airbnbTurnoverFreq, setAirbnbTurnoverFreq] = useState('As Bookings Occur');
  const [airbnbExtras, setAirbnbExtras] = useState('');
  const [businessType, setBusinessType] = useState('Office');
  const [preferredCleanTime, setPreferredCleanTime] = useState('After Business Hours');
  const [postConType, setPostConType] = useState('Residential');
  const [postConScope, setPostConScope] = useState('Renovation / Remodel');
  const [postConTimeframe, setPostConTimeframe] = useState('');

  // Step 3: Location
  const [detCity, setDetCity] = useState('');
  const [detZip, setDetZip] = useState('');
  const [detStreet, setDetStreet] = useState('');

  // Step 4: Contact
  const [detFullName, setDetFullName] = useState('');
  const [detEmail, setDetEmail] = useState('');
  const [detPhone, setDetPhone] = useState('');
  const [detPreferredMethod, setDetPreferredMethod] = useState<'email' | 'phone'>('email');

  // Marketing consent (explicitly optional & unchecked by default)
  const [detMarketingOptIn, setDetMarketingOptIn] = useState(false);
  const [detError, setDetError] = useState('');
  const [detSubmitted, setDetSubmitted] = useState(false);

  useEffect(() => {
    setQuickService(initialService);
    setDetService(initialService);
  }, [initialService]);

  const selectedServiceLabel = (choice: ServiceChoice) =>
    SERVICE_OPTIONS.find((o) => o.value === choice)?.label ?? 'House Cleaning';

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const isValidPhone = (val: string) => val.replace(/\D/g, '').length >= 10;

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuickError('');

    if (!quickFirstName.trim()) {
      setQuickError('Please enter your first name.');
      return;
    }
    if (quickContactMethod === 'email' && !isValidEmail(quickContactValue)) {
      setQuickError('Please enter a valid email address.');
      return;
    }
    if (quickContactMethod === 'phone' && !isValidPhone(quickContactValue)) {
      setQuickError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!quickCityZip.trim()) {
      setQuickError('Please enter your Oklahoma city or ZIP code.');
      return;
    }

    setQuickSubmitted(true);
  };

  const validateDetailedStep = (targetStep: number): boolean => {
    setDetError('');
    if (step === 3 && targetStep > 3) {
      if (!detCity.trim() || !detZip.trim()) {
        setDetError('Please enter both your city and ZIP code so coverage can be reviewed.');
        return false;
      }
    }
    if (step === 4 && targetStep > 4) {
      if (!detFullName.trim()) {
        setDetError('Please enter your full name.');
        return false;
      }
      if (!isValidEmail(detEmail)) {
        setDetError('Please enter a valid email address.');
        return false;
      }
      if (detPreferredMethod === 'phone' && !isValidPhone(detPhone)) {
        setDetError('Please enter a valid 10-digit phone number for phone contact.');
        return false;
      }
    }
    return true;
  };

  const goToStep = (next: 1 | 2 | 3 | 4 | 5) => {
    if (next > step && !validateDetailedStep(next)) return;
    setDetError('');
    setStep(next);
  };

  const handleDetailedSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateDetailedStep(5)) return;
    setDetSubmitted(true);
  };

  const inputClass =
    'mt-1.5 w-full border border-[#303A35]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#303A35] placeholder:text-[#303A35]/45 transition-colors focus:border-[#526B5C] focus:outline-none';
  const labelClass = 'block text-xs font-semibold tracking-wide text-[#303A35]/85';

  const renderMarketingConsent = (
    checked: boolean,
    onChange: (val: boolean) => void,
    idPrefix: string
  ) => (
    <div className="space-y-3 border-t border-[#303A35]/10 pt-5">
      <div className="bg-[#FAF7F0] p-3.5 text-xs leading-relaxed text-[#303A35]/80">
        <strong className="font-semibold text-[#303A35]">Service Inquiry Communication:</strong>{' '}
        By requesting a quote, you allow Maid Co Cleaning to review your project details and reply directly regarding service availability, scope, and pricing.
      </div>

      <label
        htmlFor={`${idPrefix}-marketing`}
        className="flex cursor-pointer items-start gap-3 border border-[#303A35]/12 bg-[#FFFFFF] p-3.5 transition-colors hover:border-[#526B5C]/40"
      >
        <input
          id={`${idPrefix}-marketing`}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#526B5C]"
        />
        <span className="text-xs leading-relaxed text-[#303A35]/80">
          <span className="font-semibold text-[#303A35]">Optional:</span> Yes, I would like to receive occasional promotional offers and marketing messages by call or SMS. Consent is completely optional and is not required to request a free quote. See our{' '}
          <button
            type="button"
            onClick={() => onNavigate('/privacy')}
            className="font-medium text-[#526B5C] underline underline-offset-2 hover:text-[#303A35]"
          >
            Privacy Policy
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={() => onNavigate('/terms')}
            className="font-medium text-[#526B5C] underline underline-offset-2 hover:text-[#303A35]"
          >
            Terms & Conditions
          </button>
          .
        </span>
      </label>
    </div>
  );

  return (
    <section
      id="quote-experience"
      aria-labelledby="quote-heading"
      className={embedded ? 'py-20 lg:py-28' : 'py-12 lg:py-16'}
    >
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-[#303A35]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wider text-[#526B5C] uppercase">
              Free, No-Obligation Estimate
            </p>
            <h2
              id="quote-heading"
              className="mt-2 font-display text-3xl font-medium tracking-tight text-[#303A35] sm:text-4xl"
            >
              Request Your Cleaning Quote
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#303A35]/75">
              Choose a quick inquiry to start the conversation, or walk through our five-step detailed quote if you would like to share specific room and scheduling notes.
            </p>
          </div>

          {/* Segmented Pathway Switch */}
          <div
            role="tablist"
            aria-label="Quote form pathway"
            className="inline-flex border border-[#303A35]/15 bg-[#FFFFFF] p-1 self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'quick'}
              onClick={() => {
                setMode('quick');
                setQuickSubmitted(false);
              }}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                mode === 'quick'
                  ? 'bg-[#526B5C] text-white'
                  : 'text-[#303A35]/75 hover:text-[#303A35]'
              }`}
            >
              Quick Quote
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'detailed'}
              onClick={() => {
                setMode('detailed');
                setDetSubmitted(false);
              }}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                mode === 'detailed'
                  ? 'bg-[#526B5C] text-white'
                  : 'text-[#303A35]/75 hover:text-[#303A35]'
              }`}
            >
              Detailed Quote (5 Steps)
            </button>
          </div>
        </div>

        {/* Demonstration Disclosure */}
        <div className="mt-6 flex items-start gap-3 border border-[#303A35]/12 bg-[#DCE6DC]/35 px-4 py-3 text-xs leading-relaxed text-[#303A35]/85">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#526B5C]" aria-hidden="true" />
          <p>
            <strong>Redesign Concept Demonstration:</strong> Submitting this form previews your formatted quote summary locally and does not send a live inquiry or schedule an appointment. To contact Maid Co Cleaning directly, call{' '}
            <a href={BUSINESS_INFO.phones.tulsa.href} className="font-semibold underline">
              {BUSINESS_INFO.phones.tulsa.display}
            </a>{' '}
            (Tulsa) or{' '}
            <a href={BUSINESS_INFO.phones.okc.href} className="font-semibold underline">
              {BUSINESS_INFO.phones.okc.display}
            </a>{' '}
            (Oklahoma City), or email{' '}
            <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold underline">
              {BUSINESS_INFO.email}
            </a>
            .
          </p>
        </div>

        {/* QUICK QUOTE PATHWAY */}
        {mode === 'quick' && (
          <div className="mt-8 border border-[#303A35]/12 bg-[#FFFFFF] p-6 sm:p-10">
            {!quickSubmitted ? (
              <form onSubmit={handleQuickSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quick-first-name" className={labelClass}>
                      First Name <span className="text-[#9F5A46]">*</span>
                    </label>
                    <input
                      id="quick-first-name"
                      type="text"
                      required
                      value={quickFirstName}
                      onChange={(e) => setQuickFirstName(e.target.value)}
                      placeholder="Jordan"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="quick-service" className={labelClass}>
                      Cleaning Service <span className="text-[#9F5A46]">*</span>
                    </label>
                    <select
                      id="quick-service"
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value as ServiceChoice)}
                      className={inputClass}
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <span className={labelClass}>
                      Preferred Contact Method <span className="text-[#9F5A46]">*</span>
                    </span>
                    <div className="mt-1.5 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setQuickContactMethod('email');
                          setQuickContactValue('');
                        }}
                        className={`min-h-[42px] border px-3 py-2 text-xs font-semibold transition-colors ${
                          quickContactMethod === 'email'
                            ? 'border-[#526B5C] bg-[#DCE6DC]/50 text-[#303A35]'
                            : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35]/75'
                        }`}
                      >
                        Email
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setQuickContactMethod('phone');
                          setQuickContactValue('');
                        }}
                        className={`min-h-[42px] border px-3 py-2 text-xs font-semibold transition-colors ${
                          quickContactMethod === 'phone'
                            ? 'border-[#526B5C] bg-[#DCE6DC]/50 text-[#303A35]'
                            : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35]/75'
                        }`}
                      >
                        Phone
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quick-contact-value" className={labelClass}>
                      {quickContactMethod === 'email' ? 'Email Address' : 'Phone Number'}{' '}
                      <span className="text-[#9F5A46]">*</span>
                    </label>
                    <input
                      id="quick-contact-value"
                      type={quickContactMethod === 'email' ? 'email' : 'tel'}
                      required
                      value={quickContactValue}
                      onChange={(e) => setQuickContactValue(e.target.value)}
                      placeholder={
                        quickContactMethod === 'email' ? 'you@example.com' : '(918) 555-0140'
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quick-city-zip" className={labelClass}>
                    City or ZIP Code <span className="text-[#9F5A46]">*</span>
                  </label>
                  <input
                    id="quick-city-zip"
                    type="text"
                    required
                    value={quickCityZip}
                    onChange={(e) => setQuickCityZip(e.target.value)}
                    placeholder="e.g., Tulsa, OK or 74137"
                    className={inputClass}
                  />
                  <p className="mt-1.5 text-xs text-[#303A35]/65">
                    Service availability is confirmed directly for your exact street address.
                  </p>
                </div>

                <div>
                  <label htmlFor="quick-message" className={labelClass}>
                    Short Message <span className="font-normal text-[#303A35]/60">(Optional)</span>
                  </label>
                  <textarea
                    id="quick-message"
                    rows={3}
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="Share timing, property size, or cleaning priorities..."
                    className={inputClass}
                  />
                </div>

                {renderMarketingConsent(quickMarketingOptIn, setQuickMarketingOptIn, 'quick')}

                {quickError && (
                  <p role="alert" className="text-sm font-medium text-[#9F5A46]">
                    {quickError}
                  </p>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center bg-[#526B5C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#303A35]"
                  >
                    Request My Free Cleaning Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('detailed')}
                    className="text-xs font-medium text-[#526B5C] underline underline-offset-4 hover:text-[#303A35]"
                  >
                    Need to share bedrooms, sq. ft., or Airbnb details? Switch to Detailed Quote
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start gap-3 border-b border-[#303A35]/10 pb-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#DCE6DC] text-[#526B5C]">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#303A35]">
                      Quote Summary Prepared (Demonstration)
                    </h3>
                    <p className="mt-1 text-sm text-[#303A35]/75">
                      No real inquiry was transmitted and no appointment has been scheduled. Below is the exact request summary this redesign collects for the Maid Co Cleaning team.
                    </p>
                  </div>
                </div>

                <dl className="grid gap-4 bg-[#FAF7F0] p-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-[#303A35]/60">Name</dt>
                    <dd className="mt-0.5 font-medium text-[#303A35]">{quickFirstName}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#303A35]/60">Requested Service</dt>
                    <dd className="mt-0.5 font-medium text-[#303A35]">
                      {selectedServiceLabel(quickService)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#303A35]/60">
                      Preferred Contact ({quickContactMethod})
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#303A35]">{quickContactValue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#303A35]/60">City / ZIP</dt>
                    <dd className="mt-0.5 font-medium text-[#303A35]">{quickCityZip}</dd>
                  </div>
                  {quickMessage && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-[#303A35]/60">Message</dt>
                      <dd className="mt-0.5 text-[#303A35]">{quickMessage}</dd>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#303A35]/60">Optional Marketing Opt-In</dt>
                    <dd className="mt-0.5 text-[#303A35]">
                      {quickMarketingOptIn ? 'Opted in to promotional calls/SMS' : 'Not opted in (service quote inquiry only)'}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="inline-flex min-h-[42px] items-center gap-2 bg-[#526B5C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#303A35]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    Call Tulsa {BUSINESS_INFO.phones.tulsa.display}
                  </a>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="inline-flex min-h-[42px] items-center gap-2 border border-[#303A35]/20 px-5 py-2.5 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    Call OKC {BUSINESS_INFO.phones.okc.display}
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex min-h-[42px] items-center gap-2 border border-[#303A35]/20 px-5 py-2.5 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email {BUSINESS_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => setQuickSubmitted(false)}
                    className="ml-auto text-xs font-medium text-[#526B5C] underline underline-offset-4"
                  >
                    Edit Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* DETAILED 5-STEP QUOTE PATHWAY */}
        {mode === 'detailed' && (
          <div className="mt-8 border border-[#303A35]/12 bg-[#FFFFFF] p-6 sm:p-10">
            {!detSubmitted ? (
              <form onSubmit={handleDetailedSubmit} noValidate>
                {/* Step Progress Bar */}
                <div className="mb-8 grid grid-cols-5 gap-2 border-b border-[#303A35]/10 pb-6">
                  {[
                    { num: 1, title: 'Service' },
                    { num: 2, title: 'Property' },
                    { num: 3, title: 'Location' },
                    { num: 4, title: 'Contact' },
                    { num: 5, title: 'Review' },
                  ].map((item) => {
                    const active = step === item.num;
                    const done = step > item.num;
                    return (
                      <button
                        key={item.num}
                        type="button"
                        onClick={() => goToStep(item.num as 1 | 2 | 3 | 4 | 5)}
                        className={`text-left transition-colors ${
                          active
                            ? 'text-[#303A35]'
                            : done
                            ? 'text-[#526B5C]'
                            : 'text-[#303A35]/45'
                        }`}
                      >
                        <div
                          className={`mb-2 h-1 w-full ${
                            active
                              ? 'bg-[#C88470]'
                              : done
                              ? 'bg-[#526B5C]'
                              : 'bg-[#303A35]/10'
                          }`}
                        />
                        <span className="block font-mono text-[11px] tabular-nums">
                          0{item.num}
                        </span>
                        <span className="hidden text-xs font-semibold sm:block">
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* STEP 1: SERVICE */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#303A35]">
                        Step 1 — Select Your Service
                      </h3>
                      <p className="mt-1 text-sm text-[#303A35]/75">
                        Choose the service category that fits your home, rental, or business.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {SERVICE_OPTIONS.map((opt) => {
                        const selected = detService === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setDetService(opt.value)}
                            className={`flex min-h-[64px] items-center justify-between border px-4 py-3 text-left text-sm font-medium transition-colors ${
                              selected
                                ? 'border-[#526B5C] bg-[#526B5C] text-white'
                                : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35] hover:border-[#526B5C]'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {selected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: DYNAMIC PROPERTY INFO */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#303A35]">
                        Step 2 — Property Information ({selectedServiceLabel(detService)})
                      </h3>
                      <p className="mt-1 text-sm text-[#303A35]/75">
                        Share what you know—room counts and square footage are optional if you prefer to discuss by phone.
                      </p>
                    </div>

                    {(detService === 'house-cleaning' ||
                      detService === 'deep-cleaning' ||
                      detService === 'move-in-move-out' ||
                      detService === 'not-sure') && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="det-beds" className={labelClass}>
                            Bedrooms (Optional)
                          </label>
                          <select
                            id="det-beds"
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                            className={inputClass}
                          >
                            <option value="">Prefer not to say / Studio</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms</option>
                            <option value="5+">5+ Bedrooms</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="det-baths" className={labelClass}>
                            Bathrooms (Optional)
                          </label>
                          <select
                            id="det-baths"
                            value={bathrooms}
                            onChange={(e) => setBathrooms(e.target.value)}
                            className={inputClass}
                          >
                            <option value="">Prefer not to say</option>
                            <option value="1">1 Bathroom</option>
                            <option value="1.5-2">1.5 – 2 Bathrooms</option>
                            <option value="2.5-3">2.5 – 3 Bathrooms</option>
                            <option value="3.5+">3.5+ Bathrooms</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="det-sqft" className={labelClass}>
                            Approximate Square Footage (Optional)
                          </label>
                          <input
                            id="det-sqft"
                            type="text"
                            value={sqFt}
                            onChange={(e) => setSqFt(e.target.value)}
                            placeholder="e.g., 2,100 sq ft"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="det-freq" className={labelClass}>
                            Desired Frequency
                          </label>
                          <select
                            id="det-freq"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            className={inputClass}
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="Biweekly">Biweekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="One-Time">One-Time</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="det-priorities" className={labelClass}>
                            Cleaning Priorities (Optional)
                          </label>
                          <textarea
                            id="det-priorities"
                            rows={3}
                            value={priorities}
                            onChange={(e) => setPriorities(e.target.value)}
                            placeholder="Any rooms, floors, baseboards, or surfaces you want prioritized..."
                            className={inputClass}
                          />
                        </div>
                      </div>
                    )}

                    {detService === 'airbnb-cleaning' && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="abnb-type" className={labelClass}>
                            Property Type
                          </label>
                          <select
                            id="abnb-type"
                            value={airbnbPropertyType}
                            onChange={(e) => setAirbnbPropertyType(e.target.value)}
                            className={inputClass}
                          >
                            <option value="Single-Family Home">Single-Family Home</option>
                            <option value="Apartment / Condo">Apartment / Condo</option>
                            <option value="Townhome / Duplex">Townhome / Duplex</option>
                            <option value="Guest Suite / Cottage">Guest Suite / Cottage</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="abnb-freq" className={labelClass}>
                            Turnover Frequency (Optional)
                          </label>
                          <input
                            id="abnb-freq"
                            type="text"
                            value={airbnbTurnoverFreq}
                            onChange={(e) => setAirbnbTurnoverFreq(e.target.value)}
                            placeholder="e.g., 2–3 turnovers per week"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="abnb-beds" className={labelClass}>
                            Bedrooms (Optional)
                          </label>
                          <input
                            id="abnb-beds"
                            type="text"
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                            placeholder="e.g., 3"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="abnb-baths" className={labelClass}>
                            Bathrooms (Optional)
                          </label>
                          <input
                            id="abnb-baths"
                            type="text"
                            value={bathrooms}
                            onChange={(e) => setBathrooms(e.target.value)}
                            placeholder="e.g., 2"
                            className={inputClass}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="abnb-extras" className={labelClass}>
                            Linen Service or Restocking Requests (Optional)
                          </label>
                          <textarea
                            id="abnb-extras"
                            rows={3}
                            value={airbnbExtras}
                            onChange={(e) => setAirbnbExtras(e.target.value)}
                            placeholder="Let us know if you would like to request linen handling or guest supply restocking..."
                            className={inputClass}
                          />
                        </div>
                      </div>
                    )}

                    {detService === 'commercial-cleaning' && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="comm-type" className={labelClass}>
                            Business Type
                          </label>
                          <input
                            id="comm-type"
                            type="text"
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            placeholder="Office, Retail Storefront, Studio, Clinic..."
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="comm-sqft" className={labelClass}>
                            Approximate Square Footage (Optional)
                          </label>
                          <input
                            id="comm-sqft"
                            type="text"
                            value={sqFt}
                            onChange={(e) => setSqFt(e.target.value)}
                            placeholder="e.g., 3,500 sq ft"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="comm-freq" className={labelClass}>
                            Desired Frequency
                          </label>
                          <select
                            id="comm-freq"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            className={inputClass}
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="Biweekly">Biweekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Multiple Times Weekly">Multiple Times Weekly</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="comm-time" className={labelClass}>
                            Preferred Cleaning Times (Optional)
                          </label>
                          <input
                            id="comm-time"
                            type="text"
                            value={preferredCleanTime}
                            onChange={(e) => setPreferredCleanTime(e.target.value)}
                            placeholder="Evenings, early mornings, or weekends"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    )}

                    {detService === 'post-construction' && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="pc-prop" className={labelClass}>
                            Property Category
                          </label>
                          <select
                            id="pc-prop"
                            value={postConType}
                            onChange={(e) => setPostConType(e.target.value)}
                            className={inputClass}
                          >
                            <option value="Residential">Residential Property</option>
                            <option value="Commercial">Commercial Property</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="pc-scope" className={labelClass}>
                            Project Type
                          </label>
                          <select
                            id="pc-scope"
                            value={postConScope}
                            onChange={(e) => setPostConScope(e.target.value)}
                            className={inputClass}
                          >
                            <option value="Renovation / Remodel">Renovation / Remodel</option>
                            <option value="New Construction">New Construction</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="pc-size" className={labelClass}>
                            Approximate Project Size (Optional)
                          </label>
                          <input
                            id="pc-size"
                            type="text"
                            value={sqFt}
                            onChange={(e) => setSqFt(e.target.value)}
                            placeholder="e.g., Kitchen remodel or 2,800 sq ft build"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="pc-time" className={labelClass}>
                            Desired Timeframe (Optional)
                          </label>
                          <input
                            id="pc-time"
                            type="text"
                            value={postConTimeframe}
                            onChange={(e) => setPostConTimeframe(e.target.value)}
                            placeholder="Target completion window"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 3: LOCATION */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#303A35]">
                        Step 3 — Location & Service Coverage
                      </h3>
                      <p className="mt-1 text-sm text-[#303A35]/75">
                        Maid Co Cleaning publishes coverage across Oklahoma, Tulsa, Creek, Canadian, Cleveland, and Pottawatomie counties. Exact street coverage will be confirmed when reviewing your inquiry.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="det-city" className={labelClass}>
                          City <span className="text-[#9F5A46]">*</span>
                        </label>
                        <input
                          id="det-city"
                          type="text"
                          required
                          value={detCity}
                          onChange={(e) => setDetCity(e.target.value)}
                          placeholder="e.g., Tulsa or Oklahoma City"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="det-zip" className={labelClass}>
                          ZIP Code <span className="text-[#9F5A46]">*</span>
                        </label>
                        <input
                          id="det-zip"
                          type="text"
                          required
                          value={detZip}
                          onChange={(e) => setDetZip(e.target.value)}
                          placeholder="e.g., 74137"
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="det-street" className={labelClass}>
                          Street Address{' '}
                          <span className="font-normal text-[#303A35]/60">
                            (Optional — helps confirm exact route availability)
                          </span>
                        </label>
                        <input
                          id="det-street"
                          type="text"
                          value={detStreet}
                          onChange={(e) => setDetStreet(e.target.value)}
                          placeholder="Street address"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#303A35]">
                        Step 4 — Contact Details
                      </h3>
                      <p className="mt-1 text-sm text-[#303A35]/75">
                        Let us know how you would like our team to reach you regarding your quote.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="det-name" className={labelClass}>
                          Full Name <span className="text-[#9F5A46]">*</span>
                        </label>
                        <input
                          id="det-name"
                          type="text"
                          required
                          value={detFullName}
                          onChange={(e) => setDetFullName(e.target.value)}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="det-email" className={labelClass}>
                          Email Address <span className="text-[#9F5A46]">*</span>
                        </label>
                        <input
                          id="det-email"
                          type="email"
                          required
                          value={detEmail}
                          onChange={(e) => setDetEmail(e.target.value)}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="det-phone" className={labelClass}>
                          Phone Number{' '}
                          <span className="font-normal text-[#303A35]/60">
                            (Optional if email is preferred)
                          </span>
                        </label>
                        <input
                          id="det-phone"
                          type="tel"
                          value={detPhone}
                          onChange={(e) => setDetPhone(e.target.value)}
                          placeholder="(918) 555-0140"
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <span className={labelClass}>Preferred Contact Method</span>
                        <div className="mt-1.5 flex gap-3">
                          {(['email', 'phone'] as const).map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setDetPreferredMethod(method)}
                              className={`min-h-[40px] border px-5 py-2 text-xs font-semibold capitalize transition-colors ${
                                detPreferredMethod === method
                                  ? 'border-[#526B5C] bg-[#DCE6DC]/50 text-[#303A35]'
                                  : 'border-[#303A35]/15 bg-[#FAF7F0] text-[#303A35]/75'
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: REVIEW */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-[#303A35]">
                        Step 5 — Review Your Inquiry
                      </h3>
                      <p className="mt-1 text-sm text-[#303A35]/75">
                        When submitted to the company, Maid Co Cleaning reviews your space details and confirms service availability and personalized pricing directly with you.
                      </p>
                    </div>

                    <dl className="grid gap-4 border border-[#303A35]/10 bg-[#FAF7F0] p-5 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-xs text-[#303A35]/60">Selected Service</dt>
                        <dd className="mt-0.5 font-semibold text-[#303A35]">
                          {selectedServiceLabel(detService)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#303A35]/60">Location</dt>
                        <dd className="mt-0.5 font-medium text-[#303A35]">
                          {detCity}, {detZip}
                          {detStreet ? ` · ${detStreet}` : ''}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#303A35]/60">Contact</dt>
                        <dd className="mt-0.5 font-medium text-[#303A35]">
                          {detFullName} · {detEmail}
                          {detPhone ? ` · ${detPhone}` : ''}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#303A35]/60">Preferred Contact Method</dt>
                        <dd className="mt-0.5 capitalize text-[#303A35]">
                          {detPreferredMethod}
                        </dd>
                      </div>
                      {sqFt && (
                        <div>
                          <dt className="text-xs text-[#303A35]/60">Approximate Size</dt>
                          <dd className="mt-0.5 text-[#303A35]">{sqFt}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-xs text-[#303A35]/60">Schedule / Notes</dt>
                        <dd className="mt-0.5 text-[#303A35]">
                          {detService === 'airbnb-cleaning'
                            ? `${airbnbPropertyType} · ${airbnbTurnoverFreq}`
                            : detService === 'post-construction'
                            ? `${postConType} · ${postConScope}`
                            : detService === 'commercial-cleaning'
                            ? `${businessType} · ${frequency}`
                            : `${frequency}${bedrooms ? ` · ${bedrooms} bd` : ''}${bathrooms ? ` · ${bathrooms} ba` : ''}`}
                        </dd>
                      </div>
                    </dl>

                    {renderMarketingConsent(detMarketingOptIn, setDetMarketingOptIn, 'detailed')}
                  </div>
                )}

                {detError && (
                  <p role="alert" className="mt-4 text-sm font-medium text-[#9F5A46]">
                    {detError}
                  </p>
                )}

                {/* Navigation Controls */}
                <div className="mt-8 flex items-center justify-between border-t border-[#303A35]/10 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => goToStep((step - 1) as 1 | 2 | 3 | 4 | 5)}
                      className="inline-flex min-h-[42px] items-center gap-1.5 border border-[#303A35]/20 px-4 py-2 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      Back
                    </button>
                  ) : (
                    <span className="text-xs text-[#303A35]/60">Step 1 of 5</span>
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={() => goToStep((step + 1) as 1 | 2 | 3 | 4 | 5)}
                      className="inline-flex min-h-[44px] items-center gap-1.5 bg-[#526B5C] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#303A35]"
                    >
                      <span>Continue</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] items-center bg-[#526B5C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#303A35]"
                    >
                      Request My Free Quote
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start gap-3 border-b border-[#303A35]/10 pb-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#DCE6DC] text-[#526B5C]">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#303A35]">
                      Detailed Quote Preview Ready (Demonstration)
                    </h3>
                    <p className="mt-1 text-sm text-[#303A35]/75">
                      This demonstration shows the complete inquiry summary without sending live external messages or confirming an appointment. To speak directly with Maid Co Cleaning, use the verified phone or email options below.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BUSINESS_INFO.phones.tulsa.href}
                    className="inline-flex min-h-[42px] items-center gap-2 bg-[#526B5C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#303A35]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    Tulsa {BUSINESS_INFO.phones.tulsa.display}
                  </a>
                  <a
                    href={BUSINESS_INFO.phones.okc.href}
                    className="inline-flex min-h-[42px] items-center gap-2 border border-[#303A35]/20 px-5 py-2.5 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    OKC {BUSINESS_INFO.phones.okc.display}
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex min-h-[42px] items-center gap-2 border border-[#303A35]/20 px-5 py-2.5 text-xs font-semibold text-[#303A35] hover:border-[#526B5C]"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    {BUSINESS_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setDetSubmitted(false);
                      setStep(1);
                    }}
                    className="ml-auto text-xs font-medium text-[#526B5C] underline underline-offset-4"
                  >
                    Start Another Preview
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
