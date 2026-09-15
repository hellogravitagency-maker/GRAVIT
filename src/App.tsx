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

import { DelayedRender } from './components/ui/DelayedRender';
import SmoothScroll from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation();
  const isStudioMode = location.pathname.startsWith('/ai-builder/studio');

  return (
    <>
      {!isStudioMode && <Navbar />}

      <SmoothScroll>
        <main className="relative z-10 bg-background text-primary w-full min-h-screen selection:bg-primary selection:text-background">
          <Suspense fallback={<div className="min-h-screen bg-background opacity-40 transition-opacity" />}>
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
          </Suspense>
        </main>

        {!isStudioMode && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
        
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
