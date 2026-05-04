import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

/**
 * TopBar — utility strip above the main header.
 * Renders nothing if siteConfig.topBar is omitted.
 */
export function TopBar() {
  const { topBar } = siteConfig;
  if (!topBar) return null;

  return (
    <div className="bg-primary-dark text-white text-xs hidden md:block">
      <Container>
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-5">
            {topBar.leftLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-white/75 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {topBar.rightLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-white/75 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${topBar.phone}`}
              className="font-semibold text-accent hover:text-white transition-colors"
            >
              {topBar.phoneLabel} — {topBar.phone}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
