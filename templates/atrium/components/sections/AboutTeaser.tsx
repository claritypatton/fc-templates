import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function AboutTeaser() {
  const { aboutTeaser } = siteConfig.home;
  if (!aboutTeaser) return null;
  const hasImage = !!aboutTeaser.image.src;

  return (
    <section className="bg-surface2 py-20 md:py-28" aria-label="About us">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div>
            {hasImage ? (
              <img
                src={aboutTeaser.image.src}
                alt={aboutTeaser.image.alt}
                className="rounded-card aspect-[5/6] w-full object-cover shadow-card"
              />
            ) : (
              <div
                className="placeholder-image rounded-card aspect-[5/6] w-full shadow-card"
                role="img"
                aria-label={aboutTeaser.image.alt}
              />
            )}
          </div>

          {/* Content */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              {aboutTeaser.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5 tracking-tight">
              {aboutTeaser.headline}
            </h2>
            <p className="text-lg text-ink2 leading-relaxed mb-7">{aboutTeaser.body}</p>

            <ul className="space-y-3.5 mb-8">
              {aboutTeaser.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5.5L4.5 8L9 3" />
                    </svg>
                  </span>
                  <span className="text-ink2 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <Button href={aboutTeaser.cta.href} variant={aboutTeaser.cta.variant ?? 'secondary'} size="md">
              {aboutTeaser.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
