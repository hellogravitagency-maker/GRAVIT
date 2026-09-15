import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollStore } from '../store/useScrollStore';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const location = useLocation();

  useEffect(() => {
    // Disable smooth scroll & heavy GSAP on mobile devices for better performance
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) return;

    let cleanup = () => {};

    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
 orientation: 'vertical',
 gestureOrientation: 'vertical',
 smoothWheel: true,
 wheelMultiplier: 1.2,
 touchMultiplier: 2,
 });

 lenisRef.current = lenis;

 // Connect Lenis to GSAP ScrollTrigger
 lenis.on('scroll', (e: any) => {
 ScrollTrigger.update();
 useScrollStore.getState().setVelocity(e.velocity);
 });
 
 // Create a global scroll trigger to update our Zustand store
 const globalTrigger = ScrollTrigger.create({
 trigger: document.body,
 start: 'top top',
 end: 'bottom bottom',
 onUpdate: ({ progress }) => {
 useScrollStore.getState().setProgress(progress);
 },
 });

 // Run Lenis within GSAP ticker for perfect sync
 const ticker = gsap.ticker.add((time) => {
 lenis.raf(time * 1000);
 });
 
 gsap.ticker.lagSmoothing(0);

 cleanup = () => {
 lenis.destroy();
 gsap.ticker.remove(ticker);
 globalTrigger.kill();
 };
 });

 return () => cleanup();
 }, []);

 useEffect(() => {
 window.scrollTo(0, 0);
 if (lenisRef.current) {
 lenisRef.current.scrollTo(0, { immediate: true });
 }
 }, [location.pathname]);

 return <>{children}</>;
}
