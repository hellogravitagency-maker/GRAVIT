import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import Home from './components/Home';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Agency from './components/Agency';
import PageTransition from './components/PageTransition';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import RefundPolicy from './components/RefundPolicy';

// Restored Old Components
import StaggeredMenu from './components/StaggeredMenu';
import Scene3D from './components/three/Scene3D';
import Magnetic from './components/Magnetic';
import Galaxy from './components/Galaxy';
import { Logo } from './components/Logo';

import { Routes, Route, useLocation, Link } from 'react-router-dom';

function NavMenu() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Agency', href: '/agency' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <nav className="flex items-center gap-2" onMouseLeave={() => setHoveredPath(null)}>
      {navItems.map(item => {
        const isActive = location.pathname === item.href;
        const isHovered = hoveredPath === item.href;
        
        // Split label into characters
        const chars = item.label.split('');
        
        return (
          <Magnetic key={item.href}>
            <Link 
              to={item.href} 
              onMouseEnter={() => setHoveredPath(item.href)}
              className={`relative px-4 py-2 rounded-full transition-colors block overflow-hidden ${isActive ? 'text-black' : 'text-[#71767B]'}`}
            >
              <div className="relative z-10 flex">
                <div className="flex">
                  {chars.map((char, i) => (
                    <motion.span 
                      key={i} 
                      className="inline-block relative"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: isHovered && !isActive ? -20 : 0, opacity: isHovered && !isActive ? 0 : 1 }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.25, 1, 0.5, 1] }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
                
                {/* Cloned letters that stagger in from below */}
                {!isActive && (
                   <div className="absolute inset-0 flex text-white">
                     {chars.map((char, i) => (
                       <motion.span 
                         key={`clone-${i}`} 
                         className="inline-block"
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                         transition={{ duration: 0.3, delay: i * 0.02, ease: [0.25, 1, 0.5, 1] }}
                       >
                         {char === ' ' ? '\u00A0' : char}
                       </motion.span>
                     ))}
                   </div>
                )}
              </div>

              {isActive && (
                <motion.div
                  layoutId="nav-pill-active"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          </Magnetic>
        );
      })}
    </nav>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('INITIALIZING_');
  const location = useLocation();

  useEffect(() => {
    // Cinematic fade-in loader
    const timer = setTimeout(() => {
      setLoadingText('GRAVIT_');
      setTimeout(() => setIsLoading(false), 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const isTextHeavyRoute = ['/pricing', '/terms', '/privacy', '/refund-policy'].includes(location.pathname);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white text-3xl md:text-5xl font-bold tracking-tighter"
            >
              {loadingText}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SmoothScroll>


      {/* Global 3D Interactive Scroll Scene */}
      {!isTextHeavyRoute && <Scene3D />}



      {/* Desktop Floating Glass Header */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-8 py-3 items-center gap-12 text-sm pointer-events-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] w-max max-w-[90vw]">
        <Magnetic>
          <Link to="/" className="text-white font-bold tracking-tighter text-lg hover:text-white/70 transition-colors flex items-center gap-2">
            <Logo className="w-[60px] h-[60px]" />
            GRAVIT_
          </Link>
        </Magnetic>
        <NavMenu />
        <Magnetic>
          <Link to="/contact" className="liquid-glass px-6 py-2 text-white font-medium hover:text-black hover:bg-white transition-colors block">
            Start Project
          </Link>
        </Magnetic>
      </header>

      {/* Mobile Staggered Navigation Menu */}
      <StaggeredMenu
        className="md:hidden"
        position="right"
        items={[
          { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
          { label: 'Agency', ariaLabel: 'About our agency', link: '/agency' },
          { label: 'Services', ariaLabel: 'View our services', link: '/services' },
          { label: 'Work', ariaLabel: 'View our work', link: '/work' },
          { label: 'Pricing', ariaLabel: 'View our pricing', link: '/pricing' },
          { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
        ]}
        socialItems={[
          { label: 'Twitter', link: 'https://twitter.com' },
          { label: 'GitHub', link: 'https://github.com' },
          { label: 'LinkedIn', link: 'https://linkedin.com' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#16181C', '#000000', '#2F3336']}
        logoUrl=""
        accentColor="#FFFFFF"
        isFixed={true}
      />

      <main className="relative z-10 bg-transparent text-white w-full overflow-x-clip min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/agency" element={<PageTransition><Agency /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
            <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroll>
    </>
  );
}
