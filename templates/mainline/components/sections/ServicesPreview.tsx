import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ServicesPreview() {
  const { servicesPreview } = siteConfig.home;
  if (!servicesPreview.cards.length) return null;

  return (
    <section className="bg-surface py-20 md:py-28" aria-label="Services">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
              {servicesPreview.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] tracking-tight">
              {servicesPreview.headline}
            </h2>
          </div>
          {servicesPreview.body && (
            <p className="text-ink2 leading-relaxed max-w-md">{servicesPreview.body}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {servicesPreview.cards.map((card, i) => {
            const isInternal = card.cta.href.startsWith('/');
            const inner = (
              <article className="group relative bg-white p-7 md:p-8 h-full flex flex-col transition-colors hover:bg-primary hover:text-white">
                <div className="font-mono text-xs font-bold text-accent mb-6">
                  /0{i + 1}
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-ink group-hover:text-white tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-ink2 group-hover:text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  {card.body}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-micro uppercase text-accent group-hover:text-white">
                  {card.cta.label}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </span>
              </article>
            );
            return isInternal ? (
              <Link key={card.title} href={card.cta.href} className="block">
                {inner}
              </Link>
            ) : (
              <a key={card.title} href={card.cta.href} className="block">
                {inner}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
