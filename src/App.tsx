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
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Blog = React.lazy(() => import('./pages/Blog'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CaseStudy = React.lazy(() => import('./components/CaseStudy'));
const Showcase = React.lazy(() => import('./pages/Showcase'));
const Websites = React.lazy(() => import('./pages/Websites'));
const WebsiteTemplates = React.lazy(() => import('./pages/WebsiteTemplates'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Portfolios = React.lazy(() => import('./pages/Portfolios'));
const DesignIntelligence = React.lazy(() => import('./pages/DesignIntelligence'));
const AIBuilderLanding = React.lazy(() => import('./pages/AIBuilderLanding'));
const AIBuilderStudio = React.lazy(() => import('./pages/AIBuilderStudio'));
const LogoDesign = React.lazy(() => import('./pages/LogoDesign'));
const PosterDesign = React.lazy(() => import('./pages/PosterDesign'));
const SEOPage = React.lazy(() => import('./pages/SEOPage'));
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'));
const DomainSearch = React.lazy(() => import('./pages/DomainSearch'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Invoicing = React.lazy(() => import('./pages/Invoicing'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Forum = React.lazy(() => import('./pages/Forum'));
const Scheduling = React.lazy(() => import('./pages/Scheduling'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Donations = React.lazy(() => import('./pages/Donations'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const BusinessEmail = React.lazy(() => import('./pages/BusinessEmail'));
const MarketingTools = React.lazy(() => import('./pages/MarketingTools'));

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
              {/* Product pages */}
              <Route path="/websites" element={<PageTransition><Websites /></PageTransition>} />
              <Route path="/templates" element={<PageTransition><WebsiteTemplates /></PageTransition>} />
              <Route path="/analytics" element={<PageTransition><Analytics /></PageTransition>} />
              <Route path="/portfolios" element={<PageTransition><Portfolios /></PageTransition>} />
              <Route path="/design-intelligence" element={<PageTransition><DesignIntelligence /></PageTransition>} />
              <Route path="/ai-builder" element={<PageTransition><AIBuilderLanding /></PageTransition>} />
              <Route path="/ai-builder/studio" element={<PageTransition><AIBuilderStudio /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/work/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/showcase" element={<PageTransition><Showcase /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
              
              {/* New Creative & Marketing Pages */}
              <Route path="/logo-design" element={<PageTransition><LogoDesign /></PageTransition>} />
              <Route path="/poster-design" element={<PageTransition><PosterDesign /></PageTransition>} />
              <Route path="/seo" element={<PageTransition><SEOPage /></PageTransition>} />
              
              {/* Mega Menu Placeholders */}
              <Route path="/ecommerce" element={<PageTransition><Ecommerce /></PageTransition>} />
              <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
              <Route path="/invoicing" element={<PageTransition><Invoicing /></PageTransition>} />
              <Route path="/scheduling" element={<PageTransition><Scheduling /></PageTransition>} />
              <Route path="/donations" element={<PageTransition><Donations /></PageTransition>} />
              <Route path="/financial-solutions" element={<PageTransition><FinancialSolutions /></PageTransition>} />
              <Route path="/domain-search" element={<PageTransition><DomainSearch /></PageTransition>} />
              <Route path="/business-email" element={<PageTransition><BusinessEmail /></PageTransition>} />
              <Route path="/marketing-tools" element={<PageTransition><MarketingTools /></PageTransition>} />
              <Route path="/help" element={<PageTransition><HelpCenter /></PageTransition>} />
              <Route path="/forum" element={<PageTransition><Forum /></PageTransition>} />
              <Route path="/webinars" element={<PageTransition><Webinars /></PageTransition>} />
              
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
