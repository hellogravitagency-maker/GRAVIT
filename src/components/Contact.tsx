import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';


import Magnetic from './Magnetic';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // Submit logic
  };

  return (
    <div className="w-full relative z-10 bg-transparent">

      <section id="contact" className="min-h-screen flex flex-col lg:flex-row pt-24 lg:pt-0">
        
        {/* Left Pane: Editorial Typography */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">
          {/* Subtle animated background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#ffffff]"></div>
              <span className="text-[#ffffff] uppercase tracking-widest text-xs font-mono font-semibold">Start A Project</span>
            </motion.div>
            
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter text-white leading-[0.9] mb-8 uppercase">
              <span className="block overflow-hidden pb-2 -mb-2">
                <motion.span 
                  className="inline-block"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                >
                  Initiate
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2 -mb-2">
                <motion.span 
                  className="inline-block text-gradient-accent"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                  Sequence.
                </motion.span>
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-lg font-light max-w-md leading-loose"
            >
              System ready for input. Describe the parameters of your project, and we'll engineer the solution.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-white/60 flex flex-col sm:flex-row gap-12"
            >
              <div>
                <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Direct Line</span>
                <a href="mailto:hello@gravit.studio" className="text-white text-lg hover:text-[#ffffff] transition-colors relative group inline-block">
                  hello@gravit.studio
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ffffff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
              <div>
                <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Global HQs</span>
                <p className="text-white text-lg leading-relaxed">
                  San Francisco, CA [US]<br />
                  London, UK [EU]<br />
                  Kurnool, AP [IN]
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Pane: Premium Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-lg relative"
          >

            
            <div className="p-8 md:p-12 relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                
                <div className="relative group">
                  <input 
                    {...register('name', { required: true })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-[#ffffff] transition-colors peer placeholder-transparent"
                    placeholder="Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-white/30 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#ffffff] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#ffffff]">
                    Client Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-[#ffffff] transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-white/30 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#ffffff] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#ffffff]">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <select 
                    {...register('budget', { required: true })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-[#ffffff] transition-colors peer appearance-none"
                    id="budget"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">Select Budget Range</option>
                    <option value="15k-30k" className="bg-[#0a0a0a]">$15k - $30k</option>
                    <option value="30k-60k" className="bg-[#0a0a0a]">$30k - $60k</option>
                    <option value="60k-100k" className="bg-[#0a0a0a]">$60k - $100k</option>
                    <option value="100k+" className="bg-[#0a0a0a]">$100k+</option>
                  </select>
                  <label htmlFor="budget" className="absolute left-0 -top-3 text-xs text-[#ffffff] font-mono uppercase tracking-widest transition-all">
                    Budget Allocation
                  </label>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <textarea 
                    {...register('brief', { required: true, maxLength: 500 })}
                    rows={4}
                    className="w-full bg-transparent border border-white/20 rounded-xl p-6 text-white focus:outline-none focus:border-[#ffffff] transition-colors resize-none peer placeholder-transparent"
                    placeholder="Project Brief"
                    id="brief"
                  ></textarea>
                  <label htmlFor="brief" className="absolute left-6 top-10 text-white/30 text-sm transition-all peer-focus:top-1 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#ffffff] peer-focus:font-mono uppercase tracking-widest peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#ffffff] bg-black/80 px-2 rounded-md">
                    Project Parameters
                  </label>
                </div>

                <Magnetic className="w-full block">
                  <button 
                    type="submit"
                    className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-[1.02] hover:bg-[#ffffff] hover:text-white transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
                  >
                    Transmit Data
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Magnetic>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section (Editorial Restyle) */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter sticky top-32">FAQ.</h2>
          </div>
          <div className="md:w-2/3 space-y-0 border-t border-white/10">
            {[
              { q: "What is your typical project timeline?", a: "A standard landing page or brand identity takes 3-4 weeks. A complex web application or 3D experience can take 8-12 weeks from discovery to launch." },
              { q: "Do you work with international clients?", a: "Yes. While we are based in Kurnool, we collaborate with startups and enterprises globally, maintaining clear asynchronous communication." },
              { q: "What technologies do you use?", a: "We specialize in React, Next.js, WebGL, Three.js, Framer Motion, and Tailwind CSS. We use the right tool for the job to ensure maximum performance." },
              { q: "How much does a typical project cost?", a: "Our engagements start at $15,000 for standard web development projects and scale based on complexity, 3D requirements, and backend integration." }
            ].map((faq, i) => (
              <div key={i} className="py-8 border-b border-white/10 group">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#ffffff] transition-colors">{faq.q}</h3>
                <p className="text-white/70 leading-loose text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
