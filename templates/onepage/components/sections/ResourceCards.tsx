import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ResourceCards() {
  const { resourceCards } = siteConfig;

  return (
    <section id="resources" className="py-20 lg:py-28 bg-surface2" aria-label="Resources">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {resourceCards.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
            {resourceCards.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resourceCards.cards.map((card, i) => {
            const isExternal = card.cta.href.startsWith('http') || card.cta.href.startsWith('tel:');
            const Tag: any = isExternal ? 'a' : Link;
            const linkProps = isExternal
              ? { href: card.cta.href, target: card.cta.href.startsWith('tel:') ? undefined : '_blank', rel: card.cta.href.startsWith('tel:') ? undefined : 'noopener noreferrer' }
              : { href: card.cta.href };

            return (
              <Tag
                key={i}
                {...linkProps}
                className="group block bg-surface rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-200 border border-line hover:border-primary/20"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-ink2 leading-relaxed mb-6">{card.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {card.cta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M3 7h8M7 3l4 4-4 4" />
                  </svg>
                </span>
              </Tag>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
