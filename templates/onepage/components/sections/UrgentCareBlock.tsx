import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function UrgentCareBlock() {
  const { urgentCare } = siteConfig;

  return (
    <section id="urgent-care" className="py-20 lg:py-28 bg-bg" aria-label="Urgent care information">
      <Container>
        <div className="bg-primary text-white rounded-card overflow-hidden shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch */}
            <div className="p-10 lg:p-14">
              <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                {urgentCare.eyebrow}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
                {urgentCare.headline}
              </h2>
              <p className="text-white/85 leading-relaxed mb-8">{urgentCare.body}</p>
              <div className="flex flex-wrap gap-3">
                <Button href={urgentCare.primaryCta.href} variant="primary" size="md">
                  {urgentCare.primaryCta.label}
                </Button>
                <Button href={urgentCare.secondaryCta.href} variant="ghost" size="md" className="text-white border border-white/30 hover:bg-white hover:text-primary">
                  {urgentCare.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* Right: location detail */}
            <div className="bg-primary-dark p-10 lg:p-14 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                    Location
                  </div>
                  <div className="text-xl font-display font-semibold mb-1">
                    {urgentCare.address.line1}
                  </div>
                  <div className="text-white/75">{urgentCare.address.line2}</div>
                </div>
                <div className="border-t border-white/15 pt-6">
                  <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                    Need Help Now?
                  </div>
                  <a
                    href={`tel:${urgentCare.phone}`}
                    className="text-2xl md:text-3xl font-display font-semibold text-accent hover:text-white transition-colors"
                  >
                    {urgentCare.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
