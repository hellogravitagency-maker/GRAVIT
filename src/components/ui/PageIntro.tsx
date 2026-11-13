import { ReactNode } from 'react';

// Shared opener for inner pages; the h1 gets the masked line reveal from PageTransition.
export default function PageIntro({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <section className="pt-40 md:pt-52 pb-16 md:pb-24 px-6 text-center">
      <p className="text-sm md:text-[17px] font-medium text-accent mb-5">{eyebrow}</p>
      <h1 className="page-title font-heading font-semibold text-primary text-[clamp(3rem,8vw,7rem)] tracking-[-0.05em] leading-[0.98] max-w-5xl mx-auto">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg md:text-2xl text-secondary tracking-[-0.02em] leading-snug max-w-2xl mx-auto">{subtitle}</p>
      )}
    </section>
  );
}
