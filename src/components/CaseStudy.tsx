import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from './Work';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from './SEO';


gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !projectsData[slug]) {
    return <Navigate to="/404" replace />;
  }
  
  const project = projectsData[slug];

  useEffect(() => {
    // Parallax hero effect
    gsap.to('.hero-image', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero-section',
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      <SEO title={`${project.title} | Case Study`} description={project.challenge} image={project.heroImage} />
      
      {/* Hero Section */}
      <section className="hero-section relative w-full min-h-[80vh] h-auto flex flex-col justify-end pt-32 pb-12 md:pb-24 overflow-hidden px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <div className="hero-image absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center will-change-transform" style={{ backgroundImage: `url(${project.heroImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
          <span className="text-white/50 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/30"></span>
            Case Study • {project.category}
          </span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-[0.85] font-['Outfit',sans-serif] mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-3xl text-white/80 font-light max-w-3xl leading-relaxed">
            {project.desc}
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-[#0a0a0a]">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm font-mono tracking-[0.2em] text-[#ff6a00] uppercase mb-6">01 / The Challenge</h3>
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-sm font-mono tracking-[0.2em] text-[#ff6a00] uppercase mb-6">02 / The Solution</h3>
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-16 border-t lg:border-t-0 lg:border-l border-white/10 pt-16 lg:pt-0 lg:pl-16">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6 pb-4 border-b border-white/5">Tech Stack</h4>
              <div className="flex flex-col gap-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-white/80 font-mono text-sm tracking-widest uppercase flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6 pb-4 border-b border-white/5">The Results</h4>
              <div className="flex flex-col gap-8">
                {project.results.map((res: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-['Outfit',sans-serif]">
                      {res.metric}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-black font-bold tracking-widest uppercase text-xs overflow-hidden rounded-full w-full"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-[150%]">Visit Live Site</span>
                <span className="absolute z-10 transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0 text-white">Launch</span>
                <div className="absolute inset-0 bg-[#ff6a00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Visual Divider */}
      <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

      {/* Next Steps / CTA */}
      <section className="py-32 w-full max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-['Outfit',sans-serif] mb-8">
          Ready to build your own reality?
        </h2>
        <a 
          href="/contact"
          className="inline-flex items-center gap-4 text-lg font-bold tracking-widest uppercase hover:text-[#ff6a00] transition-colors group"
        >
          <span className="w-12 h-[1px] bg-white group-hover:bg-[#ff6a00] group-hover:w-16 transition-all duration-300"></span>
          Start a Project
        </a>
      </section>

    </div>
  );
}
