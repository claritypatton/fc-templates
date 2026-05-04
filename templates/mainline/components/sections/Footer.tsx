import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const { footer, meta } = siteConfig;
  const hasMission = footer.missionTitle && footer.missionBody && footer.missionCta;

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden" aria-label="Site footer">
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />
      <Container>
        <div className="relative">
          {/* Top accent stripe */}
          <div className="h-1 bg-accent mb-12 w-16" aria-hidden="true" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            {/* Brand + Contact */}
            <div className="lg:col-span-4">
              <div className="font-display text-2xl font-extrabold uppercase tracking-tight mb-2">
                {meta.siteName}
              </div>
              <div className="text-[10px] font-bold tracking-micro text-accent uppercase mb-5">
                Licensed · Insured · NATE-Certified
              </div>
              <address className="text-white/70 leading-relaxed mb-5 not-italic text-sm">
                {footer.address.line1}
                <br />
                {footer.address.line2}
              </address>
              <div className="space-y-1">
                <a
                  href={`tel:${footer.phone}`}
                  className="block font-display text-2xl font-bold text-white hover:text-accent transition-colors"
                >
                  {footer.phone}
                </a>
                <a
                  href={`mailto:${footer.email}`}
                  className="block text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {footer.email}
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footer.columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h3 className="text-[11px] font-bold tracking-micro uppercase text-white mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith('/') ? (
                        <Link
                          href={l.href}
                          className="text-sm text-white/70 hover:text-accent transition-colors"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-white/70 hover:text-accent transition-colors"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Mission */}
            {hasMission && (
              <div className="lg:col-span-4">
                <h3 className="text-[11px] font-bold tracking-micro uppercase text-accent mb-3">
                  {footer.missionTitle}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">{footer.missionBody}</p>
                {footer.missionCta && (
                  <Button href={footer.missionCta.href} variant="primary" size="sm">
                    {footer.missionCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Bottom strip */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-white/55 leading-relaxed">{footer.copyright}</div>
            {footer.socialLinks.length > 0 && (
              <div className="flex items-center gap-5">
                {footer.socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold tracking-micro uppercase text-white/55 hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
