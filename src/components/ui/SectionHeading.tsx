import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  serifWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  serifWord,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-20 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#FF6A39] font-medium mb-3 md:mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-[-0.035em] text-primary leading-[1.08] text-balance">
        {title}
        {serifWord && (
          <>
            {' '}
            <span className="font-serif italic font-normal tracking-normal text-[#FF6A39]">
              {serifWord}
            </span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-secondary leading-relaxed tracking-[-0.015em] text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
