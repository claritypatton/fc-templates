import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function PartnersSection() {
  const { partners } = siteConfig;

  return (
    <section id="partners" className="py-20 lg:py-28 bg-bg" aria-label="Partnerships">
      <Container>
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {partners.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-6">
            {partners.headline}
          </h2>
          <p className="text-lg text-ink2 leading-relaxed">{partners.body}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {partners.categories.map((cat, i) => (
            <div
              key={i}
              className="bg-surface rounded-card p-7 border border-line shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-card bg-primary/8 text-primary flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M9 5v4l2.5 2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-ink2 leading-relaxed">{cat.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button href={partners.cta.href} variant={partners.cta.variant ?? 'secondary'} size="md">
          {partners.cta.label}
        </Button>
      </Container>
    </section>
  );
}
