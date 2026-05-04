import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ProcessSteps() {
  const { process } = siteConfig.services;
  if (!process || !process.steps.length) return null;

  return (
    <section className="bg-bg py-20 md:py-24 border-b border-line" aria-label="Our process">
      <Container>
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
            {process.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] tracking-tight">
            {process.headline}
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 relative">
          {process.steps.map((step, i) => (
            <li
              key={step.number}
              className={`relative pt-8 pb-2 px-6 ${
                i > 0 ? 'sm:border-l border-line' : ''
              } ${i === 2 ? 'border-t sm:border-t-0 sm:border-l border-line' : ''}`}
            >
              {/* Number tile */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white font-display font-extrabold text-lg mb-5 rounded-md">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase text-ink mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-ink2 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
