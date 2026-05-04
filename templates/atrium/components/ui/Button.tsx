import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent-dark shadow-card hover:shadow-card-hover',
  secondary:
    'bg-transparent text-primary border border-primary/30 hover:bg-primary hover:text-white hover:border-primary',
  ghost:
    'bg-transparent text-ink2 hover:text-primary',
  // For use on dark hero overlays — high-contrast outline that reads on photography
  'on-dark':
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary hover:border-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const isExternal =
    href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200';
  const composed = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const showArrow = variant === 'primary';

  if (isExternal) {
    const isPhoneOrMail = href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        target={isPhoneOrMail ? undefined : '_blank'}
        rel={isPhoneOrMail ? undefined : 'noopener noreferrer'}
        className={composed}
        aria-label={ariaLabel}
      >
        {children}
        {showArrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={composed} aria-label={ariaLabel}>
      {children}
      {showArrow && <Arrow />}
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7h8M7 3l4 4-4 4" />
    </svg>
  );
}
