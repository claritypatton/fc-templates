import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function StorySection() {
  const { story } = siteConfig.about;
  const hasImage = !!story.image.src;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Our story">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text — sticky on desktop so image and copy align nicely on long stories */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-6 tracking-tight">
              {story.headline}
            </h2>
            <p className="text-lg text-ink2 leading-relaxed mb-7">{story.body}</p>
            {story.bullets && story.bullets.length > 0 && (
              <ul className="space-y-3.5">
                {story.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 5.5L4.5 8L9 3" />
                      </svg>
                    </span>
                    <span className="text-ink2 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            {hasImage ? (
              <img
                src={story.image.src}
                alt={story.image.alt}
                className="rounded-card aspect-[4/5] w-full object-cover shadow-card"
              />
            ) : (
              <div
                className="placeholder-image rounded-card aspect-[4/5] w-full shadow-card"
                role="img"
                aria-label={story.image.alt}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
