import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

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
            className={`${altBg ? 'bg-surface' : 'bg-bg'} py-20 md:py-24 ${
              i < items.length - 1 ? 'border-b border-line' : ''
            }`}
            aria-label={service.title}
          >
            <Container>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  textOnRight ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <div
                    className={`absolute -top-3 ${textOnRight ? '-right-3 border-t-4 border-r-4' : '-left-3 border-t-4 border-l-4'} w-16 h-16 border-accent z-10`}
                    aria-hidden="true"
                  />
                  {hasImage ? (
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="rounded-card aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <div
                      className="placeholder-image rounded-card aspect-[4/5] w-full"
                      role="img"
                      aria-label={service.image.alt}
                    />
                  )}
                </div>

                {/* Text */}
                <div>
                  <div className="font-mono text-sm font-bold text-accent mb-4">
                    /SERVICE.0{i + 1}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-ink leading-[1.0] mb-5 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-ink2 leading-relaxed mb-7">{service.body}</p>

                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="space-y-2.5 mb-8">
                      {service.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm">
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
