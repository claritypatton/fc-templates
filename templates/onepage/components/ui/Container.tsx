import type { ReactNode, HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: 'default' | 'narrow' | 'wide';
};

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  narrow: 'max-w-prose-wide',
  default: 'max-w-content',
  wide: 'max-w-[1400px]',
};

export function Container({ children, size = 'default', className = '', ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
