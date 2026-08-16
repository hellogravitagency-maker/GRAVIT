import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import SEO from './SEO';
import { generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo';

export default function ServicesDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? siteConfig.services[serviceSlug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-['Outfit',sans-serif]">
        <SEO title="Service Not Found | GRAVIT" description="Requested service could not be found." noindex={true} />
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-white/60 mb-8">The requested service page does not exist.</p>
          <Link to="/services" className="px-6 py-3 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform inline-block">
            Explore All Services
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` }
  ];

  const serviceSchema = generateServiceSchema(service.title, service.fullDesc, `/services/${service.slug}`);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-24 font-['Outfit',sans-serif] relative overflow-hidden">
      <SEO 
        title={`${service.title} Services | GRAVIT`} 
        description={service.shortDesc} 
        path={`/services/${service.slug}`}
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6E7AFF] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center space-x-2 text-xs font-mono tracking-widest text-white/50 uppercase">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li><span>/</span></li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li><span>/</span></li>
            <li className="text-white font-bold" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 max-w-4xl"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase block mb-4">
            [ SERVICE CAPABILITY ]
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            {service.heroHeadline}
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-body leading-relaxed max-w-2xl">
            {service.fullDesc}
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12 border-b border-white/10 pb-6">
            Core Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-[#111115] border border-white/10 rounded-2xl p-8 hover:border-[#6E7AFF]/50 transition-colors">
                <span className="text-[#6E7AFF] text-xs font-mono block mb-4">0{idx + 1}</span>
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <section className="bg-[#0A0A0F] border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-[#ff6a00]">
              Technology Ecosystem
            </h2>
            <ul className="space-y-3 font-mono text-sm text-white/80">
              {service.technologies.map((tech, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ff6a00]" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#0A0A0F] border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-[#6E7AFF]">
              Key Deliverables
            </h2>
            <ul className="space-y-3 font-mono text-sm text-white/80">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6E7AFF]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Related Services Navigation */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <h2 className="text-xl font-bold tracking-tight mb-8 text-white/60 font-mono uppercase text-xs">
            Explore Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(siteConfig.services)
              .filter(s => s.slug !== service.slug)
              .map(s => (
                <Link 
                  key={s.slug} 
                  to={`/services/${s.slug}`}
                  className="block p-6 rounded-2xl bg-[#111115] border border-white/5 hover:border-white/20 transition-all group"
                >
                  <h3 className="text-lg font-bold group-hover:text-[#6E7AFF] transition-colors">{s.title}</h3>
                  <p className="text-white/50 text-xs mt-2 line-clamp-2">{s.shortDesc}</p>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#111] via-[#16161f] to-[#111] border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to build with {service.title}?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-base">
            Let's discuss your technical scope, architecture design, and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Start Project
            </Link>
            <Link 
              to="/work" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
            >
              View Selected Work
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
