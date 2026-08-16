import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../lib/seo';

export default function Services() {
  const serviceList = [
    { slug: 'web-development', num: '01', discipline: 'Architecture' },
    { slug: 'web-design', num: '02', discipline: 'Design Systems' },
    { slug: 'ui-ux-design', num: '03', discipline: 'Interface Engineering' },
    { slug: '3d-web-experiences', num: '04', discipline: 'Spatial Computing' },
    { slug: 'web-applications', num: '05', discipline: 'Full-Stack Platforms' },
  ].map((item) => ({
    ...item,
    ...siteConfig.services[item.slug],
  }));

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
  ];

  return (
    <div className="w-full bg-transparent text-primary font-sans min-h-screen">
      <SEO
        title="Services & Capabilities | GRAVIT®"
        description="Our core engineering disciplines: web development, design systems, UI/UX, 3D WebGL, and full-stack application platforms."
        path="/services"
        jsonLd={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* 01: HERO — No 3D. No blobs. Typography is the design. */}
      <section className="pt-40 pb-16 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border pb-16">
          <div className="md:col-span-12">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6">
              01 / Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[120px] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              WHAT<br />WE BUILD.
            </h1>
          </div>
          <div className="md:col-span-7 lg:col-span-5">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
              Five engineering disciplines. Each one precise. None of them templates.
            </p>
          </div>
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary border-t border-border pt-4">
              Based in Bangalore, KA · Remote Global
              <ul className="mt-4 flex flex-col gap-2 font-sans font-bold text-primary">
                <li>SWISS DESIGN</li>
                <li>SYSTEMS ENGINEERING</li>
                <li>ZERO TEMPLATES</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02: SERVICE LIST — Flat, typographic, scannable */}
      <section id="services" className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto pb-32">
        <div className="flex flex-col">
          {serviceList.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group grid grid-cols-12 gap-6 items-start border-b border-border py-12 hover:bg-primary/[0.02] transition-colors -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12"
            >
              {/* Index */}
              <div className="col-span-1 text-xs font-mono text-secondary pt-2 group-hover:text-primary transition-colors">
                {service.num}
              </div>

              {/* Title + discipline */}
              <div className="col-span-11 md:col-span-4">
                <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-3">
                  {service.discipline}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div className="col-span-11 md:col-span-5 col-start-2 md:col-start-auto">
                <p className="text-secondary text-base leading-relaxed">
                  {service.shortDesc}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono uppercase tracking-wider text-secondary border border-border px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="col-span-1 md:col-span-2 hidden md:flex items-start justify-end pt-2">
                <span className="text-primary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-lg">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 03: PROCESS + INSIGHTS — clean two-column, no dark cards */}
      <section className="py-24 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-12 md:p-16">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">
              Methodology
            </span>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
              OUR PROCESS.
            </h3>
            <p className="text-secondary leading-relaxed mb-10 max-w-md">
              Discovery → Architecture → Build → Test → Deploy → Monitor.
              Six phases. No surprises. Every milestone signed off before the next begins.
            </p>
            <Link
              to="/process"
              className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors inline-flex items-center gap-2"
            >
              View the Process →
            </Link>
          </div>
          <div className="bg-surface p-12 md:p-16">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">
              The Lab
            </span>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
              ENGINEERING NOTES.
            </h3>
            <p className="text-secondary leading-relaxed mb-10 max-w-md">
              Performance analysis, architectural patterns, and technical writing from the studio.
              No fluff. Written by engineers, for engineers.
            </p>
            <Link
              to="/insights"
              className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors inline-flex items-center gap-2"
            >
              Read the Notes →
            </Link>
          </div>
        </div>
      </section>

      {/* 04: CTA */}
      <section className="py-32 md:py-48 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-8">
              Ready
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85]">
              BRIEF<br />THE STUDIO.
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end pb-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-background px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors w-full md:w-auto"
            >
              Start a Project →
            </Link>
            <a
              href="mailto:hello@gravit.agency"
              className="inline-flex items-center justify-center border border-border px-10 py-5 text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors w-full md:w-auto text-secondary hover:text-primary"
            >
              hello@gravit.agency
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
