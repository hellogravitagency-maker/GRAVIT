import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Badge from './Badge';

export interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  imageAlt?: string;
  ownership?: 'client' | 'gravit-product' | 'open-source' | 'concept';
  status?: 'live' | 'beta' | 'in-progress' | 'prototype';
  technologies?: string[];
  to?: string;
  href?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  imageAlt,
  ownership = 'client',
  status = 'live',
  technologies = [],
  to,
  href,
  featured = false,
}) => {
  const isExternal = Boolean(href);
  const cardUrl = to || href || '#';

  const ownershipBadge = {
    client: <Badge variant="client">Client Work</Badge>,
    'gravit-product': <Badge variant="product">Studio Product</Badge>,
    'open-source': <Badge variant="opensource">Open Source</Badge>,
    concept: <Badge variant="prototype">Concept Prototype</Badge>,
  }[ownership];

  const statusBadge = {
    live: <Badge variant="live" dot>Live</Badge>,
    beta: <Badge variant="beta" dot>Beta</Badge>,
    'in-progress': <Badge variant="outline">In Dev</Badge>,
    prototype: <Badge variant="prototype">Prototype</Badge>,
  }[status];

  const innerContent = (
    <article className="group h-full flex flex-col bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Visual / Screenshot frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-hover border-b border-border-subtle">
        {image ? (
          <img
            src={image}
            alt={imageAlt || `${title} preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-surface to-surface-hover">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">Interface Preview</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {ownershipBadge}
          {statusBadge}
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary">{category}</span>
            <span className="text-secondary group-hover:text-[#FF6A39] transition-colors">
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary tracking-tight group-hover:text-[#FF6A39] transition-colors">
            {title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {technologies.length > 0 && (
          <div className="mt-5 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-surface-hover">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a href={cardUrl} target="_blank" rel="noopener noreferrer" className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A39] rounded-2xl">
        {innerContent}
      </a>
    );
  }

  return (
    <Link to={cardUrl} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A39] rounded-2xl">
      {innerContent}
    </Link>
  );
};

export default ProjectCard;
