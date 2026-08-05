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
              <span className="text-white/60">Let's build the future.</span>
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
              <span className="text-white/60 text-[10px] uppercase tracking-widest block mb-2 font-mono">Location</span>
              <p className="text-lg text-white/80 font-body">Kurnool, AP [IN]<br />Remote Global</p>
            </div>
            <div>
              <span className="text-white/60 text-[10px] uppercase tracking-widest block mb-2 font-mono">Direct Line</span>
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
            <h3 className="text-white/60 text-[10px] uppercase tracking-widest mb-6 font-mono">Mission</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-body">
              We are a digital engineering studio focused on building premium web experiences, interactive 3D environments, and robust scalable applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-white/60 text-[10px] uppercase tracking-widest mb-6 font-mono">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium font-body">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors relative group inline-block">Home<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/agency" className="text-white/70 hover:text-white transition-colors relative group inline-block">Agency<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors relative group inline-block">Services<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
              <li><Link to="/work" className="text-white/70 hover:text-white transition-colors relative group inline-block">Work<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white/60 text-[10px] uppercase tracking-widest mb-6 font-mono">Socials</h3>
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
                <a href="https://www.linkedin.com/in/gravit-agency-235943427" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="relative">LinkedIn<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@hellogravit.agency" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                  <span className="relative">Medium<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
              <li>
                <a href="https://dev.to/gravitagency" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors group inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-4V8.53h4v1.3zM22.02 8.5h-1.62l-1.4 3.87c-.85 2.4-1.28 3.52-1.36 3.65-.08.13-.13.1-.47-1.12l-1.44-4.04-.15-.36h-1.62l1.62 4.14c.89 2.29 1.63 4.22 1.65 4.3.02.06.1.18.2.26l.16.14.3-.06c.35-.1 1.77-4 1.95-4.32l1.62-4.16z"/></svg>
                  <span className="relative">DEV<span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/60 text-[10px] uppercase tracking-widest mb-6 font-mono">Support</h3>
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-white/60 text-[10px] uppercase tracking-widest font-mono">
          <div>&copy; {new Date().getFullYear()} GRAVIT STUDIO. ALL SYSTEMS NOMINAL.</div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Designed for the Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
