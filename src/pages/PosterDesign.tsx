import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const POSTERS = [
  { id: 1, title: "Event Campaign" },
  { id: 2, title: "Product Launch" },
  { id: 3, title: "Brand Awareness" },
  { id: 4, title: "Film & Media" },
];

export default function PosterDesign() {
  return (
    <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
      <SEO 
        title="Poster & Print Design — GRAVIT"
        description="High-impact visual communication. We design posters and print campaigns that command attention."
        path="/poster-design"
      />
      
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            Creative Services
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
            Visual Impact.
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              We create posters and print materials that stop the scroll and turn heads on the street. Bold typography, striking imagery, and impeccable layout.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Capabilities
              <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
                <li>DIGITAL & PRINT POSTERS</li>
                <li>EVENT MARKETING</li>
                <li>OUT OF HOME (OOH)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">Campaign Styles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTERS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-zinc-900 rounded-[2rem] border border-white/10 flex items-center justify-center p-8 relative overflow-hidden mb-4">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-full h-full border border-white/20 rounded-xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 bg-black/50 backdrop-blur-sm">
                   <span className="font-mono text-xs tracking-widest uppercase opacity-50">Artwork {item.id}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              Initiate
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9]">
              Start the campaign.
            </h2>
          </div>
          <div className="relative z-10">
            <a
              href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
            >
              Initiate Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
