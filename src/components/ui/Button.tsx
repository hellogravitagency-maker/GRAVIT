import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'ember';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background hover:opacity-90 active:scale-[0.98] border border-transparent shadow-sm',
  secondary:
    'bg-surface hover:bg-surface-hover text-primary border border-border hover:border-primary/40 active:scale-[0.98]',
  outline:
    'bg-transparent hover:bg-surface text-primary border border-border hover:border-primary active:scale-[0.98]',
  ghost:
    'bg-transparent hover:bg-surface-hover text-secondary hover:text-primary border border-transparent active:scale-[0.98]',
  ember:
    'bg-[#FF6A39] hover:bg-[#E85526] text-white font-semibold active:scale-[0.98] border border-transparent shadow-[0_4px_16px_rgba(255,106,57,0.25)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
  md: 'text-sm px-5 py-2.5 rounded-full gap-2',
  lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-medium',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  external,
  leftIcon,
  rightIcon,
  isLoading,
  className = '',
  disabled,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-sans tracking-tight transition-all duration-300 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A39] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none';
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin mr-1.5" aria-hidden="true" />
      )}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} onClick={props.onClick as any}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={props.onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

export default Button;
