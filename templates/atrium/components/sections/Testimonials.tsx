import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function Testimonials() {
  const { testimonials } = siteConfig.home;
  if (!testimonials || !testimonials.items.length) return null;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Testimonials">
      <Container>
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {testimonials.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight tracking-tight">
            {testimonials.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.items.map((t, i) => (
            <figure key={i} className="relative">
              {/* Decorative quote glyph */}
              <span
                className="absolute -top-2 -left-1 font-display text-7xl text-accent/30 leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative pt-6">
                <p className="font-display text-xl text-ink leading-snug mb-5">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="border-t border-line pt-4">
                <div className="text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-ink2 mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
