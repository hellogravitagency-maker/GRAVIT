import { Link } from 'react-router-dom';
import { TextHoverEffect } from './ui/text-hover-effect';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-transparent text-white overflow-hidden border-t border-white/5 pt-24 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 font-heading">
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
              <p className="text-lg text-white/80 font-body">Kurnool, AP [IN]<br />Remote Global</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-2 font-mono">Direct Line</span>
              <a href="mailto:hellogravit.agency@gmail.com" className="text-lg text-white/80 hover:text-white transition-colors relative group inline-block font-body">
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
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-body">
              We are a digital engineering studio focused on building premium web experiences, interactive 3D environments, and robust scalable applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium font-body">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors relative group inline-block">Home<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/agency" className="text-white/70 hover:text-white transition-colors relative group inline-block">Agency<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors relative group inline-block">Services<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/work" className="text-white/70 hover:text-white transition-colors relative group inline-block">Work<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Socials</h4>
            <ul className="space-y-4 text-sm font-medium font-body">
              <li>
                <a href="https://x.com/gravit_agency" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="relative">X / Twitter<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/gravit_agency" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="relative">Instagram<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gravit" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                  <span className="relative">Discord<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="relative">GitHub<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-6 font-mono">Support</h4>
            <ul className="space-y-4 text-sm font-medium font-body">
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
