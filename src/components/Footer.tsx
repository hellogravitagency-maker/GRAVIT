import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic
    setEmail('');
  };

  return (
    <footer className="relative z-10 w-full text-primary font-sans pt-20 pb-8 px-4 md:px-8">
      {/* Liquid Glass Outer Container */}
      <div className="max-w-[1200px] mx-auto rounded-[40px] p-[1px] shadow-2xl shadow-black/50"
           style={{
             background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0) 100%)'
           }}>
        
        {/* Inner Glass Surface */}
        <div className="w-full rounded-[39px] bg-background/60 backdrop-blur-3xl px-8 py-12 md:px-16 md:py-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_inset_0_-1px_1.5px_rgba(0,0,0,0.5)] border border-white/5">
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
            
            {/* Brand & Newsletter Column */}
            <div className="flex flex-col max-w-sm gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4 text-primary">
                  GRAVIT
                </h2>
                <p className="text-secondary text-sm leading-relaxed">
                  High-performance digital products and AI systems crafted with care for ambitious teams that love detail.
                </p>
              </div>

              {/* Liquid Glass Newsletter Input */}
              <form onSubmit={handleSubmit} className="relative flex items-center w-full mt-4">
                <div className="w-full rounded-full p-[1px] bg-gradient-to-b from-white/30 to-white/5">
                  <div className="w-full rounded-full bg-background/40 backdrop-blur-md flex items-center pr-1 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email" 
                      required
                      className="w-full bg-transparent border-none outline-none text-primary placeholder:text-muted text-sm px-6 py-3.5"
                    />
                    <button 
                      type="submit"
                      className="group flex-shrink-0 h-9 px-5 bg-primary text-primary-foreground rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 hover:bg-white transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Links Columns */}
            <div className="flex flex-wrap gap-12 md:gap-24">
              
              {/* Col 1 */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] font-semibold mb-2">Navigation</span>
                <Link to="/work" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Work</Link>
                <Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Services</Link>
                <Link to="/about" className="text-secondary hover:text-primary text-sm transition-colors duration-300">About</Link>
                <a href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Initiate Project</a>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] font-semibold mb-2">Services</span>
                <Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Web Development</Link>
                <Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Product Engineering</Link>
                <Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors duration-300">AI Systems</Link>
                <Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors duration-300">UI/UX Design</Link>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-mono text-muted uppercase tracking-[0.1em] font-semibold mb-2">Legal</span>
                <Link to="/privacy" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Privacy Policy</Link>
                <Link to="/terms" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Terms of Service</Link>
                <Link to="/refund-policy" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Refund Policy</Link>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 my-12" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-secondary text-[13px]">
              © {new Date().getFullYear()} GRAVIT. <a href="https://github.com/mthej" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Made by Matt</a>
            </p>

            {/* Social Glass Buttons */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Instagram size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Github size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
