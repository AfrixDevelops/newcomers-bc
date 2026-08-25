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
  /** Short name for tight spaces such as the start-here tier. */
  shortTitle: string;
  /** One-line summary on the home grid card. */
  blurb: string;
  /** Longer intro line on the category page. */
  subtitle: string;
  /** Phosphor icon name, resolved in components/CategoryIcon.tsx. */
  icon: string;
  /**
   * Category colour. Saturated enough to carry white on the cream
   * ground; the dark variant is bright enough to carry near-black on
   * the dark ground. Colour here is a recognition aid, not decoration:
   * it lets someone find "the green one" without reading English.
   */
  color: string;
  colorDark: string;
  /**
   * First-week survival topics. These get the larger cards, because
   * twelve equal cards refuse to answer "where do I begin?".
   */
  startHere?: boolean;
}

export const categories: Category[] = [
  {
    slug: "settlement",
    title: "Settlement & Navigation",
    shortTitle: "Settlement",
    subtitle:
      "The first-week essentials: the paperwork and people that unlock everything else.",
    blurb: "Get started with essential services and find your way around BC.",
    icon: "Compass",
    // Darkened from #0D7C8A so white body copy clears WCAG AA on the
    // solid start-here card.
    color: "#0B6E7A",
    colorDark: "#4FCBDB",
    startHere: true,
  },
  {
    slug: "housing",
    title: "Housing & Basic Needs",
    shortTitle: "Housing",
    subtitle:
      "A safe place to live and the essentials to fill it, plus your rights as a tenant.",
    blurb: "Find a home, know your rights, and access essential supports.",
    icon: "House",
    color: "#BE3B26",
    colorDark: "#FF8A6E",
    startHere: true,
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    shortTitle: "Healthcare",
    subtitle:
      "Getting into BC's health system, and knowing what it does and does not cover.",
    blurb: "See a doctor, fill a prescription, and understand what MSP covers.",
    icon: "Stethoscope",
    color: "#BF2A48",
    colorDark: "#FF8494",
    startHere: true,
  },
  {
    slug: "employment",
    title: "Employment & Credentialing",
    shortTitle: "Employment",
    subtitle: "Getting your experience recognized and finding work that fits it.",
    blurb: "Find work and get your credentials recognized in BC.",
    icon: "Briefcase",
    // Darkened from #B4690E, which failed WCAG AA against white body copy.
    color: "#9A5A0C",
    colorDark: "#F0AE55",
    startHere: true,
  },
  {
    slug: "language",
    title: "Language & Communication",
    shortTitle: "Language",
    subtitle:
      "Building English confidence without pressure, through classes, practice, and everyday tools.",
    blurb: "Improve your English skills with free classes and everyday tools.",
    icon: "Translate",
    color: "#4238C9",
    colorDark: "#9AA0FF",
  },
  {
    slug: "legal",
    title: "Legal Support & Rights",
    shortTitle: "Legal",
    subtitle: "Knowing your rights, and where to get free help when something feels unfair.",
    blurb: "Understand your rights and access free legal help.",
    icon: "Scales",
    color: "#8433AE",
    colorDark: "#CE94EB",
  },
  {
    slug: "financial",
    title: "Financial Literacy & Money Management",
    shortTitle: "Money",
    subtitle: "Understanding Canadian banking, credit, and taxes from scratch.",
    blurb: "Manage your money and build credit history in Canada.",
    icon: "Coins",
    // Darkened from #9E7C0C; yellows carry the least contrast against
    // white, so this one needed the largest adjustment to clear AA.
    color: "#866909",
    colorDark: "#E0BC4A",
  },
  {
    slug: "transportation",
    title: "Transportation & Getting Around",
    shortTitle: "Transport",
    subtitle:
      "Driving, transit, and ferries: the practical logistics of moving around the province.",
    blurb: "Get your licence, ride transit, and travel around British Columbia.",
    icon: "Bus",
    color: "#0E7268",
    colorDark: "#4FCBB8",
  },
  {
    slug: "mental-health",
    title: "Mental Health & Well-Being",
    shortTitle: "Well-being",
    subtitle: "Permission to feel overwhelmed, and real support when you need more than that.",
    blurb: "Take care of your emotional health during the transition.",
    icon: "HeartStraight",
    color: "#157F52",
    colorDark: "#5FD198",
  },
  {
    slug: "social",
    title: "Social Integration & Community Connection",
    shortTitle: "Community",
    subtitle: "Building a circle of people, friends, mentors, and community, in a new city.",
    blurb: "Connect with your community and build real relationships.",
    icon: "UsersThree",
    color: "#BC2A70",
    colorDark: "#FF87B4",
  },
  {
    slug: "education",
    title: "Education & Learning in BC",
    shortTitle: "Education",
    subtitle: "Registering for school, funding further study, and building Canadian credentials.",
    blurb: "Register for school, fund your studies, and keep learning in BC.",
    icon: "GraduationCap",
    color: "#6E3391",
    colorDark: "#C08FE0",
  },
  {
    slug: "working-holiday",
    title: "Working Holiday Visa (IEC)",
    shortTitle: "Working Holiday",
    subtitle:
      "Everything you need to work and travel in Canada on an International Experience Canada permit.",
    blurb: "Plan your International Experience Canada permit, from application to arrival.",
    icon: "AirplaneTilt",
    color: "#1160BE",
    colorDark: "#74B4FF",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const startHereCategories = categories.filter((c) => c.startHere);
export const otherCategories = categories.filter((c) => !c.startHere);
