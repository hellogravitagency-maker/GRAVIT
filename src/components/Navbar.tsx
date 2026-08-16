import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const PRODUCTS = {
  Website: [
    { label: 'Websites', href: '/websites' },
    { label: 'Website Templates', href: '/website-templates' },
    { label: 'AI Website Builder', href: '/ai-builder' },
    { label: 'Design Intelligence', href: '/design-intelligence' },
    { label: 'Ecommerce', href: '/ecommerce' },
    { label: 'Portfolios', href: '/portfolios' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Analytics', href: '/analytics' },
  ],
  Business: [
    { label: 'Services', href: '/services' },
    { label: 'Online Stores', href: '/online-stores' },
    { label: 'Invoicing', href: '/invoicing' },
    { label: 'Scheduling', href: '/scheduling' },
    { label: 'Limited Releases', href: '/limited-releases' },
    { label: 'Content & Memberships', href: '/content-memberships' },
    { label: 'Donations', href: '/donations' },
    { label: 'Financial Solutions', href: '/financial-solutions' },
    { label: 'Marketing', href: '/business-marketing' },
  ],
  Marketing: [
    { label: 'Email Campaigns', href: '/email-campaigns' },
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'AI Visibility', href: '/ai-visibility' },
    { label: 'Free Tools', href: '/free-tools' },
  ],
  Tools: [
    { label: 'Domain Search', href: '/domain-search' },
    { label: 'Domain Transfer', href: '/domain-transfer' },
    { label: 'Business Email', href: '/business-email' },
    { label: 'View All Features', href: '/features' },
  ]
};

const AUDIENCE = [
  { label: 'GRAVIT® Enterprise', desc: 'Our most advanced features, lowest processing rates, and priority support', href: '/solutions/enterprise' },
  { label: 'GRAVIT® for Pros', desc: 'Powerful enough for pros, easy enough for clients', href: '/solutions/agencies' },
  { label: 'Circle', desc: 'The partner program for freelancers and agencies', href: '/solutions/professional-services' }
];

const SOLUTIONS = [
  { label: 'Creative Services', href: '/solutions/creative-services' },
  { label: 'Professional Services', href: '/solutions/professional-services' },
  { label: 'Education & Training', href: '/solutions/education-training' },
  { label: 'Beauty', href: '/solutions/beauty' },
  { label: 'Sports & Fitness', href: '/solutions/sports-fitness' },
  { label: 'Health & Wellness', href: '/solutions/health-wellness' },
  { label: 'Home Services', href: '/solutions/home-services' },
  { label: 'Events & Experiences', href: '/solutions/events-experiences' },
  { label: 'Charities & Nonprofits', href: '/solutions/charities-nonprofits' },
  { label: 'Personal', href: '/solutions/personal' }
];

const RESOURCES = [
  { label: 'Help Center', desc: 'In-depth guides and videos about the platform.', href: '/help-center' },
  { label: 'Forum', desc: 'An online community for GRAVIT users.', href: '/forum' },
  { label: 'Webinars', desc: 'Free online sessions to refine your skills.', href: '/webinars' },
  { label: 'Blog', desc: 'Stories and solutions for the modern entrepreneur.', href: '/blog' },
  { label: 'Hire an Expert', desc: 'Let us find you the perfect Expert.', href: '/hire-an-expert' },
  { label: 'Made with GRAVIT®', desc: 'A collection of inspirational websites.', href: '/showcase' },
  { label: '24/7 Support', desc: 'Direct technical assistance around the clock.', href: '/support' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'platforms' | 'industries' | 'knowledge'>('platforms');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          // Auto-close dropdowns when scrolling down to prevent floating artifacts
          setActiveDropdown(null);
        }
      }
    }
  });

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4"
        >
          <div 
            className="pointer-events-auto relative flex items-center justify-between w-full max-w-[1200px] bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 font-sans"
          onMouseLeave={handleMouseLeave}
        >
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => { closeAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Logo className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-primary font-sans font-bold tracking-tight text-base md:text-lg">GRAVIT®</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (Simpler & Clean Names) */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {/* Platforms Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('platforms')}>
              <button className={`flex items-center gap-1 px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${activeDropdown === 'platforms' ? 'text-primary bg-primary/5' : 'text-primary/70 hover:text-primary hover:bg-primary/5'}`}>
                Platforms
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeDropdown === 'platforms' ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('industries')}>
              <button className={`flex items-center gap-1 px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${activeDropdown === 'industries' ? 'text-primary bg-primary/5' : 'text-primary/70 hover:text-primary hover:bg-primary/5'}`}>
                Industries
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Knowledge Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('knowledge')}>
              <button className={`flex items-center gap-1 px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${activeDropdown === 'knowledge' ? 'text-primary bg-primary/5' : 'text-primary/70 hover:text-primary hover:bg-primary/5'}`}>
                Knowledge
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${activeDropdown === 'knowledge' ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Right: CTA & Theme Toggle */}
          <div className="flex items-center justify-end gap-3 md:gap-4">
            <div className="hidden sm:block">
              <AnimatedThemeToggler />
            </div>
            <Link to="/contact" onClick={closeAll} className="bg-primary text-background px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold rounded-[100px] hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap">
              Get started
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

          {/* --- DESKTOP DROPDOWNS --- */}
          <AnimatePresence>
            {activeDropdown === 'platforms' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={() => handleMouseEnter('platforms')}
                onMouseLeave={handleMouseLeave}
                className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-[900px] bg-surface/95 backdrop-blur-2xl border border-border rounded-[24px] shadow-2xl p-8 origin-top pointer-events-auto"
              >
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-4 font-mono">Website</h4>
                    <ul className="flex flex-col gap-2.5">
                      {PRODUCTS.Website.map((link) => (
                        <li key={link.label}>
                          <Link to={link.href} onClick={closeAll} className="text-xs text-primary/70 hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-4 font-mono">Business</h4>
                    <ul className="flex flex-col gap-2.5">
                      {PRODUCTS.Business.map((link) => (
                        <li key={link.label}>
                          <Link to={link.href} onClick={closeAll} className="text-xs text-primary/70 hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-4 font-mono">Marketing Tools</h4>
                    <ul className="flex flex-col gap-2.5">
                      {PRODUCTS.Marketing.map((link) => (
                        <li key={link.label}>
                          <Link to={link.href} onClick={closeAll} className="text-xs text-primary/70 hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-4 font-mono">Business Tools</h4>
                    <ul className="flex flex-col gap-2.5">
                      {PRODUCTS.Tools.map((link) => (
                        <li key={link.label}>
                          <Link to={link.href} onClick={closeAll} className="text-xs text-primary/70 hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-6">
                  {AUDIENCE.map((item) => (
                    <Link key={item.label} to={item.href} onClick={closeAll} className="group block p-3 rounded-xl hover:bg-primary/5 transition-colors">
                      <h5 className="text-primary text-xs font-bold mb-1 flex items-center justify-between">
                        {item.label}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary/40">→</span>
                      </h5>
                      <p className="text-primary/60 text-[11px] leading-relaxed">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {activeDropdown === 'industries' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
                className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-[650px] bg-surface/95 backdrop-blur-2xl border border-border rounded-[24px] shadow-2xl p-8 origin-top pointer-events-auto"
              >
                <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-6 font-mono">Solutions for</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {SOLUTIONS.map((link) => (
                    <Link 
                      key={link.label} 
                      to={link.href} 
                      onClick={closeAll}
                      className="text-xs text-primary/70 hover:text-primary hover:bg-primary/5 px-3 py-2 -ml-3 rounded-lg transition-colors flex items-center justify-between group"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link to="/solutions" onClick={closeAll} className="text-xs font-bold text-primary hover:text-primary/70 transition-colors flex items-center gap-2 font-mono uppercase tracking-wider">
                    Explore all solutions <span className="text-primary/50">→</span>
                  </Link>
                </div>
              </motion.div>
            )}

            {activeDropdown === 'knowledge' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={() => handleMouseEnter('knowledge')}
                onMouseLeave={handleMouseLeave}
                className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-[700px] bg-surface/95 backdrop-blur-2xl border border-border rounded-[24px] shadow-2xl p-8 origin-top pointer-events-auto"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-6 font-mono">24/7 Support & Resources</h4>
                    <div className="flex flex-col gap-2">
                      {RESOURCES.slice(0, 5).map((link) => (
                        <Link 
                          key={link.label} 
                          to={link.href} 
                          onClick={closeAll}
                          className="group block p-3 -ml-3 rounded-xl hover:bg-primary/5 transition-colors"
                        >
                          <h5 className="text-primary text-xs font-bold mb-1">{link.label}</h5>
                          <p className="text-primary/60 text-[11px] leading-relaxed">{link.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-primary/50 text-xs font-bold uppercase tracking-wider mb-6 font-mono">Get Inspired</h4>
                    <Link 
                      to="/showcase" 
                      onClick={closeAll}
                      className="group block p-3 -ml-3 rounded-xl hover:bg-primary/5 transition-colors mb-6"
                    >
                      <h5 className="text-primary text-xs font-bold mb-1">Made with GRAVIT®</h5>
                      <p className="text-primary/60 text-[11px] leading-relaxed">A collection of inspirational websites and digital platforms.</p>
                    </Link>
                    
                    <Link to="/showcase" onClick={closeAll} className="block w-full aspect-video rounded-xl bg-primary/5 border border-border flex items-center justify-center overflow-hidden relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                      <span className="relative z-10 text-xs font-bold tracking-widest uppercase text-primary/70 group-hover:text-primary transition-colors font-mono">View Showcase →</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </motion.div>
      </AnimatePresence>

      {/* --- REDESIGNED PREMIUM TYPOGRAPHY MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-3xl z-[150] flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-border/50 shrink-0">
              <Link to="/" onClick={closeAll} className="flex items-center gap-2">
                <Logo className="w-6 h-6 text-primary" />
                <span className="text-primary font-bold text-xl tracking-tight">GRAVIT®</span>
              </Link>
              <div className="flex items-center gap-4">
                <AnimatedThemeToggler />
                <button 
                  onClick={closeAll}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-primary hover:bg-primary/5 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Massive Typography Navigation */}
            <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-6 my-6 sm:my-8">
              {[
                { label: 'HOME', href: '/' },
                { label: 'ABOUT', href: '/about' },
                { label: 'SERVICES', href: '/services' },
                { label: 'SHOWCASE', href: '/showcase' },
                { label: 'CONTACT', href: '/contact' }
              ].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    to={link.href} 
                    onClick={closeAll}
                    className="group flex items-baseline gap-3 sm:gap-4"
                  >
                    <span className="text-xs sm:text-sm font-mono text-primary/40 font-light">0{i + 1}</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-primary group-hover:text-primary/70 transition-colors uppercase">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-8 border-t border-border/50 flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact" onClick={closeAll} className="p-4 bg-primary text-background text-xs font-bold uppercase tracking-widest text-center rounded-xl hover:scale-[1.02] transition-transform">
                  Start Project
                </Link>
                <a href="mailto:hello@gravit.com" className="p-4 bg-surface border border-border text-primary text-xs font-bold uppercase tracking-widest text-center rounded-xl hover:bg-primary/5 transition-colors">
                  Email Us
                </a>
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-secondary uppercase font-mono tracking-widest">
                <span>● SYSTEMS OPERATIONAL</span>
                <span>©2026 GRAVIT</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
