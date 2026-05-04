import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const { footer, meta } = siteConfig;
  const hasMission = footer.missionTitle && footer.missionBody && footer.missionCta;

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10" aria-label="Site footer">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand + Contact */}
          <div className="lg:col-span-4">
            <div className="font-display text-xl font-bold mb-5">{meta.siteName}</div>
            <address className="text-white/75 leading-relaxed mb-3 not-italic">
              {footer.address.line1}
              <br />
              {footer.address.line2}
            </address>
            <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1 mt-5">
              Main Office
            </div>
            <a
              href={`tel:${footer.phone}`}
              className="text-white hover:text-accent transition-colors block mb-2"
            >
              {footer.phone}
            </a>
            <a
              href={`mailto:${footer.email}`}
              className="text-white/75 hover:text-accent transition-colors text-sm"
            >
              {footer.email}
            </a>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-display font-semibold text-white mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') ? (
                      <Link href={l.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mission column */}
          {hasMission && (
            <div className="lg:col-span-4">
              <h3 className="font-display font-semibold text-white mb-4">{footer.missionTitle}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">{footer.missionBody}</p>
              {footer.missionCta && (
                <Button href={footer.missionCta.href} variant="primary" size="sm">
                  {footer.missionCta.label}
                </Button>
              )}
              {footer.nonprofitNote && (
                <p className="text-xs text-white/50 mt-5">{footer.nonprofitNote}</p>
              )}
            </div>
          )}
        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-white/55">{footer.copyright}</div>
          {footer.socialLinks.length > 0 && (
            <div className="flex items-center gap-5">
              {footer.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/55 hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
