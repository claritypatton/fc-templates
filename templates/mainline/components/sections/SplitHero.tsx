import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * SplitHero — Mainline's signature home hero.
 *
 * Half-and-half split: bold typographic content on the left, image on the
 * right. A thin diagonal-stripe accent divides them. Below the hero, a
 * compact "emergency call" band signals 24/7 dispatch — the move that turns
 * a generic small-business hero into a trades-specific one.
 */
export function SplitHero() {
  const { hero } = siteConfig.home;
  const { meta } = siteConfig;
  const hasImage = !!hero.image.src;

  return (
    <>
      <section className="relative bg-bg overflow-hidden" aria-label="Hero">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 lg:py-24 items-center">
            {/* Text */}
            <div className="lg:col-span-7 animate-rise">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-1 bg-accent" aria-hidden="true" />
                <span className="text-[11px] font-bold tracking-micro uppercase text-ink2">
                  {hero.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-[0.95] mb-6 tracking-tight uppercase">
                {hero.headline}
              </h1>
              <p className="text-lg text-ink2 leading-relaxed mb-8 max-w-xl">{hero.body}</p>

              {hero.bullets && hero.bullets.length > 0 && (
                <ul className="grid sm:grid-cols-3 gap-3 mb-9 max-w-2xl">
                  {hero.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-micro text-ink"
                    >
                      <svg
                        className="text-accent flex-shrink-0"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                        aria-hidden="true"
                      >
                        <path d="M2 7L5.5 10.5L12 4" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} variant="primary" size="md">
                  {hero.primaryCta.label}
                </Button>
                {hero.secondaryCta && (
                  <Button href={hero.secondaryCta.href} variant="secondary" size="md">
                    {hero.secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 animate-rise">
              <div className="relative">
                {/* Decorative accent corner */}
                <div
                  className="absolute -top-3 -right-3 w-20 h-20 border-t-4 border-r-4 border-accent z-10"
                  aria-hidden="true"
                />
                {hasImage ? (
                  <img
                    src={hero.image.src}
                    alt={hero.image.alt}
                    className="w-full aspect-[4/5] object-cover rounded-card"
                  />
                ) : (
                  <div
                    className="placeholder-image w-full aspect-[4/5] rounded-card"
                    role="img"
                    aria-label={hero.image.alt}
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency-call band — pinned directly under hero */}
      <section
        className="bg-accent text-white relative overflow-hidden"
        aria-label="Emergency service"
      >
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="block w-2 h-2 rounded-full bg-white animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold tracking-micro uppercase">
                  24/7 Emergency Service
                </span>
              </div>
              <span className="hidden sm:block w-px h-4 bg-white/40" aria-hidden="true" />
              <span className="hidden sm:block text-sm font-medium">
                Real dispatcher answers, day or night.
              </span>
            </div>
            <a
              href={`tel:${meta.primaryPhone}`}
              className="font-display text-xl md:text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
            >
              {meta.primaryPhone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
