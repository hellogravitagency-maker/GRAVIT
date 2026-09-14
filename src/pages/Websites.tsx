import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, Layers, Zap, Shield, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
 { num: '01', title: 'Marketing Platforms', desc: 'Conversion-engineered websites for acquisition, product launches, and brand authority. High fidelity interactions meeting raw performance.', icon: Globe },
 { num: '02', title: 'SaaS Applications', desc: 'Complex web apps with real-time data, multi-tenant architecture, and audit-grade security. Built on modern, scalable infrastructure.', icon: Layers },
 { num: '03', title: 'Editorial Sites', desc: 'High-performance publishing systems — lightning CDN delivery, structured content, and SEO at scale for maximum organic reach.', icon: Zap },
 { num: '04', title: 'Corporate Infrastructure', desc: 'Investor-ready platforms that reflect the precision of your operations. Enterprise-grade compliance and accessibility standard.', icon: Shield },
];

const STATS = [
 { val: '<0.8s', label: 'First Contentful Paint' },
 { val: '100', label: 'Lighthouse Score' },
 { val: '4–8wk', label: 'Delivery Timeline' },
 { val: '3yr+', label: 'Avg. Client Relationship' },
];

export default function Websites() {
 const rulerRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll();
 const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

 useEffect(() => {
 window.scrollTo(0, 0);
 const ctx = gsap.context(() => {
 // Reveal animations for stats cards
 gsap.fromTo('.stat-card', {
 y: 40,
 opacity: 0,
 }, {
 y: 0,
 opacity: 1,
 stagger: 0.1,
 duration: 0.8,
 ease: 'power3.out',
 scrollTrigger: { trigger: '.stats-container', start: 'top 80%' },
 });

 // Reveal animations for capability cards
 gsap.fromTo('.cap-card', {
 y: 40,
 opacity: 0,
 }, {
 y: 0,
 opacity: 1,
 stagger: 0.15,
 duration: 1,
 ease: 'power3.out',
 scrollTrigger: { trigger: '.caps-container', start: 'top 75%' },
 });
 });
 return () => ctx.revert();
 }, []);

 return (
 <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
 <SEO title="Websites — GRAVIT" description="High-performance digital products engineered for scale and precision." path="/websites" />

 {/* HERO SECTION */}
 <section className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto">
 <motion.div style={{ y }} className="mb-16">
 <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
 <span className="w-2 h-2 rounded-full bg-white" />
 06 / Websites
 </div>
 <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary max-w-6xl">
 Websites engineered to last.
 </h1>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
 className="flex flex-col md:flex-row gap-8 border-t border-white/10 pt-12"
 >
 <div className="md:w-1/2">
 <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
 We architect, design, and engineer web platforms that hold — not templates
 stitched together on a deadline. Pure performance meeting uncompromising aesthetics.
 </p>
 </div>
 <div className="md:w-1/2 flex items-start md:justify-end gap-4 flex-wrap">
 <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-medium rounded-full overflow-hidden transition-all hover:bg-white/90">
 <span className="relative z-10 flex items-center gap-2">
 Start a Build
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </span>
 </Link>
 <Link to="/work" className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/10 text-primary font-medium rounded-full overflow-hidden transition-colors hover:border-white/30">
 <span className="flex items-center gap-2">
 See the Work
 <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
 </span>
 </Link>
 </div>
 </motion.div>
 </section>

 {/* STATS SECTION */}
 <section className="relative z-10 px-6 md:px-12 pb-32 w-full max-w-7xl mx-auto stats-container">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {STATS.map((s, i) => (
 <div
 key={s.label}
 className="stat-card relative overflow-hidden glass-panel p-8 md:p-12 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl"
 >
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 <span className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-primary group-hover:scale-105 origin-left transition-transform duration-500">
 {s.val}
 </span>
 <span className="text-sm font-mono uppercase tracking-widest text-secondary">
 {s.label}
 </span>
 </div>
 ))}
 </div>
 </section>

 {/* CAPABILITIES SECTION */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto caps-container">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9] text-primary">
 What we<br />build
 </h2>
 <span className="text-sm font-mono uppercase tracking-[0.3em] text-secondary border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md">
 Capabilities Architecture
 </span>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {CAPABILITIES.map((cap, i) => (
 <div key={cap.num} className="cap-card group relative p-10 md:p-14 glass-panel overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
 
 <div className="relative z-10 flex flex-col h-full justify-between gap-12">
 <div className="flex justify-between items-start">
 <span className="text-xs font-mono text-secondary tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">
 {cap.num}
 </span>
 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
 <cap.icon className="w-5 h-5" />
 </div>
 </div>

 <div>
 <h3 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-4">
 {cap.title}
 </h3>
 <p className="text-secondary text-lg leading-relaxed font-light max-w-md">
 {cap.desc}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* MASSIVE CTA SECTION */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto">
 <div className="relative overflow-hidden glass-panel p-16 md:p-24 flex flex-col md:flex-row items-center justify-between group">
 
 <div className="relative z-10 md:w-2/3 mb-12 md:mb-0">
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[1] mb-6 text-primary">
 Your site.<br />Our system.
 </h2>
 <p className="text-secondary text-xl font-light max-w-md">
 Ready to upgrade from a basic theme to a bespoke commerce engine?
 </p>
 </div>
 
 <div className="relative z-10 md:w-1/3 flex justify-start md:justify-end">
 <Link to="/contact" className="group/btn inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500">
 Brief Us
 <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}
