import React, { useRef, useState, useEffect, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { useReducedMotion } from 'motion/react';

const FALLBACK_ITEMS = [
  { 
    imageUrl: { src: 'https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg', alt: 'Carousel image 1' },
    gradient: 'radial-gradient(circle at 50% 50%, rgba(217, 226, 74, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
  },
  { 
    imageUrl: { src: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg', alt: 'Carousel image 2' },
    gradient: 'radial-gradient(circle at 50% 50%, rgba(241, 213, 94, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
  },
  { 
    imageUrl: { src: 'https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg', alt: 'Carousel image 3' },
    gradient: 'radial-gradient(circle at 50% 50%, rgba(175, 109, 200, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
  },
  { 
    imageUrl: { src: 'https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg', alt: 'Carousel image 4' },
    gradient: 'radial-gradient(circle at 50% 50%, rgba(117, 93, 225, 0.45) 0%, rgba(0, 0, 0, 1) 90%)'
  }
];

function toSignedWrap(value: number, cycle: number) {
  if (cycle <= 0) return 0;
  const wrapped = ((value + cycle / 2) % cycle + cycle) % cycle - cycle / 2;
  return wrapped;
}

function smoothstep(edge0: number, edge1: number, x: number) {
  if (edge0 === edge1) return x < edge0 ? 0 : 1;
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function useSafeInView(ref: React.RefObject<Element>, options: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);
  return isInView;
}

interface Item {
  imageUrl: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  gradient?: string;
}

interface Infinite3DCarouselProps {
  items?: Item[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  background?: string;
  blurAmount?: number;
  dragSensitivity?: number;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  autoPlayDirection?: 'Forward' | 'Backward';
  perspective?: number;
  sideRotation?: number;
  sideTilt?: number;
  overlap?: number;
}

export interface Infinite3DCarouselRef {
  goToSlide: (index: number) => void;
}

const Infinite3DCarousel = forwardRef((props: Infinite3DCarouselProps, ref: React.Ref<Infinite3DCarouselRef>) => {
  const {
    items = FALLBACK_ITEMS,
    cardWidth = 430,
    cardHeight = 440,
    radius = 20,
    background = 'transparent',
    blurAmount = 8,
    dragSensitivity = 1,
    autoPlay = true,
    autoPlaySpeed = 28,
    autoPlayDirection = 'Forward',
    perspective = 1800,
    sideRotation = 14,
    sideTilt = 6,
    overlap = 300
  } = props;

  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useSafeInView(trackRef, { threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const pointerActiveRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const renderedVelocityRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const renderedOffsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const stepRef = useRef<(time: number) => void>(() => {});
  
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageAssignmentCacheRef = useRef<any[]>([null, null, null, null, null]);

  const safeItems = useMemo(() => {
    return items.length > 0 ? items : FALLBACK_ITEMS;
  }, [items]);

  const cardStep = useMemo(() => {
    return Math.max(70, cardWidth - overlap);
  }, [cardWidth, overlap]);

  const cycle = useMemo(() => {
    return safeItems.length * cardStep;
  }, [safeItems.length, cardStep]);

  const shouldAnimateRef = useRef(false);
  const maxMomentumVelocity = useMemo(() => {
    return Math.max(1400, cardStep * 14);
  }, [cardStep]);

  const autoPlayDirectionFactor = useMemo(() => {
    return autoPlayDirection === 'Backward' ? 1 : -1;
  }, [autoPlayDirection]);

  const applyFrameStyles = useCallback((rendered: number) => {
    if (safeItems.length === 0) return;
    const signed = toSignedWrap(rendered, cycle);
    const activeFloatIndex = -signed / cardStep;
    const nearestCenter = Math.round(activeFloatIndex);
    
    for (let slot = 0; slot < 5; slot++) {
      const cardEl = cardRefs.current[slot];
      const imageEl = imageRefs.current[slot];
      if (!cardEl || !imageEl) continue;
      
      const virtualIndex = nearestCenter + (slot - 2);
      const wrappedItemIndex = (virtualIndex % safeItems.length + safeItems.length) % safeItems.length;
      const item = safeItems[wrappedItemIndex];
      const rawDistance = virtualIndex - activeFloatIndex;
      const absDistance = Math.abs(rawDistance);
      const clampedDistance = Math.min(absDistance, 2.25);
      const direction = rawDistance === 0 ? 0 : rawDistance > 0 ? 1 : -1;
      const eased = Math.min(1, clampedDistance / 2);
      const depthEase = Math.pow(eased, 0.9);
      const translateX = rawDistance * cardStep;
      const rotateY = -direction * depthEase * sideRotation;
      const rotateZ = direction * depthEase * sideTilt;
      
      // Calculate a boost that smoothly scales up the card as it reaches the dead center
      const centerBoost = (1 - smoothstep(0, 0.8, absDistance)) * 0.25;
      
      const scale = 1 - depthEase * 0.24 + centerBoost;
      const translateZ = 110 - depthEase * 160 + (centerBoost * 150);
      const zIndex = 1000 - Math.round(clampedDistance * 100) + Math.round(centerBoost * 100);
      const fadeStartDistance = 1.35;
      const fadeEndDistance = 2.85;
      const edgeOpacity = Math.max(0, Math.min(1, 1 - smoothstep(fadeStartDistance, fadeEndDistance, absDistance)));
      const blurDepth = smoothstep(0.35, 2.25, absDistance);
      const blurPx = blurAmount <= 0 ? 0 : blurAmount * blurDepth;
      const shadowEase = smoothstep(0, 1.5, absDistance);
      const shadowYOffset = 20 - shadowEase * 8;
      const shadowBlur = 40 - shadowEase * 12;
      const shadowAlpha = 0.16 - shadowEase * 0.05;
      
      cardEl.style.zIndex = String(zIndex);
      cardEl.style.opacity = String(edgeOpacity);
      cardEl.style.transform = `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
      cardEl.style.filter = blurPx > 0 ? `blur(${blurPx}px)` : 'none';
      cardEl.style.boxShadow = `0 ${shadowYOffset}px ${shadowBlur}px rgba(0, 0, 0, ${Math.max(0.08, shadowAlpha)})`;
      
      const fallback = FALLBACK_ITEMS[wrappedItemIndex % FALLBACK_ITEMS.length].imageUrl;
      const nextSrc = item.imageUrl?.src || fallback.src;
      const nextSrcSet = (item.imageUrl as any)?.srcSet || '';
      const nextAlt = item.imageUrl?.alt || `Carousel image ${wrappedItemIndex + 1}`;
      const cached = imageAssignmentCacheRef.current[slot];
      const changed = !cached || cached.itemIndex !== wrappedItemIndex || cached.src !== nextSrc || cached.srcSet !== nextSrcSet || cached.alt !== nextAlt;
      
      if (changed) {
        imageEl.src = nextSrc;
        if (nextSrcSet) imageEl.srcset = nextSrcSet;
        imageEl.alt = nextAlt;
        imageAssignmentCacheRef.current[slot] = {
          itemIndex: wrappedItemIndex,
          src: nextSrc,
          srcSet: nextSrcSet,
          alt: nextAlt
        };
      }
    }
  }, [blurAmount, cardStep, cycle, safeItems, sideRotation, sideTilt]);

  const requestAnimationIfNeeded = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (rafRef.current !== null) return;
    if (!shouldAnimateRef.current) return;
    lastFrameTimeRef.current = 0;
    rafRef.current = window.requestAnimationFrame(stepRef.current);
  }, []);

  useImperativeHandle(ref, () => ({
    goToSlide: (index: number) => {
      const currentTarget = targetOffsetRef.current;
      const absoluteTarget = -(index * cardStep);
      const currentWrapped = ((currentTarget % cycle) + cycle) % cycle;
      const absoluteWrapped = ((absoluteTarget % cycle) + cycle) % cycle;
      
      let diff = absoluteWrapped - currentWrapped;
      if (diff > cycle / 2) diff -= cycle;
      if (diff < -cycle / 2) diff += cycle;

      targetOffsetRef.current = currentTarget + diff;
      velocityRef.current = 0;
      renderedVelocityRef.current = 0;
      requestAnimationIfNeeded();
    }
  }));

  const step = useCallback((time: number) => {
    rafRef.current = null;
    const previousTime = lastFrameTimeRef.current;
    const dt = previousTime > 0 ? Math.min(Math.max((time - previousTime) / 1000, 1 / 240), 1 / 30) : 1 / 60;
    lastFrameTimeRef.current = time;
    
    let target = targetOffsetRef.current;
    let rendered = renderedOffsetRef.current;
    let renderedVelocity = renderedVelocityRef.current;
    
    if (prefersReducedMotion) {
      velocityRef.current = 0;
      renderedVelocity = 0;
      rendered = target;
    } else {
      if (isInView && autoPlay) {
        target += autoPlayDirectionFactor * autoPlaySpeed * dt;
      }
      target += velocityRef.current * dt;
      velocityRef.current *= Math.pow(0.94, dt * 60);
      if (Math.abs(velocityRef.current) < 0.2) velocityRef.current = 0;
      
      const springStiffness = pointerActiveRef.current ? 240 : 170;
      const springDamping = pointerActiveRef.current ? 30 : 24;
      const displacement = target - rendered;
      const acceleration = displacement * springStiffness - renderedVelocity * springDamping;
      renderedVelocity += acceleration * dt;
      rendered += renderedVelocity * dt;
    }
    
    targetOffsetRef.current = target;
    renderedOffsetRef.current = rendered;
    renderedVelocityRef.current = renderedVelocity;
    
    applyFrameStyles(rendered);
    
    const remainingDisplacement = Math.abs(targetOffsetRef.current - renderedOffsetRef.current);
    const remainingRenderedVelocity = Math.abs(renderedVelocityRef.current);
    const shouldContinue = isInView && (!prefersReducedMotion || pointerActiveRef.current || remainingDisplacement > 0.015 || remainingRenderedVelocity > 0.015 || Math.abs(velocityRef.current) > 0.015);
    shouldAnimateRef.current = shouldContinue;
    
    if (shouldContinue && typeof window !== 'undefined') {
      rafRef.current = window.requestAnimationFrame(step);
    }
  }, [applyFrameStyles, autoPlay, autoPlayDirectionFactor, autoPlaySpeed, isInView, prefersReducedMotion]);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    applyFrameStyles(renderedOffsetRef.current);
  }, [applyFrameStyles]);

  useEffect(() => {
    const shouldStart = isInView && !prefersReducedMotion && autoPlay;
    shouldAnimateRef.current = shouldStart;
    if (shouldStart) {
      requestAnimationIfNeeded();
    } else if (rafRef.current !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    return () => {
      if (rafRef.current !== null && typeof window !== 'undefined') {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [autoPlay, isInView, prefersReducedMotion, requestAnimationIfNeeded]);

  const endPointerInteraction = useCallback((event: React.PointerEvent) => {
    if (pointerIdRef.current !== event.pointerId) return;
    pointerActiveRef.current = false;
    const target = event.currentTarget as HTMLElement;
    if (target.hasPointerCapture && target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }
    pointerIdRef.current = null;
    
    if (prefersReducedMotion) {
      renderedOffsetRef.current = targetOffsetRef.current;
      renderedVelocityRef.current = 0;
      applyFrameStyles(renderedOffsetRef.current);
    } else {
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    }
  }, [applyFrameStyles, prefersReducedMotion, requestAnimationIfNeeded]);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    // Only handle primary button (left click)
    if (event.button !== 0) return;
    pointerActiveRef.current = true;
    pointerIdRef.current = event.pointerId;
    lastXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    targetOffsetRef.current = renderedOffsetRef.current;
    velocityRef.current = 0;
    renderedVelocityRef.current = 0;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    shouldAnimateRef.current = true;
    requestAnimationIfNeeded();
  }, [requestAnimationIfNeeded]);

  const onPointerMove = useCallback((event: React.PointerEvent) => {
    if (!pointerActiveRef.current || pointerIdRef.current !== event.pointerId) return;
    const dx = event.clientX - lastXRef.current;
    const dt = Math.max((event.timeStamp - lastPointerTimeRef.current) / 1000, 0.001);
    lastXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    const scaledDx = dx * dragSensitivity;
    const next = targetOffsetRef.current + scaledDx;
    targetOffsetRef.current = next;
    
    if (prefersReducedMotion) {
      velocityRef.current = 0;
      renderedOffsetRef.current = next;
      applyFrameStyles(next);
    } else {
      const instantaneousVelocity = scaledDx / dt;
      const clampedVelocity = Math.max(-maxMomentumVelocity, Math.min(maxMomentumVelocity, instantaneousVelocity));
      const smoothing = 1 - Math.exp(-20 * dt);
      velocityRef.current = velocityRef.current + (clampedVelocity - velocityRef.current) * smoothing;
    }
  }, [applyFrameStyles, dragSensitivity, maxMomentumVelocity, prefersReducedMotion]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? -1 : 1;
    const nextTarget = targetOffsetRef.current + direction * cardStep;
    targetOffsetRef.current = nextTarget;
    
    if (prefersReducedMotion) {
      renderedOffsetRef.current = nextTarget;
      velocityRef.current = 0;
      applyFrameStyles(nextTarget);
    } else {
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    }
  }, [applyFrameStyles, cardStep, prefersReducedMotion, requestAnimationIfNeeded]);

  const onPointerUp = useCallback((event: React.PointerEvent) => {
    endPointerInteraction(event);
  }, [endPointerInteraction]);

  const onPointerCancel = useCallback((event: React.PointerEvent) => {
    if (pointerIdRef.current === event.pointerId) {
      endPointerInteraction(event);
    }
  }, [endPointerInteraction]);

  const onPointerLeave = useCallback((event: React.PointerEvent) => {
    if (pointerActiveRef.current && pointerIdRef.current === event.pointerId) {
      endPointerInteraction(event);
    }
  }, [endPointerInteraction]);

  useEffect(() => {
    if (safeItems.length > 0) return;
    for (let i = 0; i < imageAssignmentCacheRef.current.length; i++) {
      imageAssignmentCacheRef.current[i] = null;
    }
  }, [safeItems.length]);

  return (
    <section
      ref={trackRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background,
        touchAction: 'pan-y',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerLeave}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Infinite draggable carousel"
      aria-roledescription="carousel"
    >

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(0%)',
        }}
      >
        <div
          style={{
            perspective: `${perspective}px`,
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {[...Array(5)].map((_, slot) => {
            const nearestCenter = 0;
            const virtualIndex = nearestCenter + (slot - 2);
            const wrappedItemIndex = (virtualIndex % safeItems.length + safeItems.length) % safeItems.length;
            const item = safeItems[wrappedItemIndex];
            const rawDistance = virtualIndex;
            const absDistance = Math.abs(rawDistance);
            const clampedDistance = Math.min(absDistance, 2.25);
            const direction = rawDistance === 0 ? 0 : rawDistance > 0 ? 1 : -1;
            const eased = Math.min(1, clampedDistance / 2);
            const depthEase = Math.pow(eased, 0.9);
            const translateX = rawDistance * cardStep;
            const rotateY = -direction * depthEase * sideRotation;
            const rotateZ = direction * depthEase * sideTilt;
            const scale = 1 - depthEase * 0.24;
            const translateZ = 110 - depthEase * 160;
            const zIndex = 1000 - Math.round(clampedDistance * 100);
            const fadeStartDistance = 2;
            const fadeEndDistance = 2.45;
            const edgeOpacity = 1 - smoothstep(fadeStartDistance, fadeEndDistance, absDistance);
            const blurDepth = smoothstep(0.35, 2.25, absDistance);
            const blurPx = blurAmount <= 0 ? 0 : blurAmount * blurDepth;

            return (
              <div key={`slot-${slot}`}>
                <article
                  ref={(el) => {
                    cardRefs.current[slot] = el;
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: `${cardWidth}px`,
                    minWidth: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    borderRadius: `${radius}px`,
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    boxShadow: absDistance < 0.15 ? '0 20px 40px rgba(0, 0, 0, 0.16)' : '0 12px 28px rgba(0, 0, 0, 0.11)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex,
                    opacity: edgeOpacity,
                    filter: blurPx > 0 ? `blur(${blurPx}px)` : 'none',
                    transformStyle: 'preserve-3d',
                    transform: `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                    willChange: 'transform, filter',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                >
                  <img
                    ref={(el) => {
                      imageRefs.current[slot] = el;
                    }}
                    src={item.imageUrl?.src || FALLBACK_ITEMS[wrappedItemIndex % FALLBACK_ITEMS.length].imageUrl.src}
                    srcSet={(item.imageUrl as any)?.srcSet}
                    alt={item.imageUrl?.alt || `Carousel image ${wrappedItemIndex + 1}`}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    onDragStart={(event) => event.preventDefault()}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      pointerEvents: 'none',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                    }}
                  />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Infinite3DCarousel;
