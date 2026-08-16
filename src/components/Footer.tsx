import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 md:py-32 px-6 md:px-12 relative z-10 w-full text-primary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Col 1 */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-8 max-w-sm leading-[0.9] uppercase">
              LESS DECORATION.<br />MORE INTENTION.
            </h2>
            <div className="text-sm font-mono text-secondary mb-16">
              DIGITAL PRODUCT STUDIO<br />
              BANGALORE / INDIA
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-span-1 flex flex-col space-y-4">
            <span className="text-xs font-mono text-muted mb-4 uppercase tracking-widest">Navigation</span>
            <Link to="/work" className="text-primary hover:text-accent font-medium text-sm transition-colors">WORK</Link>
            <Link to="/services" className="text-primary hover:text-accent font-medium text-sm transition-colors">SERVICES</Link>
            <Link to="/about" className="text-primary hover:text-accent font-medium text-sm transition-colors">ABOUT</Link>
            <Link to="/contact" className="text-primary hover:text-accent font-medium text-sm transition-colors">CONTACT</Link>
          </div>

          {/* Col 3 */}
          <div className="col-span-1 flex flex-col space-y-4">
            <span className="text-xs font-mono text-muted mb-4 uppercase tracking-widest">Connect</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium text-sm transition-colors">INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium text-sm transition-colors">LINKEDIN</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium text-sm transition-colors">X (TWITTER)</a>
            <a href="mailto:hello@gravit.agency" className="text-primary hover:text-accent font-medium text-sm transition-colors mt-4 block">hello@gravit.agency</a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-muted uppercase tracking-widest gap-6">
          <div className="flex items-center gap-4">
            <span>© 2026 GRAVIT®</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">PRIVACY</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">TERMS</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">COOKIES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
