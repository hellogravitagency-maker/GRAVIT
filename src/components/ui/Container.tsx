import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
