import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import TextType from './TextType';
import Ballpit from './Ballpit';
import ScrollReveal from './ScrollReveal';
import CircularText from './CircularText';
import PixelCard from './PixelCard';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { MorphingText } from './MorphingText';
import Magnetic from './Magnetic';
import SplitText from './SplitText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap py-6 border-y border-[#2F3336] bg-transparent">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-16 text-[#71767B] font-mono text-xs tracking-widest uppercase"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 ml-16">
            <span>REACT_19</span>
            <span>THREE.JS</span>
            <span>WEBGL</span>
            <span>FRAMER_MOTION</span>
            <span>GSAP</span>
            <span>TYPESCRIPT</span>
            <span>TAILWIND_V4</span>
            <span>LENIS</span>
            <span>VITE</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grab all sections to animate
      const sections = gsap.utils.toArray<HTMLElement>('section.animate-on-scroll');
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%', // Trigger when the top of the section hits 85% of viewport
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-transparent">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-24 border-b border-white/5 overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
        </div>

        {/* Architectural Plus Markers */}
        <div className="corner-plus tl" />
        <div className="corner-plus tr" />
        <div className="corner-plus bl" />
        <div className="corner-plus br" />

        <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
          <Ballpit
            count={60}
            gravity={0.8}
            friction={0.99}
            wallBounce={0.95}
            maxVelocity={0.5}
            followCursor={false}
            colors={[0xff6a39, 0x6e7bff, 0x111111, 0xffffff]}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pointer-events-none mt-12">
          
          <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-bold tracking-tighter mb-6 text-white uppercase" style={{ perspective: '1000px' }}>
            <span className="block overflow-hidden pb-4 -mb-4">
              {"BEYOND".split('').map((char, index) => (
                <motion.span
                  key={`beyond-${index}`}
                  className="inline-block origin-bottom"
                  initial={{ y: '120%', rotateX: -90, opacity: 0 }}
                  animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.04 + 0.1, ease: [0.25, 1, 0.5, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pb-4 -mb-4">
              <span className="text-gradient-accent inline-block">
                {"ORDINARY".split('').map((char, index) => (
                  <motion.span
                    key={`ordinary-${index}`}
                    className="inline-block origin-bottom"
                    initial={{ y: '120%', rotateX: -90, opacity: 0 }}
                    animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.04 + 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden pb-4 -mb-4">
              {"DESIGN.".split('').map((char, index) => (
                <motion.span
                  key={`design-${index}`}
                  className="inline-block origin-bottom"
                  initial={{ y: '120%', rotateX: -90, opacity: 0 }}
                  animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.04 + 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mt-4 mb-10"
          >
            We build high-performance digital flagship experiences for global brands. <span className="text-white font-medium">No templates. No compromises.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          >
            <Link to="/contact" className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] font-medium text-sm">
              Start Project
            </Link>
            <Link to="/work" className="px-8 py-4 liquid-glass text-white w-full sm:w-auto text-center rounded-full hover:bg-white/10 transition-colors font-medium text-sm">
              View Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Tech Marquee */}
      <TechMarquee />

      {/* 3. Studio Info (Premium & Stats) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-20 pb-8 border-b border-white/5">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-[#ff6a39] uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-[#ff6a39]"></span>
            Studio
          </motion.h2>
          <div className="max-w-4xl">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              blurStrength={4}
              textClassName="text-3xl md:text-5xl leading-tight font-bold tracking-tight text-white"
            >
              We build cinematic digital experiences that elevate your brand's perception.
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="col-span-1 md:col-span-2 group cursor-pointer"
          >
            <PixelCard 
              variant="default"
              speed={40}
              gap={10}
              colors="#111111,#222222,#ff6a39"
              className="w-full h-full liquid-glass p-8 md:p-14 relative overflow-hidden rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6a39]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#ff6a39]/10 transition-colors duration-700"></div>
              
              <h3 className="text-3xl font-bold mb-8 text-white tracking-tighter flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                Engineering Meets Elegance
                <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#ff6a39]">→</span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  GRAVIT was founded with a singular focus. Based in Kurnool, we blend rigorous engineering with sophisticated, uncompromising design.
                </p>
                <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  We don't do templates. Every line of code, every pixel, and every animation is crafted to prove that the web can still feel magical and premium.
                </p>
              </div>
            </PixelCard>
          </motion.div>
          
          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="col-span-1 flex flex-col justify-center group cursor-pointer"
          >
            <PixelCard 
              variant="default"
              speed={40}
              gap={10}
              colors="#111111,#222222,#6e7bff"
              className="w-full h-full liquid-glass p-8 md:p-14 relative overflow-hidden rounded-3xl flex flex-col justify-center"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6e7bff]/5 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-[#6e7bff]/10 transition-colors duration-700"></div>
              
              <div className="space-y-12 relative z-10">
                <div className="group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="text-white/40 mb-3 text-xs font-mono uppercase tracking-widest flex items-center justify-between">
                    Founded
                    <span className="w-2 h-2 rounded-full bg-[#ff6a39] animate-pulse"></span>
                  </div>
                  <Magnetic>
                    <div className="text-white text-5xl font-bold tracking-tighter w-max">2024</div>
                  </Magnetic>
                </div>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
                
                <div className="group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                  <div className="text-white/40 mb-3 text-xs font-mono uppercase tracking-widest flex items-center justify-between">
                    Client Revenue
                    <span className="text-[#6e7bff] opacity-0 group-hover:opacity-100 transition-opacity duration-500">+++</span>
                  </div>
                  <Magnetic>
                    <div className="text-white text-5xl font-bold tracking-tighter flex items-center w-max">$500M<span className="text-[#ff6a39]">+</span></div>
                  </Magnetic>
                </div>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </section>

      {/* 3. The Manifesto */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5 mt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-r from-[#ff6a39]/10 via-[#6e7bff]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="flex flex-col gap-8 items-center justify-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff6a39] animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest text-white/70 uppercase">Our Manifesto</span>
          </motion.div>
          
          <div className="w-full max-w-5xl mx-auto">
            <ScrollReveal
              baseOpacity={0.05}
              enableBlur={true}
              baseRotation={2}
              blurStrength={12}
              textClassName="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter"
            >
              We believe the web must feel alive. We reject the mundane and build digital spaces that breathe, react, and leave an indelible mark.
            </ScrollReveal>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16"
          >
            <p className="text-xl md:text-2xl text-white/50 font-mono tracking-tight max-w-2xl mx-auto">
              "This site itself is a live case study in exactly what we build for our clients."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3.1 Process Pipeline */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-sm tracking-widest text-white/50 uppercase mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'We align on your brand identity, business goals, and the technical architecture required.' },
            { step: '02', title: 'Design', desc: 'Crafting high-fidelity mockups, cinematic prototypes, and fluid interactions.' },
            { step: '03', title: 'Development', desc: 'Rigorous engineering using React, WebGL, and modern animation libraries.' },
            { step: '04', title: 'Deploy', desc: 'Performance optimization, SEO setup, and deploying to a global edge network.' }
          ].map((p, i) => (
            <div key={p.step} className="liquid-glass p-8 hover:-translate-y-2 transition-transform duration-500 cursor-default">
              <div className="text-white/30 text-4xl font-bold tracking-tighter mb-6">{p.step}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.2 Core Values */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-sm tracking-widest text-white/50 uppercase mb-12 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <PixelCard variant="blue" className="p-10 text-center cursor-default bg-white/[0.02] border border-white/5 rounded-3xl" gap={10} speed={40} colors="#6e7bff,#4f5bff,#2a38ff">
             <div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-[#6e7bff]">✦</div>
             <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Precision Code</h3>
             <p className="text-white/60 text-sm leading-relaxed">We treat web development like software engineering. Clean architecture, robust systems, and high performance.</p>
           </PixelCard>
           <PixelCard variant="yellow" className="p-10 text-center cursor-default bg-white/[0.02] border border-white/5 rounded-3xl" gap={10} speed={40} colors="#ff6a39,#ff4d12,#cc3500">
             <div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-[#ff6a39]">✦</div>
             <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Cinematic Aesthetics</h3>
             <p className="text-white/60 text-sm leading-relaxed">Every interaction should feel magical. We obsess over typography, contrast, and fluid harmony.</p>
           </PixelCard>
           <PixelCard variant="default" className="p-10 text-center cursor-default bg-white/[0.02] border border-white/5 rounded-3xl" gap={10} speed={40} colors="#ffffff,#cccccc,#999999">
             <div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center text-white">✦</div>
             <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Unapologetic</h3>
             <p className="text-white/60 text-sm leading-relaxed">We don't build generic templates. If you want to blend in with safe designs, we are not the agency for you.</p>
           </PixelCard>
        </div>
      </section>

      {/* 5. Services Teaser */}
      <section className="animate-on-scroll py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
        <SplitText text="Our Capabilities" className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16 text-center block w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {['Web Engineering', 'Creative Design', 'Motion Graphics'].map((service, i) => (
             <div 
               key={service}
               className="liquid-glass p-8 hover:-translate-y-2 transition-transform duration-500 cursor-default text-center md:text-left"
             >
               <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service}</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 High-performance architecture and cinematic designs tailored to elevate your brand's digital presence.
               </p>
             </div>
           ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/services" className="liquid-glass inline-block px-8 py-4 text-white w-full sm:w-auto text-center">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* 7. Final Footer CTA */}
      <section className="animate-on-scroll py-40 px-6 flex items-center justify-center bg-transparent relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none z-0">
           <div className="ambient-glow bg-[#ff6a39] w-[400px] h-[400px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
         </div>
         <div className="relative z-10 text-center max-w-3xl">
           <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-bold tracking-tighter text-white mb-8 leading-[0.9]">
             Let's build <br /> <span className="text-gradient-accent">something legendary.</span>
           </h2>
           <p className="text-xl text-white/60 mb-12">
             Partner with us to create a digital experience that stands out.
           </p>
           <Link to="/contact" className="px-10 py-4 bg-white text-black rounded-full hover:scale-105 transition-transform inline-block text-lg font-medium shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] pointer-events-auto">
             Start a Conversation
           </Link>
         </div>
      </section>
    </div>
  );
}
