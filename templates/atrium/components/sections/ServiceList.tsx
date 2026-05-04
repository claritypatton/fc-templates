import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * ServiceList — alternating image/text rows for the Services page.
 *
 * Each service gets its own row. Image and text swap sides every other
 * row to keep the page rhythm interesting. Background also alternates
 * between bg and surface2 to define rows visually.
 */
export function ServiceList() {
  const { items } = siteConfig.services;
  if (!items.length) return null;

  return (
    <>
      {items.map((service, i) => {
        const textOnRight = i % 2 === 1;
        const altBg = i % 2 === 1;
        const hasImage = !!service.image.src;

        return (
          <section
            key={service.title}
            id={`service-${i}`}
            className={`${altBg ? 'bg-surface2' : 'bg-bg'} py-20 md:py-24`}
            aria-label={service.title}
          >
            <Container>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  textOnRight ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div>
                  {hasImage ? (
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="rounded-card aspect-[4/5] w-full object-cover shadow-card"
                    />
                  ) : (
                    <div
                      className="placeholder-image rounded-card aspect-[4/5] w-full shadow-card"
                      role="img"
                      aria-label={service.image.alt}
                    />
                  )}
                </div>

                {/* Text */}
                <div>
                  <div className="font-display text-sm text-accent font-semibold mb-3 tracking-wide">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mb-4 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-ink2 leading-relaxed mb-6">{service.body}</p>

                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="space-y-3 mb-7">
                      {service.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
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
                  )}

                  {service.cta && (
                    <Button href={service.cta.href} variant={service.cta.variant ?? 'secondary'} size="md">
                      {service.cta.label}
                    </Button>
                  )}
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
