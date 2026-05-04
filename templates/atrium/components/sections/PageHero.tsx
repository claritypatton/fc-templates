import type { PageHero as PageHeroType } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

type Props = { hero: PageHeroType };

/**
 * PageHero — compact, text-only hero for inner pages.
 *
 * SCAMHC inner-page pattern: cream background, eyebrow + display headline +
 * brief body. No image, no CTAs — the page content does the rest of the work.
 * A subtle decorative bar at top echoes the brand's coral accent.
 */
export function PageHero({ hero }: Props) {
  return (
    <section className="bg-bg pt-14 pb-14 md:pt-20 md:pb-16 border-b border-line/70">
      <Container>
        <div className="max-w-3xl animate-rise">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-10 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.05] mb-5 tracking-tight">
            {hero.headline}
          </h1>
          <p className="text-lg text-ink2 leading-relaxed max-w-2xl">{hero.body}</p>
        </div>
      </Container>
    </section>
  );
}
