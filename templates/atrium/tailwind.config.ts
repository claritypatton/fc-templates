import type { Config } from 'tailwindcss';

/**
 * BRAND TOKENS — Atrium template (warm/editorial)
 * ────────────────────────────────────────────────
 * The agent rewrites this file (and only this file, plus lib/site-config.ts)
 * to re-skin the template per client. Three things change here:
 *   1. theme.extend.colors — semantic palette
 *   2. theme.extend.fontFamily — display + body font pair
 *   3. theme.extend.borderRadius — corner softness
 *
 * Components consume these tokens via Tailwind class names (e.g., bg-primary,
 * font-display, rounded-card). Components never reference colors or fonts
 * directly.
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
          DEFAULT: '#0F4C5C',   // deep teal
          dark: '#093642',
          light: '#1B6A7E',
        },
        accent: {
          DEFAULT: '#E36F4D',   // warm coral
          dark: '#C4583A',
        },
        // Text
        ink: '#1A2332',
        ink2: '#5A6B7B',
        ink3: '#94A3B8',
        line: '#E8DFD0',        // borders, dividers (warm)
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '18px',
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
        'hero': '0 20px 60px rgba(15, 76, 92, 0.18)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
