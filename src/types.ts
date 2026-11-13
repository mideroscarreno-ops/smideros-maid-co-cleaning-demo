export type ServiceSlug =
  | 'house-cleaning'
  | 'deep-cleaning'
  | 'airbnb-cleaning'
  | 'move-in-move-out'
  | 'commercial-cleaning'
  | 'post-construction';

export type RoutePath =
  | '/'
  | '/services'
  | `/services/${ServiceSlug}`
  | '/our-approach'
  | '/service-areas'
  | '/about'
  | '/reviews'
  | '/faqs'
  | '/quote'
  | '/contact'
  | '/privacy'
  | '/terms';

export interface ServiceDetail {
  slug: ServiceSlug;
  index: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  checklistGroups: {
    area: string;
    items: string[];
  }[];
  frequencyNote?: string;
  idealFor: string[];
  ctaLabel: string;
}

export interface PathwayOption {
  id: 'home' | 'moving' | 'rental' | 'business';
  label: string;
  questionPrompt: string;
  explanation: string;
  recommendations: {
    serviceSlug: ServiceSlug;
    title: string;
    rationale: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
