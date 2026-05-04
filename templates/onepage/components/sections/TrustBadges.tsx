import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TrustBadges() {
  const { items } = siteConfig.trustBadges;

  return (
    <section className="py-16 lg:py-20 bg-surface" aria-label="Trust statements">
      <Container>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {items.map((item, i) => (
            <div key={i} className="text-center md:text-left">
              {item.eyebrow && (
                <div className="inline-block text-[10px] font-bold tracking-widest text-accent uppercase mb-3 px-2 py-1 bg-accent/10 rounded">
                  {item.eyebrow}
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-ink2 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
