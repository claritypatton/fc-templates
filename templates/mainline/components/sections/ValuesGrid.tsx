import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ValuesGrid() {
  const { values } = siteConfig.about;
  if (!values || !values.items.length) return null;

  return (
    <section className="bg-surface py-20 md:py-24" aria-label="How we operate">
      <Container>
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
            {values.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] tracking-tight">
            {values.headline}
          </h2>
          {values.body && <p className="text-lg text-ink2 leading-relaxed mt-5">{values.body}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line">
          {values.items.map((item, i) => (
            <div key={item.title} className="bg-white p-8">
              <div className="font-mono text-xs font-bold text-accent mb-4">
                /RULE.0{i + 1}
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase text-ink mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-ink2 leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
