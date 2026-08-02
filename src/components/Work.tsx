import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import BorderGlow from './BorderGlow';
import PixelCard from './PixelCard';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import FlowingMenu from './FlowingMenu';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import SEO from './SEO';


gsap.registerPlugin(ScrollTrigger);

export const projectsData: Record<string, any> = {
  "ssvemhs": {
    category: 'EdTech Portal',
    title: 'SSVEMHS',
    desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
    tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
    year: '2026',
    variant: 'blue',
    link: 'https://ssvemhs.pages.dev/',
    heroImage: '/assets/images/SSVEMHS.png',
    challenge: 'SSVEMHS needed a modern, highly interactive platform that could engage students and streamline administrative tasks. The old system was slow, non-responsive, and lacked the visual fidelity required to keep a younger audience engaged.',
    solution: 'We built a bespoke platform from the ground up using React 19 and Three.js for interactive spatial computing elements. We integrated Gemini AI to provide a personalized tutoring assistant, and backed the entire system with Supabase for real-time data sync.',
    results: [
      { metric: "300%", label: "Increase in Daily Engagement" },
      { metric: "<50ms", label: "Average Response Time" },
      { metric: "Zero", label: "Downtime during launch" }
    ]
  },
  "little-stars": {
    category: 'Playgroup Academy',
    title: 'Little Stars',
    desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
    tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
    year: '2026',
    variant: 'yellow',
    link: 'https://little-stars-academy.pages.dev/',
    heroImage: '/assets/images/Little_Stars.png',
    challenge: 'Little Stars required a vibrant, parent-facing portal that felt playful yet professional, handling admissions, event notifications, and daily progress reports.',
    solution: 'We utilized Framer Motion for playful, elastic UI animations and Tailwind v4 for a highly customizable design system. Supabase powers the real-time notifications to parents.',
    results: [
      { metric: "98%", label: "Parent Satisfaction" },
      { metric: "2x", label: "Faster Admissions Process" },
      { metric: "100%", label: "Mobile Accessibility" }
    ]
  },
  "wonderkids": {
    category: 'Academy Dashboard',
    title: 'WonderKids',
    desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
    tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
    year: '2026',
    variant: 'pink',
    link: 'https://wonderkids-67h.pages.dev/',
    heroImage: '/assets/images/WonderKids.png',
    challenge: 'WonderKids needed a dual-sided platform: a cinematic marketing front-end to drive enrollment, and a robust, data-heavy dashboard for staff to manage day-to-day operations.',
    solution: 'We separated the concerns by using an aggressive code-splitting strategy. The public-facing site leverages ScrollTrigger for cinematic reveals, while the admin dashboard uses a highly optimized React table architecture for large datasets.',
    results: [
      { metric: "50%", label: "Reduction in Admin Tasks" },
      { metric: "4.9/5", label: "Staff UX Rating" },
      { metric: "10k+", label: "Daily Active Users Supported" }
    ]
  }
};

const articles = [
  {
    id: "react-server-components",
    title: "Why React Server Components Change Everything.",
    category: "ENGINEERING",
    date: "JUL 2026",
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "death-6-line-hero",
    title: "The Death of the 6-Line Hero.",
    category: "DESIGN",
    date: "JUN 2026",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "zero-latency-webgl",
    title: "Building Zero-Latency Video Players in WebGL.",
    category: "CASE STUDY",
    date: "MAY 2026",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "typography-interface",
    title: "Typography as Interface: Beyond Inter.",
    category: "DESIGN",
    date: "APR 2026",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "vercel-to-aws",
    title: "Migrating from Vercel to AWS Bare Metal.",
    category: "INFRASTRUCTURE",
    date: "MAR 2026",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  }
];

export default function Work() {
  const bentoGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Advanced bento grid entrance animation
    if (bentoGridRef.current) {
      const rows = bentoGridRef.current.querySelectorAll('.editorial-row');
      
      gsap.fromTo(rows, 
        { 
          y: 75, 
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: bentoGridRef.current,
            start: "top 85%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-transparent text-white selection:bg-[#ffffff] selection:text-white font-sans">
      <SEO title="Our Work" description="Explore our portfolio of high-performance web applications, 3D experiences, and digital platforms." />
      {/* Cinematic Center Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 md:py-48 px-6">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Deep radial wash background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#ffffff]/10 to-[#ffffff]/10 blur-[60px] rounded-full opacity-40"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <SplitText 
            text="We shape digital realities." 
            className="text-5xl md:text-[clamp(3.5rem,6vw,5.5rem)] font-bold tracking-tighter leading-[0.9] mb-8 font-['Outfit',sans-serif]" 
          />
          <ScrollReveal
             baseOpacity={0}
             enableBlur={true}
             baseRotation={2}
             blurStrength={4}
             textClassName="text-white/50 text-base md:text-lg max-w-2xl font-light mb-12"
          >
            The projects that define our standards. From complex machine learning interfaces to stark brand identities.
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-white/30 text-xs tracking-[0.2em] uppercase animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/50"></div>
          Scroll to explore
        </div>
      </section>

      {/* Featured Projects - Media-Free Performant Redesign */}
      <section className="py-24 px-4 md:px-12 w-full max-w-[1600px] mx-auto z-10 relative">
        <div className="flex flex-col gap-12 md:gap-24">
          {Object.entries(projectsData).map(([slug, project], idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-[rgba(10,10,15,0.4)] backdrop-blur-3xl p-6 md:p-16 lg:p-24 flex flex-col justify-end min-h-[50svh] md:min-h-[75vh] h-auto transition-all hover:border-white/30 will-change-transform"
            >
              {/* Image & PixelCard animated background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={project.heroImage} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 opacity-30 group-hover:opacity-80 transition-opacity duration-1000">
                  <PixelCard variant={project.variant as any} gap={25} speed={30} className="w-full h-full rounded-none mix-blend-overlay" />
                </div>
              </div>

              <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">
                <div className="flex flex-col items-start max-w-4xl">
                  <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 md:mb-10 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-white/30"></span>
                    0{idx + 1} / {project.category}
                  </span>
                  <h2 className="mb-6 md:mb-10 text-[clamp(3rem,10vw,10rem)] font-bold tracking-tighter leading-[0.85] font-['Outfit',sans-serif] text-white">{project.title}</h2>
                  <p className="text-white/60 text-base md:text-xl leading-relaxed mb-10 md:mb-14 max-w-2xl font-light">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-white/60 text-[10px] md:text-xs tracking-[0.1em] uppercase backdrop-blur-md bg-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-shrink-0 lg:pb-4">
                  <Magnetic>
                    <Link to={`/work/${slug}`} className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 transform group-hover:scale-105 inline-flex cursor-pointer">
                      <span className="sr-only">View Case Study</span>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 w-6 h-6 md:w-8 md:h-8">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Archive Grid (Flowing Menu) */}
      <section className="py-32 w-full z-10 relative border-t border-b border-white/5 bg-[#0a0a0a]">
         <div className="px-6 max-w-[1200px] mx-auto w-full mb-16">
           <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 pb-6 border-b border-white/10">Project Archive</h3>
         </div>
         <div style={{ height: '600px', position: 'relative' }}>
           <FlowingMenu 
             items={Object.values(projectsData).map((p: any) => ({
               link: '#',
               text: p.title,
               image: p.heroImage
             }))}
             bgColor="transparent"
             textColor="#ffffff"
             marqueeBgColor="#ffffff"
             marqueeTextColor="#ffffff"
             borderColor="rgba(255,255,255,0.05)"
           />
         </div>
      </section>

      {/* Engineering Thoughts - Editorial List */}
      <section className="py-24 md:py-48 w-full max-w-[1600px] mx-auto relative z-10 px-4">
        <div className="mb-16 px-4 md:px-8">
           <h2 className="text-3xl md:text-5xl font-bold font-['Outfit',sans-serif] tracking-tighter text-white">Engineering Thoughts<span className="text-white">.</span></h2>
        </div>
        
        <div ref={bentoGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {articles.map((article, i) => (
            <Link 
              to={`/thoughts/${article.id}`}
              key={i} 
              className="editorial-row group relative w-full bg-[#050505] border border-white/10 hover:border-white/30 rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[500px] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(255,106,57,0.15)] will-change-transform"
            >
              {/* Background Image Reveal */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 grayscale transition-all duration-700 ease-[0.25,0.46,0.45,0.94] group-hover:opacity-20 group-hover:scale-105"
                style={{ backgroundImage: `url(${article.img})` }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Background Number */}
              <div className="absolute -right-4 -bottom-12 text-[12rem] md:text-[20rem] font-bold leading-none text-white opacity-[0.02] group-hover:text-white group-hover:opacity-[0.04] transition-all duration-1000 pointer-events-none select-none font-mono">
                0{i + 1}
              </div>
              
              {/* Top: Metadata */}
              <div className="relative z-10 w-full flex items-center justify-between mb-12">
                <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-[var(--color-accent)]">
                  {article.category}
                </span>
                <span className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.1em] transition-colors duration-500 bg-white/5 px-4 py-2 rounded-full border border-white/10 group-hover:border-white/30 group-hover:text-white">
                  {article.date}
                </span>
              </div>

              {/* Bottom: Title & Icon */}
              <div className="relative z-10 w-full mt-auto flex flex-col md:flex-row md:items-end justify-between gap-8 transform transition-transform duration-700 group-hover:translate-x-4">
                <h3 className="font-bold tracking-tighter font-['Outfit',sans-serif] text-3xl md:text-5xl lg:text-5xl text-white/80 transition-colors duration-500 group-hover:text-white leading-[1.1] max-w-xl">
                  {article.title}
                </h3>
                
                <div className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:bg-[var(--color-accent)] group-hover:text-black group-hover:border-[var(--color-accent)] transition-all duration-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:rotate-45 transition-transform duration-500">
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
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#ffffff]/10 blur-[60px] rounded-full pointer-events-none opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter mb-8 font-['Outfit',sans-serif]">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ship?</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-16 font-light max-w-2xl">
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
