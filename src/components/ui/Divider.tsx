import React from 'react';

export interface DividerProps {
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ label, className = '' }) => {
  if (!label) {
    return <hr className={`border-0 border-t border-border-subtle my-8 md:my-12 ${className}`} />;
  }

  return (
    <div className={`relative flex items-center justify-center my-8 md:my-12 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border-subtle" />
      </div>
      <div className="relative bg-background px-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">{label}</span>
      </div>
    </div>
  );
};

export default Divider;
