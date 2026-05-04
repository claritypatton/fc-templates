import { siteConfig } from '@/lib/site-config';
import { SplitHero } from '@/components/sections/SplitHero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <SplitHero />
      <TrustBadges />
      <ServicesPreview />
      <AboutTeaser />
      <Testimonials />
      <FinalCTA cta={siteConfig.home.finalCta} />
    </>
  );
}
