import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function CrisisBand() {
  const { crisisBand } = siteConfig;

  return (
    <section className="py-12 lg:py-16 bg-primary text-white" aria-label="Crisis support">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              {crisisBand.title}
            </h2>
            <p className="text-white/85 leading-relaxed max-w-xl">{crisisBand.body}</p>
          </div>
          <div className="flex-shrink-0">
            <Button href={crisisBand.cta.href} variant="primary" size="lg">
              {crisisBand.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
