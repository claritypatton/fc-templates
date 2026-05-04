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

/**
 * Button — Mainline edition.
 *
 * Squared corners (4px) and uppercase labels signal industrial precision.
 * Pill buttons would feel out of place on a contractor brand.
 */
const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent-dark border border-accent hover:border-accent-dark',
  secondary:
    'bg-white text-primary border border-primary hover:bg-primary hover:text-white',
  ghost:
    'bg-transparent text-primary hover:text-accent border border-transparent',
  'on-dark':
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary hover:border-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-xs tracking-micro',
  md: 'px-6 py-3.5 text-sm tracking-micro',
  lg: 'px-8 py-4 text-base tracking-micro',
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
    'inline-flex items-center justify-center gap-2.5 rounded-md font-bold uppercase transition-colors duration-150';
  const composed = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const showArrow = variant === 'primary' || variant === 'on-dark';

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
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}
