/**
 * SITE CONFIG — single source of truth for all client-specific content.
 *
 * THIS IS THE FILE THE AGENT REWRITES per client. Every word of copy, every
 * link, every image reference lives here. Components consume this via the
 * `siteConfig` export. Components NEVER hardcode content.
 *
 * The `SiteConfig` shape is stable across the FC template catalog — the agent
 * can translate one client's data into any template without re-shaping.
 * Templates differ in HOW they render this data, not WHAT data they need.
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
// SEED CONTENT — Riverbend Family Veterinary (demo). The agent replaces this
// wholesale per client. Everything below is data, not structure.
// ────────────────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  meta: {
    siteName: 'Riverbend Family Veterinary',
    tagline: 'Gentle, Modern Care for the Whole Family',
    description:
      'Full-service veterinary care for dogs, cats, and small mammals — fear-free exams, advanced diagnostics, and a team that treats your pet like family.',
    locale: 'en-US',
    primaryPhone: '555-247-0190',
    primaryEmail: 'hello@riverbendvet.com',
  },

  topBar: {
    leftLinks: [
      { label: 'New Patients', href: '/contact' },
      { label: 'Pet Portal', href: 'https://example.com/portal' },
    ],
    rightLinks: [{ label: 'Emergency', href: 'tel:555-247-0190' }],
    phoneLabel: 'Call Now',
    phone: '555-247-0190',
  },

  header: {
    logoText: 'Riverbend Family Veterinary',
    logoSubtext: 'EST. 2008',
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaLabel: 'Book a Visit',
    ctaHref: '/contact',
  },

  footer: {
    address: { line1: '418 Mill Creek Road', line2: 'Bloomfield, IN 47424' },
    phone: '555-247-0190',
    email: 'hello@riverbendvet.com',
    columns: [
      {
        title: 'Visit',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/services' },
          { label: 'About Our Team', href: '/about' },
          { label: 'Contact & Hours', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'New Patient Forms', href: '/contact' },
          { label: 'Pet Portal Login', href: 'https://example.com/portal' },
          { label: 'Prescription Refills', href: '/contact' },
          { label: 'After-Hours Care', href: '/contact' },
        ],
      },
    ],
    missionTitle: 'A Family Practice for Your Family',
    missionBody:
      'We treat every patient the way we treat our own — with patience, honesty, and the unhurried attention that good medicine deserves.',
    missionCta: { label: 'Become a Patient', href: '/contact', variant: 'primary' },
    socialLinks: [
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
    copyright: '© 2026 Riverbend Family Veterinary. All rights reserved.',
  },

  // ────────────────────── HOME ──────────────────────
  home: {
    hero: {
      eyebrow: 'Bloomfield, Indiana',
      headline: 'Gentle, modern care for the whole family.',
      body: 'A small, independent practice where your dog, cat, or small mammal gets the kind of unhurried, fear-free visit that builds trust over a lifetime.',
      bullets: ['Fear-Free Certified', 'Same-Week Sick Visits', 'AAHA-Accredited'],
      primaryCta: { label: 'Book a Visit', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'See Services', href: '/services', variant: 'secondary' },
      image: { src: '', alt: 'A veterinarian gently examining a golden retriever in a sunlit exam room' },
    },

    trustBadges: {
      items: [
        {
          title: 'Fear-Free Visits',
          body: 'Every team member is Fear-Free Certified. We use treats, slow handling, and quiet rooms so visits stay calm — not scary.',
        },
        {
          title: 'Same-Week Care',
          body: 'Sick pet today? We hold daily slots for same-week appointments because waiting a week to feel heard isn\u2019t care.',
        },
        {
          eyebrow: 'AAHA Accredited',
          title: 'Higher Standards',
          body: 'Fewer than 15% of U.S. animal hospitals meet AAHA\u2019s accreditation standards for medicine, anesthesia, and safety. We\u2019re one of them.',
        },
      ],
    },

    servicesPreview: {
      eyebrow: 'What We Do',
      headline: 'Care for every life stage',
      body: 'From the first puppy visit to senior wellness, our services cover the whole arc of your pet\u2019s life.',
      cards: [
        {
          title: 'Wellness & Preventive Care',
          body: 'Annual exams, vaccines, parasite prevention, and nutrition guidance tailored to your pet\u2019s breed, age, and lifestyle.',
          cta: { label: 'Learn More', href: '/services' },
        },
        {
          title: 'Surgery & Dental',
          body: 'Soft-tissue surgery, dental cleanings, and oral surgery — performed with full monitoring and a board-certified anesthetist on call.',
          cta: { label: 'Learn More', href: '/services' },
        },
        {
          title: 'Diagnostics & Urgent Care',
          body: 'In-house bloodwork, digital X-ray, and ultrasound mean answers same-day — without sending you to a referral hospital across the state.',
          cta: { label: 'Learn More', href: '/services' },
        },
      ],
    },

    aboutTeaser: {
      eyebrow: 'Our Practice',
      headline: 'Built around the unhurried visit.',
      body: 'Riverbend is a small practice on purpose. Dr. Hayes opened the doors in 2008 with a single conviction: medicine gets better when the doctor isn\u2019t rushing to the next room. We hold our schedule the same way today.',
      bullets: [
        'Independently owned — no corporate quotas, no upselling.',
        'Three veterinarians, six technicians, one shared philosophy.',
        'Roughly 2,400 patients across Greene and Monroe counties.',
      ],
      cta: { label: 'Meet the Team', href: '/about', variant: 'secondary' },
      image: { src: '', alt: 'The Riverbend reception area with warm wood and natural light' },
    },

    testimonials: {
      eyebrow: 'What Families Say',
      headline: 'Care you can feel.',
      items: [
        {
          quote: 'Dr. Hayes spent forty minutes explaining my dog\u2019s diagnosis. I\u2019ve never had a vet sit down with me like that.',
          name: 'Mara L.',
          role: 'Bloomfield, IN',
        },
        {
          quote: 'They knew my cat by name on the second visit. Small thing, but it tells you what kind of place this is.',
          name: 'Jonathan R.',
          role: 'Bloomington, IN',
        },
        {
          quote: 'My puppy actually wags her tail when we pull into the parking lot. That\u2019s all I needed to know.',
          name: 'Priya S.',
          role: 'Spencer, IN',
        },
      ],
    },

    finalCta: {
      headline: 'Ready to meet your new vet?',
      body: 'New patients welcome. Book online or give us a call — we\u2019ll get you in this week.',
      primaryCta: { label: 'Book a Visit', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'Call 555-247-0190', href: 'tel:555-247-0190', variant: 'secondary' },
    },
  },

  // ────────────────────── SERVICES ──────────────────────
  services: {
    hero: {
      eyebrow: 'Our Services',
      headline: 'Comprehensive care, honestly delivered.',
      body: 'A full-service practice for dogs, cats, and small mammals. Below is what we do every day — if you\u2019re unsure whether something fits, give us a call and we\u2019ll point you in the right direction.',
    },

    items: [
      {
        title: 'Wellness & Preventive Care',
        body: 'The foundation of a long, healthy life. We tailor every wellness plan to your pet\u2019s breed, age, and lifestyle — no one-size protocols.',
        bullets: [
          'Annual & semi-annual exams',
          'Core and lifestyle vaccinations',
          'Parasite screening and prevention',
          'Nutrition and weight counseling',
          'Microchipping',
        ],
        image: { src: '', alt: 'A veterinarian listens to a small dog\u2019s heartbeat during a wellness exam' },
      },
      {
        title: 'Surgery & Dental Care',
        body: 'Performed in-house with full anesthetic monitoring, dedicated surgical staff, and pre-op bloodwork on every patient — because the safest anesthesia is the most carefully prepared one.',
        bullets: [
          'Spay and neuter procedures',
          'Soft-tissue surgery',
          'Dental cleanings under anesthesia',
          'Oral surgery and extractions',
          'Pre-anesthetic screening',
        ],
        image: { src: '', alt: 'A surgical suite with monitoring equipment ready for a procedure' },
      },
      {
        title: 'Diagnostics & Imaging',
        body: 'Same-day answers from same-day tests. Our in-house lab and imaging mean we rarely need to send you anywhere else for the basics.',
        bullets: [
          'Digital radiography (X-ray)',
          'Abdominal and cardiac ultrasound',
          'In-house bloodwork & cytology',
          'Urinalysis and fecal testing',
          'Cardiology referrals when needed',
        ],
        image: { src: '', alt: 'A digital radiograph being reviewed on a clinic monitor' },
      },
      {
        title: 'Urgent & Sick Visits',
        body: 'We hold same-week slots every day for established patients with urgent concerns. If your pet is acting off, call us — we\u2019d rather hear from you early than late.',
        bullets: [
          'Same-week sick appointments',
          'On-site triage and stabilization',
          'After-hours emergency referrals',
          'Pain management consultations',
          'Senior pet quality-of-life assessments',
        ],
        image: { src: '', alt: 'A vet tech comforting a cat in a treatment room' },
      },
    ],

    process: {
      eyebrow: 'How a Visit Works',
      headline: 'Calm, clear, and unhurried.',
      steps: [
        { number: '01', title: 'Schedule', body: 'Book online or call. We confirm same day and send a short intake form.' },
        { number: '02', title: 'Arrive', body: 'Quiet rooms, treat-friendly handling, and no rushed waiting room — for cats too.' },
        { number: '03', title: 'Exam', body: 'Your vet sits down, listens, and walks through everything they find — in plain language.' },
        { number: '04', title: 'Plan', body: 'You leave with a written care plan, costs spelled out, and a clear next step.' },
      ],
    },

    finalCta: {
      headline: 'Not sure where to start?',
      body: 'Tell us what\u2019s going on and we\u2019ll point you to the right next step — even if that\u2019s not us.',
      primaryCta: { label: 'Get in Touch', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'Call 555-247-0190', href: 'tel:555-247-0190', variant: 'secondary' },
    },
  },

  // ────────────────────── ABOUT ──────────────────────
  about: {
    hero: {
      eyebrow: 'About Riverbend',
      headline: 'A small practice, on purpose.',
      body: 'Independently owned since 2008, with a team that\u2019s been together long enough to know your pet\u2019s history without checking the chart.',
    },

    story: {
      headline: 'Why we kept it small.',
      body: 'When Dr. Anna Hayes opened Riverbend in 2008, she had one rule: no thirty-minute slots. The medicine she\u2019d watched her mentors practice — the kind that catches the early lump, the off lab value, the quiet weight loss — only happens when the doctor has time to listen. Sixteen years and three veterinarians later, that\u2019s still the rule. We could see twice as many patients. We\u2019d rather see yours well.',
      bullets: [
        'Independently owned — no corporate ownership, no quotas.',
        'Three veterinarians, six credentialed technicians.',
        '~2,400 active patients across Greene and Monroe counties.',
        'AAHA-accredited and Fear-Free Certified, top to bottom.',
      ],
      image: { src: '', alt: 'The Riverbend team gathered outside the practice on a fall morning' },
    },

    stats: {
      items: [
        { value: '16', label: 'Years in Bloomfield' },
        { value: '2,400+', label: 'Active patients' },
        { value: '< 15%', label: 'Of U.S. hospitals are AAHA-accredited' },
        { value: '100%', label: 'Fear-Free certified team' },
      ],
    },

    values: {
      eyebrow: 'How We Practice',
      headline: 'Four things we believe.',
      items: [
        {
          title: 'Honest medicine.',
          body: 'We recommend what your pet needs, not what tops up a quota. If a watchful-waiting plan beats a $400 panel, we\u2019ll say so.',
        },
        {
          title: 'Calm comes first.',
          body: 'Fear changes a physical exam. We slow down, use treats, and stop when a pet says stop — even if it means a second visit.',
        },
        {
          title: 'Plain-language plans.',
          body: 'You leave with what we found, what it means, what it costs, and what to watch — written down, no jargon.',
        },
        {
          title: 'A long view.',
          body: 'We want to see your pet at sixteen, not just at six. The visits we have today are an investment in the ones we\u2019ll have years from now.',
        },
      ],
    },

    team: {
      eyebrow: 'Our Veterinarians',
      headline: 'The doctors you\u2019ll meet.',
      members: [
        {
          name: 'Dr. Anna Hayes',
          role: 'Founder & Medical Director',
          bio: 'Cornell DVM, 2003. Special interests in geriatric medicine and feline care. Owns three cats who tolerate her.',
          image: { src: '', alt: 'Dr. Anna Hayes in a clinic exam room' },
        },
        {
          name: 'Dr. Marcus Chen',
          role: 'Associate Veterinarian',
          bio: 'Ohio State DVM, 2014. Surgery and dentistry lead. Competitive ultramarathoner; brings the same patience to long cases.',
          image: { src: '', alt: 'Dr. Marcus Chen on the practice front porch' },
        },
        {
          name: 'Dr. Lena Okafor',
          role: 'Associate Veterinarian',
          bio: 'Tuskegee DVM, 2019. Internal medicine and exotics. The person to call if your pet has scales, feathers, or a wheel.',
          image: { src: '', alt: 'Dr. Lena Okafor with a guinea pig patient' },
        },
      ],
    },

    finalCta: {
      headline: 'We\u2019d love to meet your pet.',
      body: 'New patients welcome. Tell us a little about your animal and we\u2019ll find the right slot.',
      primaryCta: { label: 'Book a Visit', href: '/contact', variant: 'primary' },
      secondaryCta: { label: 'See Our Services', href: '/services', variant: 'secondary' },
    },
  },

  // ────────────────────── CONTACT ──────────────────────
  contact: {
    hero: {
      eyebrow: 'Get in Touch',
      headline: 'We\u2019d love to hear from you.',
      body: 'New patients, returning friends, and the simply curious — we read every message and reply within one business day.',
    },

    details: {
      address: { line1: '418 Mill Creek Road', line2: 'Bloomfield, IN 47424' },
      phone: '555-247-0190',
      email: 'hello@riverbendvet.com',
      hours: [
        { day: 'Monday', time: '7:30 AM \u2013 6:00 PM' },
        { day: 'Tuesday', time: '7:30 AM \u2013 6:00 PM' },
        { day: 'Wednesday', time: '7:30 AM \u2013 6:00 PM' },
        { day: 'Thursday', time: '7:30 AM \u2013 6:00 PM' },
        { day: 'Friday', time: '7:30 AM \u2013 5:00 PM' },
        { day: 'Saturday', time: '8:00 AM \u2013 12:00 PM' },
        { day: 'Sunday', time: 'Closed' },
      ],
    },

    serviceArea: {
      headline: 'Who we serve',
      body: 'We see patients from across south-central Indiana. Most of our families come from:',
      areas: ['Bloomfield', 'Bloomington', 'Spencer', 'Linton', 'Worthington', 'Solsberry', 'Ellettsville'],
    },

    formHeadline: 'Send us a note',
    formSubhead: 'Tell us a little about your pet and we\u2019ll get back to you within one business day.',

    finalCta: {
      headline: 'Need urgent care?',
      body: 'For after-hours emergencies, please contact our partner hospital, Indianapolis Veterinary Emergency, at 317-555-0140.',
      primaryCta: { label: 'Call Riverbend', href: 'tel:555-247-0190', variant: 'primary' },
      secondaryCta: { label: 'Email Us', href: 'mailto:hello@riverbendvet.com', variant: 'secondary' },
    },
  },
};
