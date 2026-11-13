import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  to: string;
  deliverables?: string[];
  index?: string | number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  to,
  deliverables = [],
  index,
}) => {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between h-full bg-surface border border-border-subtle rounded-2xl p-7 sm:p-8 md:p-10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A39]"
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          {Icon ? (
            <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border-subtle flex items-center justify-center text-[#FF6A39] group-hover:scale-105 transition-transform">
              <Icon size={24} strokeWidth={1.75} />
            </div>
          ) : (
            <span className="w-12 h-12 rounded-xl bg-surface-hover border border-border-subtle flex items-center justify-center font-mono text-sm text-secondary">
              {index || '01'}
            </span>
          )}
          {index && (
            <span className="font-mono text-xs text-muted tracking-widest">{index}</span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary tracking-tight group-hover:text-[#FF6A39] transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          {description}
        </p>

        {deliverables.length > 0 && (
          <ul className="mt-6 pt-5 border-t border-border-subtle space-y-2">
            {deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-secondary">
                <span className="w-1 h-1 rounded-full bg-[#FF6A39]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 pt-5 border-t border-border-subtle flex items-center gap-2 font-medium text-xs sm:text-sm text-[#FF6A39] group-hover:underline underline-offset-4">
        <span>Explore service</span>
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ServiceCard;
