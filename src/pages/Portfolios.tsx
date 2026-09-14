import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PORTFOLIOS = [
  { name: 'Sarah Jenkins', role: 'Art Director', year: '2025' },
  { name: 'Marcus Chen', role: 'Industrial Designer', year: '2025' },
  { name: 'Elena Rostova', role: 'Photographer', year: '2024' },
  { name: 'David Okafor', role: 'Architect', year: '2024' },
  { name: 'Studio Blank', role: 'Creative Agency', year: '2023' },
  { name: 'Julian Vance', role: 'Typographer', year: '2023' }
];

export default function Portfolios() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="w-full bg-background text-primary min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title="Portfolios — GRAVIT" 
        description="Premium individual and agency portfolios." 
        path="/portfolios" 
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div style={{ y }} className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            06 / Creative Display
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.85] text-primary mb-8">
            Portfolios.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-light text-secondary leading-relaxed">
                Digital galleries engineered for creative professionals. Putting the focus entirely on your work, where it belongs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LIST SECTION */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-between items-center py-4 border-b border-white/20 text-xs font-mono uppercase tracking-widest text-secondary mb-4">
            <span className="w-1/2 md:w-1/3">Name</span>
            <span className="hidden md:block w-1/3 text-center">Discipline</span>
            <span className="w-1/2 md:w-1/3 text-right">Year</span>
          </div>
          
          {PORTFOLIOS.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to="/contact" className="group flex justify-between items-center py-8 border-b border-white/10 hover:border-white transition-colors cursor-pointer">
                <span className="w-1/2 md:w-1/3 text-2xl md:text-4xl font-heading group-hover:pl-4 transition-all duration-300">{item.name}</span>
                <span className="hidden md:block w-1/3 text-center text-secondary font-light">{item.role}</span>
                <span className="w-1/2 md:w-1/3 text-right font-mono text-sm text-secondary group-hover:text-primary transition-colors">{item.year}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
