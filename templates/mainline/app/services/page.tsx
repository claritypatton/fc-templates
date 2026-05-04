import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceList } from '@/components/sections/ServiceList';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Services',
  description: siteConfig.services.hero.body,
};

export default function ServicesPage() {
  const finalCta = siteConfig.services.finalCta ?? siteConfig.home.finalCta;
  return (
    <>
      <PageHero hero={siteConfig.services.hero} />
      <ServiceList />
      <ProcessSteps />
      <FinalCTA cta={finalCta} />
    </>
  );
}
