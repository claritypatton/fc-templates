import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TrustBadges() {
  const { trustBadges } = siteConfig.home;
  if (!trustBadges || !trustBadges.items.length) return null;

  return (
    <section className="bg-surface2 py-14 md:py-16 border-b border-line/60" aria-label="Why families choose us">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {trustBadges.items.map((badge) => (
            <div key={badge.title}>
              {badge.eyebrow && (
                <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                  {badge.eyebrow}
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-primary mb-2">{badge.title}</h3>
              <p className="text-ink2 leading-relaxed">{badge.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
