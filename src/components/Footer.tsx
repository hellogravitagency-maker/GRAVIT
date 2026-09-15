import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.031 2C6.511 2 2.016 6.494 2.016 12.014c0 1.763.459 3.483 1.332 5.001L2 22l5.127-1.344a9.988 9.988 0 004.904 1.272h.004c5.518 0 10.014-4.494 10.014-10.014 0-2.673-1.041-5.187-2.932-7.078A9.933 9.933 0 0012.031 2zm0 18.292c-1.503 0-2.975-.404-4.258-1.168l-.306-.182-3.165.83.844-3.084-.199-.317a8.232 8.232 0 01-1.265-4.357c0-4.57 3.719-8.289 8.289-8.289 2.214 0 4.296.862 5.861 2.428 1.565 1.566 2.427 3.648 2.427 5.862 0 4.571-3.719 8.29-8.288 8.29zm4.542-6.202c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.644.81-.789.976-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" />
  </svg>
);

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
                <Link to="/contact" className="text-secondary hover:text-primary text-sm transition-colors duration-300">Initiate Project</Link>
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
              © {new Date().getFullYear()} GRAVIT. <span className="hover:text-primary transition-colors cursor-default">Made by Theja</span>
            </p>

            {/* Social Glass Buttons */}
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/gravit-agency-235943427" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/gravit_agency" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/gravit_agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://discord.com/users/gravit.agency_92986" title="Discord: gravit.agency_92986" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919390009700?text=Hi%20GRAVIT%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (+91 9390009700)" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:text-[#25D366] hover:bg-white/10 hover:border-[#25D366]/40 transition-all duration-300 backdrop-blur-sm">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
