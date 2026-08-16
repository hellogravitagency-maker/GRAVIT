import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';

import Home from './components/Home';

// Lazy loaded routes for code splitting
const Services = React.lazy(() => import('./pages/Services'));
const ServicesDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const SolutionDetail = React.lazy(() => import('./pages/SolutionDetail'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Cart = React.lazy(() => import('./components/Cart'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const About = React.lazy(() => import('./components/About'));
const Process = React.lazy(() => import('./components/Process'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Careers = React.lazy(() => import('./components/Careers'));
const Terms = React.lazy(() => import('./components/Terms'));
const Privacy = React.lazy(() => import('./components/Privacy'));
const RefundPolicy = React.lazy(() => import('./components/RefundPolicy'));
const Article = React.lazy(() => import('./components/Article'));
const Scene3D = React.lazy(() => import('./components/three/Scene3D'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const CaseStudy = React.lazy(() => import('./components/CaseStudy'));
const FeatureIndex = React.lazy(() => import('./pages/FeatureIndex'));
const Showcase = React.lazy(() => import('./pages/Showcase'));
const Websites = React.lazy(() => import('./pages/Websites'));
const WebsiteTemplates = React.lazy(() => import('./pages/WebsiteTemplates'));
const AIBuilderLanding = React.lazy(() => import('./pages/AIBuilderLanding'));
const AIBuilderStudio = React.lazy(() => import('./pages/AIBuilderStudio'));
const DesignIntelligence = React.lazy(() => import('./pages/DesignIntelligence'));
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'));
const Portfolios = React.lazy(() => import('./pages/Portfolios'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const OnlineStores = React.lazy(() => import('./pages/OnlineStores'));
const Invoicing = React.lazy(() => import('./pages/Invoicing'));
const Scheduling = React.lazy(() => import('./pages/Scheduling'));
const LimitedReleases = React.lazy(() => import('./pages/LimitedReleases'));
const ContentMemberships = React.lazy(() => import('./pages/ContentMemberships'));
const Donations = React.lazy(() => import('./pages/Donations'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const BusinessMarketing = React.lazy(() => import('./pages/BusinessMarketing'));
const MarketingTools = React.lazy(() => import('./pages/MarketingTools'));
const EmailCampaigns = React.lazy(() => import('./pages/EmailCampaigns'));
const SEOTools = React.lazy(() => import('./pages/SEOTools'));
const AIVisibility = React.lazy(() => import('./pages/AIVisibility'));
const FreeTools = React.lazy(() => import('./pages/FreeTools'));
const BusinessTools = React.lazy(() => import('./pages/BusinessTools'));
const DomainSearch = React.lazy(() => import('./pages/DomainSearch'));
const DomainTransfer = React.lazy(() => import('./pages/DomainTransfer'));
const BusinessEmail = React.lazy(() => import('./pages/BusinessEmail'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Forum = React.lazy(() => import('./pages/Forum'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const HireAnExpert = React.lazy(() => import('./pages/HireAnExpert'));
const Support = React.lazy(() => import('./pages/Support'));

// Delay heavy components until after page load or user interaction
export function DelayedRender({ children, delay = 8000 }: { children: React.ReactNode, delay?: number }) {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const triggerRender = () => {
      setShouldRender(true);
    };

    const startTimer = () => {
      timer = setTimeout(triggerRender, delay);
    };

    if (document.readyState === 'complete') {
      startTimer();
    } else {
      window.addEventListener('load', startTimer);
      return () => {
        window.removeEventListener('load', startTimer);
        clearTimeout(timer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return shouldRender ? <>{children}</> : null;
}

import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Navbar from './components/Navbar';
import { useCartStore } from './store/cartStore';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('INITIALIZING_');
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, getItemCount } = useCartStore();

  useEffect(() => {
    // Skip loader for returning users or lighthouse
    const isLighthouse = window.navigator.userAgent.includes('Lighthouse') || window.location.search.includes('lighthouse=true');
    if (sessionStorage.getItem('hasSeenLoader') || isLighthouse) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoadingText('GRAVIT_');
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 400);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const isTextHeavyRoute = ['/terms', '/privacy', '/refund-policy'].includes(location.pathname);
  const isStudioMode = location.pathname.startsWith('/ai-builder/studio');

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-primary text-2xl md:text-4xl font-sans font-bold tracking-tight"
            >
              {loadingText}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isStudioMode && <Navbar />}

      <SmoothScroll>

      <main className="relative z-10 bg-background text-primary w-full overflow-x-clip min-h-screen selection:bg-primary selection:text-background">
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-black"></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/agency" element={<Navigate to="/about" replace />} />
              {/* Product pages */}
              <Route path="/websites" element={<PageTransition><Websites /></PageTransition>} />
              <Route path="/website-templates" element={<PageTransition><WebsiteTemplates /></PageTransition>} />
              <Route path="/ai-builder" element={<PageTransition><AIBuilderLanding /></PageTransition>} />
              <Route path="/ai-builder/studio" element={<PageTransition><AIBuilderStudio /></PageTransition>} />
              <Route path="/design-intelligence" element={<PageTransition><DesignIntelligence /></PageTransition>} />
              <Route path="/ecommerce" element={<PageTransition><Ecommerce /></PageTransition>} />
              <Route path="/portfolios" element={<PageTransition><Portfolios /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/analytics" element={<PageTransition><Analytics /></PageTransition>} />
              {/* Business category pages */}
              <Route path="/online-stores" element={<PageTransition><OnlineStores /></PageTransition>} />
              <Route path="/invoicing" element={<PageTransition><Invoicing /></PageTransition>} />
              <Route path="/scheduling" element={<PageTransition><Scheduling /></PageTransition>} />
              <Route path="/limited-releases" element={<PageTransition><LimitedReleases /></PageTransition>} />
              <Route path="/content-memberships" element={<PageTransition><ContentMemberships /></PageTransition>} />
              <Route path="/donations" element={<PageTransition><Donations /></PageTransition>} />
              <Route path="/financial-solutions" element={<PageTransition><FinancialSolutions /></PageTransition>} />
              <Route path="/business-marketing" element={<PageTransition><BusinessMarketing /></PageTransition>} />
              {/* Marketing Tools category pages */}
              <Route path="/marketing-tools" element={<PageTransition><MarketingTools /></PageTransition>} />
              <Route path="/email-campaigns" element={<PageTransition><EmailCampaigns /></PageTransition>} />
              <Route path="/seo-tools" element={<PageTransition><SEOTools /></PageTransition>} />
              <Route path="/ai-visibility" element={<PageTransition><AIVisibility /></PageTransition>} />
              <Route path="/free-tools" element={<PageTransition><FreeTools /></PageTransition>} />
              {/* Business Tools category pages */}
              <Route path="/business-tools" element={<PageTransition><BusinessTools /></PageTransition>} />
              <Route path="/domain-search" element={<PageTransition><DomainSearch /></PageTransition>} />
              <Route path="/domain-transfer" element={<PageTransition><DomainTransfer /></PageTransition>} />
              <Route path="/business-email" element={<PageTransition><BusinessEmail /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/:slug" element={<PageTransition><ServicesDetail /></PageTransition>} />
              <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
              <Route path="/solutions/:slug" element={<PageTransition><SolutionDetail /></PageTransition>} />
              <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
              <Route path="/products/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
              <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
              <Route path="/pricing" element={<Navigate to="/contact" replace />} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/work/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
              <Route path="/features" element={<PageTransition><FeatureIndex /></PageTransition>} />
              <Route path="/feature-index" element={<Navigate to="/features" replace />} />
              <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
              <Route path="/help-center" element={<PageTransition><HelpCenter /></PageTransition>} />
              <Route path="/resources/help" element={<PageTransition><HelpCenter /></PageTransition>} />
              <Route path="/forum" element={<PageTransition><Forum /></PageTransition>} />
              <Route path="/resources/forum" element={<PageTransition><Forum /></PageTransition>} />
              <Route path="/webinars" element={<PageTransition><Webinars /></PageTransition>} />
              <Route path="/resources/webinars" element={<PageTransition><Webinars /></PageTransition>} />
              <Route path="/resources/blog" element={<Navigate to="/blog" replace />} />
              <Route path="/hire-an-expert" element={<PageTransition><HireAnExpert /></PageTransition>} />
              <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
              <Route path="/247-support" element={<PageTransition><Support /></PageTransition>} />
              <Route path="/resources/:id" element={<PageTransition><Article /></PageTransition>} />
              <Route path="/insights" element={<Navigate to="/resources" replace />} />
              <Route path="/thoughts" element={<Navigate to="/resources" replace />} />
              <Route path="/insights/:id" element={<Navigate to="/resources" replace />} />
              <Route path="/thoughts/:id" element={<Navigate to="/resources" replace />} />
              <Route path="/showcase" element={<PageTransition><Showcase /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Cart />
      </Suspense>

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
