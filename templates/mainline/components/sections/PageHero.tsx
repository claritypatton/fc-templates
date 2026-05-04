import type { PageHero as PageHeroType } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

type Props = { hero: PageHeroType };

/**
 * PageHero — Mainline edition.
 *
 * Inverted from Atrium: dark navy band with bold uppercase headline.
 * Subtle dot-grid texture for industrial feel. The accent stripe at top
 * provides visual continuity with the hero accent corner on the home page.
 */
export function PageHero({ hero }: Props) {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />
      <Container>
        <div className="relative py-16 md:py-20 lg:py-24 max-w-3xl animate-rise">
          <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-5">
            {hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.0] mb-6 tracking-tight uppercase">
            {hero.headline}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">{hero.body}</p>
        </div>
      </Container>
    </section>
  );
}
