import type { FaqItem, PathwayOption, ServiceDetail } from '../types';

export const BUSINESS_INFO = {
  name: 'Maid Co Cleaning',
  legalName: 'Maid Co Cleaning Service',
  tagline: 'More Life. Less Cleaning.',
  address: '8810 S Yale Ave Unit N, Tulsa, OK 74137',
  addressLine1: '8810 S Yale Ave Unit N',
  addressLine2: 'Tulsa, OK 74137',
  email: 'hello@maidcocleaningservices.com',
  originalWebsite: 'https://maidcocleaningservices.com/',
  phones: {
    tulsa: {
      region: 'Tulsa & Northeast Oklahoma',
      shortRegion: 'Tulsa',
      display: '(918) 992-7702',
      href: 'tel:+19189927702',
      note: 'Primary office & Northeast Oklahoma service inquiries',
    },
    okc: {
      region: 'Oklahoma City & Central Oklahoma',
      shortRegion: 'Oklahoma City',
      display: '(405) 565-9545',
      href: 'tel:+14055659545',
      note: 'Published Central Oklahoma contact line',
    },
  },
  agencyDisclosure: 'Independent website redesign concept by S.Mideros Agency.',
} as const;

export const HERO_MEDIA = {
  main: {
    src: '/images/hero-sunlit-living.webp',
    alt: 'Sunlit modern living room with natural oak floors, linen sofa, soft sage throw, and fresh olive branches in a clean Oklahoma home',
  },
  editorial: {
    src: '/images/editorial-calm-home.webp',
    alt: 'Calm reading corner with linen armchair, travertine side table, and soft morning window shadows in a tidy residence',
  },
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'house-cleaning',
    index: '01',
    name: 'House Cleaning',
    shortName: 'House Cleaning',
    headline: 'A Home That Feels Effortlessly Fresh.',
    summary:
      'Consistent, thoughtful routine care for kitchens, bathrooms, bedrooms, living spaces, floors, and frequently used surfaces.',
    description:
      'Designed to give households more breathing room each week, our routine house cleaning maintains kitchens, bathrooms, bedrooms, and shared living areas using detailed checklists and professional supplies.',
    image: '/images/service-house-cleaning.webp',
    imageAlt: 'Bright modern kitchen with marble island, warm wood cabinetry, and spotless countertops',
    highlights: [
      'Kitchens, sinks, and exterior appliance surfaces',
      'Bathrooms, vanities, mirrors, and fixtures',
      'Bedrooms and common living spaces',
      'Floors, rugs, and frequently touched surfaces',
    ],
    checklistGroups: [
      {
        area: 'Kitchen & Dining',
        items: [
          'Wipe down countertops, island surfaces, and backsplash',
          'Clean sink basin, faucet fixtures, and exterior cabinet fronts',
          'Wipe exterior surfaces of refrigerator, dishwasher, oven, and microwave',
          'Vacuum and mop hard kitchen and dining floors',
        ],
      },
      {
        area: 'Bathrooms',
        items: [
          'Sanitize countertops, sinks, and vanity fixtures',
          'Clean mirrors, shower glass, tubs, and tile surrounds',
          'Disinfect toilets inside and out',
          'Vacuum and mop bathroom floors and empty wastebaskets',
        ],
      },
      {
        area: 'Bedrooms & Living Spaces',
        items: [
          'Dust accessible surfaces, shelves, decor, and window sills',
          'Tidy pillows, throws, and make beds upon request',
          'Wipe frequently touched door handles and light switches',
          'Vacuum carpets, rugs, and damp-mop hardwood or tile flooring',
        ],
      },
    ],
    frequencyNote: 'Available for weekly, biweekly, monthly, or one-time service inquiries.',
    idealFor: [
      'Busy families wanting weekends back',
      'Recurring weekly, biweekly, or monthly home care',
      'Maintaining a calm, welcoming living space',
    ],
    ctaLabel: 'Explore House Cleaning',
  },
  {
    slug: 'deep-cleaning',
    index: '02',
    name: 'Deep Cleaning',
    shortName: 'Deep Cleaning',
    headline: 'A Fresh Start, Down to the Details.',
    summary:
      'Intensive top-to-bottom attention for first-time appointments, seasonal resets, baseboards, detailed kitchens, bathrooms, and hard-to-reach corners.',
    description:
      'When your space needs more than surface upkeep, a deep clean reaches buildup around baseboards, trim, cabinet fronts, bathroom grout lines, and overlooked corners—creating a thorough baseline before recurring visits or seasonal transitions.',
    image: '/images/service-deep-cleaning.webp',
    imageAlt: 'Thoughtfully maintained contemporary bathroom with stone vanity, brass fixtures, and crisp folded towels',
    highlights: [
      'Ideal for first-time appointments and seasonal resets',
      'Detailed kitchen and bathroom buildup removal',
      'Hand-wiped baseboards, trim, and window sills',
      'Hard-to-reach areas and high-dusting attention',
    ],
    checklistGroups: [
      {
        area: 'Detailed Architectural Trim & Surfaces',
        items: [
          'Wipe baseboards, door frames, doors, and accessible window sills',
          'High dusting of ceiling corners, vents, and reachable light fixtures',
          'Detailed dusting of blinds, ledges, and shelving edges',
        ],
      },
      {
        area: 'Kitchen & Bath Intensive Care',
        items: [
          'Detail backsplash grout, stove hood exteriors, and cabinet fronts',
          'Focus on mineral buildup around faucets, drains, and shower glass',
          'Thorough scrubbing of tubs, tile walls, and vanity edges',
        ],
      },
      {
        area: 'Floors & Transition Zones',
        items: [
          'Edge vacuuming along baseboards and under accessible furniture',
          'Detailed mopping of hard-surface flooring throughout the home',
        ],
      },
    ],
    frequencyNote: 'Recommended for first-time visits, seasonal refreshes, or pre-gathering preparation.',
    idealFor: [
      'First-time cleaning appointments before starting a recurring plan',
      'Spring or autumn seasonal home resets',
      'Homes preparing for family visits or special occasions',
    ],
    ctaLabel: 'Explore Deep Cleaning',
  },
  {
    slug: 'airbnb-cleaning',
    index: '03',
    name: 'Airbnb Cleaning',
    shortName: 'Airbnb Cleaning',
    headline: 'Every Guest Deserves a Beautiful Welcome.',
    summary:
      'Reliable turnover cleaning for short-term rentals—guest-ready bathrooms, fresh kitchens, common areas, plus linen and restocking support when requested.',
    description:
      'Hospitality starts the moment guests unlock the door. Our Airbnb and short-term rental turnover service prepares bathrooms, kitchens, bedrooms, and living areas consistently between stays, with optional linen and restocking assistance coordinated in advance.',
    image: '/images/service-airbnb-cleaning.webp',
    imageAlt: 'Inviting boutique short-term rental bedroom with pressed linen bedding and soft daylight',
    highlights: [
      'Guest-ready bathrooms and crisp kitchen reset',
      'Common-area staging and surface sanitization',
      'Linen service when requested in advance',
      'Guest supply restocking when requested',
    ],
    checklistGroups: [
      {
        area: 'Guest Arrival Standards',
        items: [
          'Reset bedrooms and arrange fresh bedding cleanly',
          'Inspect bathrooms for hair, water spots, and spotless fixtures',
          'Wipe kitchen counters, sink, coffee station, and appliances',
        ],
      },
      {
        area: 'Optional Turnover Support',
        items: [
          'Wash, swap, or fold linens when requested in your service plan',
          'Restock host-provided toiletries, paper goods, and welcome items when requested',
          'Flag noticeable property issues or missing items during final walkthrough',
        ],
      },
      {
        area: 'Common Areas & Entry',
        items: [
          'Vacuum and mop high-traffic entryways, rugs, and living areas',
          'Empty all trash bins and replace liners',
        ],
      },
    ],
    frequencyNote: 'Coordinated around check-out and check-in schedules for short-term rental hosts.',
    idealFor: [
      'Airbnb and short-term rental hosts in Tulsa and Central Oklahoma',
      'Property managers needing dependable turnover communication',
      'Hosts looking for optional linen and restocking coordination',
    ],
    ctaLabel: 'Explore Airbnb Cleaning',
  },
  {
    slug: 'move-in-move-out',
    index: '04',
    name: 'Move-In / Move-Out Cleaning',
    shortName: 'Move Cleaning',
    headline: 'Leave the Old Space Behind. Welcome the New.',
    summary:
      'Detailed cleaning for vacant homes, apartments, and property transitions—supporting homeowners, tenants, and landlords alike.',
    description:
      'An empty space reveals every corner. Whether you are preparing a home for new residents, handing back apartment keys, or freshening up a property before unpacking, our move-in and move-out service addresses empty cabinets, closets, baseboards, and appliances.',
    image: '/images/service-move-cleaning.webp',
    imageAlt: 'Bright vacant modern home with spotless wide-plank hardwood floors and sunlit French doors',
    highlights: [
      'Tailored for vacant homes and apartments',
      'Inside cabinets, drawers, and closet shelving',
      'Baseboards, trim, doors, and switch plates',
      'Supports homeowners, tenants, and landlords',
    ],
    checklistGroups: [
      {
        area: 'Empty Kitchens & Storage',
        items: [
          'Wipe interior and exterior of empty cabinets, drawers, and pantry shelves',
          'Clean countertops, sinks, and exterior appliance surfaces',
          'Wipe interior of empty closets and built-in shelving',
        ],
      },
      {
        area: 'Whole-Property Detail',
        items: [
          'Deep-clean bathrooms, tubs, showers, mirrors, and vanities',
          'Wipe baseboards, window sills, doors, and trim throughout vacant rooms',
          'Thoroughly vacuum and mop all bare floors from corner to corner',
        ],
      },
    ],
    frequencyNote: 'One-time transition service tailored to vacant residential properties.',
    idealFor: [
      'Homeowners moving into a newly purchased residence',
      'Tenants preparing an apartment or rental home for move-out walkthrough',
      'Landlords and property owners readying a unit between leases',
    ],
    ctaLabel: 'Explore Move Cleaning',
  },
  {
    slug: 'commercial-cleaning',
    index: '05',
    name: 'Commercial Cleaning',
    shortName: 'Commercial Cleaning',
    headline: 'A Better First Impression for Your Business.',
    summary:
      'Consistent care for offices, retail spaces, commercial facilities, and shared business common areas.',
    description:
      'A clean workplace supports both visiting clients and the people who work there every day. We coordinate flexible commercial cleaning plans for offices, retail storefronts, reception areas, breakrooms, and restrooms.',
    image: '/images/service-commercial-cleaning.webp',
    imageAlt: 'Contemporary architectural office reception and glass-walled workspace in daylight',
    highlights: [
      'Offices, conference rooms, and reception areas',
      'Retail storefronts and client-facing zones',
      'Restrooms, breakrooms, and common areas',
      'Flexible recurring commercial scheduling',
    ],
    checklistGroups: [
      {
        area: 'Client & Reception Areas',
        items: [
          'Dust reception desks, seating areas, displays, and glass partitions',
          'Clean entry glass doors and high-touch handles',
          'Vacuum carpets and mop hard-surface lobbies and hallways',
        ],
      },
      {
        area: 'Workspaces, Breakrooms & Restrooms',
        items: [
          'Wipe shared conference tables, desks (clear areas), and breakroom counters',
          'Sanitize commercial restrooms, sinks, mirrors, and dispensers',
          'Empty office and common-area trash and replace liners',
        ],
      },
    ],
    frequencyNote: 'Available on weekly, biweekly, monthly, or custom commercial schedules.',
    idealFor: [
      'Professional offices and studios',
      'Retail boutiques and customer-facing storefronts',
      'Commercial facilities seeking dependable upkeep',
    ],
    ctaLabel: 'Explore Commercial Cleaning',
  },
  {
    slug: 'post-construction',
    index: '06',
    name: 'Post-Construction Cleaning',
    shortName: 'Post-Construction',
    headline: 'From Renovation to Ready.',
    summary:
      'Careful removal of fine construction dust and residue following home renovations, new builds, and remodeling projects.',
    description:
      'Even after contractors pack up, fine drywall dust and adhesive residue linger on shelves, fixtures, trim, and floors. Our post-construction team systematically clears dust and debris residue so newly finished spaces are ready to live or work in.',
    image: '/images/service-post-construction.webp',
    imageAlt: 'Newly renovated open-plan architectural room with custom millwork and spotless quartz island',
    highlights: [
      'Fine drywall and sawdust removal across surfaces',
      'New cabinetry, millwork, and countertop detailing',
      'Baseboards, trim, interior glass, and fixtures',
      'For residential remodels, new builds, and commercial fit-outs',
    ],
    checklistGroups: [
      {
        area: 'Dust & Residue Removal',
        items: [
          'HEPA-style vacuuming and damp wiping of fine dust on horizontal and vertical surfaces',
          'Careful wiping of new cabinetry interiors, exteriors, and shelving',
          'Removal of minor tape or surface residue on glass and fixtures where safe',
        ],
      },
      {
        area: 'Finish-Ready Presentation',
        items: [
          'Detailed cleaning of newly installed sinks, tubs, showers, and counters',
          'Wiping doors, trim, baseboards, outlets, and reachable light fixtures',
          'Multi-pass vacuuming and mopping of newly finished floors',
        ],
      },
    ],
    frequencyNote: 'Project-based service scheduled after construction or remodeling trades finish.',
    idealFor: [
      'Homeowners completing kitchen, bath, or whole-home renovations',
      'Custom builders preparing new builds for handover',
      'Commercial remodelers opening newly finished offices or retail spaces',
    ],
    ctaLabel: 'Explore Post-Construction Cleaning',
  },
];

export const PATHWAYS: PathwayOption[] = [
  {
    id: 'home',
    label: 'I want a cleaner home',
    questionPrompt: 'Routine maintenance or a thorough reset?',
    explanation:
      'Choose House Cleaning for ongoing weekly, biweekly, or monthly upkeep of kitchens, baths, bedrooms, and living areas. If it is your first appointment in a while or you want baseboards and buildup addressed first, start with Deep Cleaning.',
    recommendations: [
      {
        serviceSlug: 'house-cleaning',
        title: 'House Cleaning',
        rationale: 'Best for recurring weekly, biweekly, or monthly comfort and everyday upkeep.',
      },
      {
        serviceSlug: 'deep-cleaning',
        title: 'Deep Cleaning',
        rationale: 'Best for first-time appointments, seasonal resets, baseboards, and detailed buildup.',
      },
    ],
  },
  {
    id: 'moving',
    label: "I'm moving",
    questionPrompt: 'Preparing a vacant home or apartment?',
    explanation:
      'An empty residence has a different cleaning scope than an occupied home—allowing access inside empty cabinets, drawers, closets, and full baseboard edges for landlords, tenants, and incoming homeowners.',
    recommendations: [
      {
        serviceSlug: 'move-in-move-out',
        title: 'Move-In / Move-Out Cleaning',
        rationale: 'Designed specifically for empty-property transitions, lease turnovers, and move-in prep.',
      },
    ],
  },
  {
    id: 'rental',
    label: 'I manage a rental',
    questionPrompt: 'Keeping a short-term rental guest-ready?',
    explanation:
      'Short-term rentals require reliable turnovers between check-out and check-in—fresh bathrooms, crisp kitchens, tidy common spaces, plus linen service and restocking when requested.',
    recommendations: [
      {
        serviceSlug: 'airbnb-cleaning',
        title: 'Airbnb Cleaning',
        rationale: 'Focused on consistent hospitality turnovers and optional linen or restocking requests.',
      },
    ],
  },
  {
    id: 'business',
    label: 'I need business or project cleaning',
    questionPrompt: 'Ongoing workplace care or post-remodel cleanup?',
    explanation:
      'Select Commercial Cleaning for regular office, retail, or facility upkeep, or Post-Construction Cleaning when a renovation or new build needs fine dust and residue cleared before occupancy.',
    recommendations: [
      {
        serviceSlug: 'commercial-cleaning',
        title: 'Commercial Cleaning',
        rationale: 'Routine care for offices, retail spaces, reception lobbies, and shared common areas.',
      },
      {
        serviceSlug: 'post-construction',
        title: 'Post-Construction Cleaning',
        rationale: 'Detailed dust and residue cleanup after remodels, renovations, and new builds.',
      },
    ],
  },
];

export const VALUE_PILLARS = [
  {
    title: 'Spend less time on household chores',
    body: 'Reclaim quiet mornings and weekends instead of catching up on mopping, scrubbing, and dusting.',
  },
  {
    title: 'Enjoy a more comfortable home',
    body: 'Walk into calm bedrooms, clear kitchen counters, and fresh bathrooms maintained on a dependable rhythm.',
  },
  {
    title: 'Prepare warmly for guests',
    body: 'Welcome family and visitors into a space that feels effortlessly cared for before they arrive.',
  },
  {
    title: 'Maintain rental properties',
    body: 'Keep short-term rentals consistently guest-ready between stays without scrambling between bookings.',
  },
  {
    title: 'Keep workplaces welcoming',
    body: 'Present a clean, composed environment for clients, guests, and staff across offices and retail spaces.',
  },
  {
    title: 'Simplify move-related transitions',
    body: 'Hand over keys or unpack into a fresh space without adding hours of scrubbing to moving week.',
  },
];

export const WHY_MAID_CO = [
  {
    title: 'Family-owned business',
    description:
      'Local Oklahoma roots and personal accountability shape how we care for every home, rental, and workplace.',
  },
  {
    title: 'Detailed cleaning checklists',
    description:
      'Every visit follows a structured room-by-room scope so high-traffic areas and finer details are never overlooked.',
  },
  {
    title: 'Professional cleaning supplies',
    description:
      'Our team arrives equipped with professional cleaning supplies suited for residential and commercial surfaces.',
  },
  {
    title: 'Flexible cleaning schedules',
    description:
      'Choose one-time appointments or recurring weekly, biweekly, and monthly visits—or coordinate rental turnovers.',
  },
  {
    title: 'Clear customer communication',
    description:
      'From initial quote to scheduling and special requests, we prioritize straightforward, responsive coordination.',
  },
  {
    title: 'Final quality checks',
    description:
      'Before wrapping up, our team reviews completed rooms against your agreed plan so the space feels genuinely finished.',
  },
];

export const PREP_TIPS = [
  {
    label: 'Pets',
    detail: 'Secure pets in a comfortable room, crate, or yard while the cleaning team is working.',
  },
  {
    label: 'Valuables & Fragile Items',
    detail: 'Put away delicate heirlooms, jewelry, or fragile decor items before your appointment.',
  },
  {
    label: 'Personal Documents',
    detail: 'Store confidential paperwork, mail, and personal documents in a drawer or folder for peace of mind.',
  },
];

export const CLEANING_EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'Tell Us About Your Space',
    description:
      'Select the service that fits your needs—residential, rental turnover, move transition, office, or post-renovation—and share a few helpful details.',
  },
  {
    step: '02',
    title: 'Confirm Your Cleaning Plan',
    description:
      'Our team reviews your request, confirms coverage for your address, and coordinates scope, pricing, and schedule directly with you.',
  },
  {
    step: '03',
    title: 'Enjoy a Fresh Space',
    description:
      'Our team completes the agreed service using professional supplies and our structured checklist approach—leaving your space calm and ready.',
  },
];

export const QUOTE_FACTORS = [
  {
    title: 'Type of service',
    detail: 'Routine upkeep, intensive deep cleaning, Airbnb turnover, vacant move-out, commercial, or post-construction dust removal.',
  },
  {
    title: 'Property size',
    detail: 'Approximate square footage and overall layout help estimate the time and care required.',
  },
  {
    title: 'Number of rooms',
    detail: 'Bedrooms, bathrooms, kitchens, common zones, or private offices shape the checklist scope.',
  },
  {
    title: 'Current property condition',
    detail: 'Whether the space receives regular upkeep or needs a first-time reset or post-remodel detail.',
  },
  {
    title: 'Cleaning frequency',
    detail: 'One-time appointments differ in rhythm from recurring weekly, biweekly, or monthly schedules.',
  },
  {
    title: 'Special requests',
    detail: 'Optional additions such as Airbnb linen service, restocking, or specific room priorities.',
  },
  {
    title: 'Location and availability',
    detail: 'Exact street address within our Tulsa or Central Oklahoma coverage areas and desired scheduling window.',
  },
];

export const SERVICE_COUNTIES = [
  {
    county: 'Tulsa County',
    region: 'Tulsa & Northeast Oklahoma',
    note: 'Core Northeast Oklahoma service area anchored by our Tulsa office.',
  },
  {
    county: 'Creek County',
    region: 'Tulsa & Northeast Oklahoma',
    note: 'Published coverage area surrounding the Tulsa metro; confirm exact address.',
  },
  {
    county: 'Oklahoma County',
    region: 'Oklahoma City & Central Oklahoma',
    note: 'Published Central Oklahoma coverage area; confirm exact address.',
  },
  {
    county: 'Canadian County',
    region: 'Oklahoma City & Central Oklahoma',
    note: 'Published western Central Oklahoma coverage area; confirm exact address.',
  },
  {
    county: 'Cleveland County',
    region: 'Oklahoma City & Central Oklahoma',
    note: 'Published southern Central Oklahoma coverage area; confirm exact address.',
  },
  {
    county: 'Pottawatomie County',
    region: 'Oklahoma City & Central Oklahoma',
    note: 'Published eastern Central Oklahoma coverage area; confirm exact address.',
  },
];

export const REVIEW_THEMES = [
  {
    category: 'Thorough Residential Cleaning',
    summary:
      'Homeowners frequently highlight attention to kitchens, bathrooms, floors, and the relief of coming home to a noticeably fresher space.',
  },
  {
    category: 'Airbnb & Rental Turnovers',
    summary:
      'Short-term rental hosts value dependable turnover readiness, crisp bathroom and linen presentation, and steady communication between guest stays.',
  },
  {
    category: 'Post-Construction Detail',
    summary:
      'Renovation and build clients point to careful removal of fine dust from cabinetry, surfaces, and newly finished living spaces.',
  },
  {
    category: 'Communication & Reliability',
    summary:
      'Across residential and commercial requests, published customer feedback centers on clear coordination, responsiveness, and overall satisfaction.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-areas',
    category: 'Coverage',
    question: 'Which areas in Oklahoma does Maid Co Cleaning serve?',
    answer:
      'Maid Co Cleaning publishes service coverage across six counties in Northeast and Central Oklahoma: Tulsa County, Creek County, Oklahoma County, Canadian County, Cleveland County, and Pottawatomie County. Because route availability varies by neighborhood, our team confirms exact street-address coverage directly when preparing your quote.',
  },
  {
    id: 'faq-quotes',
    category: 'Pricing & Quotes',
    question: 'How are cleaning quotes determined?',
    answer:
      'Because every home, rental, and workplace is different, quotes are free and tailored to your space rather than fixed flat-rate tiers. Pricing considers your service type, approximate square footage, room count, current condition, desired frequency, special requests, and location availability.',
  },
  {
    id: 'faq-frequencies',
    category: 'Scheduling',
    question: 'What recurring cleaning schedules are available?',
    answer:
      'Maid Co Cleaning offers flexible recurring schedules including weekly, biweekly, and monthly visits, as well as one-time deep cleans, move-in/move-out cleanings, post-construction cleanups, and Airbnb turnovers.',
  },
  {
    id: 'faq-supplies',
    category: 'Approach',
    question: 'Do I need to provide cleaning supplies?',
    answer:
      'No—Maid Co Cleaning brings professional cleaning supplies and follows structured cleaning checklists. If you have specific surface preferences or requests for your property, mention them when requesting your quote.',
  },
  {
    id: 'faq-prep',
    category: 'Preparation',
    question: 'How should I prepare my home before a cleaning visit?',
    answer:
      'Before your team arrives, Maid Co Cleaning recommends securing pets in a comfortable area, putting away valuables and fragile items, and storing personal or confidential documents safely.',
  },
  {
    id: 'faq-airbnb',
    category: 'Airbnb',
    question: 'Can Airbnb cleanings include linens or restocking?',
    answer:
      'Yes. In addition to cleaning bathrooms, kitchens, bedrooms, and common areas between guests, linen service and guest supply restocking can be included when requested in advance.',
  },
  {
    id: 'faq-booking',
    category: 'Quotes',
    question: 'Does submitting a quote form automatically book my appointment?',
    answer:
      'No. Submitting a quote inquiry starts the conversation. Our team reviews your space details, confirms service coverage for your address, and coordinates scope, pricing, and scheduling directly with you.',
  },
];
