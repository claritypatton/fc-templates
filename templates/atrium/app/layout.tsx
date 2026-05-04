import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import { TopBar } from '@/components/sections/TopBar';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

/**
 * Font loading via next/font.
 * The agent swaps these imports per client to change typography.
 * The CSS variable names (--font-display, --font-body) are FIXED —
 * Tailwind theme.fontFamily references them in tailwind.config.ts.
 */
const fontDisplay = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.meta.siteName} \u2014 ${siteConfig.meta.tagline}`,
    template: `%s \u2014 ${siteConfig.meta.siteName}`,
  },
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.siteName,
    description: siteConfig.meta.description,
    type: 'website',
    locale: siteConfig.meta.locale,
  },
};

/**
 * Multi-page layout — Header and Footer render across every page.
 * Each page (app/page.tsx, app/services/page.tsx, etc.) renders its own
 * sections inside <main>.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
