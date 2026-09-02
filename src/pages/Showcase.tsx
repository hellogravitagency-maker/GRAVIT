import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { PageHero, SectionLayout } from '../components/ui/LayoutElements';

const SHOWCASE_ITEMS = [
 {
 id: 'nexus',
 title: 'NEXUS COMMERCE',
 client: 'Nexus Global',
 category: 'B2B SaaS / Ecommerce',
 year: '2026',
 tags: ['Next.js', 'Supabase', 'Stripe'],
 color: '#1A1A2E',
 description: 'A wholesale ordering platform handling 12,000+ SKUs with real-time inventory, tiered pricing, and automated procurement workflows.',
 href: '/work/nexus',
 featured: true
 },
 {
 id: 'strata',
 title: 'STRATA',
 client: 'Strata Capital',
 category: 'Fintech Dashboard',
 year: '2025',
 tags: ['React', 'D3.js', 'Node.js'],
 color: '#0D2137',
 description: 'Analytics infrastructure for a mid-market fintech. Visualizes portfolio risk, trade execution latency, and alpha attribution in real time.',
 href: '/work/strata',
 },
 {
 id: 'meridian',
 title: 'MERIDIAN',
 client: 'Meridian Properties',
 category: 'AI / Maps / Intelligence',
 year: '2025',
 tags: ['Python', 'Mapbox', 'GPT-4'],
 color: '#1C1008',
 description: 'Property intelligence system that overlays zoning data, transit scores, and predictive price models on an interactive map interface.',
 href: '/work',
 },
 {
 id: 'korova',
 title: 'KOROVA',
 client: 'Korova Media',
 category: 'Editorial Publishing',
 year: '2024',
 tags: ['Next.js', 'Sanity CMS', 'Vercel'],
 color: '#0E1A0E',
 description: 'A high-performance editorial platform for a print-to-digital media brand. Handles 400k+ monthly sessions with sub-second page loads.',
 href: '/work',
 },
 {
 id: 'pulse',
 title: 'PULSE HEALTH',
 client: 'Pulse Diagnostics',
 category: 'HealthTech Web App',
 year: '2024',
 tags: ['React', 'FastAPI', 'PostgreSQL'],
 color: '#1A0A1A',
 description: 'Patient-facing diagnostic scheduling and result delivery platform for a regional health network. HIPAA-compliant, fully accessible.',
 href: '/work',
 }
];

export default function Showcase() {
 const featured = SHOWCASE_ITEMS.find(item => item.featured)!;
 const standardItems = SHOWCASE_ITEMS.filter(item => !item.featured);

 return (
 <div className="w-full bg-background text-primary min-h-screen font-sans">
 <SEO
 title="Made with GRAVIT® — Showcase"
 description="A curated collection of digital products, platforms, and experiences engineered by GRAVIT."
 path="/showcase"
 />



 {/* 01: HERO */}
 <section className="relative z-10 pt-48 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto border-b border-white/10">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="mb-12"
 >
 <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
 <span className="w-2 h-2 rounded-full bg-white" />
 03 / Showcase
 </div>
 <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
 Selected Work.
 </h1>
 </motion.div>

 <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
 <div className="md:w-2/3">
 <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
 A curated selection of platforms, products, and systems we've engineered for ambitious clients moving the world forward.
 </p>
 </div>
 <div className="md:w-1/3 flex flex-col justify-end">
 <div className="font-mono text-xs uppercase tracking-widest text-secondary">
 Stats
 <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
 <li>{SHOWCASE_ITEMS.length} FEATURED PROJECTS</li>
 <li>$1B+ PROCESSED</li>
 <li>GLOBAL CLIENTS</li>
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* 02: FEATURED HERO CASE STUDY */}
 <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
 <Link to={featured.href} className="group block glass-panel overflow-hidden relative min-h-[60vh] flex flex-col justify-end hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl">
 
 {/* Abstract visual representation of project */}
 <div className="absolute inset-0 bg-white/5 flex items-center justify-center overflow-hidden mix-blend-screen">
 <motion.div 
 animate={{ scale: [1, 1.05, 1] }} 
 transition={{ duration: 10, repeat: Infinity }}
 className="w-[120%] h-[120%] border border-white/10 rotate-12 flex flex-wrap opacity-30 group-hover:opacity-60 transition-opacity duration-1000"
 >
 {[...Array(100)].map((_, i) => (
 <div key={i} className="w-[10%] h-[10%] border border-white/10"></div>
 ))}
 </motion.div>
 </div>

 <div className="relative z-10 max-w-4xl bg-background/80 backdrop-blur-xl border border-white/10 p-10 md:p-16 transform group-hover:-translate-y-4 transition-transform duration-700 m-8 rounded-3xl">
 <div className="flex items-center gap-4 mb-8">
 <span className="bg-primary text-background text-xs font-medium px-4 py-2 rounded-full tracking-widest">Featured</span>
 <span className="text-secondary font-mono text-xs uppercase tracking-widest">{featured.year} / {featured.category}</span>
 </div>
 
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9] mb-6">
 {featured.title}
 </h2>
 
 <p className="text-xl text-secondary font-light leading-relaxed mb-8">
 {featured.description}
 </p>
 
 <div className="flex flex-wrap gap-3">
 {featured.tags.map(tag => (
 <span key={tag} className="border border-white/10 bg-white/5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-secondary">{tag}</span>
 ))}
 </div>
 </div>
 </Link>
 </div>

 {/* 03: ASYMMETRIC BENTO GRID */}
 <section className="relative z-10 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
 {standardItems.map((item, i) => (
 <Link
 key={item.id}
 to={item.href}
 className={`group flex flex-col glass-panel overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl ${
 i % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
 }`}
 >
 {/* Abstract Visual Box */}
 <div className="w-full h-64 border-b border-white/10 relative overflow-hidden bg-black/20 flex items-center justify-center">
 <div className="w-32 h-32 border border-white/20 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
 </div>

 <div className="p-8 md:p-10 flex flex-col flex-1">
 <div className="flex items-center justify-between mb-8">
 <span className="text-xs font-mono uppercase tracking-widest text-secondary">{item.category}</span>
 <span className="text-xs font-mono text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">{item.year}</span>
 </div>

 <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-4">
 {item.title}
 </h2>
 
 <p className="text-secondary text-sm font-mono mb-6 uppercase tracking-widest border-b border-white/10 pb-4">{item.client}</p>

 <p className="text-secondary font-light text-base leading-relaxed mb-10 flex-1">
 {item.description}
 </p>

 <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
 <span className="text-xs font-medium uppercase tracking-widest text-primary">View Case Study</span>
 <span className="text-primary transform group-hover:translate-x-2 transition-transform">&rarr;</span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </section>

 {/* 04: TESTIMONIAL / CLIENT QUOTE */}
 <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
 <div className="glass-panel p-16 md:p-24 text-center">
 <svg className="w-12 h-12 mx-auto mb-10 opacity-30 text-primary" fill="currentColor" viewBox="0 0 24 24">
 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
 </svg>
 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight leading-[1.2] mb-12 max-w-4xl mx-auto text-primary/90">
 "Gravit doesn't just write code. They architect systems that fundamentally change how we operate."
 </h2>
 <div className="font-mono text-sm tracking-widest uppercase text-secondary">
 <span className="text-primary font-bold">David Chen</span> &mdash; CTO, Strata Capital
 </div>
 </div>
 </div>

 {/* BOTTOM CTA */}
 <section className="relative z-10 py-32 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
 <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
 <div className="relative z-10">
 <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
 Your Project
 </span>
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
 Ready to be<br />on this list?
 </h2>
 </div>
 <div className="relative z-10">
 <a
 href="https://cal.com/gravitstudio/project-call"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
 >
 Initiate Project →
 </a>
 </div>
 </div>
 </section>
 </div>
 );
}
