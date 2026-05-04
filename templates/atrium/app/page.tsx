import { siteConfig } from '@/lib/site-config';
import { ImageHero } from '@/components/sections/ImageHero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <ImageHero />
      <TrustBadges />
      <ServicesPreview />
      <AboutTeaser />
      <Testimonials />
      <FinalCTA cta={siteConfig.home.finalCta} />
    </>
  );
}
