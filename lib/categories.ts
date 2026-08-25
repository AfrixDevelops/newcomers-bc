// Auto-generated from the original prototype. Edit freely from here on.
export type CategorySlug =
  | "settlement"
  | "language"
  | "employment"
  | "housing"
  | "legal"
  | "social"
  | "mental-health"
  | "financial"
  | "working-holiday"
  | "education"
  | "healthcare"
  | "transportation";

export interface Category {
  slug: CategorySlug;
  /** Full name, shown as the category page heading. */
  title: string;
  /** One-line summary on the home grid card. */
  blurb: string;
  /** Longer intro line on the category page. */
  subtitle: string;
  /** Phosphor icon name. */
  icon: string;
}

export const categories: Category[] = [
  {
    "slug": "settlement",
    "title": "Settlement & Navigation",
    "subtitle": "The first-week essentials: the paperwork and people that unlock everything else.",
    "blurb": "Get started with essential services and find your way around BC.",
    "icon": "Compass"
  },
  {
    "slug": "language",
    "title": "Language & Communication",
    "subtitle": "Building English confidence without pressure, through classes, practice, and everyday tools.",
    "blurb": "Improve your English skills with free classes and everyday tools.",
    "icon": "Translate"
  },
  {
    "slug": "employment",
    "title": "Employment & Credentialing",
    "subtitle": "Getting your experience recognized and finding work that fits it.",
    "blurb": "Find work and get your credentials recognized in BC.",
    "icon": "Briefcase"
  },
  {
    "slug": "housing",
    "title": "Housing & Basic Needs",
    "subtitle": "A safe place to live and the essentials to fill it, plus your rights as a tenant.",
    "blurb": "Find a home, know your rights, and access essential supports.",
    "icon": "House"
  },
  {
    "slug": "legal",
    "title": "Legal Support & Rights",
    "subtitle": "Knowing your rights, and where to get free help when something feels unfair.",
    "blurb": "Understand your rights and access free legal help.",
    "icon": "Scales"
  },
  {
    "slug": "social",
    "title": "Social Integration & Community Connection",
    "subtitle": "Building a circle of people, friends, mentors, and community, in a new city.",
    "blurb": "Connect with your community and build real relationships.",
    "icon": "UsersThree"
  },
  {
    "slug": "mental-health",
    "title": "Mental Health & Well-Being",
    "subtitle": "Permission to feel overwhelmed, and real support when you need more than that.",
    "blurb": "Take care of your emotional health during the transition.",
    "icon": "HeartStraight"
  },
  {
    "slug": "financial",
    "title": "Financial Literacy & Money Management",
    "subtitle": "Understanding Canadian banking, credit, and taxes from scratch.",
    "blurb": "Manage your money and build credit history in Canada.",
    "icon": "Coins"
  },
  {
    "slug": "working-holiday",
    "title": "Working Holiday Visa (IEC)",
    "subtitle": "Everything you need to work and travel in Canada on an International Experience Canada permit.",
    "blurb": "Plan your International Experience Canada permit, from application to arrival.",
    "icon": "AirplaneTilt"
  },
  {
    "slug": "education",
    "title": "Education & Learning in BC",
    "subtitle": "Registering for school, funding further study, and building Canadian credentials.",
    "blurb": "Register for school, fund your studies, and keep learning in BC.",
    "icon": "GraduationCap"
  },
  {
    "slug": "healthcare",
    "title": "Healthcare & Wellness",
    "subtitle": "Getting into BC's health system, and knowing what it does and does not cover.",
    "blurb": "See a doctor, fill a prescription, and understand what MSP covers.",
    "icon": "Stethoscope"
  },
  {
    "slug": "transportation",
    "title": "Transportation & Getting Around",
    "subtitle": "Driving, transit, and ferries: the practical logistics of moving around the province.",
    "blurb": "Get your licence, ride transit, and travel around British Columbia.",
    "icon": "Bus"
  }
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
