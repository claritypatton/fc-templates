import type { Config } from 'tailwindcss';

/**
 * BRAND TOKENS
 * ────────────
 * The agent rewrites this file (and only this file, plus lib/site-config.ts)
 * to re-skin the template per client. Three things change here:
 *   1. theme.extend.colors — the semantic color palette
 *   2. theme.extend.fontFamily — display + body font pair
 *   3. theme.extend.borderRadius — corner softness
 *
 * Components consume these tokens via Tailwind class names (e.g., bg-primary,
 * font-display, rounded-card). Components never reference colors or fonts
 * directly — only via tokens.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: '#FDFBF7',          // warm cream — page background
        surface: '#FFFFFF',     // cards, elevated panels
        surface2: '#F5EFE6',    // alternating section background
        // Brand
        primary: {
          DEFAULT: '#0F4C5C',   // deep teal — trustworthy, healthcare-appropriate
          dark: '#093642',
          light: '#1B6A7E',
        },
        accent: {
          DEFAULT: '#E36F4D',   // warm coral — CTA, energy
          dark: '#C4583A',
        },
        // Text
        ink: '#1A2332',         // body text
        ink2: '#5A6B7B',        // muted, labels
        ink3: '#94A3B8',        // hints, disabled
        line: '#E8DFD0',        // borders, dividers
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      maxWidth: {
        'content': '1200px',
        'prose-wide': '720px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15, 76, 92, 0.06)',
        'card-hover': '0 12px 40px rgba(15, 76, 92, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
