import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function Testimonials() {
  const { testimonials } = siteConfig.home;
  if (!testimonials || !testimonials.items.length) return null;

  return (
    <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden" aria-label="Testimonials">
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />
      <Container>
        <div className="relative">
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
              {testimonials.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-[1.0] tracking-tight">
              {testimonials.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {testimonials.items.map((t, i) => (
              <figure key={i} className="bg-primary p-8 md:p-9">
                {/* Star row */}
                <div className="flex items-center gap-0.5 mb-5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#FF5A1F" aria-hidden="true">
                      <path d="M8 0l2.4 5.2L16 6l-4 3.9 1 5.5L8 12.8 3 15.4l1-5.5L0 6l5.6-.8L8 0z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display text-lg text-white leading-snug font-medium mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-white/15 pt-4">
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/60 mt-0.5 uppercase tracking-micro font-semibold">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
