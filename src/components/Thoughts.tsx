import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { articlesData } from './Article';
import SEO from './SEO';


export default function Thoughts() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-24 font-['Outfit',sans-serif] relative overflow-hidden">
      <SEO title="The Lab | Thoughts & Insights" description="Insights on spatial computing, web architecture, and design engineering from the Gravit team." />
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6E7AFF] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32 max-w-4xl"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase block mb-6">
            [ THOUGHTS & INSIGHTS ]
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
            The <span className="text-white/40">Lab.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-body leading-relaxed max-w-2xl">
            Deep dives into spatial computing, web architecture, and design engineering. We share what we learn from pushing the browser to its absolute limits.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {Object.entries(articlesData).map(([slug, article], idx) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="will-change-transform"
            >
              <Link 
                to={`/thoughts/${slug}`}
                className="group block relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-[#111] border border-white/5"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    loading="lazy" 
                    decoding="async"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-4">
                    <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 group-hover:bg-[#ff6a00] group-hover:border-[#ff6a00] transition-colors duration-500">
                      {article.category}
                    </span>
                    <span className="text-white/50 text-xs font-mono tracking-widest uppercase">
                      {article.date}
                    </span>
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-white text-white/90 transition-colors duration-500 line-clamp-2 leading-tight">
                      {article.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-[#6E7AFF] text-sm font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-2 transition-transform duration-500">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Glow */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-[#6E7AFF]/30 rounded-3xl transition-colors duration-700 pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
