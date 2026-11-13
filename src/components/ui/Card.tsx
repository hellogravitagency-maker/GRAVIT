import React from 'react';

export type CardVariant = 'default' | 'canvas' | 'space' | 'outline' | 'interactive';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface border border-border-subtle shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
  canvas: 'bg-[var(--gravit-canvas)] border border-[var(--color-border)] text-[var(--gravit-space)]',
  space: 'bg-[var(--gravit-space-surface,#14141B)] border border-[var(--gravit-space-border,rgba(248,248,240,0.12))] text-[var(--gravit-nova,#F8F8F0)]',
  outline: 'bg-transparent border border-border',
  interactive:
    'bg-surface border border-border-subtle hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
};

const paddingStyles = {
  none: 'p-0',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10 md:p-12',
  xl: 'p-10 sm:p-12 md:p-16',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl relative overflow-hidden transition-colors ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
