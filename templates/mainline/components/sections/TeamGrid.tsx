import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TeamGrid() {
  const { team } = siteConfig.about;
  if (!team || !team.members.length) return null;

  return (
    <section className="bg-bg py-20 md:py-28" aria-label="Our team">
      <Container>
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-bold tracking-micro uppercase text-accent mb-4">
            {team.eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-ink leading-[1.0] tracking-tight">
            {team.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.members.map((member) => {
            const hasImage = !!member.image.src;
            return (
              <article key={member.name} className="bg-surface border border-line">
                {hasImage ? (
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div
                    className="placeholder-image aspect-[4/5] w-full"
                    role="img"
                    aria-label={member.image.alt}
                  />
                )}
                <div className="p-6">
                  <div className="font-mono text-[10px] font-bold tracking-micro uppercase text-accent mb-2">
                    {member.role}
                  </div>
                  <h3 className="font-display text-xl font-extrabold uppercase text-ink mb-3 tracking-tight">
                    {member.name}
                  </h3>
                  {member.bio && <p className="text-ink2 leading-relaxed text-sm">{member.bio}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
