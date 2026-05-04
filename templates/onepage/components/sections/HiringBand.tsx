import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HiringBand() {
  const { hiring } = siteConfig;

  return (
    <section id="hiring" className="py-20 lg:py-28 bg-surface2" aria-label="Careers">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              {hiring.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
              {hiring.headline}
            </h2>
          </div>

          <div>
            <h3 className="font-display text-2xl text-primary font-semibold mb-5">
              {hiring.subhead}
            </h3>
            <ul className="space-y-3 mb-8">
              {hiring.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-ink2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href={hiring.primaryCta.href} variant="primary" size="md">
                {hiring.primaryCta.label}
              </Button>
              <Button href={hiring.secondaryCta.href} variant="secondary" size="md">
                {hiring.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
