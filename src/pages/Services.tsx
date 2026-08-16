import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PageHero, SectionLayout, PremiumCard } from '../components/ui/LayoutElements';

const services = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Platforms',
    description: 'High-performance, scalable websites engineered with modern React frameworks (Next.js) and headless architecture.',
    capabilities: ['Corporate Websites', 'Marketing Platforms', 'Editorial Portfolios', 'Headless CMS', 'SEO Architecture']
  },
  {
    id: 'saas-development',
    number: '02',
    title: 'SaaS Architecture',
    description: 'Complex web applications and dashboards with multi-tenant architectures, secure authentication, and robust data layers.',
    capabilities: ['B2B Applications', 'Internal Dashboards', 'Data Visualization', 'Authentication Systems', 'API Development']
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'Digital Commerce',
    description: 'Custom, headless commerce experiences optimized for high conversion rates and lightning-fast global checkouts.',
    capabilities: ['Headless Shopify', 'Custom Checkouts', 'Inventory Sync', 'Subscription Models', 'Payment Gateways']
  },
  {
    id: 'ai-development',
    number: '04',
    title: 'AI Systems',
    description: 'Integrating Large Language Models, autonomous agents, and RAG systems into existing business workflows.',
    capabilities: ['RAG Implementations', 'Autonomous Agents', 'Workflow Automation', 'OpenAI Integration', 'Data Pipelines']
  }
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="w-full bg-transparent text-primary min-h-screen overflow-hidden font-sans">
      <SEO 
        title="Services & Capabilities | GRAVIT®" 
        description="We build digital products, SaaS architectures, and automated systems for companies moving forward." 
        path="/services"
      />
      
      {/* 01: HERO */}
      <PageHero 
        title="CAPABILITIES."
        subtitle="02 / Services"
        className="border-b border-border"
      >
        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-border">
          <div className="md:w-2/3">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              We design and engineer digital systems—from high-conversion marketing platforms to complex SaaS architectures that run entire businesses.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Core Disciplines
              <ul className="mt-4 flex flex-col gap-2 font-sans font-bold text-primary">
                <li>STRATEGY & DESIGN</li>
                <li>FRONTEND ARCHITECTURE</li>
                <li>BACKEND ENGINEERING</li>
              </ul>
            </div>
          </div>
        </div>
      </PageHero>

      {/* 02: THE TECH STACK SHOWCASE */}
      <div className="w-full border-b border-border py-8 bg-surface">
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 lg:px-12 flex flex-wrap gap-4 items-center justify-between font-mono text-sm tracking-widest uppercase text-secondary">
          <span className="text-primary font-bold">Stack //</span>
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>TailwindCSS</span>
          <span>PostgreSQL</span>
          <span>Supabase</span>
          <span>Framer Motion</span>
          <span>Stripe</span>
        </div>
      </div>

      {/* 03: INTERACTIVE LIST */}
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group block border-b border-border py-12 md:py-24 relative overflow-hidden"
            >
              {/* Background Reveal Graphic */}
              <div 
                className={`absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex items-center justify-end pr-24`}
              >
                <div className={`w-96 h-96 border border-primary/20 rotate-45 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700`}></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start md:items-center">
                {/* Number */}
                <div className="md:col-span-1 text-sm font-mono text-secondary">
                  {service.number}
                </div>
                
                {/* Title */}
                <div className="md:col-span-6 lg:col-span-6">
                  <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase group-hover:pl-4 transition-all duration-300">
                    {service.title}
                  </h2>
                </div>
                
                {/* Info (Reveals on Hover on Desktop) */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
                  <p className="text-secondary md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-primary">
                      {service.capabilities.map((cap) => (
                        <li key={cap}>[{cap}]</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 transform group-hover:-rotate-45">
                    &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 04: METHODOLOGY TIMELINE */}
      <SectionLayout className="border-t border-border bg-surface mt-24">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight mb-24 text-center">
          METHODOLOGY.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { phase: "01 / Discovery", desc: "We map the business requirements, user needs, and technical constraints before writing a single line of code." },
            { phase: "02 / Architecture", desc: "Designing the database schemas, API contracts, and UI design systems that will power the application." },
            { phase: "03 / Execution", desc: "Rigorous engineering using type-safe languages and component-driven development." },
            { phase: "04 / Scale", desc: "Performance auditing, SEO optimization, and infrastructure provisioning for global delivery." }
          ].map((step, i) => (
            <div key={i} className="border border-border p-8 bg-background relative overflow-hidden group hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <h3 className="text-xl font-bold font-mono tracking-widest uppercase mb-6">{step.phase}</h3>
              <p className="text-secondary font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* 05: FOOTER CTA */}
      <section className="py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border flex flex-col items-center justify-center text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">Next Step</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight mb-12 max-w-4xl">
          NOT SURE WHICH SOLUTION FITS YOUR PROJECT?
        </h2>
        <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-background px-12 py-6 text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
          SCHEDULE A DISCOVERY CALL
        </Link>
      </section>

    </div>
  );
}
