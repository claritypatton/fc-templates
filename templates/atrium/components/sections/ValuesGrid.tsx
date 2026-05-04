import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ValuesGrid() {
  const { values } = siteConfig.about;
  if (!values || !values.items.length) return null;

  return (
    <section className="bg-surface2 py-20 md:py-24" aria-label="Our values">
      <Container>
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {values.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight tracking-tight">
            {values.headline}
          </h2>
          {values.body && <p className="text-lg text-ink2 leading-relaxed mt-5">{values.body}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {values.items.map((item) => (
            <div key={item.title} className="bg-surface border border-line rounded-card p-7 md:p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-ink2 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
