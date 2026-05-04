'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Header() {
  const { header } = siteConfig;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight focus:outline-none"
            aria-label={header.logoText}
          >
            <span className="font-display text-xl md:text-2xl font-extrabold text-ink uppercase tracking-tight">
              {header.logoText}
            </span>
            {header.logoSubtext && (
              <span className="text-[10px] tracking-micro text-ink2 uppercase font-bold">
                {header.logoSubtext}
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {header.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs font-bold uppercase tracking-micro transition-colors py-2 ${
                    active ? 'text-accent' : 'text-ink hover:text-accent'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute left-0 right-0 -bottom-[17px] h-0.5 bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href={header.ctaHref} variant="primary" size="sm">
              {header.ctaLabel}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-line pt-4">
            <nav className="flex flex-col gap-1 mb-4" aria-label="Primary mobile">
              {header.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold uppercase tracking-micro py-2.5 px-2 -mx-2 rounded-sm ${
                      active ? 'text-accent bg-accent/5' : 'text-ink hover:text-accent'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button href={header.ctaHref} variant="primary" size="md" className="w-full justify-center">
              {header.ctaLabel}
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}
