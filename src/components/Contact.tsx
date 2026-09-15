import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MapPin, Globe2, ChevronDown } from 'lucide-react';
import SEO from './SEO';
import ContactForm from './contact/ContactForm';

const FAQS = [
  {
    q: "What is your minimum engagement?",
    a: "Our minimum engagement size is typically $25,000 USD. We partner with teams who view engineering and design as critical business investments rather than mere costs."
  },
  {
    q: "How do you handle project management?",
    a: "Directly. We don't employ account managers. You will interface directly with the lead engineer and lead designer building your product, ensuring zero signal loss."
  },
  {
    q: "Do you take equity in exchange for services?",
    a: "On rare occasions. We evaluate equity-based partnerships on a strict case-by-case basis for early-stage ventures with exceptional founding teams."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-background text-primary min-h-screen overflow-hidden font-sans relative">
      <SEO 
        title="Start a Project | GRAVIT®" 
        description="Contact our engineering team to discuss your next digital product architecture." 
        path="/contact"
      />

      {/* 01: HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-36 w-full max-w-7xl mx-auto border-b border-border/40">
        <motion.div style={{ y: yHero }} className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mb-8 inline-flex items-center gap-4 bg-primary/5 px-4 py-2 rounded-full border border-border">
            <span className="w-2 h-2 rounded-full bg-primary" />
            04 / Contact
          </div>
          <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-heading font-medium tracking-tight leading-[0.85] text-primary">
            <span className="text-gradient-accent pb-4 inline-block">Initiate.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-12 pt-12 border-t border-border/40"
        >
          <div className="md:w-2/3 lg:w-1/2">
            <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light">
              We take on a strictly limited number of engagements per quarter to maintain the highest standard of engineering and design.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end lg:items-end">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
              Availability
              <ul className="mt-4 flex flex-col gap-2 font-sans font-medium text-primary">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500/50 border border-green-400 animate-pulse" /> ACCEPTING BRIEFS</li>
                <li className="text-secondary">Q3-Q4 2026</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-24">
          
          {/* Left Column: Locations & FAQs */}
          <div className="lg:col-span-5 flex flex-col gap-24">
            
            {/* Global Offices */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-[1.1] mb-12 flex items-center gap-4">
                Global<br/>Presence.
                <Globe2 className="w-8 h-8 text-primary/20" />
              </h2>
              
              <div className="flex flex-col gap-8">
                <div className="border-b border-border/40 pb-8 group">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> HQ / Bengaluru
                  </h3>
                  <p className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">12.9716° N, 77.5946° E</p>
                  <p className="text-secondary font-light mt-1">Indiranagar, Karnataka, India</p>
                </div>
                
                <div className="border-b border-border/40 pb-8 group">
                  <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-4 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Node / London
                  </h3>
                  <p className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">51.5072° N, 0.1276° W</p>
                  <p className="text-secondary font-light mt-1">Remote Engineering Hub</p>
                </div>

                <div className="pt-4 glass-panel p-8 rounded-3xl mt-4 flex flex-col gap-5">
                  <div>
                    <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-3">Direct Email</h3>
                    <a href="mailto:hello@gravit.agency" className="text-xl md:text-2xl font-medium hover:text-secondary transition-colors underline underline-offset-8 decoration-1 decoration-primary/20 hover:decoration-primary/50 block">
                      hello@gravit.agency
                    </a>
                  </div>
                  <div className="pt-3 border-t border-border/30">
                    <h3 className="font-mono text-xs tracking-widest uppercase text-secondary mb-3">WhatsApp Direct</h3>
                    <a 
                      href="https://wa.me/919390009700?text=Hi%20GRAVIT%2C%20I%20would%20like%20to%20discuss%20a%20project." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2.5 text-lg font-medium text-[#25D366] hover:text-[#20ba5a] transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M12.031 2C6.511 2 2.016 6.494 2.016 12.014c0 1.763.459 3.483 1.332 5.001L2 22l5.127-1.344a9.988 9.988 0 004.904 1.272h.004c5.518 0 10.014-4.494 10.014-10.014 0-2.673-1.041-5.187-2.932-7.078A9.933 9.933 0 0012.031 2zm0 18.292c-1.503 0-2.975-.404-4.258-1.168l-.306-.182-3.165.83.844-3.084-.199-.317a8.232 8.232 0 01-1.265-4.357c0-4.57 3.719-8.289 8.289-8.289 2.214 0 4.296.862 5.861 2.428 1.565 1.566 2.427 3.648 2.427 5.862 0 4.571-3.719 8.29-8.288 8.29zm4.542-6.202c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.644.81-.789.976-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" />
                        </svg>
                      </span>
                      <span>+91 9390009700</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs - Glassmorphic Accordion */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-8">
                FAQ.
              </h2>
              
              <div className="flex flex-col gap-4">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl overflow-hidden transition-colors hover:border-border">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-6 px-8 flex items-center justify-between text-left cursor-pointer"
                    >
                      <span className="text-base font-medium tracking-wide pr-8 text-primary">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-8 pb-8 text-secondary font-light leading-relaxed">
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

          {/* Right Column: Structured Form - Premium Glass */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden h-full shadow-2xl">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
