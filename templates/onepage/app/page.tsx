import { TopBar } from '@/components/sections/TopBar';
import { Header } from '@/components/sections/Header';
import { HeroStack } from '@/components/sections/HeroStack';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { CrisisBand } from '@/components/sections/CrisisBand';
import { AboutSection } from '@/components/sections/AboutSection';
import { ResourceCards } from '@/components/sections/ResourceCards';
import { UrgentCareBlock } from '@/components/sections/UrgentCareBlock';
import { VolunteerGrid } from '@/components/sections/VolunteerGrid';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { HiringBand } from '@/components/sections/HiringBand';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

/**
 * HOME PAGE — composes section components in order.
 *
 * The agent rarely changes this file. It only changes which sections are
 * included and their order. Content goes in lib/site-config.ts; styling
 * goes in tailwind.config.ts. Sections themselves are read-only.
 *
 * Anchor IDs (used by header nav and footer links):
 *   #home-hero    → HeroStack
 *   #about        → AboutSection
 *   #resources    → ResourceCards
 *   #urgent-care  → UrgentCareBlock
 *   #volunteer    → VolunteerGrid
 *   #partners     → PartnersSection
 *   #hiring       → HiringBand
 *   #final-cta    → FinalCTA
 *   #footer       → Footer
 */
export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroStack />
        <TrustBadges />
        <CrisisBand />
        <AboutSection />
        <ResourceCards />
        <UrgentCareBlock />
        <VolunteerGrid />
        <PartnersSection />
        <HiringBand />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
