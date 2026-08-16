import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';
import { PageHero, SectionLayout } from './ui/LayoutElements';

const FAQS = [
  {
    q: "WHAT IS YOUR MINIMUM ENGAGEMENT?",
    a: "Our minimum engagement size is typically $25,000 USD. We partner with teams who view engineering and design as critical business investments rather than mere costs."
  },
  {
    q: "HOW DO YOU HANDLE PROJECT MANAGEMENT?",
    a: "Directly. We don't employ account managers. You will interface directly with the lead engineer and lead designer building your product, ensuring zero signal loss."
  },
  {
    q: "DO YOU TAKE EQUITY IN EXCHANGE FOR SERVICES?",
    a: "On rare occasions. We evaluate equity-based partnerships on a strict case-by-case basis for early-stage ventures with exceptional founding teams."
  }
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="w-full bg-transparent text-primary min-h-screen overflow-hidden font-sans">
      <SEO 
        title="Start a Project | GRAVIT®" 
        description="Contact our engineering team to discuss your next digital product architecture." 
        path="/contact"
      />
      
      {/* 01: HERO */}
      <PageHero 
        title="INITIATE."
        subtitle="04 / Contact"
        className="border-b border-border"
      >
        <div className="flex flex-col md:flex-row gap-12 mt-12 pt-12 border-t border-border">
          <div className="md:w-2/3">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              We take on a strictly limited number of engagements per quarter to maintain the highest standard of engineering and design.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <div className="font-mono text-xs uppercase tracking-widest text-secondary">
              Availability
              <ul className="mt-4 flex flex-col gap-2 font-sans font-bold text-primary">
                <li>ACCEPTING BRIEFS</li>
                <li>Q3-Q4 2026</li>
              </ul>
            </div>
          </div>
        </div>
      </PageHero>

      <div className="px-6 md:px-8 lg:px-12 w-full max-w-[1800px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-24">
          
          {/* Left Column: Locations & FAQs */}
          <div className="lg:col-span-5 flex flex-col gap-24">
            
            {/* Global Offices */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-12">
                GLOBAL<br/>PRESENCE.
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className="border-b border-border pb-8">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4">HQ / Bengaluru</h3>
                  <p className="text-lg font-medium">12.9716° N, 77.5946° E</p>
                  <p className="text-secondary font-light">Indiranagar, Karnataka, India</p>
                </div>
                
                <div className="border-b border-border pb-8">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4">Node / London</h3>
                  <p className="text-lg font-medium">51.5072° N, 0.1276° W</p>
                  <p className="text-secondary font-light">Remote Engineering Hub</p>
                </div>

                <div className="pt-4">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4">Direct Communication</h3>
                  <a href="mailto:hello@gravit.agency" className="text-xl md:text-2xl font-bold hover:text-primary/70 transition-colors underline underline-offset-8 decoration-1 decoration-border">
                    hello@gravit.agency
                  </a>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                FAQ.
              </h2>
              
              <div className="border-t border-border">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-b border-border">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left hover:text-primary/70 transition-colors"
                    >
                      <span className="text-sm font-bold uppercase tracking-widest pr-8">{faq.q}</span>
                      <span className="font-mono text-xl">{openFaq === idx ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-secondary font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Structured Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border p-8 md:p-16 relative overflow-hidden h-full">
              
              {/* Form Success State */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="absolute inset-0 bg-primary text-background flex flex-col items-center justify-center text-center p-8 z-20"
                  >
                    <div className="w-24 h-24 border border-background flex items-center justify-center mb-8 rotate-45">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">TRANSMITTED.</h2>
                    <p className="text-background/80 text-lg max-w-sm font-light">Your brief has been securely transmitted. A lead engineer will respond within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold tracking-tighter uppercase mb-4">Project Briefing</h3>
                  <p className="text-secondary font-light">Please provide initial details regarding your technical requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                    <label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">First Name *</label>
                    <input required type="text" id="firstName" className="w-full bg-transparent text-primary text-xl font-medium outline-none placeholder:text-border" placeholder="JANE" />
                  </div>
                  <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                    <label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Last Name *</label>
                    <input required type="text" id="lastName" className="w-full bg-transparent text-primary text-xl font-medium outline-none placeholder:text-border" placeholder="DOE" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Work Email *</label>
                  <input required type="email" id="email" className="w-full bg-transparent text-primary text-xl font-medium outline-none placeholder:text-border" placeholder="JANE@COMPANY.COM" />
                </div>

                <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                  <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Company Name</label>
                  <input type="text" id="company" className="w-full bg-transparent text-primary text-xl font-medium outline-none placeholder:text-border" placeholder="ACME CORP" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                    <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Project Type *</label>
                    <select required id="projectType" className="w-full bg-transparent text-primary text-base md:text-lg font-medium outline-none appearance-none cursor-pointer">
                      <option value="" disabled selected className="text-secondary">SELECT DOMAIN...</option>
                      <option value="web-dev">Web / Platform Architecture</option>
                      <option value="saas">SaaS Application</option>
                      <option value="ecommerce">E-Commerce Infrastructure</option>
                      <option value="other">Other Engineering</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                    <label htmlFor="budget" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Estimated Budget *</label>
                    <select required id="budget" className="w-full bg-transparent text-primary text-base md:text-lg font-medium outline-none appearance-none cursor-pointer">
                      <option value="" disabled selected className="text-secondary">SELECT RANGE...</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k+">$250,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b border-border pb-2 focus-within:border-primary transition-colors group">
                  <label htmlFor="details" className="font-mono text-xs uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">Project Details</label>
                  <textarea id="details" rows={5} placeholder="TELL US ABOUT YOUR TIMELINE, TECHNICAL CONSTRAINTS, AND CORE OBJECTIVES..." className="w-full bg-transparent text-primary text-lg md:text-xl font-medium outline-none resize-none placeholder:text-border"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-primary text-background font-bold uppercase tracking-widest py-8 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-4"
                >
                  {formState === 'submitting' ? 'TRANSMITTING...' : 'INITIALIZE PROJECT'}
                  <span className={formState === 'submitting' ? 'hidden' : 'block'}>&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
