import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export const projectsData: Record<string, any> = {
  "ssvemhs": {
    category: 'EdTech Portal',
    title: 'SSVEMHS',
    desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
    challenge: 'Legacy institution website lacked interactive student portal access, mobile responsiveness, and automated administrative fee management.',
    solution: 'Engineered a modern React 19 platform integrated with Gemini AI for student inquiry assistance and Supabase real-time role-based access.',
    results: [
      { metric: '99.9%', label: 'Uptime SLA' },
      { metric: '0.4s', label: 'LCP Load Time' },
      { metric: '+340%', label: 'Engagement Growth' }
    ],
    tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
    year: '2026',
    link: 'https://ssvemhs.pages.dev/',
    heroImage: 'bg-surface',
  },
  "little-stars": {
    category: 'Playgroup Academy',
    title: 'Little Stars',
    desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
    challenge: 'Outdated static landing page provided zero parent intake forms or real-time event schedules, creating staff phone queues.',
    solution: 'Designed an editorial play-first UI using Tailwind v4 and Framer Motion with automated Supabase parent event notification pipelines.',
    results: [
      { metric: '<0.5s', label: 'Mobile Paint Time' },
      { metric: '82%', label: 'Online Intake Ratio' },
      { metric: '100%', label: 'Lighthouse Score' }
    ],
    tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
    year: '2026',
    link: 'https://little-stars-academy.pages.dev/',
    heroImage: 'bg-surface',
  },
  "wonderkids": {
    category: 'Academy Dashboard',
    title: 'WonderKids',
    desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
    challenge: 'Fragmented staff workflows required separate tools for attendance, course updates, and parent communications.',
    solution: 'Constructed an integrated full-stack dashboard with real-time staff controls, role permissions, and fluid motion transitions.',
    results: [
      { metric: '4.8x', label: 'Admin Efficiency' },
      { metric: '0.00', label: 'Cumulative Layout Shift' },
      { metric: '12.4k', label: 'Monthly Active Parents' }
    ],
    tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
    year: '2026',
    link: 'https://wonderkids-67h.pages.dev/',
    heroImage: 'bg-surface',
  }
};

export default function Work() {
  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background min-h-screen pt-32 pb-24 font-sans">
      <SEO 
        title="Selected Work & Case Studies | GRAVIT®" 
        description="Explore our portfolio of high-performance web applications, SaaS platforms, and digital products." 
        path="/work"
      />
      
      {/* 01: HERO */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12">
            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-bold tracking-tighter uppercase leading-[0.85] mb-12">
              SELECTED<br />SYSTEMS.
            </h1>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed">
              We don't build portfolios of pretty pictures. We build production-ready digital products engineered to perform and scale. Here is a selection of our recent architectures.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary border-t border-border pt-4">
              ARCHIVE / 2024–2026
            </div>
          </div>
        </div>
      </section>

      {/* 02: EDITORIAL PROJECT SEQUENCE */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border pt-24">
        <div className="flex flex-col gap-32 md:gap-48">
          
          {/* Project 1: Full Width Hero style */}
          <Link to="/work/ssvemhs" className="group block">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-1 text-sm font-mono text-secondary">01</div>
              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                  {projectsData.ssvemhs.title}
                </h2>
                <p className="text-secondary mt-2 text-lg">{projectsData.ssvemhs.category}</p>
              </div>
              <div className="md:col-span-6 flex flex-col md:items-end justify-end">
                <span className="text-xs font-mono uppercase tracking-widest text-secondary mb-2">
                  {projectsData.ssvemhs.tags.join(' / ')}
                </span>
                <span className="text-xs font-mono">{projectsData.ssvemhs.year}</span>
              </div>
            </div>
            
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface overflow-hidden relative border border-border">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Abstract UI representation */}
              <div className="absolute inset-x-12 inset-y-12 bg-background border border-border shadow-2xl rounded-xl flex overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="w-64 border-r border-border bg-surface p-6 hidden md:flex flex-col gap-4">
                  <div className="w-full h-8 bg-border/20 rounded"></div>
                  <div className="w-2/3 h-4 bg-border/20 rounded mt-8"></div>
                  <div className="w-3/4 h-4 bg-border/20 rounded"></div>
                  <div className="w-1/2 h-4 bg-border/20 rounded"></div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-3 gap-8">
                  <div className="col-span-3 h-32 bg-primary/10 border border-primary/20 rounded-lg"></div>
                  <div className="h-48 bg-surface border border-border/50 rounded-lg"></div>
                  <div className="h-48 bg-surface border border-border/50 rounded-lg"></div>
                  <div className="h-48 bg-surface border border-border/50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2: Asymmetric Split 5/7 */}
          <Link to="/work/little-stars" className="group block">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-1 text-sm font-mono text-secondary">02</div>
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                  {projectsData["little-stars"].title}
                </h2>
                <p className="text-secondary mt-2 text-lg">{projectsData["little-stars"].category}</p>
              </div>
              <div className="md:col-span-7 flex flex-col md:items-end justify-end">
                <span className="text-xs font-mono uppercase tracking-widest text-secondary mb-2">
                  {projectsData["little-stars"].tags.join(' / ')}
                </span>
                <span className="text-xs font-mono">{projectsData["little-stars"].year}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 md:col-start-6 w-full aspect-[4/3] bg-surface overflow-hidden relative border border-border">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Abstract UI representation */}
                <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-background border-t border-l border-border rounded-tl-2xl shadow-2xl p-8 transform group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                   <div className="w-1/2 h-8 bg-primary/10 rounded mb-8"></div>
                   <div className="flex flex-col gap-4">
                     <div className="w-full h-16 bg-surface border border-border/50 rounded flex items-center px-6"><div className="w-8 h-8 rounded-full bg-border/50"></div></div>
                     <div className="w-full h-16 bg-surface border border-border/50 rounded flex items-center px-6"><div className="w-8 h-8 rounded-full bg-border/50"></div></div>
                     <div className="w-full h-16 bg-surface border border-border/50 rounded flex items-center px-6"><div className="w-8 h-8 rounded-full bg-border/50"></div></div>
                   </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3: Asymmetric Split 7/5 (Left aligned) */}
          <Link to="/work/wonderkids" className="group block">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-1 text-sm font-mono text-secondary">03</div>
              <div className="md:col-span-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                  {projectsData.wonderkids.title}
                </h2>
                <p className="text-secondary mt-2 text-lg">{projectsData.wonderkids.category}</p>
              </div>
              <div className="md:col-span-5 flex flex-col md:items-end justify-end">
                <span className="text-xs font-mono uppercase tracking-widest text-secondary mb-2">
                  {projectsData.wonderkids.tags.join(' / ')}
                </span>
                <span className="text-xs font-mono">{projectsData.wonderkids.year}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 w-full aspect-[16/10] bg-surface overflow-hidden relative border border-border">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Abstract UI representation */}
                <div className="absolute inset-12 bg-background border border-border shadow-2xl rounded flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="h-12 border-b border-border bg-surface flex items-center px-4">
                    <div className="w-24 h-4 bg-border/30 rounded"></div>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="w-full h-full border-2 border-dashed border-border/50 rounded flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 03: CTA */}
      <section className="py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mt-24 border-t border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-8">
          WANT TO SEE THE CODE?
        </h2>
        <p className="text-secondary max-w-2xl mb-12 text-lg">
          We treat our infrastructure as seriously as our interfaces. Contact us to discuss architecture patterns, database structures, or specific technical challenges.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-background px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
          DISCUSS ARCHITECTURE
        </Link>
      </section>

    </div>
  );
}
