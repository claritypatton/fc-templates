import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  const { topBar } = siteConfig;

  return (
    <div className="bg-primary-dark text-white text-sm">
      <Container>
        <div className="flex items-center justify-between py-2 gap-4">
          <div className="flex items-center gap-5">
            {topBar.leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/85 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {topBar.rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/85 hover:text-accent transition-colors hidden sm:inline"
              >
                {link.label}
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
