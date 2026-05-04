import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

/**
 * TopBar — Mainline edition. Black band with a hot-orange phone CTA
 * pinned to the right. Hidden on mobile (the mobile header has its own
 * call button). Renders nothing if siteConfig.topBar is omitted.
 */
export function TopBar() {
  const { topBar } = siteConfig;
  if (!topBar) return null;

  return (
    <div className="bg-primary text-white text-xs hidden md:block border-b border-line2">
      <Container>
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            {topBar.leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/70 hover:text-white transition-colors uppercase tracking-micro font-semibold"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {topBar.rightLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/70 hover:text-white transition-colors uppercase tracking-micro font-semibold"
              >
                {l.label}
              </a>
            ))}
            <span className="block w-px h-3 bg-white/15" aria-hidden="true" />
            <a
              href={`tel:${topBar.phone}`}
              className="flex items-center gap-2 font-bold uppercase tracking-micro text-accent hover:text-white transition-colors"
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              {topBar.phoneLabel} · {topBar.phone}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
