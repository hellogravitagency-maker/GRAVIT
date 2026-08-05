import { motion } from 'motion/react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SEO from './SEO';


export default function Contact() {
  return (
    <div className="w-full relative z-10 bg-[#0A0A0F] min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO title="Contact Us" description="Ready to build your own reality? Get in touch with Gravit Agency." />
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Two-column sticky layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32">
          
          {/* Left Column — Sticky Info */}
          <div className="order-1 lg:order-1 relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60 block mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  START A PROJECT
                </span>
                <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] leading-[0.95] text-white">
                  Let's Discuss Your<br className="hidden md:block" /> Objectives.
                </h1>
                <p className="text-base md:text-lg text-white/60 max-w-xl mt-6">
                  Provide an overview of your project requirements. Our team will review your needs and respond within 24 hours.
                </p>
              </motion.div>
              
              <div className="hidden lg:block">
                <ContactInfo />
              </div>
            </div>
          </div>

          {/* Right Column — Scrollable Contact Form */}
          <motion.div 
            className="order-2 lg:order-2 pb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </motion.div>
          
          {/* Mobile Info (shows below form on small screens) */}
          <div className="order-3 lg:hidden mt-8 border-t border-white/10 pt-16">
            <ContactInfo />
          </div>
          
        </div>
      </div>
    </div>
  );
}
