import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function StorySection() {
  const { story } = siteConfig.about;
  const hasImage = !!story.image.src;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Our story">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
              Our Story
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] mb-7 tracking-tight">
              {story.headline}
            </h2>
            <p className="text-lg text-ink2 leading-relaxed mb-7">{story.body}</p>
            {story.bullets && story.bullets.length > 0 && (
              <ul className="space-y-2.5 border-l-2 border-accent pl-6">
                {story.bullets.map((b, i) => (
                  <li key={i} className="text-ink leading-relaxed font-medium">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-accent z-10"
                aria-hidden="true"
              />
              {hasImage ? (
                <img
                  src={story.image.src}
                  alt={story.image.alt}
                  className="rounded-card aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div
                  className="placeholder-image rounded-card aspect-[4/5] w-full"
                  role="img"
                  aria-label={story.image.alt}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
