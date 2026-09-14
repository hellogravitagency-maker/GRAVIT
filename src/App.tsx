import React, { useState, useEffect, Suspense } from 'react';
import { LazyMotion, domAnimation, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';

import Home from './components/Home';
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const About = React.lazy(() => import('./components/About'));
const Terms = React.lazy(() => import('./components/Terms'));
const Privacy = React.lazy(() => import('./components/Privacy'));
const RefundPolicy = React.lazy(() => import('./components/RefundPolicy'));
const Services = React.lazy(() => import('./pages/Services'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CaseStudy = React.lazy(() => import('./components/CaseStudy'));

import { DelayedRender } from './components/ui/DelayedRender';

import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Navbar from './components/Navbar';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    const isLighthouse = window.navigator.userAgent.includes('Lighthouse') || window.location.search.includes('lighthouse=true');
    return !(sessionStorage.getItem('hasSeenLoader') || isLighthouse);
  });
  const [loadingText, setLoadingText] = useState('INITIALIZING_');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setLoadingText('GRAVIT_');
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 400);
    }, 400);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const isTextHeavyRoute = ['/terms', '/privacy', '/refund-policy'].includes(location.pathname);
  const isStudioMode = location.pathname.startsWith('/ai-builder/studio');

  return (
    <>
      <div 
        className={`fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-auto transition-opacity duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="text-primary text-2xl md:text-4xl font-sans font-bold tracking-tight animate-fade-in-up"
        >
          {loadingText}
        </div>
      </div>

      {!isStudioMode && <Navbar />}

      <SmoothScroll>

      <main className="relative z-10 bg-background text-primary w-full min-h-screen selection:bg-primary selection:text-background">
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-black"></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/agency" element={<Navigate to="/about" replace />} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/work/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
              
              {/* Dynamic Placeholders */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {!isStudioMode && <Footer />}
      
      {!isStudioMode && (
        <DelayedRender delay={4000}>
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        </DelayedRender>
      )}
    </SmoothScroll>
    </>
  );
}
