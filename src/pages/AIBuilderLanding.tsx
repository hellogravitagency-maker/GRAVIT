import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Palette, MonitorSmartphone, Code2 } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const ARCHETYPES = [
 { id: 'swiss', name: 'Swiss', tag: 'Minimalist · Grid · Utilitarian' },
 { id: 'brutalist', name: 'Brutalist', tag: 'Raw · Structural · Bold' },
 { id: 'neo-tokyo', name: 'Neo-Tokyo', tag: 'Cyber · High-Contrast · Neon' },
 { id: 'retro-terminal', name: 'Retro Terminal', tag: 'Monospace · Hacker · Phosphor' },
 { id: 'glassmorphism', name: 'Glassmorphism', tag: 'Blur · Depth · Modern' },
 { id: 'scandinavian', name: 'Scandinavian', tag: 'Light · Natural · Airy' },
];

const FEATURES = [
 { num: '01', title: 'Instant Layout Transformation', desc: 'Instantly switch between completely different website architectures—from Brutalist grids to fluid Glassmorphism interfaces—without rebuilding from scratch.', icon: Layers },
 { num: '02', title: 'Global Semantic Control', desc: 'Absolute precision over color scales, typography stacks, and spatial rhythms. Watch the entire interface adapt synchronously across all components.', icon: Palette },
 { num: '03', title: 'Client & Builder Modes', desc: 'Seamlessly toggle between a comprehensive full-screen builder experience and a clean, isolated client presentation view.', icon: MonitorSmartphone },
];

export default function AIBuilderLanding() {
 const { scrollYProgress } = useScroll();
 const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

 useEffect(() => {
 window.scrollTo(0, 0);
 const ctx = gsap.context(() => {
 // Feature cards animation
 gsap.fromTo('.feat-card', {
 y: 50,
 opacity: 0,
 }, {
 y: 0,
 opacity: 1,
 stagger: 0.1,
 duration: 0.8,
 ease: 'power3.out',
 scrollTrigger: { trigger: '.feats-container', start: 'top 80%' },
 });

 // Archetype cards animation
 gsap.fromTo('.arch-card', {
 scale: 0.95,
 opacity: 0,
 }, {
 scale: 1,
 opacity: 1,
 stagger: 0.05,
 duration: 0.6,
 ease: 'expo.out',
 scrollTrigger: { trigger: '.arch-container', start: 'top 75%' },
 });
 });
 return () => ctx.revert();
 }, []);

 return (
 <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
 <SEO 
 title="VisualCraft Studio — GRAVIT" 
 description="Programmatic design systems. Real-time rendering. No compromise." 
 path="/ai-builder" 
 />



 {/* HERO SECTION */}
 <section className="relative z-10 pt-40 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-end">
 <motion.div style={{ y }}>
 <div className="overflow-hidden mb-8">
 <motion.h1
 initial={{ y: '100%' }}
 animate={{ y: '0%' }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="text-[clamp(3.5rem,10vw,12rem)] font-heading font-medium tracking-tight leading-[0.82] text-primary"
 >
 VisualCraft<br />Studio.
 </motion.h1>
 </div>
 
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.5 }}
 className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12 border-t border-white/10"
 >
 <div className="max-w-2xl">
 <h2 className="text-2xl md:text-3xl font-heading font-medium tracking-tight mb-6 text-primary">
 Programmatic design systems.<br />Real-time rendering.<br />No compromise.
 </h2>
 <p className="text-xl text-secondary leading-relaxed font-light">
 Dynamically switch archetypes, colors, and typography instantly. 
 The most advanced web design workspace ever built for production.
 </p>
 </div>
 
 <Link 
 to="/ai-builder/studio" 
 className="group relative flex items-center justify-between px-8 py-5 glass-panel flex-shrink-0 min-w-[320px] rounded-full overflow-hidden hover:bg-white/10 transition-colors"
 >
 <span className="relative z-10 text-sm font-medium tracking-wide">Launch Studio</span>
 <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
 </Link>
 </motion.div>
 </motion.div>
 </section>

 {/* STRUCTURAL FEATURES GRID — Glass Cards */}
 <section className="relative z-10 px-6 md:px-12 py-24 w-full max-w-7xl mx-auto feats-container">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {FEATURES.map((f) => (
 <div key={f.num} className="feat-card group p-10 md:p-12 glass-panel rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">

 
 <div className="flex justify-between items-start mb-12">
 <span className="text-xs font-mono text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">
 {f.num}
 </span>
 <f.icon className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
 </div>
 <h3 className="text-2xl font-heading font-medium tracking-tight mb-4 relative z-10 text-primary">{f.title}</h3>
 <p className="text-secondary font-light leading-relaxed relative z-10">{f.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* TEMPLATES SHOWCASE — Premium Previews */}
 <section className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto py-24 arch-container">
 <div className="flex justify-between items-end mb-16">
 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight leading-[1.1] text-primary">
 Starting<br />Points
 </h2>
 <span className="text-xs font-mono uppercase tracking-widest text-secondary hidden md:block border border-white/10 px-6 py-3 rounded-full bg-white/5">
 {ARCHETYPES.length} Archetypes Available
 </span>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
 {ARCHETYPES.map((archetype) => (
 <Link 
 key={archetype.id}
 to={`/ai-builder/studio`} 
 className="arch-card group flex flex-col glass-panel rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
 >
 <div className="w-full aspect-[4/3] bg-black/20 p-8 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
 {/* Simulated Glass/Premium UI elements inside the preview */}
 <div className="absolute inset-0 bg-white/5 opacity-50" />
 
 <div className="relative z-10 flex flex-col gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
 <div className="flex justify-between items-center">
 <div className="h-4 w-1/4 bg-white/20 rounded-full" />
 <div className="flex gap-2">
 <div className="h-2 w-2 rounded-full bg-white/30" />
 <div className="h-2 w-2 rounded-full bg-white/30" />
 </div>
 </div>
 <div className="h-24 w-full bg-white/10 rounded-xl mt-4 backdrop-blur-md border border-white/10" />
 <div className="h-4 w-2/3 bg-white/10 rounded-full" />
 </div>
 
 <div className="relative z-10 grid grid-cols-3 gap-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500">
 <div className="aspect-[4/3] bg-white/10 rounded-xl border border-white/10" />
 <div className="aspect-[4/3] bg-white/10 rounded-xl border border-white/10" />
 <div className="aspect-[4/3] bg-white/10 rounded-xl border border-white/10" />
 </div>
 
 {/* Hover CTA Overlay */}
 <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
 <span className="text-xs font-medium tracking-wide border border-white/20 px-6 py-3 text-primary bg-white/10 rounded-full backdrop-blur-xl flex items-center gap-3">
 <Code2 className="w-4 h-4" />
 Open in Studio
 </span>
 </div>
 </div>
 
 <div className="p-8 flex items-center justify-between">
 <div>
 <h3 className="text-xl font-heading font-medium tracking-tight text-primary transition-colors">{archetype.name}</h3>
 <p className="text-xs font-mono tracking-widest text-secondary mt-2 uppercase">{archetype.tag}</p>
 </div>
 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-300">
 <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
 </div>
 </div>
 </Link>
 ))}
 </div>
 </section>

 {/* FINAL MASSIVE CTA */}
 <section className="relative z-10 px-6 md:px-12 py-32 w-full max-w-7xl mx-auto text-center mb-32">
 <div className="relative overflow-hidden glass-panel rounded-[3rem] p-16 md:p-32 flex flex-col items-center group">
 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
 
 <h2 className="relative z-10 text-[clamp(2.5rem,7vw,7rem)] font-heading font-medium tracking-tight leading-[0.85] mb-12 text-primary">
 Build the future<br />of the web.
 </h2>
 
 <Link 
 to="/ai-builder/studio" 
 className="relative z-10 inline-flex items-center gap-4 bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
 >
 Enter VisualCraft Studio
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </section>

 </div>
 );
}
