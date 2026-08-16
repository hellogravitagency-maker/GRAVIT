import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from './SEO';
import { generateBreadcrumbSchema } from '../lib/seo';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture",
      desc: "We don't guess. We map the entire system before writing a single line of code. This phase defines the data models, routing structure, and component hierarchies."
    },
    {
      number: "02",
      title: "Editorial Design",
      desc: "Moving beyond wireframes, we establish the visual system. We prioritize typography, grid constraints, and macro-layout to create an interface that is both beautiful and functional."
    },
    {
      number: "03",
      title: "System Engineering",
      desc: "The core build phase. We implement the frontend in React/Vite, wire up the CMS/Database, and ensure the entire platform adheres to strict type safety and performance benchmarks."
    },
    {
      number: "04",
      title: "Performance & QA",
      desc: "Every component is stress-tested. We audit for accessibility (WCAG), validate SEO canonicals, and optimize asset delivery to ensure sub-100ms interaction times."
    },
    {
      number: "05",
      title: "Deployment & Scaling",
      desc: "The product goes live. We configure the CI/CD pipelines, set up global CDN distribution, and establish server-side observability for ongoing monitoring."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Process", item: "/process" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <div className="w-full bg-transparent text-primary selection:bg-primary selection:text-background min-h-screen pt-32 pb-24 font-sans">
      <SEO 
        title="The Process | GRAVIT®" 
        description="Learn about GRAVIT's rigorous 5-step engineering methodology: Discovery, Design, Engineering, QA, and Deployment." 
        path="/process"
        jsonLd={breadcrumbSchema}
      />

      {/* 01: HERO */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border pb-12">
          <div className="md:col-span-12">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary block mb-6">
              02 / The Methodology
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
              RIGOROUS<br />EXECUTION.
            </h1>
          </div>
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              Great digital products are not built by accident. They are the result of a disciplined, repeatable engineering workflow designed to eliminate risk and maximize performance.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-end">
             <div className="font-mono text-xs uppercase tracking-widest text-secondary border-t border-border pt-4">
              Timeline
              <ul className="mt-4 flex flex-col gap-2 font-sans font-bold">
                <li>4 - 12 WEEKS</li>
                <li>PHASE-GATED</li>
                <li>MILESTONE DRIVEN</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02: THE STEPS */}
      <section className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto pb-32">
        <div className="border-t border-border">
          {steps.map((step, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 md:py-24 border-b border-border">
              <div className="md:col-span-2">
                <span className="text-5xl md:text-7xl font-bold tracking-tighter text-border">
                  {step.number}
                </span>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none mb-6">
                  {step.title}
                </h2>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-xl text-secondary leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03: CTA */}
      <section className="py-32 px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto mt-12 flex flex-col items-center justify-center text-center border-t border-border">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-8">
          READY TO START?
        </h2>
        <p className="text-secondary max-w-2xl mb-12 text-lg">
          We are currently accepting projects for Q4. Review our capabilities or start a conversation about your technical requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-background px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
            INITIATE PROJECT
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center bg-surface border border-border text-primary px-12 py-5 text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors">
            VIEW SERVICES
          </Link>
        </div>
      </section>

    </div>
  );
}
