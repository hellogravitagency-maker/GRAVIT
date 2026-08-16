import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-end pt-32 pb-16 bg-background">
      {/* No decorative blobs. No glow. No grain overlay. The content is the design. */}

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 max-w-[1800px] mx-auto">
        
        {/* Primary headline — one entrance, no stagger spam */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.85] font-bold tracking-tighter uppercase text-primary mb-16"
        >
          Websites<br />
          engineered<br />
          to look<br />
          inevitable.
        </motion.h1>

        {/* Bottom meta row — all secondary info lives here, together */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-10"
        >
          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-1">Discipline</span>
            <span className="text-sm font-medium text-primary">Design / Engineering / Systems</span>
          </div>
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-lg text-secondary leading-relaxed">
              We design and engineer digital systems — not templates, not themes. 
              Infrastructure for how your company needs to present itself.
            </p>
          </div>
          <div className="md:col-span-5 lg:col-span-6 flex items-start md:justify-end gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Start a Project →
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors"
            >
              View Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
