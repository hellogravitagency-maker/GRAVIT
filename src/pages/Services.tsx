import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Monitor, Sparkles, TrendingUp, Paintbrush, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const SERVICES = [
  {
    title: "Web Platforms",
    description: "High-performance digital storefronts engineered for conversion and absolute visual excellence.",
    icon: Monitor,
    href: "/websites"
  },
  {
    title: "AI Integrations",
    description: "Automate workflows and deploy artificial intelligence directly into your core operations.",
    icon: Sparkles,
    href: "/ai-builder"
  },
  {
    title: "Performance Data",
    description: "Real-time, scalable data architecture and tracking to optimize your entire digital footprint.",
    icon: TrendingUp,
    href: "/analytics"
  },
  {
    title: "Design Systems",
    description: "Strategic UI/UX design powered by deep user research, motion logic, and behavioral metrics.",
    icon: Paintbrush,
    href: "/design-intelligence"
  },
  {
    title: "Templates",
    description: "Premium, conversion-optimized starting points for ambitious consumer and B2B brands.",
    icon: Code,
    href: "/templates"
  },
  {
    title: "Custom Engineering",
    description: "Bespoke backend infrastructure and seamless connections across your entire technology stack.",
    icon: Database,
    href: "/contact"
  }
];

export default function Services() {
  return (
    <div className="w-full bg-background text-primary font-sans min-h-screen overflow-x-hidden relative">
      <SEO 
        title="Services — GRAVIT"
        description="Comprehensive digital solutions: Web Design, AI Integration, Analytics, and Performance Engineering."
        path="/services"
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
            02 / Capabilities
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-medium tracking-tight leading-[0.9] text-primary">
            Digital scale.
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-white/10">
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              We don't just build websites. We architect comprehensive digital ecosystems designed to scale, convert, and dominate their respective markets.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Stack
              <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
                <li>REACT / NEXT.JS</li>
                <li>PYTHON / NODE</li>
                <li>WEBGL / GSAP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC BENTO GRID */}
      <section className="relative z-10 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className={`group flex flex-col glass-panel overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl ${
                  i === 0 || i === 3 ? 'md:col-span-8' : 'md:col-span-4'
                }`}
              >
                <div className="w-full h-48 border-b border-white/10 relative overflow-hidden bg-black/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-16 h-16 text-white/10 group-hover:scale-110 group-hover:text-white/20 transition-all duration-700" />
                </div>
                
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-secondary font-light text-base leading-relaxed mb-10 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary">Explore Capability</span>
                    <span className="text-primary transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            )
          })}
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
              Start the build.
            </h2>
          </div>
          <div className="relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-500"
            >
              Initiate Project Engineering →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
