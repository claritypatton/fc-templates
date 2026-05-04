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
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-line">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight focus:outline-none"
            aria-label={header.logoText}
          >
            <span className="font-display text-lg md:text-xl font-bold text-primary">
              {header.logoText}
            </span>
            {header.logoSubtext && (
              <span className="text-[10px] tracking-widest text-ink2 uppercase font-semibold">
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
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-primary' : 'text-ink2 hover:text-primary'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
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
            className="lg:hidden flex items-center justify-center w-10 h-10 text-primary"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-line pt-4">
            <nav className="flex flex-col gap-3 mb-4" aria-label="Primary mobile">
              {header.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium py-1 ${
                      active ? 'text-primary' : 'text-ink2 hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button href={header.ctaHref} variant="primary" size="sm" className="w-full justify-center">
              {header.ctaLabel}
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}
