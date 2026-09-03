import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Monitor, TrendingUp, Paintbrush, Code, Briefcase, Mail, BarChart, Grid } from 'lucide-react';

const PRODUCTS_LINKS = {
  Web: {
    icon: Monitor,
    desc: 'Digital storefronts',
    links: [
      { label: 'Websites', href: '/websites' },
      { label: 'Website Templates', href: '/templates' },
      { label: 'AI Website Builder', href: '/ai-builder' },
      { label: 'Design Intelligence', href: '/design-intelligence' },
    ]
  },
  Commerce: {
    icon: Briefcase,
    desc: 'Sell online',
    links: [
      { label: 'Ecommerce', href: '/ecommerce' },
      { label: 'Portfolios', href: '/portfolios' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Analytics', href: '/analytics' },
    ]
  }
};

const BUSINESS_LINKS = {
  Tools: {
    icon: Code,
    desc: 'Operations',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Invoicing', href: '/invoicing' },
      { label: 'Scheduling', href: '/scheduling' },
    ]
  },
  Growth: {
    icon: TrendingUp,
    desc: 'Revenue',
    links: [
      { label: 'Donations', href: '/donations' },
      { label: 'Financial Solutions', href: '/financial-solutions' },
    ]
  }
};

const MARKETING_LINKS = {
  Growth: {
    icon: BarChart,
    desc: 'Visibility',
    links: [
      { label: 'Marketing Tools', href: '/marketing-tools' },
      { label: 'SEO Tools', href: '/seo' },
    ]
  },
  Domains: {
    icon: Grid,
    desc: 'Presence',
    links: [
      { label: 'Domain Search', href: '/domain-search' },
      { label: 'Business Email', href: '/business-email' },
    ]
  }
};

const EXPLORE_LINKS = {
  Creative: {
    icon: Paintbrush,
    desc: 'Specialized',
    links: [
      { label: 'Logo Design', href: '/logo-design' },
      { label: 'Poster Design', href: '/poster-design' },
      { label: 'Creative Services', href: '/services' },
      { label: 'Professional Services', href: '/services' },
    ]
  },
  Resources: {
    icon: Mail,
    desc: 'Learn & Connect',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Webinars & Forum', href: '/forum' },
      { label: 'Blog', href: '/blog' },
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02, staggerDirection: -1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: 5 }
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Small delay to animate in the nav bar on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      if (!mobileMenuOpen) setIsVisible(false);
    } else {
      setIsVisible(true);
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
    setTimeout(() => setExpandedSection(null), 300);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:max-w-4xl lg:mx-auto rounded-full p-[1px] shadow-2xl shadow-black/50 ${mobileMenuOpen ? 'z-[160]' : 'z-50'}`}
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0) 100%)'
            }}
            id="navbar"
            onMouseLeave={handleMouseLeave}
          >
            {/* Inner Glass Surface */}
            <div className="relative z-10 w-full bg-background/60 backdrop-blur-3xl rounded-full flex items-center justify-between px-6 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_inset_0_-1px_1.5px_rgba(0,0,0,0.5)] border border-white/5">
              {/* Left: Logo */}
              <Link 
                to="/" 
                className="flex items-center gap-2 shrink-0 group relative" 
                onClick={() => { closeAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <Logo className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
                <span className="text-primary font-bold tracking-tight text-lg uppercase">GRAVIT®</span>
              </Link>

              {/* Center: Desktop Navigation (Absolute Centered) */}
              <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                {['products', 'business', 'marketing', 'explore'].map((item) => (
                  <div key={item} className="relative z-10" onMouseEnter={() => handleMouseEnter(item)}>
                    <button className="flex items-center gap-1.5 py-2 text-[13px] font-semibold tracking-wide text-secondary hover:text-primary transition-colors capitalize">
                      {item}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 opacity-60 ${activeDropdown === item ? 'rotate-180' : ''}`}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Right: CTA & Actions */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden sm:flex items-center border-r border-black/10 dark:border-white/10 pr-3">
                  <AnimatedThemeToggler />
                </div>
                
                <a 
                  href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer" 
                  onClick={closeAll} 
                  className="hidden md:flex items-center justify-center relative p-[1px] rounded-full overflow-hidden group transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-background/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center">
                    <span className="text-[13px] font-bold tracking-wide text-primary">Initiate Project</span>
                  </div>
                </a>

                <div className="flex lg:hidden items-center">
                  <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-10 h-10 relative p-[1px] rounded-full overflow-hidden group transition-transform hover:scale-105 active:scale-95"
                    aria-label="Toggle Menu"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-full h-full bg-background/40 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center text-primary">
                      {mobileMenuOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="12" x2="21" y2="12"></line>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* --- DESKTOP DROPDOWNS --- */}
            <AnimatePresence>
              {['products', 'business', 'marketing', 'explore'].map((menu) => (
                activeDropdown === menu && (
                  <motion.div
                    key={menu}
                    initial={{ opacity: 0, y: 5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 15, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                    className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-max max-w-[800px] min-w-[500px]"
                  >
                    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-2 relative overflow-hidden">
                      <div className="absolute inset-0 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.05)] rounded-2xl pointer-events-none"></div>
                      
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-6 p-6"
                      >
                        {Object.entries(
                          menu === 'products' ? PRODUCTS_LINKS : 
                          menu === 'business' ? BUSINESS_LINKS : 
                          menu === 'marketing' ? MARKETING_LINKS : EXPLORE_LINKS
                        ).map(([category, { icon: Icon, desc, links }]) => (
                          <motion.div key={category} variants={itemVariants} className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center text-primary">
                                <Icon size={16} />
                              </div>
                              <div>
                                <h4 className="text-primary font-bold text-sm tracking-tight">{category}</h4>
                                <p className="text-secondary/80 text-[11px] uppercase tracking-wider font-semibold">{desc}</p>
                              </div>
                            </div>
                            <ul className="flex flex-col mt-2 space-y-1">
                              {links.map((link) => (
                                <li key={link.label}>
                                  <Link 
                                    to={link.href} 
                                    onClick={closeAll} 
                                    className="block px-3 py-1.5 -ml-3 text-sm text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors font-medium"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- HORIZONX STYLE MOBILE MENU (FLOATING CARD) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[140] lg:hidden bg-black/20 backdrop-blur-sm"
              onClick={closeAll}
            />
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[88px] left-4 right-4 z-[150] lg:hidden bg-background rounded-3xl shadow-2xl overflow-hidden max-h-[calc(100vh-100px)] flex flex-col"
            >
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1 no-scrollbar">
                {['products', 'business', 'marketing', 'explore'].map((menuTitle) => (
                  <div key={menuTitle} className="flex flex-col">
                    <button 
                      onClick={() => setExpandedSection(expandedSection === menuTitle ? null : menuTitle)}
                      className="w-full flex items-center justify-between py-4 text-[17px] font-medium tracking-tight text-primary transition-colors capitalize"
                    >
                      {menuTitle}
                      <motion.svg 
                        animate={{ rotate: expandedSection === menuTitle ? 180 : 0 }} 
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-secondary/70"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {expandedSection === menuTitle && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 py-2">
                            {Object.entries(
                              menuTitle === 'products' ? PRODUCTS_LINKS : 
                              menuTitle === 'business' ? BUSINESS_LINKS : 
                              menuTitle === 'marketing' ? MARKETING_LINKS : EXPLORE_LINKS
                            ).map(([category, { links }]) => (
                              <div key={category} className="flex flex-col gap-3 pl-4 border-l-2 border-black/5 dark:border-white/10">
                                {links.map((link) => (
                                  <Link key={link.label} to={link.href} onClick={closeAll} className="text-[15px] font-medium text-secondary hover:text-primary transition-colors">
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Bottom Buttons - Side by Side */}
              <div className="p-6 pt-2 pb-8 flex items-center gap-4 shrink-0 bg-background">
                <a href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer" onClick={closeAll} className="flex-1 flex items-center justify-center py-4 bg-primary text-primary-foreground text-[15px] font-bold rounded-2xl hover:bg-primary/90 transition-colors">
                  Initiate Project
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
