import React, { useState, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
const Footer = React.lazy(() => import('./components/Footer'));
const StyleGuide = React.lazy(() => import('./pages/StyleGuide'));

// Standalone Concept Websites
const RealEstateConcept = React.lazy(() => import('./pages/concepts/RealEstateConcept'));
const HealthcareConcept = React.lazy(() => import('./pages/concepts/HealthcareConcept'));
const HotelConcept = React.lazy(() => import('./pages/concepts/HotelConcept'));
const FurnitureConcept = React.lazy(() => import('./pages/concepts/FurnitureConcept'));
const RetailEcommerceConcept = React.lazy(() => import('./pages/concepts/RetailEcommerceConcept'));
const SaasDashboardConcept = React.lazy(() => import('./pages/concepts/SaasDashboardConcept'));
const InexStudio = React.lazy(() => import('./pages/InexStudio'));

import { DelayedRender } from './components/ui/DelayedRender';
import SmoothScroll from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation();
  const isConceptMode = location.pathname.startsWith('/concepts/');
  const isStudioMode = location.pathname.startsWith('/ai-builder/studio');
  const isInexMode = location.pathname.startsWith('/inex');
  const hideGlobalChrome = isConceptMode || isStudioMode || isInexMode;

  return (
    <>
      {!hideGlobalChrome && <Navbar />}

      <SmoothScroll>
        <main className="relative z-10 bg-background text-primary w-full min-h-screen selection:bg-primary selection:text-background">
          <Suspense fallback={<div className="min-h-screen bg-background opacity-40 transition-opacity" />}>
            <Routes location={location}>
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
              <Route path="/style-guide" element={<PageTransition><StyleGuide /></PageTransition>} />

              {/* Standalone Interactive Concept Websites */}
              <Route path="/concepts/real-estate" element={<PageTransition><RealEstateConcept /></PageTransition>} />
              <Route path="/concepts/healthcare" element={<PageTransition><HealthcareConcept /></PageTransition>} />
              <Route path="/concepts/hotel" element={<PageTransition><HotelConcept /></PageTransition>} />
              <Route path="/concepts/furniture" element={<PageTransition><FurnitureConcept /></PageTransition>} />
              <Route path="/concepts/retail-ecommerce" element={<PageTransition><RetailEcommerceConcept /></PageTransition>} />
              <Route path="/concepts/saas-dashboard" element={<PageTransition><SaasDashboardConcept /></PageTransition>} />
              
              {/* Official Creative Partner: INEX Studio / Kolibrie Showcase */}
              <Route path="/inex" element={<PageTransition><InexStudio /></PageTransition>} />
              <Route path="/inex-studio" element={<PageTransition><InexStudio /></PageTransition>} />
              
              {/* Dynamic Placeholders */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </Suspense>
        </main>

        {!hideGlobalChrome && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
        
        {!hideGlobalChrome && (
          <DelayedRender delay={1000}>
            <Suspense fallback={null}>
              <ChatWidget />
            </Suspense>
          </DelayedRender>
        )}
      </SmoothScroll>
    </>
  );
}
