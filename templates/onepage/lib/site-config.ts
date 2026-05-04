/**
 * SITE CONFIG — single source of truth for all client-specific content.
 *
 * THIS IS THE FILE THE AGENT REWRITES per client. Every word of copy, every
 * link, every image reference lives here. Components consume this via the
 * `siteConfig` export. Components NEVER hardcode content.
 *
 * Conventions:
 *  - Internal anchors use "#section-id" — must match section ids in page.tsx
 *  - External links use "https://..." — opened in new tab automatically by Button
 *  - Images use "/img/filename.jpg" (local) or full https URLs (CDN)
 *  - Phone numbers in "tel:" format ready: "877-530-0002"
 *  - Empty arrays/optional fields hide the corresponding section
 */

export type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type SiteConfig = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
    locale: string;
    primaryPhone: string;
    primaryEmail: string;
  };

  topBar: {
    leftLinks: { label: string; href: string }[];
    rightLinks: { label: string; href: string }[];
    phoneLabel: string;
    phone: string;
  };

  header: {
    logoText: string;
    logoSubtext?: string;
    navLinks: { label: string; href: string }[];
    ctaLabel: string;
    ctaHref: string;
  };

  // Hero stack — three full-width hero blocks. Set to fewer entries to reduce.
  heroes: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets?: string[];
    primaryCta: CTA;
    secondaryCta?: CTA;
    image: { src: string; alt: string };
    align?: 'left' | 'right'; // text alignment alternates by default
  }[];

  trustBadges: {
    items: { eyebrow?: string; title: string; body: string }[];
  };

  crisisBand: {
    title: string;
    body: string;
    cta: CTA;
  };

  about: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
    cta: CTA;
    image: { src: string; alt: string };
  };

  resourceCards: {
    eyebrow: string;
    headline: string;
    cards: { title: string; body: string; cta: CTA }[];
  };

  urgentCare: {
    eyebrow: string;
    headline: string;
    body: string;
    address: { line1: string; line2: string };
    phone: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };

  volunteer: {
    eyebrow: string;
    headline: string;
    body: string;
    items: { title: string; body: string }[];
    cta: CTA;
    images: { src: string; alt: string }[];
  };

  partners: {
    eyebrow: string;
    headline: string;
    body: string;
    categories: { title: string; body: string }[];
    cta: CTA;
  };

  hiring: {
    eyebrow: string;
    headline: string;
    subhead: string;
    bullets: string[];
    primaryCta: CTA;
    secondaryCta: CTA;
  };

  finalCta: {
    headline: string;
    body: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };

  footer: {
    address: { line1: string; line2: string };
    phone: string;
    email: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    missionTitle: string;
    missionBody: string;
    missionCta: CTA;
    nonprofitNote?: string;
    socialLinks: { label: string; href: string }[];
    copyright: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────
// SEED CONTENT — modeled on the SCAMHC homepage. The agent replaces this
// wholesale per client. Everything below the line is data, not structure.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  meta: {
    siteName: 'South Central Alabama Mental Health',
    tagline: 'Compassionate Care for Every Stage of Life',
    description:
      'Mental health, developmental disabilities, and substance use services for Butler, Coffee, Covington, and Crenshaw counties.',
    locale: 'en-US',
    primaryPhone: '877-530-0002',
    primaryEmail: 'info@scamhc.org',
  },

  topBar: {
    leftLinks: [
      { label: 'Careers', href: '#hiring' },
      { label: 'Donate', href: '#final-cta' },
    ],
    rightLinks: [{ label: 'Contact Us', href: '#footer' }],
    phoneLabel: 'Call Now',
    phone: '877-530-0002',
  },

  header: {
    logoText: 'South Central Alabama Mental Health',
    logoSubtext: 'EST. 1968',
    navLinks: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#resources' },
      { label: 'Walk-In Care', href: '#urgent-care' },
      { label: 'Get Involved', href: '#volunteer' },
      { label: 'Partners', href: '#partners' },
    ],
    ctaLabel: 'Call Now',
    ctaHref: 'tel:877-530-0002',
  },

  heroes: [
    {
      eyebrow: 'Serving South Central Alabama',
      headline: 'Compassionate Care for Every Stage of Life',
      body: 'Mental health, developmental disabilities, and substance use services for Butler, Coffee, Covington, and Crenshaw counties.',
      primaryCta: { label: 'Get Help Now', href: '#urgent-care', variant: 'primary' },
      secondaryCta: { label: 'View Services', href: '#resources', variant: 'secondary' },
      image: { src: '/img/hero-1.jpg', alt: 'Compassionate care' },
    },
    {
      eyebrow: 'Join Our Mission',
      headline: 'Build a Career That Changes Lives',
      body: 'Join a compassionate team supporting mental health, recovery, and community wellness across South Central Alabama.',
      bullets: [
        'Clinical & non-clinical roles',
        'Full & part-time opportunities',
        'Growth & advancement',
      ],
      primaryCta: { label: 'Join Our Team', href: '#hiring', variant: 'primary' },
      secondaryCta: { label: 'Search Open Positions', href: '#hiring', variant: 'secondary' },
      image: { src: '/img/hero-2.jpg', alt: 'Career opportunities' },
      align: 'right',
    },
    {
      eyebrow: 'Walk-Ins Welcome',
      headline: 'Mental Health Help When You Need It Most',
      body: 'Walk in for psychiatric urgent care — no appointment needed. Our team provides immediate evaluation, stabilization, and a clear next step for adults and children in crisis.',
      bullets: ['Same-day evaluation', 'Most insurance accepted', 'Open weekdays'],
      primaryCta: { label: 'Visit Urgent Care', href: '#urgent-care', variant: 'primary' },
      secondaryCta: { label: 'Call 334-428-5050', href: 'tel:334-428-5050', variant: 'secondary' },
      image: { src: '/img/hero-3.jpg', alt: 'Walk-in care' },
    },
  ],

  trustBadges: {
    items: [
      {
        title: 'Comprehensive Care',
        body: 'Providing mental health, developmental disabilities, and substance use services all in one place.',
      },
      {
        title: 'Compassionate Support',
        body: 'A community dedicated to supporting individuals with empathy and expert guidance.',
      },
      {
        eyebrow: 'EST. 1968',
        title: 'Community Focused',
        body: 'Serving citizens across Butler, Coffee, Covington, and Crenshaw counties for over 50 years.',
      },
    ],
  },

  crisisBand: {
    title: '24/7 Crisis Helpline',
    body: 'Our toll-free crisis helpline connects you to qualified mental health professionals any time, any day of the year.',
    cta: { label: 'Crisis Line — 1-877-530-0002', href: 'tel:1-877-530-0002', variant: 'primary' },
  },

  about: {
    eyebrow: 'Our Mission',
    headline: 'Real care for real families.',
    body: 'South Central Alabama Mental Health Center is more than a service provider — we are a compassionate community dedicated to supporting individuals living with mental illness, substance use disorders, and developmental disabilities.',
    bullets: [
      'Serving roughly 4,500 individuals annually across our four-county region.',
      'Dedicated to making a meaningful difference through personalized care plans.',
      'Comprehensive support network offering crisis intervention, therapy, and rehabilitation.',
    ],
    cta: { label: 'About Us', href: '#about', variant: 'secondary' },
    image: { src: '/img/about.jpg', alt: 'Real care for real families' },
  },

  resourceCards: {
    eyebrow: 'Support & Access',
    headline: 'Care that fits your life',
    cards: [
      {
        title: 'Cost Transparency & Insurance',
        body: 'We accept all major insurance plans and offer sliding-scale fees — because no one should be turned away due to cost.',
        cta: { label: 'Learn More', href: '#footer' },
      },
      {
        title: 'Community Resources',
        body: 'Forms, consumer handbook, meeting schedules, community contacts — everything you need, all in one place.',
        cta: { label: 'View Resources', href: '#footer' },
      },
      {
        title: 'Telehealth',
        body: 'Connect securely with our clinical professionals from the comfort and privacy of your own home.',
        cta: { label: 'Learn More', href: '#footer' },
      },
    ],
  },

  urgentCare: {
    eyebrow: 'Open 24/7',
    headline: 'Psychiatric Urgent Care Center',
    body: 'Immediate, compassionate mental health crisis support when you need it most. No appointment necessary — walk in anytime for assessment and care.',
    address: { line1: '205 Academy Drive', line2: 'Andalusia, AL 36420' },
    phone: '334-428-5050',
    primaryCta: { label: 'Call Now — 334-428-5050', href: 'tel:334-428-5050', variant: 'primary' },
    secondaryCta: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=205+Academy+Drive+Andalusia+AL+36420',
      variant: 'secondary',
    },
  },

  volunteer: {
    eyebrow: 'Get Involved',
    headline: 'Make a Meaningful Difference: Join Our Community',
    body: 'Our mission-driven approach relies on a vibrant community of hearts. Through volunteering and community engagement, you can help us shape a compassionate approach to mental health and make a real difference in the lives of others.',
    items: [
      {
        title: 'Volunteer Opportunities',
        body: 'Join our cohort of volunteers to serve community members. Engage with compassion and help us build a supportive network.',
      },
      {
        title: 'Community Outreach',
        body: 'Community outreach is about planting seeds of hope and resilience in our neighborhoods, fostering connection.',
      },
      {
        title: 'Event Support',
        body: 'Volunteers engage in providing support for community events, wellness services, and connecting our community.',
      },
      {
        title: 'Patient Companionship',
        body: 'Patient companionship with visiting members, offering a listening ear and a friendly presence.',
      },
    ],
    cta: { label: 'Apply to Volunteer', href: '#footer', variant: 'primary' },
    images: [
      { src: '/img/volunteer-1.jpg', alt: 'Community garden' },
      { src: '/img/volunteer-2.jpg', alt: 'Patient companionship' },
    ],
  },

  partners: {
    eyebrow: 'Partnerships',
    headline: 'Partnering to support stronger, healthier communities',
    body: 'We partner with healthcare providers, law enforcement, courts, and community agencies across South Central Alabama to support individuals and families at every stage of care.',
    categories: [
      {
        title: 'Law Enforcement & First Responders',
        body: 'Supporting crisis response and community safety initiatives',
      },
      {
        title: 'Healthcare Providers & Hospitals',
        body: 'Coordinating care and expanding access to treatment',
      },
      {
        title: 'Courts & Community Services',
        body: 'Connecting individuals to the resources and support they need',
      },
      {
        title: 'Local & State Government',
        body: 'Advancing mental health initiatives across the region',
      },
    ],
    cta: { label: 'Explore Our Partners', href: '#footer', variant: 'secondary' },
  },

  hiring: {
    eyebrow: 'Now Hiring',
    headline: 'Join Our Team',
    subhead: 'A place to grow, lead, and make a real difference',
    bullets: [
      'Clinical and Non-Clinical Roles',
      'Full-time and Part-time Positions',
      'Opportunities for Growth and Advancement',
      'Comprehensive Benefits Package',
    ],
    primaryCta: { label: 'Join Our Team', href: '#footer', variant: 'primary' },
    secondaryCta: { label: 'Search Open Positions', href: '#footer', variant: 'secondary' },
  },

  finalCta: {
    headline: 'Start feeling at ease. We are here to help today.',
    body: 'Whether you need immediate crisis support or long-term care, our doors are open.',
    primaryCta: { label: 'Contact Us', href: '#footer', variant: 'primary' },
    secondaryCta: { label: 'Call Now', href: 'tel:877-530-0002', variant: 'secondary' },
  },

  footer: {
    address: { line1: '19815 Bay Branch Rd', line2: 'Andalusia, AL 36420' },
    phone: '334-222-2523',
    email: 'info@scamhc.org',
    columns: [
      {
        title: 'Quick Links',
        links: [
          { label: 'About Us', href: '#about' },
          { label: 'Our Services', href: '#resources' },
          { label: 'Walk-In Care', href: '#urgent-care' },
          { label: 'Get Involved', href: '#volunteer' },
          { label: 'Partners', href: '#partners' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Crisis Support', href: 'tel:877-530-0002' },
          { label: 'Telehealth', href: '#resources' },
          { label: 'Insurance & Cost', href: '#resources' },
          { label: 'Community Resources', href: '#resources' },
        ],
      },
    ],
    missionTitle: 'Support Our Mission',
    missionBody:
      'Help us provide vital mental health services to those who need it most in our community.',
    missionCta: { label: 'Donate Today', href: '#final-cta', variant: 'primary' },
    nonprofitNote: 'A 501(c)(3) nonprofit organization.',
    socialLinks: [
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
    copyright: '© 2026 South Central Alabama Mental Health. All rights reserved.',
  },
};
