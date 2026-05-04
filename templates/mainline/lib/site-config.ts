/**
 * SITE CONFIG — single source of truth for all client-specific content.
 *
 * Identical shape to the Atrium template — both templates share this contract
 * so the agent can translate one client's data into either template without
 * re-shaping. Templates differ in HOW they render this data, not WHAT data
 * they need.
 *
 * Conventions:
 *  - Internal page links use Next.js routes — "/services", "/about", etc.
 *  - In-page anchors use "#section-id"
 *  - External links use "https://..." (Button auto-targets _blank)
 *  - Phone numbers in raw format ready for `tel:` — "555-867-5309"
 *  - Images: { src: "/img/file.jpg", alt: "..." } — empty src renders the
 *    "Client image" gradient placeholder
 *  - Optional fields (`?:`) — components handle absence gracefully
 */

// ─── Shared atom types ──────────────────────────────────────────────────────

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type NavLink = { label: string; href: string };

export type ImageRef = { src: string; alt: string };

// ─── Section types ──────────────────────────────────────────────────────────

export type FullHero = {
  eyebrow: string;
  headline: string;
  body: string;
  bullets?: string[];
  primaryCta: CTA;
  secondaryCta?: CTA;
  image: ImageRef;
};

export type PageHero = {
  eyebrow: string;
  headline: string;
  body: string;
};

export type FinalCtaBlock = {
  headline: string;
  body: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

// ─── SiteConfig ─────────────────────────────────────────────────────────────

export type SiteConfig = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
    locale: string;
    primaryPhone: string;
    primaryEmail: string;
  };

  topBar?: {
    leftLinks: NavLink[];
    rightLinks: NavLink[];
    phoneLabel: string;
    phone: string;
  };

  header: {
    logoText: string;
    logoSubtext?: string;
    navLinks: NavLink[];
    ctaLabel: string;
    ctaHref: string;
  };

  footer: {
    address: { line1: string; line2: string };
    phone: string;
    email: string;
    columns: { title: string; links: NavLink[] }[];
    missionTitle?: string;
    missionBody?: string;
    missionCta?: CTA;
    nonprofitNote?: string;
    socialLinks: NavLink[];
    copyright: string;
  };

  // ─── HOME PAGE ───
  home: {
    hero: FullHero;
    trustBadges?: {
      items: { eyebrow?: string; title: string; body: string }[];
    };
    servicesPreview: {
      eyebrow: string;
      headline: string;
      body?: string;
      cards: { title: string; body: string; cta: CTA }[];
    };
    aboutTeaser?: {
      eyebrow: string;
      headline: string;
      body: string;
      bullets: string[];
      cta: CTA;
      image: ImageRef;
    };
    testimonials?: {
      eyebrow: string;
      headline: string;
      items: { quote: string; name: string; role: string }[];
    };
    finalCta: FinalCtaBlock;
  };

  // ─── SERVICES PAGE ───
  services: {
    hero: PageHero;
    intro?: { headline: string; body: string };
    items: {
      title: string;
      body: string;
      bullets?: string[];
      image: ImageRef;
      cta?: CTA;
    }[];
    process?: {
      eyebrow: string;
      headline: string;
      steps: { number: string; title: string; body: string }[];
    };
    finalCta?: FinalCtaBlock;
  };

  // ─── ABOUT PAGE ───
  about: {
    hero: PageHero;
    story: {
      headline: string;
      body: string;
      bullets?: string[];
      image: ImageRef;
    };
    stats?: { items: { value: string; label: string }[] };
    values?: {
      eyebrow: string;
      headline: string;
      body?: string;
      items: { title: string; body: string }[];
    };
    team?: {
      eyebrow: string;
      headline: string;
      members: { name: string; role: string; bio?: string; image: ImageRef }[];
    };
    finalCta?: FinalCtaBlock;
  };

  // ─── CONTACT PAGE ───
  contact: {
    hero: PageHero;
    details: {
      address: { line1: string; line2: string };
      phone: string;
      email: string;
      hours: { day: string; time: string }[];
    };
    serviceArea?: { headline: string; body: string; areas: string[] };
    formHeadline: string;
    formSubhead?: string;
    finalCta?: FinalCtaBlock;
  };
};

// ────────────────────────────────────────────────────────────────────────────
// SEED CONTENT — Northpoint Heating & Cooling (demo HVAC). The agent replaces
// this wholesale per client. Everything below is data, not structure.
// ────────────────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  meta: {
    siteName: 'Northpoint Heating & Cooling',
    tagline: 'Heating, Cooling & Indoor Air \u2014 Done Right.',
    description:
      'Family-owned HVAC contractor serving Greater Grand Rapids since 1998. 24/7 emergency service, transparent flat-rate pricing, and a clean truck at every visit.',
    locale: 'en-US',
    primaryPhone: '616-555-0142',
    primaryEmail: 'service@northpointhvac.com',
  },

  topBar: {
    leftLinks: [
      { label: 'Service Area', href: '/contact' },
      { label: 'Financing', href: '/services' },
    ],
    rightLinks: [{ label: 'Existing Customer? Sign In', href: 'https://example.com/portal' }],
    phoneLabel: '24/7 Service',
    phone: '616-555-0142',
  },

  header: {
    logoText: 'Northpoint HVAC',
    logoSubtext: 'EST. 1998',
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaLabel: 'Request Service',
    ctaHref: '/contact',
  },

  footer: {
    address: { line1: '2840 Plainfield Ave NE', line2: 'Grand Rapids, MI 49505' },
    phone: '616-555-0142',
    email: 'service@northpointhvac.com',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Service',
        links: [
          { label: 'Schedule a Visit', href: '/contact' },
          { label: '24/7 Emergency', href: 'tel:616-555-0142' },
          { label: 'Financing Options', href: '/services' },
          { label: 'Maintenance Plans', href: '/services' },
        ],
      },
    ],
    missionTitle: 'Trusted Since 1998',
    missionBody:
      'Family-owned. Locally operated. NATE-certified technicians and a clean-truck guarantee on every visit. We stand behind every install with a written warranty.',
    missionCta: { label: 'Request Service', href: '/contact', variant: 'primary' },
    socialLinks: [
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Google', href: 'https://google.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
    copyright: '© 2026 Northpoint Heating & Cooling. Licensed & Insured. MI License #7102414.',
  },

  // ────────────────────── HOME ──────────────────────
  home: {
    hero: {
      eyebrow: 'Serving Greater Grand Rapids',
      headline: 'Reliable HVAC, when you need it most.',
      body: 'No-surprise pricing, NATE-certified technicians, and 24/7 emergency response across Kent, Ottawa, and Allegan counties.',
      bullets: ['Same-day service', '24/7 emergency dispatch', 'Flat-rate pricing'],
      primaryCta: { label: 'Request Service', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'Call 616-555-0142', href: 'tel:616-555-0142', variant: 'secondary' },
      image: { src: '', alt: 'A Northpoint technician working on a residential AC condenser' },
    },

    trustBadges: {
      items: [
        {
          eyebrow: 'NATE-Certified',
          title: 'Trained the right way.',
          body: 'Every tech on the truck holds NATE certification \u2014 the industry\u2019s independent benchmark for HVAC competency.',
        },
        {
          eyebrow: 'Flat-Rate Pricing',
          title: 'No surprises at the door.',
          body: 'You see the price before we start. No hourly meters, no upsells once we\u2019re in your home \u2014 ever.',
        },
        {
          eyebrow: '24/7 Emergency',
          title: 'Real people, real fast.',
          body: 'Furnace out at 2 AM? Call our after-hours line and you talk to a dispatcher \u2014 not a voicemail.',
        },
      ],
    },

    servicesPreview: {
      eyebrow: 'What We Do',
      headline: 'Full-service HVAC, top to bottom.',
      body: 'Heating, cooling, indoor air quality, and the maintenance plans that keep them all running. Residential and light commercial across West Michigan.',
      cards: [
        {
          title: 'Heating',
          body: 'Furnace repair, replacement, and tune-ups. Gas, propane, and high-efficiency systems from every major manufacturer.',
          cta: { label: 'See Heating Services', href: '/services' },
        },
        {
          title: 'Cooling',
          body: 'Central AC, ductless mini-splits, and heat pumps. Sized correctly for your home so you don\u2019t pay to overcool.',
          cta: { label: 'See Cooling Services', href: '/services' },
        },
        {
          title: 'Indoor Air Quality',
          body: 'Whole-home filtration, humidifiers, dehumidifiers, and UV. The boring system fixes that quietly transform a house.',
          cta: { label: 'See IAQ Services', href: '/services' },
        },
        {
          title: 'Maintenance',
          body: 'Twice-yearly tune-ups, priority dispatch, and a 15% discount on parts. The cheapest insurance you can buy on a system.',
          cta: { label: 'See Maintenance Plans', href: '/services' },
        },
      ],
    },

    aboutTeaser: {
      eyebrow: '27 Years In',
      headline: 'A family-owned shop, run like one.',
      body: 'Bill Whitmore founded Northpoint in 1998 with a single van and a rule: never sell a customer something they don\u2019t need. His son Mark runs operations now. Same rule.',
      bullets: [
        'Family-owned and operated since 1998.',
        'Twelve technicians, all W-2, all NATE-certified.',
        'Over 14,000 service calls completed in West Michigan.',
        'Clean-truck guarantee on every visit.',
      ],
      cta: { label: 'Meet the Team', href: '/about', variant: 'secondary' },
      image: { src: '', alt: 'The Northpoint team in front of the Plainfield Ave shop' },
    },

    testimonials: {
      eyebrow: 'Customer Reviews',
      headline: 'What people in West Michigan say.',
      items: [
        {
          quote: 'Showed up on a Saturday in February with the furnace out and a baby in the house. Had us heated by lunch. Fair price, no drama.',
          name: 'Erin M.',
          role: 'East Grand Rapids',
        },
        {
          quote: 'Got three quotes for a new system. Northpoint wasn\u2019t the cheapest, but they were the only ones who actually measured the ductwork. Worth every dollar.',
          name: 'Carlos D.',
          role: 'Hudsonville',
        },
        {
          quote: 'Tech called when he was 10 minutes out, wore boot covers, fixed the issue, and emailed me a written report by the time I got back to work. That\u2019s how it should go.',
          name: 'Becca J.',
          role: 'Ada Township',
        },
      ],
    },

    finalCta: {
      headline: 'Need service today?',
      body: 'We hold same-day slots every weekday for repairs. After hours, our emergency line is staffed 24/7.',
      primaryCta: { label: 'Request Service', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'Call 616-555-0142', href: 'tel:616-555-0142', variant: 'secondary' },
    },
  },

  // ────────────────────── SERVICES ──────────────────────
  services: {
    hero: {
      eyebrow: 'Services',
      headline: 'Heating, cooling, and the systems in between.',
      body: 'Residential and light commercial HVAC across Kent, Ottawa, and Allegan counties. Repair, replacement, and the maintenance plans that keep both off your calendar.',
    },

    items: [
      {
        title: 'Heating Repair & Installation',
        body: 'Furnaces, boilers, and heat pumps. We diagnose first, quote second \u2014 and you\u2019ll never get a parts bill before the diagnosis is in writing.',
        bullets: [
          'Gas, propane, oil, and high-efficiency systems',
          'Same-day repair on most makes',
          'Free in-home replacement estimates',
          '10-year parts & labor warranty on installs',
          'Financing as low as $89/month',
        ],
        image: { src: '', alt: 'A high-efficiency furnace install in a residential mechanical room' },
      },
      {
        title: 'Cooling Repair & Installation',
        body: 'Central air, ductless mini-splits, and heat pumps. Manual J load calculations on every replacement \u2014 because oversized systems short-cycle and undersized systems run forever.',
        bullets: [
          'Central AC repair, replacement, and tune-up',
          'Ductless mini-split design and install',
          'Manual J load calculations on every replacement',
          'Refrigerant work by EPA-certified techs only',
          'Two-stage and variable-speed system specialists',
        ],
        image: { src: '', alt: 'A condenser unit on a residential pad in summer' },
      },
      {
        title: 'Indoor Air Quality',
        body: 'The work that quietly transforms a house. Filtration, humidity control, ventilation, and UV \u2014 specified for your envelope, not a generic checklist.',
        bullets: [
          'Whole-home media filtration (MERV 11\u201316)',
          'Steam and bypass humidifiers',
          'Whole-home dehumidification',
          'HRV and ERV ventilation systems',
          'UV-C and bipolar ionization',
        ],
        image: { src: '', alt: 'A whole-home media air filter cabinet on the return plenum' },
      },
      {
        title: 'Maintenance Plans',
        body: 'Two tune-ups a year, priority emergency dispatch, and 15% off parts and repairs. The cheapest insurance you can buy on equipment that runs 8,000 hours a year.',
        bullets: [
          'Spring AC tune-up + Fall furnace tune-up',
          'Priority dispatch on emergencies',
          '15% discount on all repairs and parts',
          'No after-hours diagnostic fee',
          'Transferable when you sell the home',
        ],
        image: { src: '', alt: 'A technician inspecting a heat exchanger during a tune-up' },
      },
    ],

    process: {
      eyebrow: 'Our Process',
      headline: 'How a service call works.',
      steps: [
        { number: '01', title: 'Schedule', body: 'Call or book online. We confirm same day with a 2-hour arrival window.' },
        { number: '02', title: 'Diagnose', body: 'Tech inspects the system, explains what they find, and gives you a written flat-rate quote.' },
        { number: '03', title: 'Approve', body: 'You decide. No work happens \u2014 and no labor is billed \u2014 until you say go.' },
        { number: '04', title: 'Complete', body: 'Repair or install on the spot when possible. Job site cleaner than we found it. Always.' },
      ],
    },

    finalCta: {
      headline: 'Not sure what you need?',
      body: 'Call us and describe what\u2019s happening. Half the time we can troubleshoot over the phone for free.',
      primaryCta: { label: 'Request Service', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'Call 616-555-0142', href: 'tel:616-555-0142', variant: 'secondary' },
    },
  },

  // ────────────────────── ABOUT ──────────────────────
  about: {
    hero: {
      eyebrow: 'About Northpoint',
      headline: 'Family-owned. Locally run. Built to last.',
      body: 'Twenty-seven years serving West Michigan with the same rule we started with: never sell a customer something they don\u2019t need.',
    },

    story: {
      headline: 'Why we built it this way.',
      body: 'Bill Whitmore worked sixteen years at a national HVAC chain before he\u2019d had enough of the upsell scripts. In 1998 he bought a used Ford E-150, printed business cards, and started Northpoint. The pitch was simple: tell people the truth about their system, charge a fair price, leave the house cleaner than you found it. His son Mark joined in 2009. He runs operations now \u2014 same pitch, more trucks. We\u2019re still W-2 only, still flat-rate, still local. We don\u2019t plan to change any of it.',
      bullets: [
        'Family-owned since 1998 \u2014 no corporate ownership.',
        'All technicians are W-2 employees, never subcontracted.',
        'NATE-certified, EPA-certified, fully licensed and insured.',
        'Member of ACCA and the local Better Business Bureau (A+).',
      ],
      image: { src: '', alt: 'The Northpoint shop on Plainfield Avenue' },
    },

    stats: {
      items: [
        { value: '27', label: 'Years in West Michigan' },
        { value: '14,000+', label: 'Service calls completed' },
        { value: '12', label: 'NATE-certified technicians' },
        { value: 'A+', label: 'BBB rating since 2003' },
      ],
    },

    values: {
      eyebrow: 'How We Operate',
      headline: 'Four rules we don\u2019t bend.',
      items: [
        {
          title: 'Honest diagnosis.',
          body: 'We tell you what\u2019s wrong, what it\u2019ll cost, and what happens if you wait. If a $40 repair beats a $4,000 replacement, that\u2019s what we recommend.',
        },
        {
          title: 'Flat-rate pricing.',
          body: 'You approve the price before we start. The meter does not run. The price on the quote is the price on the invoice.',
        },
        {
          title: 'Clean trucks, clean jobs.',
          body: 'Boot covers go on at the door. Drop cloths down. Job site cleaner than we found it \u2014 every time, no exceptions.',
        },
        {
          title: 'Stand behind the work.',
          body: '10-year parts and labor on installs. 2-year on repairs. If we install it and it fails early, we fix it on our dime.',
        },
      ],
    },

    team: {
      eyebrow: 'Leadership',
      headline: 'The people who run the shop.',
      members: [
        {
          name: 'Mark Whitmore',
          role: 'Owner & Operations',
          bio: 'Joined the family business in 2009. NATE-certified. Spends Saturdays at his daughter\u2019s travel hockey games.',
          image: { src: '', alt: 'Mark Whitmore in front of a service truck' },
        },
        {
          name: 'Bill Whitmore',
          role: 'Founder',
          bio: 'Started Northpoint in 1998. Still rides along on the tough diagnostic calls when his back lets him.',
          image: { src: '', alt: 'Bill Whitmore in the shop' },
        },
        {
          name: 'Sara Mendez',
          role: 'Service Manager',
          bio: '15 years in HVAC dispatch. The voice on the other end of the emergency line. Knows every system in every house we serve.',
          image: { src: '', alt: 'Sara Mendez at the dispatch desk' },
        },
      ],
    },

    finalCta: {
      headline: 'Ready to work with us?',
      body: 'New customer or longtime regular \u2014 we\u2019re glad you\u2019re here. Tell us what you need.',
      primaryCta: { label: 'Request Service', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'See Our Services', href: '/services', variant: 'secondary' },
    },
  },

  // ────────────────────── CONTACT ──────────────────────
  contact: {
    hero: {
      eyebrow: 'Contact',
      headline: 'Reach the dispatch desk.',
      body: 'Same-day service Monday through Friday. 24/7 emergency line for the bad days. We answer fast \u2014 because if your heat\u2019s out, you don\u2019t have time for a callback.',
    },

    details: {
      address: { line1: '2840 Plainfield Ave NE', line2: 'Grand Rapids, MI 49505' },
      phone: '616-555-0142',
      email: 'service@northpointhvac.com',
      hours: [
        { day: 'Monday', time: '7:00 AM \u2013 6:00 PM' },
        { day: 'Tuesday', time: '7:00 AM \u2013 6:00 PM' },
        { day: 'Wednesday', time: '7:00 AM \u2013 6:00 PM' },
        { day: 'Thursday', time: '7:00 AM \u2013 6:00 PM' },
        { day: 'Friday', time: '7:00 AM \u2013 6:00 PM' },
        { day: 'Saturday', time: '8:00 AM \u2013 2:00 PM' },
        { day: 'Sunday', time: 'Emergency Only' },
      ],
    },

    serviceArea: {
      headline: 'Where we work',
      body: 'We dispatch trucks across all of Kent County and into surrounding cities. If you don\u2019t see your town listed, call us \u2014 we probably still come out.',
      areas: [
        'Grand Rapids', 'East Grand Rapids', 'Kentwood', 'Wyoming', 'Walker', 'Comstock Park',
        'Rockford', 'Ada', 'Cascade', 'Caledonia', 'Hudsonville', 'Jenison', 'Grandville', 'Byron Center',
      ],
    },

    formHeadline: 'Request service',
    formSubhead: 'Tell us what\u2019s going on. We\u2019ll call back within 30 minutes during business hours \u2014 same day, every day.',

    finalCta: {
      headline: 'Heating or cooling emergency?',
      body: 'Don\u2019t wait on a form. Call our 24/7 dispatch line and a real person picks up.',
      primaryCta: { label: 'Call 616-555-0142', href: 'tel:616-555-0142', variant: 'primary' },
      secondaryCta: { label: 'Email Dispatch', href: 'mailto:service@northpointhvac.com', variant: 'secondary' },
    },
  },
};
