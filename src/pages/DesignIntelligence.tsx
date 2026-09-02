import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DesignIntelligence() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="w-full bg-background text-primary min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title="Design Intelligence — GRAVIT" 
        description="AI-driven aesthetic engineering and generative interfaces." 
        path="/design-intelligence" 
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div style={{ y }} className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            07 / AI Engineering
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.85] text-primary mb-8">
            Generative<br />Aesthetics.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-light text-secondary leading-relaxed">
                Leveraging machine learning to dynamically adapt interfaces, optimize user flows, and generate bespoke visual assets in real-time.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTENT BLOCK */}
      <section className="relative z-10 py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="glass-panel p-10 md:p-20 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-medium mb-8">Adaptive Interfaces</h2>
            <p className="text-secondary font-light text-lg leading-relaxed mb-6">
              Static websites are obsolete. We build systems that learn from user behavior and dynamically restructure themselves to maximize engagement and conversion.
            </p>
            <p className="text-secondary font-light text-lg leading-relaxed mb-10">
              Through continuous A/B testing powered by predictive models, your digital platform evolves automatically.
            </p>
            <Link to="/ai-builder" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-white/70 transition-colors">
              Explore AI Builder 
              <span className="p-2 border border-white/20 rounded-full">→</span >
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-[400px] border border-white/10 rounded-3xl bg-white/5 relative overflow-hidden flex items-center justify-center">
            {/* Minimal visual representation */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-[0.5px] border-white/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 border-[0.5px] border-white/20 rounded-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
