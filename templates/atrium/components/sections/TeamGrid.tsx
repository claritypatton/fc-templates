import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TeamGrid() {
  const { team } = siteConfig.about;
  if (!team || !team.members.length) return null;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Our team">
      <Container>
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            {team.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight tracking-tight">
            {team.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.members.map((member) => {
            const hasImage = !!member.image.src;
            return (
              <article key={member.name}>
                {hasImage ? (
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    className="rounded-card aspect-[4/5] w-full object-cover shadow-card mb-5"
                  />
                ) : (
                  <div
                    className="placeholder-image rounded-card aspect-[4/5] w-full shadow-card mb-5"
                    role="img"
                    aria-label={member.image.alt}
                  />
                )}
                <h3 className="font-display text-xl font-semibold text-ink mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-accent mb-3">{member.role}</div>
                {member.bio && <p className="text-ink2 leading-relaxed text-sm">{member.bio}</p>}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
