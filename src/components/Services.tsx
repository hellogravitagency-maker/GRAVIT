import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import SpecularButton from './SpecularButton';
import { GlowingEffect } from './ui/glowing-effect';
import SEO from './SEO';
import BlackHole from './BlackHole';

const services = [
  {
    id: 'Platform Engineering',
    title: 'High-Performance Architecture',
    desc: 'We build scalable, high-performance web applications using the modern React ecosystem. From complex SaaS dashboards to high-conversion storefronts.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    colSpan: 'md:col-span-2'
  },
  {
    id: 'Creative Engineering',
    title: 'Immersive Motion',
    desc: 'Utilizing WebGL and advanced CSS/JS animations for cinematic storytelling that drives engagement.',
    tags: ['WebGL', 'GSAP', 'Three.js'],
    colSpan: 'md:col-span-1'
  },
  {
    id: 'Digital Strategy',
    title: 'Conversion Architecture',
    desc: 'We analyze markets and audit UX to build strategies that convert traffic into revenue.',
    tags: ['UX Audit', 'SEO', 'Analytics'],
    colSpan: 'md:col-span-1'
  },
  {
    id: 'Brand & Product Design',
    title: 'Premium Identity',
    desc: 'We design comprehensive systems and high-fidelity prototypes that prioritize both stunning aesthetics and seamless usability.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    colSpan: 'md:col-span-2'
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-full overflow-x-clip bg-black text-white font-sans min-h-screen">
      <SEO title="Services" description="Our core capabilities across Strategy, Engineering, and Spatial Computing." />
      
      {/* 3D BlackHole Hero */}
      <section className="relative min-h-[100svh] py-24 md:py-32 w-full flex flex-col justify-center items-center text-center overflow-hidden">
        
        {/* Absolute 3D Component */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <BlackHole />
        </div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/20 to-black/80 pointer-events-none mix-blend-multiply"></div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col items-center mt-20 md:mt-32 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center justify-center mb-10 pointer-events-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#ffffff]"></span>
                <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                  Digital Engineering Studio
                </span>
              </div>
            </div>

            <h1 className="font-extrabold tracking-tighter leading-[0.9] text-[clamp(4rem,10vw,12rem)] uppercase w-full flex flex-col items-center text-white z-10 pointer-events-auto" style={{ letterSpacing: "-0.04em" }}>
              <span className="block overflow-hidden">
                <span className="inline-block text-white drop-shadow-2xl select-text">Shaping</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block text-white/90 drop-shadow-2xl select-text">Digital</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block text-white/80 drop-shadow-2xl select-text">Realities</span>
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 w-11/12 md:w-full max-w-2xl text-center text-white/80 text-lg md:text-xl leading-relaxed font-light backdrop-blur-3xl bg-black/40 p-8 rounded-3xl border border-white/10 shadow-2xl relative pointer-events-auto select-text"
            >
              We abandon standard templates. Our disciplines converge to create <strong className="text-white font-medium">custom digital architectures</strong> that pull audiences in and dominate their markets.
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5 overflow-hidden relative bg-black z-20">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black w-full" />
        <div className="flex w-max animate-[marquee_20s_linear_infinite] items-center">
           {[1, 2].map((set) => (
             <div key={set} className="flex gap-16 md:gap-32 pr-16 md:pr-32 items-center shrink-0">
               {['REACT', 'THREE.JS', 'GSAP', 'WEBGL', 'NODE.JS', 'NEXT.JS', 'REACT', 'THREE.JS', 'GSAP', 'WEBGL', 'NODE.JS', 'NEXT.JS'].map((tech, idx) => (
                 <span key={`${set}-${idx}`} className="text-2xl md:text-4xl font-bold text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>{tech}</span>
               ))}
             </div>
           ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-24 md:py-48 px-4 md:px-8 lg:px-16 max-w-[1600px] mx-auto relative z-10 bg-black">
        <div className="mb-16 text-center lg:text-left">
           <div className="h-[2px] w-12 bg-white mb-8 mx-auto lg:mx-0" />
           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">Expertise that scales.</h2>
           <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
             Our disciplines converge to create digital platforms that dominate their respective markets.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[400px]">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-0 relative overflow-hidden group hover:border-white/30 transition-all duration-500 ${s.colSpan}`}
            >
              <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>

              <div className="relative z-10 pointer-events-none">
                <span className="font-mono text-xl font-bold text-white/60 group-hover:text-white transition-colors duration-500 mb-4 block">0{i + 1}</span>
                <span className="text-white font-mono text-xs tracking-[0.2em] uppercase font-bold text-white/50 block mb-6">
                  {s.id}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{s.title}</h3>
              </div>
              
              <div className="relative z-10 mt-8 pointer-events-none">
                <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {s.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-white/80 group-hover:bg-white/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/5 bg-black relative z-10">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">Our Methodology</h2>
            <p className="text-white/50 text-lg max-w-2xl font-light">A systematic approach to digital excellence.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { phase: "01", title: "Discovery & Architecture", desc: "We map out the system architecture, define user flows, and establish the technical requirements." },
            { phase: "02", title: "Design & Prototyping", desc: "Creating high-fidelity prototypes and design systems with a focus on premium aesthetics and UX." },
            { phase: "03", title: "Engineering & Motion", desc: "Building the frontend and backend architectures, integrating APIs, and crafting GSAP/WebGL animations." },
            { phase: "04", title: "Deployment & Scaling", desc: "Rigorous QA, performance auditing, and deployment with CI/CD pipelines for seamless scaling." }
          ].map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors group relative overflow-hidden"
            >
              <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
              <div className="relative z-10 pointer-events-none">
                <div className="text-white/60 font-mono text-5xl font-bold mb-6 group-hover:text-white transition-colors duration-500">{step.phase}</div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-4">{step.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTION: Massive CTA Footer */}
      <section className="py-20 md:py-32 px-6 text-center border-t border-white/5 bg-black relative overflow-hidden z-10">
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="font-bold text-white tracking-tighter leading-[1] mb-12 uppercase" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
            Start the <br /> conversation
          </h2>
            <SpecularButton
              size="lg"
              radius={999}
              tint="#ffffff"
              tintOpacity={0.05}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              className="font-bold tracking-widest text-xl uppercase px-16 py-8"
              onClick={() => navigate('/contact')}
            >
              <div className="flex items-center justify-center gap-6">
                <span>Deploy Now</span>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </SpecularButton>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
