import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { PageHero } from '@/components/sections/PageHero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { StorySection } from '@/components/sections/StorySection';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'About',
  description: siteConfig.about.hero.body,
};

export default function AboutPage() {
  const finalCta = siteConfig.about.finalCta ?? siteConfig.home.finalCta;
  return (
    <>
      <PageHero hero={siteConfig.about.hero} />
      <StatsStrip />
      <StorySection />
      <ValuesGrid />
      <TeamGrid />
      <FinalCTA cta={finalCta} />
    </>
  );
}
