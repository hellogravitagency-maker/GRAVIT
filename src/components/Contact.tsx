import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Send, MapPin, Globe2, ChevronDown, CheckCircle2 } from 'lucide-react';
import SEO from './SEO';

const FAQS = [
 {
 q: "What is your minimum engagement?",
 a: "Our minimum engagement size is typically $25,000 USD. We partner with teams who view engineering and design as critical business investments rather than mere costs."
 },
 {
 q: "How do you handle project management?",
 a: "Directly. We don't employ account managers. You will interface directly with the lead engineer and lead designer building your product, ensuring zero signal loss."
 },
 {
 q: "Do you take equity in exchange for services?",
 a: "On rare occasions. We evaluate equity-based partnerships on a strict case-by-case basis for early-stage ventures with exceptional founding teams."
 }
];

export default function Contact() {
 const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 
 const { scrollYProgress } = useScroll();
 const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

 useEffect(() => {
 window.scrollTo(0, 0);
 }, []);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setFormState('submitting');
 // Simulate network request
 setTimeout(() => {
 setFormState('success');
 }, 1500);
 };

 return (
 <div className="w-full bg-background text-primary min-h-screen overflow-hidden font-sans relative">
 <SEO 
 title="Start a Project | GRAVIT®" 
 description="Contact our engineering team to discuss your next digital product architecture." 
 path="/contact"
 />
 

 {/* 01: HERO */}
 <section className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
 <motion.div style={{ y: yHero }} className="mb-12">
 <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
 <span className="w-2 h-2 rounded-full bg-white" />
 04 / Contact
 </div>
 <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-heading font-medium tracking-tight leading-[0.85] text-primary">
 Initiate.
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
 We take on a strictly limited number of engagements per quarter to maintain the highest standard of engineering and design.
 </p>
 </div>
 <div className="md:w-1/3 flex flex-col justify-end lg:items-end">
 <div className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
 Availability
 <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
 <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500/50 border border-green-400 animate-pulse" /> ACCEPTING BRIEFS</li>
 <li className="text-secondary">Q3-Q4 2026</li>
 </ul>
 </div>
 </div>
 </motion.div>
 </section>

 <div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto pb-32">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-24">
 
 {/* Left Column: Locations & FAQs */}
 <div className="lg:col-span-5 flex flex-col gap-24">
 
 {/* Global Offices */}
 <div>
 <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-[1.1] mb-12 flex items-center gap-4">
 Global<br/>Presence.
 <Globe2 className="w-8 h-8 text-white/20" />
 </h2>
 
 <div className="flex flex-col gap-8">
 <div className="border-b border-white/10 pb-8 group">
 <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4 flex items-center gap-2">
 <MapPin className="w-3 h-3" /> HQ / Bengaluru
 </h3>
 <p className="text-xl font-medium text-primary group-hover:text-primary/70 transition-colors">12.9716° N, 77.5946° E</p>
 <p className="text-secondary font-light mt-1">Indiranagar, Karnataka, India</p>
 </div>
 
 <div className="border-b border-white/10 pb-8 group">
 <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4 flex items-center gap-2">
 <MapPin className="w-3 h-3" /> Node / London
 </h3>
 <p className="text-xl font-medium text-primary group-hover:text-primary/70 transition-colors">51.5072° N, 0.1276° W</p>
 <p className="text-secondary font-light mt-1">Remote Engineering Hub</p>
 </div>

 <div className="pt-4 glass-panel p-8 rounded-3xl mt-4">
 <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4">Direct Communication</h3>
 <a href="mailto:hello@gravit.agency" className="text-xl md:text-2xl font-medium hover:text-primary/70 transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-white/50 block">
 hello@gravit.agency
 </a>
 </div>
 </div>
 </div>

 {/* FAQs - Glassmorphic Accordion */}
 <div>
 <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-8">
 FAQ.
 </h2>
 
 <div className="flex flex-col gap-4">
 {FAQS.map((faq, idx) => (
 <div key={idx} className="glass-panel rounded-2xl overflow-hidden transition-colors hover:border-white/20">
 <button 
 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
 className="w-full py-6 px-8 flex items-center justify-between text-left"
 >
 <span className="text-base font-medium tracking-wide pr-8 text-primary">{faq.q}</span>
 <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
 </button>
 <AnimatePresence>
 {openFaq === idx && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="overflow-hidden"
 >
 <p className="px-8 pb-8 text-secondary font-light leading-relaxed">
 {faq.a}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 </div>
 </div>

 </div>

 {/* Right Column: Structured Form - Premium Glass */}
 <div className="lg:col-span-7">
 <div className="glass-panel rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden h-full shadow-2xl">
 <div className="absolute inset-0 bg-white/5 pointer-events-none" />
 
 {/* Form Success State */}
 <AnimatePresence>
 {formState === 'success' && (
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }} 
 animate={{ opacity: 1, scale: 1 }} 
 className="absolute inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 z-20 rounded-[2rem]"
 >
 <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 relative">
 <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-50" />
 <CheckCircle2 className="w-10 h-10 text-primary" />
 </div>
 <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-primary">Transmitted.</h2>
 <p className="text-secondary text-lg max-w-sm font-light">Your brief has been securely transmitted. A lead engineer will respond within 24 hours.</p>
 </motion.div>
 )}
 </AnimatePresence>

 {/* The Form */}
 <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
 <div className="mb-4 border-b border-white/10 pb-8">
 <h3 className="text-3xl font-heading font-medium tracking-tight mb-4 text-primary">Project Briefing</h3>
 <p className="text-secondary font-light">Please provide initial details regarding your technical requirements.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group">
 <label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">First Name *</label>
 <input required type="text" id="firstName" className="w-full bg-transparent text-primary text-lg md:text-xl font-medium outline-none placeholder:text-white/20" placeholder="Jane" />
 </div>
 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group">
 <label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Last Name *</label>
 <input required type="text" id="lastName" className="w-full bg-transparent text-primary text-lg md:text-xl font-medium outline-none placeholder:text-white/20" placeholder="Doe" />
 </div>
 </div>

 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group">
 <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Work Email *</label>
 <input required type="email" id="email" className="w-full bg-transparent text-primary text-lg md:text-xl font-medium outline-none placeholder:text-white/20" placeholder="jane@company.com" />
 </div>

 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group">
 <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Company Name</label>
 <input type="text" id="company" className="w-full bg-transparent text-primary text-lg md:text-xl font-medium outline-none placeholder:text-white/20" placeholder="Acme Corp" />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group relative">
 <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Project Type *</label>
 <select required id="projectType" className="w-full bg-transparent text-primary text-base md:text-lg font-medium outline-none appearance-none cursor-pointer [&>option]:bg-background">
 <option value="" disabled selected className="text-secondary">Select Domain...</option>
 <option value="web-dev">Web / Platform Architecture</option>
 <option value="saas">SaaS Application</option>
 <option value="ecommerce">E-Commerce Infrastructure</option>
 <option value="other">Other Engineering</option>
 </select>
 <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-secondary pointer-events-none" />
 </div>

 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group relative">
 <label htmlFor="budget" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Estimated Budget *</label>
 <select required id="budget" className="w-full bg-transparent text-primary text-base md:text-lg font-medium outline-none appearance-none cursor-pointer [&>option]:bg-background">
 <option value="" disabled selected className="text-secondary">Select Range...</option>
 <option value="25k-50k">$25,000 - $50,000</option>
 <option value="50k-100k">$50,000 - $100,000</option>
 <option value="100k-250k">$100,000 - $250,000</option>
 <option value="250k+">$250,000+</option>
 </select>
 <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-secondary pointer-events-none" />
 </div>
 </div>

 <div className="flex flex-col gap-4 border-b border-white/10 pb-3 focus-within:border-white/50 transition-colors group">
 <label htmlFor="details" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Project Details</label>
 <textarea id="details" rows={4} placeholder="Tell us about your timeline, technical constraints, and core objectives..." className="w-full bg-transparent text-primary text-base md:text-lg font-medium outline-none resize-none placeholder:text-white/20"></textarea>
 </div>

 <button 
 type="submit" 
 disabled={formState === 'submitting'}
 className="w-full bg-primary text-background font-medium py-5 rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-4 group/btn"
 >
 {formState === 'submitting' ? 'Transmitting...' : 'Initialize Project'}
 <Send className={`w-4 h-4 ${formState === 'submitting' ? 'hidden' : 'block'} group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`} />
 </button>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
