import type { FinalCtaBlock } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

type Props = { cta: FinalCtaBlock };

/**
 * FinalCTA — Mainline edition. Bold orange band.
 *
 * Each page (home / services / about / contact) supplies its own finalCta
 * data via props. The component is one rendering, multiple data sources.
 */
export function FinalCTA({ cta }: Props) {
  return (
    <section className="bg-accent text-white relative overflow-hidden" aria-label="Take the next step">
      {/* Diagonal stripe accent strip — top */}
      <div className="h-1.5 bg-primary" aria-hidden="true" />

      <Container>
        <div className="py-16 md:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.0] tracking-tight mb-4">
              {cta.headline}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">{cta.body}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
            <Button href={cta.primaryCta.href} variant="secondary" size="md">
              {cta.primaryCta.label}
            </Button>
            {cta.secondaryCta && (
              <Button href={cta.secondaryCta.href} variant="on-dark" size="md">
                {cta.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
