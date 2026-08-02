import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { HoverBorderGradient } from './components/ui/hover-border-gradient';

import Home from './components/Home';

// Lazy loaded routes for code splitting
const Services = React.lazy(() => import('./components/Services'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const Agency = React.lazy(() => import('./components/Agency'));
const Terms = React.lazy(() => import('./components/Terms'));
const Privacy = React.lazy(() => import('./components/Privacy'));
const RefundPolicy = React.lazy(() => import('./components/RefundPolicy'));
const Article = React.lazy(() => import('./components/Article'));
const Scene3D = React.lazy(() => import('./components/three/Scene3D'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Thoughts = React.lazy(() => import('./components/Thoughts'));
const CaseStudy = React.lazy(() => import('./components/CaseStudy'));

// Delay heavy components until after page load or user interaction
export function DelayedRender({ children, delay = 8000 }: { children: React.ReactNode, delay?: number }) {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const triggerRender = () => {
      setShouldRender(true);
      cleanup();
    };

    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', triggerRender);
      window.removeEventListener('scroll', triggerRender);
      window.removeEventListener('touchstart', triggerRender);
      window.removeEventListener('keydown', triggerRender);
    };

    const startTimer = () => {
      timer = setTimeout(triggerRender, delay);
      
      // Also listen for any interaction to render immediately
      window.addEventListener('mousemove', triggerRender, { once: true });
      window.addEventListener('scroll', triggerRender, { once: true });
      window.addEventListener('touchstart', triggerRender, { once: true });
      window.addEventListener('keydown', triggerRender, { once: true });
    };

    if (document.readyState === 'complete') {
      startTimer();
    } else {
      window.addEventListener('load', startTimer);
      return () => {
        window.removeEventListener('load', startTimer);
        cleanup();
      };
    }
    
    return cleanup;
  }, [delay]);
  
  return shouldRender ? <>{children}</> : null;
}

// Restored Old Components
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Restored Old Components
import StaggeredMenu from './components/StaggeredMenu';
import Magnetic from './components/Magnetic';
import { Logo } from './components/Logo';

function NavMenu() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Agency', href: '/agency' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <nav className="flex items-center gap-2">
      {navItems.map(item => {
        const isActive = location.pathname === item.href;
        
        return (
          <Link 
            key={item.href}
            to={item.href} 
            className={`relative px-4 py-2 rounded-full transition-colors block overflow-hidden ${isActive ? 'text-black bg-white' : 'text-[#71767B] hover:text-white'}`}
          >
            <div className="relative z-10 flex">
              {item.label}
            </div>
          </Link>
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
    // Skip loader for returning users to improve LCP & UX
    if (sessionStorage.getItem('hasSeenLoader')) {
      setIsLoading(false);
      return;
    }

    // Cinematic fade-in loader
    const timer = setTimeout(() => {
      setLoadingText('GRAVIT_');
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const isTextHeavyRoute = ['/terms', '/privacy', '/refund-policy'].includes(location.pathname);

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
      {!isTextHeavyRoute && (
        <DelayedRender delay={3500}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </DelayedRender>
      )}



      {/* Desktop Floating Glass Header */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-8 py-3 items-center gap-12 text-sm pointer-events-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] w-max max-w-[90vw]">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-bold tracking-tighter text-lg hover:text-white/70 transition-colors flex items-center gap-2"
        >
          <Logo className="w-[60px] h-[60px]" />
          GRAVIT_
        </Link>
        <NavMenu />
        <HoverBorderGradient as={Link} to="/contact" containerClassName="ml-2" className="bg-[#050505] text-white flex items-center space-x-2 text-xs font-mono uppercase tracking-widest px-6 py-2">
          <span>Start Project</span>
        </HoverBorderGradient>
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
          { label: 'Pricing', ariaLabel: 'View pricing', link: '/pricing' },
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

      <main className="relative z-10 bg-transparent text-white w-full overflow-x-clip min-h-screen">
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-black"></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/agency" element={<PageTransition><Agency /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/work/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
              <Route path="/thoughts" element={<PageTransition><Thoughts /></PageTransition>} />
              <Route path="/thoughts/:id" element={<PageTransition><Article /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <DelayedRender delay={4000}>
        <Suspense fallback={null}>
          <ChatWidget />
        </Suspense>
      </DelayedRender>
    </SmoothScroll>
    </>
  );
}
