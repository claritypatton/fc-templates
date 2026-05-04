import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function StatsStrip() {
  const { stats } = siteConfig.about;
  if (!stats || !stats.items.length) return null;

  return (
    <section className="bg-surface2 py-12 md:py-14 border-b border-line/60" aria-label="By the numbers">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-l-2 border-accent pl-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl md:text-5xl font-semibold text-primary leading-none mb-2">
                  {stat.value}
                </span>
                <span className="block text-sm text-ink2 leading-snug">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
