import type { FinalCtaBlock } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

type Props = { cta: FinalCtaBlock };

/**
 * FinalCTA — closing dual-CTA band.
 *
 * Each page (home / services / about / contact) supplies its own finalCta
 * data via props. The component is one rendering, multiple data sources.
 */
export function FinalCTA({ cta }: Props) {
  return (
    <section className="bg-primary text-white py-20 md:py-24 relative overflow-hidden" aria-label="Take the next step">
      {/* Decorative coral arc */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="relative max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5 tracking-tight">
            {cta.headline}
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">{cta.body}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={cta.primaryCta.href} variant="primary" size="md">
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
