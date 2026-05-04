import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function ProcessSteps() {
  const { process } = siteConfig.services;
  if (!process || !process.steps.length) return null;

  return (
    <section className="bg-primary text-white py-20 md:py-24" aria-label="How a visit works">
      <Container>
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {process.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            {process.headline}
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {process.steps.map((step) => (
            <li key={step.number} className="relative pt-6 border-t border-white/20">
              <div className="font-display text-3xl font-semibold text-accent mb-3">{step.number}</div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
