import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function VolunteerGrid() {
  const { volunteer } = siteConfig;

  return (
    <section id="volunteer" className="py-20 lg:py-28 bg-surface2" aria-label="Volunteer">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              {volunteer.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-6">
              {volunteer.headline}
            </h2>
            <p className="text-ink2 leading-relaxed mb-8">{volunteer.body}</p>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {volunteer.images.map((img, i) => (
                <div
                  key={i}
                  className="placeholder-image rounded-card aspect-square w-full shadow-card"
                  role="img"
                  aria-label={img.alt}
                />
              ))}
            </div>

            <Button href={volunteer.cta.href} variant={volunteer.cta.variant ?? 'primary'} size="md">
              {volunteer.cta.label}
            </Button>
          </div>

          {/* Right: 4-item grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {volunteer.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-card p-7 border border-line shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/12 text-accent flex items-center justify-center mb-4 font-display font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink2 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
