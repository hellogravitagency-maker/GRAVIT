import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TEMPLATES = [
  {
    id: 't1',
    name: 'Atlas',
    category: 'SaaS / Enterprise',
    price: '$299',
    description: 'A complete marketing site architecture for B2B SaaS platforms. Includes pricing grids, feature matrices, and conversion-optimized funnels.'
  },
  {
    id: 't2',
    name: 'Obelisk',
    category: 'Agency / Studio',
    price: '$149',
    description: 'Minimalist editorial portfolio for design agencies. Heavy focus on typography, whitespace, and large-format imagery.'
  },
  {
    id: 't3',
    name: 'Meridian',
    category: 'E-commerce',
    price: '$199',
    description: 'High-conversion headless storefront template. Built for velocity and seamless checkout experiences.'
  },
  {
    id: 't4',
    name: 'Nova',
    category: 'Fintech',
    price: '$249',
    description: 'Trust-centric architecture for financial products. Dark-mode optimized with data visualization components built-in.'
  }
];

export default function WebsiteTemplates() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="w-full bg-background text-primary min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title="Website Templates — GRAVIT" 
        description="Premium, production-ready website architectures engineered for scale." 
        path="/templates" 
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div style={{ y }} className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            04 / Architectures
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.85] text-primary mb-8">
            Foundations.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-light text-secondary leading-relaxed">
                Production-ready architectures. Not just templates, but fully engineered systems designed for immediate deployment and infinite scalability.
              </p>
            </div>
            <div className="md:w-1/3 flex items-end justify-end">
              <p className="font-mono text-xs uppercase tracking-widest text-secondary text-right">
                Built with React, Next.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TEMPLATES GRID */}
      <section className="relative z-10 py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEMPLATES.map((template, i) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel group overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Image Placeholder */}
              <div className="h-80 w-full bg-black/20 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-32 h-32 border border-white/20 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-secondary bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {template.category}
                  </span>
                  <span className="font-sans font-medium text-lg">{template.price}</span>
                </div>
                
                <h3 className="text-4xl font-heading font-medium mb-4">{template.name}</h3>
                <p className="text-secondary font-light leading-relaxed mb-10 flex-1">{template.description}</p>
                
                <button className="w-full py-4 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                  Preview Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-32 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              Custom Architecture
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
              Need something<br />bespoke?
            </h2>
          </div>
          <div className="relative z-10">
            <a 
              href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
            >
              Initiate Project Agency →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
