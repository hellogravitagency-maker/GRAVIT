import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const supportLinks = [
  {
    id: 'help-center',
    title: 'Help Center',
    description: 'In-depth guides and videos about the platform, our services, and how to get started.',
    link: '/resources/help'
  },
  {
    id: 'forum',
    title: 'Forum',
    description: 'An online community for GRAVIT users to discuss best practices and seek advice.',
    link: '/resources/forum'
  },
  {
    id: 'webinars',
    title: 'Webinars',
    description: 'Free online sessions where you’ll learn the basics and refine your GRAVIT skills.',
    link: '/resources/webinars'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Stories and solutions for the modern entrepreneur and technical architect.',
    link: '/resources/blog'
  },
  {
    id: 'expert',
    title: 'Hire an Expert',
    description: 'Let us do the work of finding you the perfect Expert to help you stand out online.',
    link: '/contact'
  }
];

const technicalArchive = [
  {
    id: 'engineering-for-scale',
    title: 'Engineering for Scale: Our Approach to Next.js',
    excerpt: 'How we build high-performance web applications that can handle millions of users without breaking a sweat.',
    type: 'Guide',
    category: 'Engineering',
    date: 'Oct 24',
  },
  {
    id: 'future-of-headless',
    title: 'The Future of Headless Commerce',
    excerpt: 'Why decoupled architectures are winning in e-commerce and how to transition your legacy stack.',
    type: 'Insight',
    category: 'Strategy',
    date: 'Oct 12',
  },
  {
    id: 'design-systems-roi',
    title: 'Measuring the ROI of Design Systems',
    excerpt: 'A framework for understanding how consistent UI components impact both engineering velocity and user conversion.',
    type: 'Guide',
    category: 'Design',
    date: 'Sep 28',
  }
];

export default function Resources() {
  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background min-h-screen pt-32 pb-24 font-sans">
      <SEO 
        title="Support & Community | GRAVIT®" 
        description="24/7 Support, Help Center, Forums, Webinars, and Inspirational showcases for the GRAVIT ecosystem." 
        path="/resources"
      />
      
      {/* 01: HERO */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border pb-12">
          <div className="md:col-span-12">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6">
              04 / Community
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              SUPPORT &<br />RESOURCES.
            </h1>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              Everything you need to succeed on the GRAVIT platform. From in-depth technical guides to a global community of experts and creators.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-end">
             <div className="font-mono text-xs uppercase tracking-widest text-secondary border-t border-border pt-4">
              Availability
              <div className="mt-4 flex flex-col gap-2 font-sans font-bold text-primary">
                24/7 SUPPORT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: 24/7 SUPPORT GRID */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight uppercase sticky top-32">
              24/7 Support
            </h2>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportLinks.map((link) => (
              <Link 
                key={link.id} 
                to={link.link}
                className="group border border-border p-8 md:p-12 hover:bg-primary/5 hover:border-primary transition-all duration-300 flex flex-col h-full min-h-[300px]"
              >
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6 group-hover:text-accent transition-colors flex justify-between items-center">
                  {link.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 font-sans font-light">
                    →
                  </span>
                </h3>
                <p className="text-xl text-secondary leading-relaxed font-light mt-auto">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03: GET INSPIRED */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-32 border-t border-border pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-widest uppercase text-secondary mb-6 block">
              Get Inspired
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              MADE WITH<br />GRAVIT.
            </h2>
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light mb-12 max-w-lg">
              A collection of inspirational websites, digital platforms, and architectural systems built by real GRAVIT users and enterprise partners.
            </p>
            <Link 
              to="/showcase" 
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              EXPLORE SHOWCASE <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="lg:col-span-7">
            {/* Abstract visual representation of a showcase grid */}
            <div className="w-full aspect-[4/3] bg-surface border border-border grid grid-cols-2 gap-4 p-4 md:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="bg-background border border-border h-full w-full relative overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700"></div>
              <div className="bg-background border border-border h-full w-full relative overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 delay-75"></div>
              <div className="bg-background border border-border h-full w-full relative overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 delay-100"></div>
              <div className="bg-background border border-border h-full w-full relative overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 delay-150"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 04: LEGACY ARCHIVE */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto pb-32">
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-12">
            Technical Archive
          </h2>
          <div className="flex flex-col border-t border-border">
            {technicalArchive.map((resource) => (
              <Link 
                to={`/resources/${resource.id}`}
                key={resource.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-border group hover:bg-surface transition-colors items-center"
              >
                <div className="md:col-span-2 flex justify-between md:justify-start">
                  <span className="text-xs font-mono tracking-widest uppercase text-secondary">
                    {resource.date}
                  </span>
                </div>
                
                <div className="md:col-span-7 flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                    {resource.excerpt}
                  </p>
                </div>
                
                <div className="md:col-span-3 flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:gap-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-secondary border border-border px-3 py-1 rounded-full bg-background">
                    {resource.category}
                  </span>
                  <span className="hidden md:inline-flex mt-auto text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-primary transition-colors">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05: CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mt-12 border-t border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-8">
          STILL NEED HELP?
        </h2>
        <p className="text-secondary max-w-2xl mb-12 text-lg">
          Our specialized support team and global network of engineering partners are available around the clock.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-background px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
          CONTACT SUPPORT
        </Link>
      </section>
    </div>
  );
}
