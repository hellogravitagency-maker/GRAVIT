import { Link } from 'react-router-dom';
import { TextHoverEffect } from './ui/text-hover-effect';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent text-white overflow-hidden border-t border-white/5 pt-24 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              Got a project? <br />
              <span className="text-white/40">Let's build the future.</span>
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
              Initiate Sequence
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="flex flex-col gap-8 md:text-right">
            <div>
              <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Location</span>
              <p className="text-lg text-white/80">Kurnool, AP [IN]<br />Remote Global</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Direct Line</span>
              <a href="mailto:hellogravit.agency@gmail.com" className="text-lg text-white/80 hover:text-white transition-colors relative group inline-block">
                hellogravit.agency@gmail.com
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-right md:origin-right"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 border-t border-white/10 pt-16">
          <div className="col-span-2 md:col-span-2 pr-8">
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Mission</h4>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              We are a digital engineering studio focused on building premium web experiences, interactive 3D environments, and robust scalable applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors relative group inline-block">Home<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/agency" className="text-white/70 hover:text-white transition-colors relative group inline-block">Agency<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors relative group inline-block">Services<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/work" className="text-white/70 hover:text-white transition-colors relative group inline-block">Work<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Socials</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="relative">X / Twitter<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="relative">LinkedIn<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="relative">GitHub<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.967 2.166 6.406 2.166 1.373 0 2.68-.236 3.89-.615zm-11.642-2.78c.2-.407 2.28-4.22 8.44-6.398-1.14-2.14-2.44-4.14-3.81-5.91-5.58 1.48-8.64 4.25-8.87 4.47 0 1.242.27 2.422.75 3.5.12.28.32.74.88 1.5l-.39 2.83zm.18-12.01c.23-.22 3.12-2.82 8.43-4.16-1.07-.3-2.22-.47-3.41-.47-3.81 0-7.13 1.83-9.26 4.67zM12 1.575c1.45 0 2.83.33 4.09.91-1.34 1.73-2.6 3.65-3.71 5.72-3.1-1.42-6.1-2.52-8.59-3.23 2.1-2.07 4.96-3.4 8.21-3.4zm5.55 1.58c3.27 1.92 5.51 5.3 5.86 9.17-.4-.14-3.35-1.12-6.73-.55-1.01-2.73-2.21-5.46-3.56-8.06 1.77-.32 3.25-.43 4.43-.56z"/></svg>
                  <span className="relative">Dribbble<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors relative group inline-block">Pricing<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors relative group inline-block">Privacy Policy<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white transition-colors relative group inline-block">Terms of Service<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/refund-policy" className="text-white/70 hover:text-white transition-colors relative group inline-block">Refund Policy<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
            </ul>
          </div>
        </div>

        {/* Massive Logo Typography */}
        <div className="w-full flex justify-center overflow-hidden mb-8 h-[20vh] md:h-[40vh] items-center">
          <TextHoverEffect text="GRAVIT" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-white/30 text-[10px] uppercase tracking-widest font-mono">
          <div>&copy; {new Date().getFullYear()} GRAVIT STUDIO. ALL SYSTEMS NOMINAL.</div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Designed for the Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
