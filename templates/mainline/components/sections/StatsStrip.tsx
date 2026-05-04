import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function StatsStrip() {
  const { stats } = siteConfig.about;
  if (!stats || !stats.items.length) return null;

  return (
    <section className="bg-primary text-white py-14 md:py-16 relative overflow-hidden" aria-label="By the numbers">
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />
      <Container>
        <dl className="relative grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.items.map((stat) => (
            <div key={stat.label} className="bg-primary p-7 md:p-8">
              <dt className="font-mono text-[10px] font-bold tracking-micro uppercase text-white/60 mb-3">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl md:text-6xl font-extrabold text-accent leading-none tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
