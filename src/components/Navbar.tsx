import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY > lastY && currentY > 150) {
            if (!mobileMenuOpen) setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const closeAll = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:max-w-4xl lg:mx-auto rounded-full p-[1px] shadow-2xl shadow-black/50 transition-all duration-300 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'
        } ${mobileMenuOpen ? 'z-[160]' : 'z-50'}`}
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0) 100%)'
        }}
        id="navbar"
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
            {NAV_LINKS.map((item) => {
              const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href);
              return (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className={`flex items-center gap-1.5 py-2 text-[13px] font-semibold tracking-wide transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA & Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center border-r border-black/10 dark:border-white/10 pr-2 md:pr-3">
              <AnimatedThemeToggler />
            </div>
            
            <Link 
              to="/contact" 
              onClick={closeAll} 
              className="hidden md:flex items-center justify-center relative p-[1px] rounded-full overflow-hidden group transition-transform hover:scale-105 active:scale-95 shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-background/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center">
                <span className="text-[13px] font-bold tracking-wide text-primary">Initiate Project</span>
              </div>
            </Link>

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
      </nav>

      {/* --- MOBILE MENU (FLOATING CARD) --- */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[140] lg:hidden bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeAll}
      />
      
      {/* Floating Card */}
      <div
        className={`fixed top-[88px] left-4 right-4 z-[150] lg:hidden bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1 no-scrollbar">
          {NAV_LINKS.map((item) => (
            <Link 
              key={item.label}
              to={item.href}
              onClick={closeAll}
              className="w-full flex items-center justify-between py-4 text-[17px] font-medium tracking-tight text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bottom Buttons - Side by Side */}
        <div className="p-6 pt-2 pb-8 flex flex-row items-center justify-between gap-4 shrink-0 bg-background">
          <Link to="/contact" onClick={closeAll} className="flex-1 flex items-center justify-center py-4 bg-primary text-primary-foreground text-[15px] font-bold rounded-2xl hover:bg-primary/90 transition-colors">
            Initiate Project
          </Link>
          <div className="flex items-center justify-center p-3 border border-black/10 dark:border-white/10 rounded-2xl">
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </>
  );
}

