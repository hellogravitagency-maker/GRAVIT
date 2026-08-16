import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectsData } from './Work';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from './SEO';
import { generateBreadcrumbSchema } from '../lib/seo';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !projectsData[slug]) {
    return <Navigate to="/404" replace />;
  }
  
  const project = projectsData[slug];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Work", item: "/work" },
    { name: project.title, item: `/work/${slug}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  useEffect(() => {
    // Basic reveal animations for content
    const elements = document.querySelectorAll('.reveal-up');
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full bg-transparent min-h-screen text-primary font-sans overflow-x-hidden selection:bg-primary selection:text-background">
      <SEO 
        title={`${project.title} Case Study | GRAVIT`} 
        description={project.challenge} 
        path={`/work/${slug}`}
        jsonLd={breadcrumbSchema}
      />
      
      {/* 01: HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-32 pb-12 px-6 md:px-8 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full border-b border-border pb-12 mb-12">
          <div className="md:col-span-12">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6">
              CASE STUDY — {project.year}
            </span>
            <h1 className="text-6xl md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              {project.title}
            </h1>
          </div>
          
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              {project.desc}
            </p>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-10 flex flex-col justify-end">
            <h3 className="text-xs font-mono uppercase tracking-widest text-secondary mb-4 border-b border-border pb-4">
              Core Technologies
            </h3>
            <ul className="flex flex-col gap-2">
              {project.tags?.map((tag: string) => (
                <li key={tag} className="text-lg font-bold tracking-tight uppercase">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Massive Visual / Abstract Placeholder */}
        <div className="w-full aspect-video bg-surface border border-border relative overflow-hidden">
          <div className="absolute inset-x-12 inset-y-12 md:inset-x-32 md:inset-y-16 bg-background border border-border shadow-2xl flex flex-col">
             <div className="h-16 border-b border-border flex items-center px-8 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
             </div>
             <div className="flex-1 bg-surface p-8">
                <div className="w-full h-full border-2 border-dashed border-border/50 flex items-center justify-center">
                   <div className="text-secondary font-mono text-xs uppercase tracking-widest">System Interface</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 02: EDITORIAL CONTENT */}
      <section className="w-full py-24 px-6 md:px-8 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Main Storytelling */}
          <div className="md:col-span-8 flex flex-col gap-24">
            
            <div className="reveal-up border-t border-border pt-8">
              <h2 className="text-sm font-mono tracking-widest text-secondary uppercase mb-8">
                01 / The Problem
              </h2>
              <p className="text-2xl md:text-4xl text-primary leading-tight font-medium max-w-4xl">
                {project.challenge}
              </p>
            </div>

            <div className="reveal-up border-t border-border pt-8">
              <h2 className="text-sm font-mono tracking-widest text-secondary uppercase mb-8">
                02 / The Approach
              </h2>
              <p className="text-2xl md:text-4xl text-primary leading-tight font-medium max-w-4xl">
                {project.solution}
              </p>
            </div>
            
            <div className="reveal-up border-t border-border pt-8">
              <h2 className="text-sm font-mono tracking-widest text-secondary uppercase mb-8">
                03 / The System
              </h2>
              {/* Mid-content image break */}
              <div className="w-full aspect-[21/9] bg-surface border border-border my-12 relative overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-border flex items-center justify-center rotate-45">
                    <div className="w-32 h-32 bg-primary"></div>
                 </div>
              </div>
              <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-4xl">
                By stripping away unnecessary visual decoration and focusing entirely on component performance and database architecture, we delivered a product that scales effortlessly. The resulting system acts as the foundation for the next decade of the company's growth.
              </p>
            </div>

          </div>

          {/* Sidebar / Results */}
          <div className="md:col-span-4 flex flex-col gap-16 md:sticky md:top-32 h-fit">
            
            <div className="reveal-up border-t border-border pt-8">
              <h3 className="text-sm font-mono tracking-widest uppercase text-secondary mb-12">
                04 / The Result
              </h3>
              
              <div className="flex flex-col gap-12">
                {project.results?.map((res: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-6xl lg:text-[6rem] font-bold tracking-tighter text-primary leading-none">
                      {res.metric}
                    </span>
                    <span className="text-sm font-mono tracking-widest text-secondary uppercase mt-4">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal-up mt-8">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-background px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors w-full text-center"
              >
                VISIT LIVE PLATFORM →
              </a>
            </div>

          </div>
        </div>
      </section>
      
      {/* 03: NEXT PROJECT */}
      <section className="py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto text-center border-t border-border">
        <span className="text-xs font-mono tracking-widest uppercase text-secondary block mb-12">
          CONTINUE EXPLORING
        </span>
        <h2 className="text-5xl md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85] mb-16">
          <Link to="/work" className="hover:text-accent transition-colors">
            ARCHIVE
          </Link>
        </h2>
      </section>

    </div>
  );
}
