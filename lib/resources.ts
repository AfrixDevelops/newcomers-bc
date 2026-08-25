import type { CategorySlug } from './categories';

/**
 * Tip        - a fact worth knowing
 * Action     - something to do this week
 * Next step  - worth planning for later
 * Community  - peer knowledge, no official link; treat as anecdotal
 */
export type ResourceType = 'Tip' | 'Action' | 'Next step' | 'Community';

export interface Resource {
  category: CategorySlug;
  /** Short category word shown on the card itself. */
  label: string;
  type: ResourceType;
  text: string;
  /** Name of the organization behind the link. Absent on Community cards. */
  org?: string;
  /** Bare domain, shown next to the org name. */
  domain?: string;
  url?: string;
  /** Community cards only: why there is no official link. */
  note?: string;
}

export const resources: Resource[] = [
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "Apply for your Social Insurance Number (SIN) as soon as you arrive. You need it to work, get paid, or open most bank accounts.",
    "org": "Service Canada - Get a SIN",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/employment-social-development/services/sin.html"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "Dial 2-1-1, free, in 150+ languages, to find any local service near your postal code, from ESL classes to emergency shelter.",
    "org": "BC211",
    "domain": "bc211.ca",
    "url": "https://bc211.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Next step",
    "text": "Once you're settled, look into your Permanent Resident card renewal timeline. It's easy to forget until you need to travel.",
    "org": "IRCC - PR Card",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card.html"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "Your BC Services Card is your main provincial ID and health card. Apply as soon as your address is confirmed.",
    "org": "Province of BC - BC Services Card",
    "domain": "gov.bc.ca",
    "url": "https://www.gov.bc.ca/bcservicescard"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "Register for MSP, BC's public health insurance, right away. Coverage can take up to three months to start.",
    "org": "Health Insurance BC - MSP",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "WelcomeBC's directory connects you to a free settlement agency near your postal code, the fastest way to get personalized help.",
    "org": "WelcomeBC - Find Services",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "A single hub covering everything from your first weeks in BC to long-term settlement, written in plain language.",
    "org": "WelcomeBC - Newcomers' Guide",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "Search by city and service type to find the settlement agency closest to you.",
    "org": "WelcomeBC - Settlement Directory",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "IRCC's national settlement page links to free programs that help you find housing, work, and community right after you land.",
    "org": "IRCC - Community Connections",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "A library-run FAQ answering the everyday questions newcomers ask most, from health cards to school registration.",
    "org": "NewToBC - Questions & Answers",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca/settlement-information-for-newcomers/settling-in-bc-questions-and-answers/"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "A curated list of vetted settlement guides in multiple languages, hosted through your local public library.",
    "org": "NewToBC - Settlement Guides",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca/settlement-information-for-newcomers/immigrant-settlement-guides/"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "Drop-in welcome centres offer in-person orientation, referrals, and a friendly first point of contact.",
    "org": "Immigrant Welcome Centre",
    "domain": "issbc.org",
    "url": "https://issbc.org/locations/vancouver-welcome-centre/"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "BC's largest settlement agency offers one-on-one navigation to help you set priorities for your first year.",
    "org": "ISSofBC - Settlement Navigation",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "Free settlement, employment, and immigration support for newcomers, international students, and temporary workers.",
    "org": "S.U.C.C.E.S.S. - BC Newcomer Services Program",
    "domain": "successbcnsp.com",
    "url": "https://www.successbcnsp.com"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Tip",
    "text": "A short, structured orientation covering rights, services, and daily life basics, offered free through provincial settlement partners.",
    "org": "WelcomeBC - Settlement Orientation",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Action",
    "text": "A free library card unlocks newcomer guides, free wifi, English learning tools, and a quiet space to fill out paperwork.",
    "org": "Vancouver Public Library",
    "domain": "vpl.ca",
    "url": "https://www.vpl.ca"
  },
  {
    "category": "settlement",
    "label": "Settlement",
    "type": "Next step",
    "text": "Volunteering is a low-pressure way to meet people, practise English, and start building a Canadian reference.",
    "org": "GoVolunteer",
    "domain": "govolunteer.ca",
    "url": "https://www.govolunteer.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Action",
    "text": "Sign up for free LINC classes (Language Instruction for Newcomers to Canada). Childcare and transit help are often included.",
    "org": "IRCC - LINC Program",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/language-classes.html"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Most public libraries run free, drop-in English conversation circles: low-pressure practice with no homework or test.",
    "org": "Vancouver Public Library",
    "domain": "vpl.ca",
    "url": "https://www.vpl.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Point your phone's camera at any sign, letter, or menu. Translation apps read printed text instantly, no typing needed.",
    "org": "Google Translate - Camera mode",
    "domain": "translate.google.com",
    "url": "https://translate.google.com"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Drop-in conversation circles focused on everyday English, no registration required.",
    "org": "Chimo Community Services",
    "domain": "chimoservices.com",
    "url": "https://chimoservices.com"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Surrey-based English practice paired with a wider community connections program for newcomer families.",
    "org": "Options Community Services",
    "domain": "options.bc.ca",
    "url": "https://www.options.bc.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Simon Fraser University's Surrey campus runs casual English conversation groups open to the community.",
    "org": "SFU Continuing Studies",
    "domain": "sfu.ca",
    "url": "https://www.sfu.ca/continuing-studies.html"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Free, in-person conversation clubs for adults at multiple skill levels, with a focus on connection, not grammar drills.",
    "org": "YMCA BC - English Conversation Club",
    "domain": "ymcabc.ca",
    "url": "https://www.ymcabc.ca/employment-and-newcomers/english-conversation-club"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "A province-wide network of free, self-paced English lessons for beginner to intermediate learners.",
    "org": "BC Free ESL Network",
    "domain": "bc.free-esl.ca",
    "url": "https://bc.free-esl.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Action",
    "text": "No sign-up needed: drop in to MOSAIC's weekly English classes to start practising right away.",
    "org": "MOSAIC Engage",
    "domain": "engage.mosaicbc.org",
    "url": "https://engage.mosaicbc.org/english"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Settlement information translated into dozens of languages, useful for family members who aren't ready to read in English yet.",
    "org": "WelcomeBC - Multi-Language Resources",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Tip",
    "text": "Public libraries across BC host newcomer language programs and multilingual collections, all free with a library card.",
    "org": "NewToBC - Library Hub",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca"
  },
  {
    "category": "language",
    "label": "Language",
    "type": "Action",
    "text": "Most BC libraries offer free access to language-learning apps like Mango Languages with just a library card.",
    "org": "NewToBC - Library Tools",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Action",
    "text": "Drop in to a WorkBC Centre for free resume help, job leads, and skills training. Most locations take walk-ins.",
    "org": "WorkBC Centres",
    "domain": "workbc.ca",
    "url": "https://www.workbc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Next step",
    "text": "Check whether your profession is regulated in BC, like nursing or engineering. Regulated roles need licensing before you can work in them.",
    "org": "WorkBC - Immigrate to BC",
    "domain": "workbc.ca",
    "url": "https://www.workbc.ca/immigrate-to-bc"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "Get your international credentials assessed early: many employers and licensing bodies in Canada require a formal evaluation.",
    "org": "World Education Services",
    "domain": "wes.org",
    "url": "https://www.wes.org"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "An overview of how to search for jobs, understand BC's labour market, and get your credentials recognized.",
    "org": "WelcomeBC - Work in B.C.",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "BC's provincial office overseeing fair, timely credential recognition across regulated professions.",
    "org": "Office for International Credential Recognition",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/regulatory-authorities/oicr"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Action",
    "text": "One-on-one employment counselling that connects your international experience to BC's job market.",
    "org": "ISSofBC - Employment Support",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Action",
    "text": "Free career counselling, resume support, and credential-recognition guidance for newcomers in Surrey and the Fraser Valley.",
    "org": "PICS - Career Services",
    "domain": "pics.bc.ca",
    "url": "https://pics.bc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "Free job search workshops, one-on-one coaching, and skills training available at WorkBC Centres province-wide.",
    "org": "WorkBC Employment Support",
    "domain": "workbc.ca",
    "url": "https://www.workbc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Next step",
    "text": "IEC-BC connects skilled immigrants with employers actively looking to hire international talent.",
    "org": "Immigrant Employment Council of BC",
    "domain": "iecbc.ca",
    "url": "https://iecbc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Next step",
    "text": "Sector-specific programs in health care, tech, and trades help skilled immigrants map a realistic path back into their field.",
    "org": "ISSofBC - Career Paths for Skilled Immigrants",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Next step",
    "text": "Low-interest loans to help cover the cost of credential assessments, exams, or bridging programs.",
    "org": "PICS - Foreign Credential Recognition Loans",
    "domain": "pics.bc.ca",
    "url": "https://pics.bc.ca"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "The provincial law that sets timelines and fairness rules for how regulators assess your foreign credentials.",
    "org": "International Credentials Recognition Act",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/regulatory-authorities/oicr/about/icra-overview"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Tip",
    "text": "World Education Services publishes practical guides on what documents to gather before requesting a credential assessment.",
    "org": "WES - Credential Recognition Tips",
    "domain": "wes.org",
    "url": "https://www.wes.org"
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Community",
    "text": "Newcomers often share real resume and job-search experiences, useful alongside, not instead of, official advice.",
    "org": "r/canadaexpats",
    "domain": "reddit.com",
    "url": "https://www.reddit.com/r/canadaexpats/",
    "note": "Peer discussion, not official guidance. Cross-check anything important with WorkBC."
  },
  {
    "category": "employment",
    "label": "Employment",
    "type": "Community",
    "text": "Applicants compare which work-experience documents held up best for BC PNP applications.",
    "org": "CanadaVisa Discussion Board",
    "domain": "canadavisa.com",
    "url": "https://www.canadavisa.com/canada-immigration-discussion-board/",
    "note": "Peer discussion, not official guidance. Confirm document requirements with IRCC directly."
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "BC's Residential Tenancy Branch explains deposits, rent increases, and eviction rules in plain language. Know them before you sign.",
    "org": "Residential Tenancy Branch",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Action",
    "text": "Apply for your BC Services Card and MSP coverage right away. There's often a waiting period, so earlier is better.",
    "org": "Health Insurance BC - MSP",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "Short on groceries some weeks? Food banks are free, no-judgment, and open to anyone who needs them. Find your nearest one.",
    "org": "BC211 - Food Bank Directory",
    "domain": "bc211.ca",
    "url": "https://bc211.ca"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Action",
    "text": "BC Housing lists subsidized and below-market rental listings across the province, searchable by region.",
    "org": "BC Housing - Find Housing",
    "domain": "bchousing.org",
    "url": "https://www.bchousing.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "A plain-language walkthrough of renting in BC, from viewing a unit to signing your first lease.",
    "org": "WelcomeBC - Newcomers' Guide",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "IRCC's overview of housing options and tenant protections that apply no matter which province you land in.",
    "org": "IRCC - Housing Overview",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants.html"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "Tenancy guides translated into multiple languages, so the fine print doesn't get lost in translation.",
    "org": "Residential Tenancy Branch - Multi-Language",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "Region-specific listings and advice for newcomers house-hunting in one of Canada's tightest rental markets.",
    "org": "BC Housing - Metro Vancouver",
    "domain": "bchousing.org",
    "url": "https://www.bchousing.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Action",
    "text": "ISSofBC's settlement counsellors can help you understand leases, tenant rights, and where to start looking for a unit.",
    "org": "ISSofBC - Get Settled",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Next step",
    "text": "Apply to the Housing Registry waitlist early. Subsidized units often have long wait times in high-demand areas.",
    "org": "BC Housing - Subsidized Housing",
    "domain": "bchousing.org",
    "url": "https://www.bchousing.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "A settlement-sector toolkit explaining BC's housing system, written specifically with newcomers in mind.",
    "org": "AMSSA Housing Toolkit",
    "domain": "amssa.org",
    "url": "https://www.amssa.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Action",
    "text": "Free legal advice and advocacy specifically for tenants, including help completing Residential Tenancy Branch forms.",
    "org": "Tenant Resource & Advisory Centre",
    "domain": "tenants.bc.ca",
    "url": "https://tenants.bc.ca"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "Call 2-1-1 to find emergency shelter, transition housing, or short-term help paying rent.",
    "org": "BC211 - Housing Help",
    "domain": "bc211.ca",
    "url": "https://bc211.ca"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Tip",
    "text": "In tight rental markets like Metro Vancouver, working with a rental-focused agent or listing service can speed up your search.",
    "org": "BC Housing - Rental Resources",
    "domain": "bchousing.org",
    "url": "https://www.bchousing.org"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Next step",
    "text": "Housing co-ops offer stable, below-market rent, but waitlists can run years. Apply as early as possible.",
    "org": "Co-operative Housing Federation of BC",
    "domain": "chf.bc.ca",
    "url": "https://www.chf.bc.ca"
  },
  {
    "category": "housing",
    "label": "Housing",
    "type": "Next step",
    "text": "Non-profit housing providers across BC offer income-based rent. Their directory helps you find one near you.",
    "org": "BC Non-Profit Housing Association",
    "domain": "bcnpha.ca",
    "url": "https://bcnpha.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "Every worker in BC is protected by minimum wage, overtime, and workplace-safety laws, regardless of immigration status.",
    "org": "Employment Standards Branch",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "Can't afford a lawyer? Legal Aid BC offers free advice and representation for many housing, family, and immigration matters.",
    "org": "Legal Aid BC",
    "domain": "legalaid.bc.ca",
    "url": "https://legalaid.bc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "Free legal clinics exist specifically for human rights, disability, and mental-health-related legal questions.",
    "org": "Community Legal Assistance Society",
    "domain": "clasbc.net",
    "url": "https://clasbc.net"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "Volunteer lawyers give up to 30 minutes of free advice by phone on family, immigration, and civil law questions.",
    "org": "Access Pro Bono",
    "domain": "accessprobono.ca",
    "url": "https://www.accessprobono.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "IRCC's website is the authoritative source on your status, permit conditions, and renewal deadlines.",
    "org": "IRCC - Immigration Law",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship.html"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "If you've faced discrimination based on race, religion, or place of origin, you can file a free complaint with the Tribunal.",
    "org": "BC Human Rights Tribunal",
    "domain": "bchrt.bc.ca",
    "url": "https://www.bchrt.bc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "Free legal representation for migrant workers on closed work permits facing employment or immigration issues.",
    "org": "Migrant Workers Centre",
    "domain": "mwcbc.ca",
    "url": "https://mwcbc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "Temporary foreign workers have the same basic workplace protections as any other worker in BC, regardless of permit type.",
    "org": "Migrant Workers Centre - Worker Rights",
    "domain": "mwcbc.ca",
    "url": "https://mwcbc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "Plain-language explanations of BC employment law, written and vetted by legal professionals.",
    "org": "Clicklaw - Employment Law",
    "domain": "clicklaw.bc.ca",
    "url": "https://www.clicklaw.bc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "Free legal advocacy for newcomers navigating immigration, tenancy, or human rights issues.",
    "org": "MOSAIC - Legal Advocacy Program",
    "domain": "mosaicbc.org",
    "url": "https://www.mosaicbc.org"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Action",
    "text": "Legal Aid BC covers some refugee and immigration matters for those who qualify financially.",
    "org": "Legal Aid BC - Immigration & Refugee Help",
    "domain": "legalaid.bc.ca",
    "url": "https://legalaid.bc.ca"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Tip",
    "text": "AMSSA's directory connects you to legal, settlement, and advocacy services across BC's immigrant-serving sector.",
    "org": "AMSSA - Service Directory",
    "domain": "amssa.org",
    "url": "https://www.amssa.org"
  },
  {
    "category": "legal",
    "label": "Legal",
    "type": "Community",
    "text": "People share firsthand accounts of workplace rights issues in Canada and how they resolved them.",
    "org": "r/legaladvicecanada",
    "domain": "reddit.com",
    "url": "https://www.reddit.com/r/legaladvicecanada/",
    "note": "Peer discussion, not legal advice. For your own situation, contact Legal Aid BC or Employment Standards."
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Action",
    "text": "Join a free newcomer social group. Settlement agencies run cultural meetups, mentorship, and family programs year-round.",
    "org": "ISSofBC - Newcomer Programs",
    "domain": "issbc.org",
    "url": "https://www.issbc.org"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "Your local community centre offers low-cost drop-in programs: fitness classes, parent-and-tot groups, and seniors' circles.",
    "org": "Vancouver Parks & Recreation",
    "domain": "vancouver.ca",
    "url": "https://vancouver.ca/parks-recreation-culture"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Next step",
    "text": "Volunteering is one of the fastest ways to make friends, practise English, and gain a Canadian reference for your resume.",
    "org": "GoVolunteer",
    "domain": "govolunteer.ca",
    "url": "https://www.govolunteer.ca"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "Most municipalities offer discounted recreation passes for newcomers and low-income households. Ask at your local community centre.",
    "org": "Vancouver Parks & Recreation",
    "domain": "vancouver.ca",
    "url": "https://vancouver.ca/parks-recreation-culture"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "AMSSA's member directory can point you toward cultural associations and community groups specific to your background.",
    "org": "AMSSA - Member Directory",
    "domain": "amssa.org",
    "url": "https://www.amssa.org"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Action",
    "text": "Free integration programming that pairs practical settlement help with social and cultural connection events.",
    "org": "S.U.C.C.E.S.S. - Immigrant Settlement & Integration Program",
    "domain": "successbc.ca",
    "url": "https://successbc.ca/isip/"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "Community events and peer connections designed specifically for people in their first two years in BC.",
    "org": "S.U.C.C.E.S.S. - BC Newcomer Services Program",
    "domain": "successbcnsp.com",
    "url": "https://www.successbcnsp.com"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "Libraries host newcomer meetups, cultural programming, and family events year-round, all free.",
    "org": "NewToBC - Library Community Resources",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Action",
    "text": "Pairs refugee newcomers with local community members for friendship, practical support, and cultural exchange.",
    "org": "Embrace Refugees BC Society",
    "domain": "embracebc.org",
    "url": "https://embracebc.org"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Tip",
    "text": "Cultural meetups, family programs, and peer groups organized around shared language or country of origin.",
    "org": "ISSofBC - Community Programs",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Action",
    "text": "Library programs are one of the easiest, lowest-pressure ways to meet people in a new city.",
    "org": "NewToBC - Get a Library Card",
    "domain": "newtobc.ca",
    "url": "https://newtobc.ca"
  },
  {
    "category": "social",
    "label": "Social",
    "type": "Next step",
    "text": "Long-term volunteering builds a real network over time, not just a one-off event.",
    "org": "GoVolunteer - Ongoing Roles",
    "domain": "govolunteer.ca",
    "url": "https://www.govolunteer.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Culture shock and settlement stress are normal, not a sign you're failing. Most newcomers feel it in the first year.",
    "org": "ISSofBC - Counselling Services",
    "domain": "issbc.org",
    "url": "https://www.issbc.org"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Action",
    "text": "Call or text 988, free and confidential, any time of day, if you're in crisis or just need someone to talk to.",
    "org": "988 Suicide Crisis Helpline",
    "domain": "988.ca",
    "url": "https://988.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Next step",
    "text": "Ask your settlement worker about free multilingual counselling: many agencies offer support in your first language.",
    "org": "MOSAIC BC",
    "domain": "mosaicbc.org",
    "url": "https://www.mosaicbc.org"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Action",
    "text": "Many settlement agencies offer free short-term counselling. Ask your settlement worker for a referral.",
    "org": "ISSofBC - Counselling",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Action",
    "text": "Call or text any time, day or night, for free, confidential crisis support. You don't need to be in danger to call.",
    "org": "Crisis Centre BC",
    "domain": "crisiscentre.bc.ca",
    "url": "https://www.crisiscentre.bc.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Peer support groups where other newcomers share what settlement stress actually feels like, and how they got through it.",
    "org": "ISSofBC - Newcomer Support Groups",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "The province's directory of mental health and substance use services, searchable by region.",
    "org": "Province of BC - Mental Health Supports",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/mental-health-support-in-bc"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "IRCC's overview of common mental health challenges during settlement, and where to find help.",
    "org": "IRCC - Newcomer Mental Health",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship.html"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Action",
    "text": "Call 8-1-1 to talk to a nurse and get connected to mental health resources, with interpretation in over 130 languages.",
    "org": "HealthLink BC",
    "domain": "healthlinkbc.ca",
    "url": "https://www.healthlinkbc.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Resources specifically addressing trauma and mental health for refugees and refugee claimants.",
    "org": "BC Refugee Hub - Mental Health Toolkit",
    "domain": "bcrefugeehub.ca",
    "url": "https://bcrefugeehub.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Wellness programming that treats mental health as part of settlement, not separate from it.",
    "org": "ISSofBC - Newcomer Wellness",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Action",
    "text": "Free or low-cost counselling available in multiple languages for Surrey and Delta-area newcomers.",
    "org": "DIVERSEcity - Multilingual Counselling",
    "domain": "dcrs.ca",
    "url": "https://www.dcrs.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Call or text 988 for suicide crisis support, or 310-6789 for BC's general mental health crisis line, no area code needed.",
    "org": "Crisis Centre BC - Crisis Lines",
    "domain": "crisiscentre.bc.ca",
    "url": "https://www.crisiscentre.bc.ca"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "A free, evidence-based app with practical tools for managing anxiety day to day.",
    "org": "Anxiety Canada - MindShift CBT",
    "domain": "anxietycanada.com",
    "url": "https://www.anxietycanada.com"
  },
  {
    "category": "mental-health",
    "label": "Well-being",
    "type": "Tip",
    "text": "Mental health and settlement support extended to temporary residents, not just permanent residents.",
    "org": "MOSAIC - Support for Temporary Residents",
    "domain": "mosaicbc.org",
    "url": "https://www.mosaicbc.org"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Action",
    "text": "Ask about a no-fee newcomer bank account. Most major Canadian banks have starter accounts built for new immigrants.",
    "org": "Financial Consumer Agency of Canada",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "A secured credit card, used lightly and paid off monthly, is the fastest way to build the credit history that Canadian renting and loans rely on.",
    "org": "FCAC - Building Credit",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Next step",
    "text": "File a tax return every year, even with little or no income. It's how you unlock the GST credit and Canada Child Benefit.",
    "org": "Canada Revenue Agency",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/revenue-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Action",
    "text": "Free workshops covering budgeting, banking, and credit, taught with newcomers' situations in mind.",
    "org": "PICS - Financial Literacy Workshops",
    "domain": "pics.bc.ca",
    "url": "https://pics.bc.ca"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Action",
    "text": "One-on-one financial coaching and tax clinics offered in Arabic, Cantonese, Mandarin, Spanish, and more.",
    "org": "Family Services of Greater Vancouver",
    "domain": "fsgv.ca",
    "url": "https://fsgv.ca/what-we-do/financial-empowerment/"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "The federal government's plain-language hub for budgeting, banking, credit, and avoiding debt.",
    "org": "FCAC - Financial Basics",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "Short videos walking through Canadian banking, credit, and taxes, made specifically for people new to the system.",
    "org": "WelcomeBC - Money Management Videos",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Next step",
    "text": "An eight-month program building financial, life, and job skills, based in Victoria and West Shore.",
    "org": "Mennonite Central Committee BC - New Foundations",
    "domain": "mcc.org",
    "url": "https://mcc.org/what-we-do/where-we-work/canada/bc/new-foundations-program"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "Community-based financial literacy resources covering the basics of managing money in a new currency and system.",
    "org": "FCAC - Money Matters",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "Independent guides on banking, credit scores, and cost of living, written specifically for newcomers.",
    "org": "Moving2Canada - Finances Hub",
    "domain": "moving2canada.com",
    "url": "https://moving2canada.com"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "A bank-provided calculator to estimate your first-year costs. Useful as a starting point, but compare against independent sources too.",
    "org": "CIBC - Newcomer Banking (bank tool)",
    "domain": "cibc.com",
    "url": "https://www.cibc.com/en/journeys/new-to-canada.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Next step",
    "text": "Once you're settled, tax-sheltered savings accounts are one of the most valuable, and most confusing, parts of Canadian finances.",
    "org": "FCAC - TFSAs & RRSPs",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "BC's cost of living, especially housing, runs higher than the Canadian average. Budget accordingly from month one.",
    "org": "Moving2Canada - Budgeting for BC",
    "domain": "moving2canada.com",
    "url": "https://moving2canada.com"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "Credit unions often have lower fees and more flexible ID requirements for newcomers than the big banks.",
    "org": "FCAC - Avoiding Bank Fees",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/financial-consumer-agency.html"
  },
  {
    "category": "financial",
    "label": "Financial",
    "type": "Tip",
    "text": "Newcomers are frequently targeted by immigration and banking scams. Report anything suspicious to the Anti-Fraud Centre.",
    "org": "Canadian Anti-Fraud Centre",
    "domain": "antifraudcentre-centreantifraude.ca",
    "url": "https://antifraudcentre-centreantifraude.ca"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "Canada's International Experience Canada (IEC) program lets young adults from partner countries work and travel in Canada for up to two years.",
    "org": "IRCC - International Experience Canada",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "No. Most IEC categories give you an open work permit, so you can search for work after you arrive.",
    "org": "IRCC - IEC Eligibility",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Action",
    "text": "Create a profile in the IEC pool, wait for an invitation to apply, then submit your work permit application online.",
    "org": "IRCC - How to Apply",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Action",
    "text": "A valid passport, proof of funds, and a clean criminal record check are the essentials. Gather them before your profile is drawn.",
    "org": "IRCC - IEC Application Checklist",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "Some countries require you to apply through a Recognized Organization rather than directly through IRCC. Check which applies to you.",
    "org": "IRCC - Recognized Organizations",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Action",
    "text": "IEC participants need private health insurance for their first months in BC, then can apply for MSP once eligible.",
    "org": "Health Insurance BC - MSP",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "Open work permit holders have the same employment standards protections as any other worker in BC.",
    "org": "Employment Standards Branch",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "BC sets a province-wide minimum wage and workplace safety standards enforced by WorkSafeBC.",
    "org": "WorkSafeBC",
    "domain": "worksafebc.com",
    "url": "https://www.worksafebc.com"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Action",
    "text": "Free legal support if you run into employment or work-permit issues while on a working holiday.",
    "org": "Migrant Workers Centre",
    "domain": "mwcbc.ca",
    "url": "https://mwcbc.ca"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "General newcomer settlement support extends to temporary residents on IEC permits too.",
    "org": "MOSAIC - Support for Working Holiday Makers",
    "domain": "mosaicbc.org",
    "url": "https://www.mosaicbc.org"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "Have your port of entry letter, proof of funds, and health insurance ready. A border officer finalizes your work permit on arrival.",
    "org": "Canada Border Services Agency",
    "domain": "cbsa-asfc.gc.ca",
    "url": "https://www.cbsa-asfc.gc.ca"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Tip",
    "text": "MSP coverage typically starts on the first day of the third month after you establish residency in BC. Plan your private insurance around that gap.",
    "org": "Health Insurance BC - MSP Start Date",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp"
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Community",
    "text": "Working holidaymakers share which cities and sectors are hiring fastest for short-term work.",
    "org": "r/WorkingHolidayCanada",
    "domain": "reddit.com",
    "url": "https://www.reddit.com/r/WorkingHolidayCanada/",
    "note": "Peer discussion, not official guidance. Confirm permit rules with IRCC."
  },
  {
    "category": "working-holiday",
    "label": "IEC",
    "type": "Action",
    "text": "Double-check your profile details before submitting. Errors can delay or disqualify your invitation to apply.",
    "org": "IRCC - IEC Profile Tips",
    "domain": "canada.ca",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Tip",
    "text": "An overview of how BC's K-12 and post-secondary systems work, written for people new to Canada.",
    "org": "WelcomeBC - Education Info",
    "domain": "welcomebc.ca",
    "url": "https://www.welcomebc.ca"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Action",
    "text": "Search and apply to any of BC's 25 public post-secondary institutions through one account.",
    "org": "EducationPlannerBC",
    "domain": "educationplannerbc.ca",
    "url": "https://www.educationplannerbc.ca"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Action",
    "text": "Apply for loans, grants, and scholarships to help cover the cost of BC post-secondary education.",
    "org": "StudentAid BC",
    "domain": "studentaidbc.ca",
    "url": "https://studentaidbc.ca"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Tip",
    "text": "A newspaper written for adult English learners, with three reading levels covering BC and Canada news.",
    "org": "The Westcoast Reader",
    "domain": "thewestcoastreader.com",
    "url": "https://thewestcoastreader.com"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Tip",
    "text": "Bridging programs and skills training that connect your existing education to Canadian credentials.",
    "org": "ISSofBC - Education & Training",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Next step",
    "text": "Scholarships specifically for newcomer and refugee students pursuing further education in BC.",
    "org": "ISSofBC - Education Awards",
    "domain": "issbc.org",
    "url": "https://issbc.org"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Tip",
    "text": "How to register your children for school, including the English language support most districts offer.",
    "org": "BC Ministry of Education",
    "domain": "gov.bc.ca",
    "url": "https://www2.gov.bc.ca/gov/content/education-training/k-12"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Action",
    "text": "The Newcomer Welcome Centre registers students from over 40 countries and offers multilingual support for families.",
    "org": "Vancouver School Board - Newcomer Welcome Centre",
    "domain": "vsb.bc.ca",
    "url": "https://www.vsb.bc.ca/nwc"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Community",
    "text": "Residents recommend which library programs and free local courses are actually worth your time.",
    "org": "r/britishcolumbia",
    "domain": "reddit.com",
    "url": "https://www.reddit.com/r/britishcolumbia/",
    "note": "Peer discussion, not official guidance. NewToBC lists verified library programs."
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Next step",
    "text": "Shorter, skills-focused courses can be a faster way back into the workforce while you plan longer-term studies.",
    "org": "EducationPlannerBC - Micro-Credentials",
    "domain": "educationplannerbc.ca",
    "url": "https://www.educationplannerbc.ca"
  },
  {
    "category": "education",
    "label": "Education",
    "type": "Community",
    "text": "Discussion on how Canadian institutions and employers evaluate credentials earned outside Canada.",
    "org": "r/ImmigrationCanada",
    "domain": "reddit.com",
    "url": "https://www.reddit.com/r/ImmigrationCanada/",
    "note": "Peer discussion, not official guidance. The Office for International Credential Recognition is the authority."
  }
];

export function resourcesByCategory(slug: string): Resource[] {
  return resources.filter((r) => r.category === slug);
}
