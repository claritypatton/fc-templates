import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroStack() {
  const { heroes } = siteConfig;

  return (
    <section id="home-hero" aria-label="Hero">
      {heroes.map((hero, i) => (
        <HeroBlock key={i} {...hero} index={i} />
      ))}
    </section>
  );
}

type HeroBlockProps = (typeof siteConfig.heroes)[number] & { index: number };

function HeroBlock({ eyebrow, headline, body, bullets, primaryCta, secondaryCta, image, align, index }: HeroBlockProps) {
  // Alternate text/image position by default unless explicitly aligned
  const textOnRight = align === 'right' || (align === undefined && index % 2 === 1);
  const altBg = index % 2 === 1;

  return (
    <div className={`relative overflow-hidden ${altBg ? 'bg-surface2' : 'bg-bg'}`}>
      <Container>
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24 ${textOnRight ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* Text */}
          <div className="animate-rise">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">
              {eyebrow}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.05] mb-6 tracking-tight">
              {headline}
            </h1>
            <p className="text-lg text-ink2 leading-relaxed mb-6 max-w-xl">
              {body}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="text-sm text-ink2 mb-8 flex flex-wrap gap-x-6 gap-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-3">
              <Button href={primaryCta.href} variant={primaryCta.variant ?? 'primary'} size="md">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant={secondaryCta.variant ?? 'secondary'} size="md">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* Image (placeholder gradient until replaced) */}
          <div className="animate-rise-delay-1">
            <div
              className="placeholder-image rounded-card aspect-[4/5] lg:aspect-[5/6] w-full shadow-card"
              role="img"
              aria-label={image.alt}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
