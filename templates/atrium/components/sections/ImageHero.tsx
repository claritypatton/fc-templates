import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * ImageHero — full-bleed photographic hero (the SCAMHC-style home hero).
 *
 * The image fills the section. A teal-to-dark gradient overlay sits on top
 * to guarantee text legibility regardless of which photograph is dropped in.
 * Until a real image is in /public/img/, a branded gradient placeholder
 * renders behind the same overlay so the hero is presentable empty.
 */
export function ImageHero() {
  const { hero } = siteConfig.home;
  const hasImage = !!hero.image.src;

  return (
    <section className="relative isolate overflow-hidden" aria-label="Hero">
      {/* Background — real image OR placeholder gradient */}
      <div className="absolute inset-0 -z-10">
        {hasImage ? (
          // Real image rendered as a CSS background — supports any aspect ratio
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.image.src})` }}
            role="img"
            aria-label={hero.image.alt}
          />
        ) : (
          <div className="w-full h-full placeholder-image" role="img" aria-label={hero.image.alt} />
        )}
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden="true" />

      {/* Content */}
      <Container>
        <div className="py-28 md:py-36 lg:py-44 max-w-2xl animate-rise">
          <div className="text-xs font-semibold tracking-widest text-white/85 uppercase mb-5">
            {hero.eyebrow}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] mb-6 tracking-tight">
            {hero.headline}
          </h1>
          <p className="text-lg text-white/90 leading-relaxed mb-7 max-w-xl">
            {hero.body}
          </p>
          {hero.bullets && hero.bullets.length > 0 && (
            <ul className="text-sm text-white/85 mb-8 flex flex-wrap gap-x-6 gap-y-2">
              {hero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
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
              <Button href={hero.secondaryCta.href} variant="on-dark" size="md">
                {hero.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
