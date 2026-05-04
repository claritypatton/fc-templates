import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ServicesPreview() {
  const { servicesPreview } = siteConfig.home;
  if (!servicesPreview.cards.length) return null;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Services">
      <Container>
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {servicesPreview.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5 tracking-tight">
            {servicesPreview.headline}
          </h2>
          {servicesPreview.body && (
            <p className="text-lg text-ink2 leading-relaxed">{servicesPreview.body}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {servicesPreview.cards.map((card) => {
            const isInternal = card.cta.href.startsWith('/');
            const ctaInner = (
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-accent-dark transition-colors">
                {card.cta.label}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" />
                </svg>
              </span>
            );
            return (
              <article
                key={card.title}
                className="group bg-surface border border-line rounded-card p-7 md:p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-3">{card.title}</h3>
                <p className="text-ink2 leading-relaxed mb-5">{card.body}</p>
                {isInternal ? (
                  <Link href={card.cta.href}>{ctaInner}</Link>
                ) : (
                  <a href={card.cta.href}>{ctaInner}</a>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
