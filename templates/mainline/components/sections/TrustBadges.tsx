import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TrustBadges() {
  const { trustBadges } = siteConfig.home;
  if (!trustBadges || !trustBadges.items.length) return null;

  return (
    <section className="bg-bg py-16 md:py-20 border-b border-line" aria-label="Why choose us">
      <Container>
        <div className="grid md:grid-cols-3">
          {trustBadges.items.map((badge, i) => (
            <div
              key={badge.title}
              className={`p-8 md:p-10 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-line' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="font-mono text-xs font-bold text-accent">
                  0{i + 1}
                </span>
                {badge.eyebrow && (
                  <span className="text-[10px] font-bold tracking-micro uppercase text-ink2">
                    {badge.eyebrow}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-extrabold uppercase text-ink tracking-tight mb-3">
                {badge.title}
              </h3>
              <p className="text-ink2 leading-relaxed text-sm">{badge.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
