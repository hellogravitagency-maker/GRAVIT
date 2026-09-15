import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="w-full h-full transition-opacity duration-300 ease-out">
      {children}
    </div>
  );
}
