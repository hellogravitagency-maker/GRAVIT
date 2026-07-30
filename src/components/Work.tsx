import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import BorderGlow from './BorderGlow';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import FlowingMenu from './FlowingMenu';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "Why React Server Components Change Everything.",
    category: "ENGINEERING",
    date: "JUL 2026",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Death of the 6-Line Hero.",
    category: "DESIGN",
    date: "JUN 2026",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Building Zero-Latency Video Players in WebGL.",
    category: "CASE STUDY",
    date: "MAY 2026",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Typography as Interface: Beyond Inter.",
    category: "DESIGN",
    date: "APR 2026",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Migrating from Vercel to AWS Bare Metal.",
    category: "INFRASTRUCTURE",
    date: "MAR 2026",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  }
];

const projects = [
  {
    title: 'SSVEMHS Portal',
    desc: 'An immersive, AI-powered interactive web portal featuring a 3D interactive scene.',
    tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
    year: '2026',
    image: '/assets/projects/ssvemhs.webp'
  },
  {
    title: 'Little Stars Academy',
    desc: 'A beautifully designed, high-performance web application tailored for a kindergarten.',
    tags: ['React 19', 'Tailwind v4', 'GSAP', 'Supabase'],
    year: '2026',
    image: '/assets/projects/littlestars.webp'
  },
  {
    title: 'WonderKids Academy',
    desc: 'A full-stack academy platform with an interactive user interface and admin dashboard.',
    tags: ['Dashboard', 'UI/UX', 'Admin'],
    year: '2026',
    image: '/assets/projects/wonderkids.webp'
  }
];

export default function Work() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.insight-card');
    cards.forEach((card) => {
      const img = card.querySelector('.insight-img');
      
      gsap.fromTo(img, 
        { scale: 1.2, opacity: 0.3 },
        {
          scale: 1,
          opacity: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 30%",
            scrub: 1
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-transparent text-white selection:bg-[#ff6a39] selection:text-white font-sans">
      {/* Cinematic Center Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 md:py-48 px-6">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Deep radial wash background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#ff6a39]/10 to-[#6e7bff]/10 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <SplitText 
            text="We shape digital realities." 
            className="text-6xl md:text-[clamp(4rem,8vw,7.5rem)] font-bold tracking-tighter leading-[0.9] mb-8 font-['Outfit',sans-serif]" 
          />
          <ScrollReveal
             baseOpacity={0}
             enableBlur={true}
             baseRotation={2}
             blurStrength={4}
             textClassName="text-white/50 text-lg md:text-2xl max-w-2xl font-light mb-12"
          >
            The projects that define our standards. From complex machine learning interfaces to stark brand identities.
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-white/30 text-xs tracking-[0.2em] uppercase animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/50"></div>
          Scroll to explore
        </div>
      </section>

      {/* Featured Projects with advanced hover physics and AIDA */}
      <section className="py-24 px-4 md:px-12 w-full max-w-[1600px] mx-auto z-10 relative">
        <div className="flex flex-col gap-32">
          {/* Project 01 */}
          <motion.article 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
          >
            <div className="lg:col-span-7 group relative overflow-hidden rounded-2xl">
              <BorderGlow glowColor="240 80 60" glowIntensity={0.3} animated={true} borderRadius={16} className="w-full aspect-[4/3] relative">
                <div className="absolute inset-0 bg-[#0A0A0F]/20 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                <img 
                  src="/assets/projects/ssvemhs.webp" 
                  alt="SSVEMHS Portal" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </BorderGlow>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start px-4 lg:px-8">
              <span className="text-[#6e7bff] text-xs font-bold tracking-[0.2em] uppercase mb-4">01 / EdTech Portal</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Outfit',sans-serif]">SSVEMHS</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                 An immersive, AI-powered interactive web portal featuring a 3D interactive scene, fluid physics-based scrolling, and role-based dashboards powered by Gemini AI and Supabase.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                 {['React 19', 'Three.js', 'Gemini AI', 'Supabase'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-white/50 text-xs tracking-wider">{tag}</span>
                 ))}
              </div>
              <Magnetic>
                 <button className="text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full transition-colors tracking-widest text-xs font-bold uppercase border border-white/10 hover:border-white/30">
                    View Case Study
                 </button>
              </Magnetic>
            </div>
          </motion.article>

          {/* Project 02 */}
          <motion.article 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start px-4 lg:px-8">
              <span className="text-[#ff6a39] text-xs font-bold tracking-[0.2em] uppercase mb-4">02 / Playgroup Academy</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Outfit',sans-serif]">Little Stars</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                 A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic, dynamic 3D elements, and automated backend notifications via Resend.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                 {['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-white/50 text-xs tracking-wider">{tag}</span>
                 ))}
              </div>
              <Magnetic>
                 <button className="text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full transition-colors tracking-widest text-xs font-bold uppercase border border-white/10 hover:border-white/30">
                    View Case Study
                 </button>
              </Magnetic>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 group relative overflow-hidden rounded-2xl">
              <BorderGlow glowColor="15 90 60" glowIntensity={0.3} animated={true} borderRadius={16} className="w-full aspect-[4/3] relative">
                <div className="absolute inset-0 bg-[#0A0A0F]/20 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                <img 
                  src="/assets/projects/littlestars.webp" 
                  alt="Little Stars Academy" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </BorderGlow>
            </div>
          </motion.article>

          {/* Project 03 */}
          <motion.article 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
          >
            <div className="lg:col-span-7 group relative overflow-hidden rounded-2xl">
              <BorderGlow glowColor="120 180 255" glowIntensity={0.3} animated={true} borderRadius={16} className="w-full aspect-[4/3] relative">
                <div className="absolute inset-0 bg-[#0A0A0F]/20 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                <img 
                  src="/assets/projects/wonderkids.webp" 
                  alt="WonderKids Academy" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </BorderGlow>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start px-4 lg:px-8">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">03 / Academy Dashboard</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Outfit',sans-serif]">WonderKids</h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                 A full-stack academy platform with an interactive user interface, cinematic scrolling, 3D elements, and a dedicated administrative dashboard for staff.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                 {['React', 'UI/UX', 'Dashboard', 'Admin'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-white/50 text-xs tracking-wider">{tag}</span>
                 ))}
              </div>
              <Magnetic>
                 <button className="text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full transition-colors tracking-widest text-xs font-bold uppercase border border-white/10 hover:border-white/30">
                    View Case Study
                 </button>
              </Magnetic>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Archive Grid (Flowing Menu) */}
      <section className="py-32 w-full z-10 relative border-t border-b border-white/5 bg-[#0a0a0a]">
         <div className="px-6 max-w-[1200px] mx-auto w-full mb-16">
           <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 pb-6 border-b border-white/10">Project Archive</h3>
         </div>
         <div style={{ height: '600px', position: 'relative' }}>
           <FlowingMenu 
             items={projects.map((p, i) => ({
               link: '#',
               text: p.title,
               image: p.image || `https://picsum.photos/seed/${p.title.replace(' ', '')}/600/400?grayscale`
             }))}
             bgColor="transparent"
             textColor="#ffffff"
             marqueeBgColor="#ff6a39"
             marqueeTextColor="#ffffff"
             borderColor="rgba(255,255,255,0.05)"
           />
         </div>
      </section>

      {/* INSIGHTS SECTION APPENDED */}
      <section className="relative pt-32 pb-24 px-6 text-center border-t border-white/5 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="h-[2px] w-12 bg-white/20 mx-auto mb-8" />
          <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold tracking-tighter leading-[1] mb-8 font-['Outfit',sans-serif]">
            Engineering <span className="text-white/40 italic">thoughts.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto font-light">
            Our perspective on the bleeding edge of web development, design systems, and digital architecture.
          </p>
        </motion.div>
      </section>

      {/* INTEREST: Gapless Bento Grid for Articles */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[450px] gap-4 grid-flow-dense">
          {articles.map((article, i) => (
            <Link 
              to="#"
              key={i} 
              className={cn(
                "insight-card group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] flex flex-col justify-between p-8 md:p-10 border border-white/5 hover:border-white/20 transition-all duration-500",
                i === 0 ? "md:col-span-2 lg:col-span-2 auto-rows-[600px]" : "",
                i === 4 ? "md:col-span-2 lg:col-span-3 auto-rows-[400px]" : ""
              )}
              style={i === 0 ? { gridRowEnd: "span 2" } : {}}
            >
              {/* Background Image */}
              <div 
                className="insight-img absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity opacity-40 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-100"
                style={{ backgroundImage: `url(${article.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
              
              <div className="relative z-20 flex justify-between items-start">
                <span className="font-mono text-xs text-white/50 tracking-widest uppercase px-4 py-2 border border-white/10 rounded-full backdrop-blur-md">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-[#ff6a39] uppercase">
                  {article.date}
                </span>
              </div>

              <div className="relative z-20">
                <h3 className={cn(
                  "font-bold tracking-tight mb-6 group-hover:text-white transition-colors duration-500 font-['Outfit',sans-serif]",
                  i === 0 ? "text-4xl md:text-6xl max-w-2xl text-white/90" : "text-3xl text-white/70"
                )}>
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors duration-500">
                  <span className="font-medium">Read Article</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-2 transition-transform duration-500">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Action (CTA Footer) */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/10 bg-transparent relative overflow-hidden z-10 mt-24">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#6e7bff]/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-[clamp(3rem,6vw,6rem)] font-bold tracking-tighter mb-8 font-['Outfit',sans-serif]">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ship?</span>
          </h2>
          <p className="text-white/50 text-xl md:text-2xl mb-16 font-light max-w-2xl">
            The timeline starts when you initialize the sequence. Partner with us to build your next breakthrough.
          </p>
          <Magnetic>
             <Link to="/contact" className="px-12 py-5 bg-white text-black font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform inline-block text-xs rounded-full pointer-events-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Initialize Project
             </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
