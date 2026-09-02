import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code2, Layers, Cpu, ExternalLink } from 'lucide-react';
import SEO from './SEO';

gsap.registerPlugin(ScrollTrigger);

export const projectsData: Record<string, any> = {
 "ssvemhs": {
 category: 'EdTech Portal',
 title: 'SSVEMHS',
 desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
 results: [
 { metric: '99.9%', label: 'Uptime SLA' },
 { metric: '0.4s', label: 'LCP Load Time' },
 { metric: '+340%', label: 'Engagement Growth' }
 ],
 tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
 year: '2026',
 link: 'https://ssvemhs.pages.dev/',
 color: ' ',
 },
 "little-stars": {
 category: 'Playgroup Academy',
 title: 'Little Stars',
 desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
 results: [
 { metric: '<0.5s', label: 'Mobile Paint Time' },
 { metric: '82%', label: 'Online Intake Ratio' },
 { metric: '100%', label: 'Lighthouse Score' }
 ],
 tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
 year: '2026',
 link: 'https://little-stars-academy.pages.dev/',
 color: ' ',
 },
 "wonderkids": {
 category: 'Academy Dashboard',
 title: 'WonderKids',
 desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
 results: [
 { metric: '4.8x', label: 'Admin Efficiency' },
 { metric: '0.00', label: 'Cumulative Layout Shift' },
 { metric: '12.4k', label: 'Monthly Active Parents' }
 ],
 tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
 year: '2026',
 link: 'https://wonderkids-67h.pages.dev/',
 color: ' ',
 }
};

export default function Work() {
 const { scrollYProgress } = useScroll();
 const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

 useEffect(() => {
 window.scrollTo(0, 0);
 const ctx = gsap.context(() => {
 gsap.fromTo('.project-card', {
 y: 100,
 opacity: 0,
 scale: 0.95
 }, {
 y: 0,
 opacity: 1,
 scale: 1,
 stagger: 0.15,
 duration: 1,
 ease: 'power3.out',
 scrollTrigger: { trigger: '.projects-container', start: 'top 80%' },
 });
 });
 return () => ctx.revert();
 }, []);

 return (
 <div className="w-full bg-background text-primary min-h-screen font-sans overflow-hidden relative">
 <SEO 
 title="Selected Work & Case Studies | GRAVIT®" 
 description="Explore our portfolio of high-performance web applications, SaaS platforms, and digital products." 
 path="/work"
 />


 
 {/* 01: HERO */}
 <section className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/5">
 <motion.div style={{ y: yHero }} className="mb-12">
 <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
 <span className="w-2 h-2 rounded-full bg-white" />
 Archive / 2024–2026
 </div>
 <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
 Selected<br />systems.
 </h1>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="flex flex-col md:flex-row gap-12 pt-12 border-t border-white/10"
 >
 <div className="md:w-2/3 lg:w-1/2">
 <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
 We don't build portfolios of pretty pictures. We build production-ready digital products engineered to perform and scale. Here is a selection of our recent architectures.
 </p>
 </div>
 </motion.div>
 </section>

 {/* 02: EDITORIAL PROJECT SEQUENCE */}
 <section className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto pt-32 pb-16 projects-container">
 <div className="flex flex-col gap-32">
 
 {/* Project 1: SSVEMHS */}
 <Link to="/work/ssvemhs" className="project-card group block">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end">
 <div className="md:col-span-5">
 <div className="text-sm font-mono text-secondary mb-4 bg-white/5 inline-flex px-3 py-1 rounded-full border border-white/10">01 / {projectsData.ssvemhs.category}</div>
 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight group-hover:text-white transition-colors duration-500">
 {projectsData.ssvemhs.title}
 </h2>
 </div>
 <div className="md:col-span-7 flex flex-col md:items-end justify-end">
 <p className="text-lg text-secondary md:text-right max-w-lg mb-6 leading-relaxed">
 {projectsData.ssvemhs.desc}
 </p>
 <div className="flex flex-wrap md:justify-end gap-3">
 {projectsData.ssvemhs.tags.map((tag: string) => (
 <span key={tag} className="text-xs font-mono uppercase tracking-widest text-secondary bg-white/5 border border-white/10 px-4 py-2 rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 
 <div className={`w-full aspect-[16/9] md:aspect-[21/9] glass-panel rounded-[3rem] overflow-hidden relative group-hover:border-white/20 transition-all duration-700`}>
 <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
 
 {/* Abstract UI representation */}
 <div className="absolute inset-x-8 inset-y-8 md:inset-x-24 md:inset-y-16 bg-background/90 backdrop-blur-md border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.2)] rounded-2xl flex overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
 {/* Sidebar */}
 <div className="w-64 border-r border-white/10 bg-white/5 p-6 hidden md:flex flex-col gap-6">
 <div className="w-full h-10 bg-white/10 rounded-xl mb-4 border border-white/5" />
 <div className="w-2/3 h-4 bg-white/10 rounded-full" />
 <div className="w-3/4 h-4 bg-white/5 rounded-full" />
 <div className="w-1/2 h-4 bg-white/5 rounded-full" />
 </div>
 {/* Main Content */}
 <div className="flex-1 p-8 md:p-12 grid grid-cols-3 gap-6 auto-rows-max relative overflow-hidden">
 <div className="col-span-3 h-40 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-8">
 <div className="w-full h-full bg-white/5 rounded-xl" />
 </div>
 <div className="h-64 bg-white/[0.02] border border-white/5 rounded-2xl" />
 <div className="h-64 bg-white/[0.02] border border-white/5 rounded-2xl" />
 <div className="h-64 bg-white/[0.02] border border-white/5 rounded-2xl" />
 </div>
 </div>
 
 {/* Hover View Project CTA */}
 <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
 View Project <ExternalLink className="w-4 h-4" />
 </div>
 </div>
 </Link>

 {/* Project 2: Little Stars */}
 <Link to="/work/little-stars" className="project-card group block">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end">
 <div className="md:col-span-5">
 <div className="text-sm font-mono text-secondary mb-4 bg-white/5 inline-flex px-3 py-1 rounded-full border border-white/10">02 / {projectsData["little-stars"].category}</div>
 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight group-hover:text-white transition-colors duration-500">
 {projectsData["little-stars"].title}
 </h2>
 </div>
 <div className="md:col-span-7 flex flex-col md:items-end justify-end">
 <p className="text-lg text-secondary md:text-right max-w-lg mb-6 leading-relaxed">
 {projectsData["little-stars"].desc}
 </p>
 <div className="flex flex-wrap md:justify-end gap-3">
 {projectsData["little-stars"].tags.map((tag: string) => (
 <span key={tag} className="text-xs font-mono uppercase tracking-widest text-secondary bg-white/5 border border-white/10 px-4 py-2 rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 
 <div className={`w-full aspect-[16/9] md:aspect-[21/9] glass-panel rounded-[3rem] overflow-hidden relative group-hover:border-white/20 transition-all duration-700`}>
 <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
 
 {/* Abstract Mobile UI representation */}
 <div className="absolute bottom-0 right-[10%] md:right-[20%] w-[80%] md:w-[40%] h-[90%] bg-background/90 backdrop-blur-xl border-t border-l border-r border-white/10 rounded-t-[3rem] shadow-2xl p-8 transform group-hover:translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-6 overflow-hidden">
 
 <div className="w-1/3 h-2 bg-white/20 rounded-full mx-auto mb-4" />
 
 <div className="w-full aspect-square bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden">
 <div className="absolute inset-0 bg-white/5" />
 <div className="w-3/4 h-8 bg-white/20 rounded-lg relative z-10" />
 </div>
 
 <div className="flex gap-4">
 <div className="flex-1 h-20 bg-white/[0.03] border border-white/10 rounded-2xl" />
 <div className="flex-1 h-20 bg-white/[0.03] border border-white/10 rounded-2xl" />
 </div>
 </div>
 
 {/* Hover View Project CTA */}
 <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
 View Project <ExternalLink className="w-4 h-4" />
 </div>
 </div>
 </Link>

 {/* Project 3: WonderKids */}
 <Link to="/work/wonderkids" className="project-card group block">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end">
 <div className="md:col-span-5">
 <div className="text-sm font-mono text-secondary mb-4 bg-white/5 inline-flex px-3 py-1 rounded-full border border-white/10">03 / {projectsData.wonderkids.category}</div>
 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight group-hover:text-white transition-colors duration-500">
 {projectsData.wonderkids.title}
 </h2>
 </div>
 <div className="md:col-span-7 flex flex-col md:items-end justify-end">
 <p className="text-lg text-secondary md:text-right max-w-lg mb-6 leading-relaxed">
 {projectsData.wonderkids.desc}
 </p>
 <div className="flex flex-wrap md:justify-end gap-3">
 {projectsData.wonderkids.tags.map((tag: string) => (
 <span key={tag} className="text-xs font-mono uppercase tracking-widest text-secondary bg-white/5 border border-white/10 px-4 py-2 rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 
 <div className={`w-full aspect-[16/9] md:aspect-[21/9] glass-panel rounded-[3rem] overflow-hidden relative group-hover:border-white/20 transition-all duration-700`}>
 <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
 
 {/* Abstract Data/Dashboard UI */}
 <div className="absolute inset-12 md:inset-20 bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
 <div className="h-16 border-b border-white/10 bg-white/5 flex items-center px-8 gap-4">
 <div className="flex gap-2">
 <div className="w-3 h-3 rounded-full bg-red-500/50" />
 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
 <div className="w-3 h-3 rounded-full bg-green-500/50" />
 </div>
 <div className="w-32 h-6 bg-white/10 rounded-full ml-4" />
 </div>
 <div className="flex-1 p-8 md:p-12 flex gap-8">
 <div className="w-1/3 flex flex-col gap-6">
 <div className="h-32 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
 <div className="absolute w-24 h-24 bg-orange-500/20 blur-3xl rounded-full" />
 <div className="w-16 h-16 rounded-full border-[4px] border-white/20 border-t-white/80" />
 </div>
 <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-2xl" />
 </div>
 <div className="w-2/3 bg-white/[0.03] border border-white/5 rounded-2xl relative overflow-hidden p-8">
 <div className="absolute bottom-0 w-full h-1/2 bg-white/5" />
 {/* Simulated Graph Lines */}
 <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
 <path d="M 0,100 L 20,60 L 40,80 L 60,30 L 80,50 L 100,10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
 </svg>
 </div>
 </div>
 </div>
 
 {/* Hover View Project CTA */}
 <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
 View Project <ExternalLink className="w-4 h-4" />
 </div>
 </div>
 </Link>

 </div>
 </section>

 {/* 03: CTA */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto border-t border-white/5">
 <div className="relative overflow-hidden glass-panel rounded-[3rem] p-12 md:p-24 flex flex-col items-center justify-center text-center group">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
 
 <h2 className="relative z-10 text-3xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tight leading-[0.9] mb-8 text-primary">
 Want to see the code?
 </h2>
 <p className="relative z-10 text-secondary max-w-2xl mb-12 text-lg leading-relaxed">
 We treat our infrastructure as seriously as our interfaces. Contact us to discuss architecture patterns, database structures, or specific technical challenges.
 </p>
 <a href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer" className="relative z-10 group/btn inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500">
 Discuss architecture
 <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
 </a>
 </div>
 </section>

 </div>
 );
}
