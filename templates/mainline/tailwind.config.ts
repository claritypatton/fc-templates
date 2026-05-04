import type { Config } from 'tailwindcss';

/**
 * BRAND TOKENS — Mainline template (industrial / trades)
 * ──────────────────────────────────────────────────────
 * The agent rewrites this file (and only this file, plus lib/site-config.ts)
 * to re-skin the template per client. Three things change here:
 *   1. theme.extend.colors — semantic palette
 *   2. theme.extend.fontFamily — display + body font pair
 *   3. theme.extend.borderRadius — corner softness
 *
 * Note: Mainline uses sharp corners deliberately. Pill buttons feel out of
 * place on a contractor brand — squared geometry signals precision and trust.
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
        bg: '#FFFFFF',          // clean white — page background
        surface: '#F8F8F5',     // warm off-white — cards
        surface2: '#0B1220',    // deep navy — emphasis sections
        // Brand
        primary: {
          DEFAULT: '#0B1220',   // deep navy — primary surface
          dark: '#050811',
          light: '#1A2540',
        },
        accent: {
          DEFAULT: '#FF5A1F',   // safety orange — verified ~5:1 on white
          dark: '#D94A14',
        },
        // Text
        ink: '#0B1220',
        ink2: '#4A5568',
        ink3: '#94A3B8',
        line: '#E2E8F0',
        line2: '#1A2540',       // border on dark surfaces
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        card: '4px',
      },
      maxWidth: {
        'content': '1240px',
        'prose-wide': '720px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(11, 18, 32, 0.06), 0 1px 2px rgba(11, 18, 32, 0.04)',
        'card-hover': '0 4px 16px rgba(11, 18, 32, 0.10), 0 2px 4px rgba(11, 18, 32, 0.06)',
        'inset-line': 'inset 0 -2px 0 rgba(255, 90, 31, 0.0)',
      },
      letterSpacing: {
        'micro': '0.14em',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
