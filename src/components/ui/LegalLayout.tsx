import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
  seoDescription: string;
  seoPath: string;
}

const LEGAL_NAV = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Refund Policy', path: '/refund-policy' }
];

export default function LegalLayout({ title, lastUpdated, children, seoDescription, seoPath }: LegalLayoutProps) {
  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background min-h-screen pt-32 pb-24 font-sans">
      <SEO 
        title={`${title} | GRAVIT®`} 
        description={seoDescription} 
        path={seoPath}
      />
      
      <div className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-t border-border pt-16">
          
          {/* Header & Sidebar Nav */}
          <div className="md:col-span-4 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-6">
              {title}
            </h1>
            {lastUpdated && (
              <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-12">
                Last Updated: {lastUpdated}
              </p>
            )}

            <div className="flex flex-col gap-4 border-t border-border pt-8 mt-12 md:mt-0">
              <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-2">Legal Infrastructure</span>
              {LEGAL_NAV.map(nav => (
                <Link 
                  key={nav.path}
                  to={nav.path}
                  className={`font-medium hover:text-accent transition-colors ${seoPath === nav.path ? 'text-primary underline underline-offset-4 decoration-primary' : 'text-secondary'}`}
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Content Body */}
          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <div className="prose prose-lg prose-neutral max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase 
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-4
              prose-p:text-secondary prose-p:leading-relaxed prose-p:font-light prose-p:mb-6
              prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-accent
              prose-ul:text-secondary prose-ul:font-light
              prose-li:my-2
            ">
              {children}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
