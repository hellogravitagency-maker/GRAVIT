import React from 'react';

export type BadgeVariant =
  | 'default'
  | 'outline'
  | 'ember'
  | 'live'
  | 'beta'
  | 'prototype'
  | 'client'
  | 'product'
  | 'opensource';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface text-secondary border border-border-subtle',
  outline: 'bg-transparent text-secondary border border-border',
  ember: 'bg-[#FF6A39]/10 text-[#FF6A39] border border-[#FF6A39]/30 font-semibold',
  live: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
  beta: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
  prototype: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
  client: 'bg-surface text-primary border border-border font-medium',
  product: 'bg-[#FF6A39]/15 text-[#FF6A39] border border-[#FF6A39]/30 font-medium',
  opensource: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20',
};

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-muted',
  outline: 'bg-secondary',
  ember: 'bg-[#FF6A39]',
  live: 'bg-emerald-500',
  beta: 'bg-amber-500',
  prototype: 'bg-blue-500',
  client: 'bg-primary',
  product: 'bg-[#FF6A39]',
  opensource: 'bg-purple-500',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  dot = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full select-none transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
          {variant === 'live' && (
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping motion-reduce:hidden" />
          )}
          <span className={`relative h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
