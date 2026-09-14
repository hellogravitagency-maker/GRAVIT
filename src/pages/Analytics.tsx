import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FEATURES = [
  {
    title: 'Real-time Telemetry',
    description: 'Monitor user interactions, page transitions, and API latency with millisecond precision. Zero-impact tracking script.'
  },
  {
    title: 'Conversion Attribution',
    description: 'Map exactly which touchpoints drive revenue. Multi-touch attribution modeling straight out of the box.'
  },
  {
    title: 'Performance Profiling',
    description: 'Core Web Vitals monitoring across all geographical regions and device profiles.'
  },
  {
    title: 'Behavioral Insights',
    description: 'Session replays and heatmaps rendered securely in the cloud to protect user privacy.'
  }
];

export default function Analytics() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="w-full bg-background text-primary min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title="Analytics — GRAVIT" 
        description="Enterprise-grade analytics and telemetry for high-performance platforms." 
        path="/analytics" 
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-white/10">
        <motion.div style={{ y }} className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white" />
            05 / Data & Analytics
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.85] text-primary mb-8">
            Omniscience.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-light text-secondary leading-relaxed">
                Total visibility into how your platform performs. We engineer custom analytics pipelines that turn raw data into strategic leverage.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABSTRACT DATA VIZ REPRESENTATION */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="glass-panel w-full h-[60vh] flex items-end gap-2 p-8 md:p-12">
          {[40, 70, 30, 90, 50, 80, 60, 100, 45, 85].map((height, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 bg-white border border-white/10 opacity-10 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feat, i) => (
            <div key={i} className="glass-panel p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-3xl font-heading font-medium mb-4">{feat.title}</h3>
              <p className="text-secondary font-light leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-32 px-6 md:px-12 w-full max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-16 md:p-24 flex flex-col items-center justify-center text-center gap-12 group">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[0.9] mb-8">
              Stop guessing.
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
            >
              Implement Analytics →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
