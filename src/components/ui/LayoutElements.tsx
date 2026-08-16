import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, className, children }: PageHeroProps) {
  return (
    <section className={cn("relative w-full pt-48 pb-24 md:pt-64 md:pb-32 px-6 md:px-8 lg:px-12 flex flex-col justify-end overflow-hidden", className)}>
      <div className="absolute inset-0 z-0 bg-background pointer-events-none" />
      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        {subtitle && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter uppercase leading-[0.9] text-primary"
        >
          {title}
        </motion.h1>
        {children}
      </div>
    </section>
  );
}

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionLayout({ children, className, containerClassName }: SectionLayoutProps) {
  return (
    <section className={cn("py-24 md:py-32 px-6 md:px-8 lg:px-12 w-full", className)}>
      <div className={cn("max-w-[1800px] mx-auto w-full", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface PremiumCardProps {
  title: string;
  description: string;
  number?: string | number;
  className?: string;
  children?: React.ReactNode;
}

export function PremiumCard({ title, description, number, className, children }: PremiumCardProps) {
  return (
    <div className={cn("group relative p-8 rounded-3xl border border-border bg-background hover:bg-surface transition-colors duration-500 overflow-hidden flex flex-col min-h-[300px]", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex-grow">
        {number && (
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-8 text-primary font-mono text-sm group-hover:border-primary/50 transition-colors">
            {number}
          </div>
        )}
        <h3 className="font-bold text-2xl tracking-tight uppercase text-primary mb-4">
          {title}
        </h3>
        <p className="text-secondary text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
      
      {children && (
        <div className="relative z-10 mt-8">
          {children}
        </div>
      )}
    </div>
  );
}
