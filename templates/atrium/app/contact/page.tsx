import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { PageHero } from '@/components/sections/PageHero';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Contact',
  description: siteConfig.contact.hero.body,
};

export default function ContactPage() {
  const finalCta = siteConfig.contact.finalCta ?? siteConfig.home.finalCta;
  return (
    <>
      <PageHero hero={siteConfig.contact.hero} />
      <ContactPanel />
      <FinalCTA cta={finalCta} />
    </>
  );
}
