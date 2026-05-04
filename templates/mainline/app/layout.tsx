import type { Metadata } from 'next';
import { Archivo, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/lib/site-config';
import { TopBar } from '@/components/sections/TopBar';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

/**
 * Font loading via next/font.
 * The agent swaps these imports per client to change typography.
 * The CSS variable names (--font-display, --font-body) are FIXED.
 */
const fontDisplay = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
