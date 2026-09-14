import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Component, Layout, Cpu } from 'lucide-react';
import SEO from './SEO';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
 { name: 'Arjun K.', role: 'Founding Engineer / Systems', exp: 'Ex-Google' },
 { name: 'M. Thej', role: 'Design Director / Creative', exp: 'Ex-Pentagram' },
 { name: 'Sarah J.', role: 'Principal Architect / Web3', exp: 'Ex-Stripe' },
 { name: 'David W.', role: 'Performance Lead / Core', exp: 'Ex-Vercel' }
];

const PRINCIPLES = [
 {
 title: "Designed, not decorated.",
 desc: "We believe in extreme legibility. Every pixel must serve a purpose. We strip away unnecessary visual noise in favor of strict grids, high-contrast typography, and deliberate interactions.",
 icon: Component
 },
 {
 title: "Engineering discipline.",
 desc: "Design is useless if the system fails under load. We maintain a zero-tolerance policy for technical debt. Our architectures prioritize type safety, relational integrity, and absolute performance.",
 icon: Code
 },
 {
 title: "Platform Thinking.",
 desc: "We don't just build brochures. We build digital operating systems. From CRM pipelines to automated workflows, we architect the full lifecycle of your digital product.",
 icon: Layout
 }
];

export default function About() {
 const { scrollYProgress } = useScroll();
 const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
 const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

 useEffect(() => {
 window.scrollTo(0, 0);
 const ctx = gsap.context(() => {
 // Reveal animations for principle cards
 gsap.fromTo('.principle-card', {
 y: 60,
 opacity: 0,
 }, {
 y: 0,
 opacity: 1,
 stagger: 0.15,
 duration: 1,
 ease: 'power4.out',
 scrollTrigger: { trigger: '.principles-container', start: 'top 75%' },
 });

 // Reveal for team members
 gsap.fromTo('.team-card', {
 scale: 0.9,
 opacity: 0,
 }, {
 scale: 1,
 opacity: 1,
 stagger: 0.1,
 duration: 0.8,
 ease: 'back.out(1.2)',
 scrollTrigger: { trigger: '.team-container', start: 'top 80%' },
 });
 
 // Reveal for metrics
 gsap.fromTo('.metric-block', {
 opacity: 0,
 x: -20,
 }, {
 opacity: 1,
 x: 0,
 stagger: 0.1,
 duration: 0.8,
 ease: 'power3.out',
 scrollTrigger: { trigger: '.metrics-container', start: 'top 85%' },
 });
 });
 return () => ctx.revert();
 }, []);

 return (
 <div className="w-full bg-background text-primary min-h-screen font-sans overflow-hidden relative">
 <SEO 
 title="The Studio | GRAVIT®" 
 description="We are a premium digital product studio operating at the intersection of rigorous engineering and minimal design." 
 path="/about"
 />
 


 {/* 01: HERO */}
 <section className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto">
 <motion.div style={{ y: yHero }} className="mb-12">
 <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
 <span className="w-2 h-2 rounded-full bg-white" />
 01 / The Studio
 </div>
 <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
 Digital<br />architecture.
 </h1>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="flex flex-col md:flex-row gap-12 pt-12 border-t border-white/10"
 >
 <div className="md:w-2/3">
 <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
 We operate on a simple premise: too many beautiful interfaces are built on fragile architecture, and too many robust systems are painful to use. We exist to bridge that gap.
 </p>
 </div>
 <div className="md:w-1/3 flex flex-col justify-end">
 <div className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
 Est. 2024
 <ul className="mt-6 flex flex-col gap-3 font-sans font-medium text-primary/90 text-sm">
 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Swiss design</li>
 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Systems engineering</li>
 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Performance metrics</li>
 </ul>
 </div>
 </div>
 </motion.div>
 </section>

 {/* ABSTRACT VISUAL MARQUEE */}
 <div className="relative z-10 w-full py-8 overflow-hidden bg-white/5 border-y border-white/10 backdrop-blur-md">
 <motion.div 
 animate={{ x: [0, -1000] }}
 transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
 className="text-3xl md:text-5xl font-heading font-medium tracking-tight leading-none flex gap-12 text-secondary"
 >
 <span>Engineering discipline &bull; Minimalist aesthetics &bull; Scalable architecture &bull;</span>
 <span>Engineering discipline &bull; Minimalist aesthetics &bull; Scalable architecture &bull;</span>
 </motion.div>
 </div>

 {/* 02: PHILOSOPHY */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto principles-container">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
 <div className="lg:col-span-5 relative">
 <div className="sticky top-32">
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9] mb-12 text-primary">
 The<br/>principles.
 </h2>
 
 {/* Animated Abstract Orb */}
 <motion.div style={{ y: y1 }} className="mt-16 w-full aspect-square relative flex items-center justify-center">
 <div className="absolute inset-0 glass-panel rounded-full overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0 bg-white/5" />
 <motion.div 
 animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
 className="absolute top-1/4 left-1/4 w-[150%] h-[150%] border border-white/10 rounded-full"
 />
 <motion.div 
 animate={{ rotate: -360, scale: [1, 0.95, 1] }} 
 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border border-white/10 rounded-full flex items-center justify-center"
 >
 <Cpu className="w-12 h-12 text-secondary" />
 </motion.div>
 </div>
 </motion.div>
 </div>
 </div>
 
 <div className="lg:col-span-7 flex flex-col gap-6">
 {PRINCIPLES.map((principle, idx) => (
 <div key={idx} className="principle-card group relative p-10 md:p-14 glass-panel overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
 
 <div className="relative z-10">
 <div className="flex justify-between items-center mb-8">
 <span className="text-xs font-mono uppercase tracking-widest text-secondary bg-white/5 border border-white/10 px-4 py-2 rounded-full">
 0{idx + 1} / Principle
 </span>
 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
 <principle.icon className="w-5 h-5" />
 </div>
 </div>
 
 <h3 className="text-3xl md:text-4xl font-heading font-medium tracking-tight leading-tight mb-6">{principle.title}</h3>
 <p className="text-lg text-secondary font-light leading-relaxed">
 {principle.desc}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 03: THE TEAM */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto team-container">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pb-12 border-b border-white/10">
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-none text-primary">
 The team.
 </h2>
 <span className="text-sm font-mono uppercase tracking-[0.3em] text-secondary border border-white/10 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md">
 Focused. Elite. Dedicated.
 </span>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {TEAM.map((member, i) => (
 <div key={i} className="team-card group relative p-6 glass-panel overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col h-full hover:shadow-2xl">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
 
 <div className="w-full aspect-square bg-background border border-white/10 rounded-2xl mb-8 overflow-hidden relative group-hover:border-white/20 transition-all duration-500">
 <div className="absolute inset-0 bg-white/5" />
 <div className="absolute inset-0 flex items-center justify-center">
 {/* Geometric Placeholder */}
 <div className="relative w-1/2 h-1/2">
 <div className={`absolute inset-0 border border-white/20 rounded-full rotate-${i*12} group-hover:rotate-${(i+1)*45} transition-transform duration-1000 ease-out`} />
 <div className={`absolute inset-4 border border-white/10 rounded-full rotate-${(i+1)*12} group-hover:rotate-${(i)*45} transition-transform duration-1000 ease-out`} />
 </div>
 </div>
 </div>
 
 <div className="relative z-10">
 <h3 className="text-xl font-heading font-medium tracking-tight mb-2 group-hover:text-white transition-colors">{member.name}</h3>
 <p className="text-sm font-mono text-secondary mb-4 tracking-wide">{member.role}</p>
 <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono tracking-widest uppercase text-secondary/60">
 {member.exp}
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* 04: METRICS */}
 <section className="relative z-10 px-6 md:px-12 py-24 w-full max-w-7xl mx-auto border-t border-white/10 metrics-container">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
 {[
 { value: "40+", label: "Products Launched" },
 { value: "100M+", label: "API Requests/Mo" },
 { value: "<0.1s", label: "P99 Latency" }
 ].map((stat, i) => (
 <div key={i} className="metric-block md:border-l md:border-white/10 md:pl-12 py-4 flex flex-col items-center md:items-start group">
 <div className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight mb-4 text-primary group-hover:scale-105 origin-left transition-transform duration-500">
 {stat.value}
 </div>
 <div className="text-sm font-mono uppercase tracking-[0.2em] text-secondary">
 {stat.label}
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* 05: CTA */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto">
 <div className="relative overflow-hidden glass-panel rounded-[3rem] p-12 md:p-24 flex flex-col items-start justify-center group">
 <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000 ease-out" />
 
 <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end w-full relative z-10">
 <div className="md:col-span-8">
 <span className="text-sm font-mono uppercase tracking-[0.3em] text-secondary block mb-8">
 Next Step
 </span>
 <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9] text-primary">
 Initiate.
 </h2>
 </div>
 
 <div className="md:col-span-4 flex justify-start md:justify-end">
 <Link
 to="/contact"
 className="group/btn relative inline-flex items-center justify-center px-10 py-6 bg-primary text-background font-medium rounded-full overflow-hidden shadow-2xl hover:bg-white/90 transition-all duration-500"
 >
 <span className="relative z-10 flex items-center gap-3">
 Initiate Project
 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
 </span>
 </Link>
 </div>
 </div>
 </div>
 </section>

 </div>
 );
}
