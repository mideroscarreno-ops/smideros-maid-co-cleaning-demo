import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  ContactPage,
  FaqsPage,
  LegalPage,
  OurApproachPage,
  QuotePage,
  ReviewsPage,
} from './pages/SecondaryPages';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import type { RoutePath, ServiceSlug } from './types';

const VALID_SERVICE_SLUGS: ServiceSlug[] = [
  'house-cleaning',
  'deep-cleaning',
  'airbnb-cleaning',
  'move-in-move-out',
  'commercial-cleaning',
  'post-construction',
];

function parseHashRoute(): RoutePath {
  if (typeof window === 'undefined') return '/';
  const raw = window.location.hash.replace(/^#/, '') || '/';
  if (raw === '/' || raw === '') return '/';
  if (
    raw === '/our-approach' ||
    raw === '/service-areas' ||
    raw === '/about' ||
    raw === '/reviews' ||
    raw === '/faqs' ||
    raw === '/quote' ||
    raw === '/contact' ||
    raw === '/privacy' ||
    raw === '/terms'
  ) {
    return raw;
  }
  if (raw.startsWith('/services/')) {
    const slug = raw.replace('/services/', '') as ServiceSlug;
    if (VALID_SERVICE_SLUGS.includes(slug)) {
      return `/services/${slug}`;
    }
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => parseHashRoute());
  const [preselectedService, setPreselectedService] = useState<ServiceSlug | 'not-sure'>(
    'house-cleaning'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: RoutePath, preselect?: ServiceSlug | 'not-sure') => {
    if (preselect) {
      setPreselectedService(preselect);
    }
    if (typeof window !== 'undefined') {
      const targetHash = `#${path}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '') as ServiceSlug;
      return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
    }
    switch (currentPath) {
      case '/our-approach':
        return <OurApproachPage onNavigate={navigate} />;
      case '/service-areas':
        return <ServiceAreasPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/reviews':
        return <ReviewsPage onNavigate={navigate} />;
      case '/faqs':
        return <FaqsPage onNavigate={navigate} />;
      case '/quote':
        return <QuotePage initialService={preselectedService} onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/privacy':
        return <LegalPage type="privacy" onNavigate={navigate} />;
      case '/terms':
        return <LegalPage type="terms" onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F0] text-[#303A35]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#526B5C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Header currentPath={currentPath} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
