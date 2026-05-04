import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function AboutTeaser() {
  const { aboutTeaser } = siteConfig.home;
  if (!aboutTeaser) return null;
  const hasImage = !!aboutTeaser.image.src;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="About us">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="absolute -bottom-3 -left-3 w-20 h-20 border-b-4 border-l-4 border-accent z-10"
              aria-hidden="true"
            />
            {hasImage ? (
              <img
                src={aboutTeaser.image.src}
                alt={aboutTeaser.image.alt}
                className="rounded-card aspect-[5/4] w-full object-cover"
              />
            ) : (
              <div
                className="placeholder-image rounded-card aspect-[5/4] w-full"
                role="img"
                aria-label={aboutTeaser.image.alt}
              />
            )}
          </div>

          {/* Content */}
          <div>
            <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
              {aboutTeaser.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] mb-6 tracking-tight">
              {aboutTeaser.headline}
            </h2>
            <p className="text-lg text-ink2 leading-relaxed mb-7">{aboutTeaser.body}</p>

            <ul className="space-y-3 mb-8">
              {aboutTeaser.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span
                    className="flex-shrink-0 mt-1 w-4 h-4 bg-accent flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="square">
                      <path d="M2 5.5L4.5 8L9 3" />
                    </svg>
                  </span>
                  <span className="text-ink leading-relaxed font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <Button
              href={aboutTeaser.cta.href}
              variant={aboutTeaser.cta.variant ?? 'secondary'}
              size="md"
            >
              {aboutTeaser.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
