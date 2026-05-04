import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  const { finalCta } = siteConfig;

  return (
    <section
      id="final-cta"
      className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden"
      aria-label="Get in touch"
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(227,111,77,0.35) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5">
            {finalCta.headline}
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl mx-auto">
            {finalCta.body}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href={finalCta.primaryCta.href} variant="primary" size="lg">
              {finalCta.primaryCta.label}
            </Button>
            <Button
              href={finalCta.secondaryCta.href}
              variant="ghost"
              size="lg"
              className="text-white border border-white/30 hover:bg-white hover:text-primary"
            >
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
