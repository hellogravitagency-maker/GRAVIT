import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Badge from './Badge';

export interface ProductPreviewCardProps {
  title: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'in-progress' | 'prototype';
  platform?: string;
  to?: string;
  href?: string;
  image?: string;
}

export const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
  title,
  tagline,
  description,
  status,
  platform = 'Web Application',
  to,
  href,
  image,
}) => {
  const isExternal = Boolean(href);
  const cardUrl = to || href || '#';

  const statusBadge = {
    live: <Badge variant="live" dot>Live Product</Badge>,
    beta: <Badge variant="beta" dot>Public Beta</Badge>,
    'in-progress': <Badge variant="outline">In Development</Badge>,
    prototype: <Badge variant="prototype">Interactive Prototype</Badge>,
  }[status];

  const content = (
    <article className="group h-full flex flex-col justify-between bg-surface border border-border-subtle rounded-2xl p-7 sm:p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            {statusBadge}
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-surface-hover">
              {platform}
            </span>
          </div>
          <ArrowUpRight size={18} className="text-secondary group-hover:text-[#FF6A39] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {image && (
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-surface-hover border border-border-subtle mb-6">
            <img src={image} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
        )}

        <h3 className="text-2xl font-heading font-semibold text-primary tracking-tight group-hover:text-[#FF6A39] transition-colors">
          {title}
        </h3>
        <p className="font-mono text-xs text-[#FF6A39] mt-1">{tagline}</p>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-secondary">
        <span>GRAVIT Studio Product</span>
        <span className="text-primary font-medium group-hover:text-[#FF6A39] transition-colors">View Product &rarr;</span>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a href={cardUrl} target="_blank" rel="noopener noreferrer" className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A39] rounded-2xl">
        {content}
      </a>
    );
  }

  return (
    <Link to={cardUrl} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A39] rounded-2xl">
      {content}
    </Link>
  );
};

export default ProductPreviewCard;
