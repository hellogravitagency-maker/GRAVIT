import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  id?: string | number;
  title: string;
  category?: string;
  image: string;
  alt?: string;
  link?: string;
  accent?: string;
  bg?: string;
  hasButton?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Yellow Porsche GT3 RS",
    category: "Automotive Editorial",
    image: "/images/hero-porsche.webp",
    alt: "Yellow Porsche GT3 RS",
    link: "/contact",
    accent: "#6355D8",
    bg: "#6355D8",
    hasButton: true
  },
  {
    id: 2,
    title: "Aurelia Academy",
    category: "Education Platform",
    image: "/images/Aurelia Academy Brighter Tomorrow.webp",
    alt: "Aurelia Academy",
    link: "/contact",
    accent: "#FA5D5D",
    bg: "#FA5D5D",
    hasButton: true
  },
  {
    id: 3,
    title: "KŌZU Ramen",
    category: "Brand & Digital Experience",
    image: "/images/KŌZU Ramen Bowls That Bring Good Mood.webp",
    alt: "KOZU Ramen Bowls",
    link: "/contact",
    accent: "#0096A8",
    bg: "#0096A8",
    hasButton: true
  },
  {
    id: 4,
    title: "Shadow Garden",
    category: "Interactive Interface",
    image: "/images/Shadow Garden Portfolio Interface.webp",
    alt: "Shadow Garden Portfolio",
    link: "/contact",
    accent: "#79D862",
    bg: "#79D862",
    hasButton: true
  },
  {
    id: 5,
    title: "VÉLORA",
    category: "Luxury Fashion Ecommerce",
    image: "/images/VÉLORA Style Moves With You.webp",
    alt: "VELORA Style",
    link: "/contact",
    accent: "#4348C9",
    bg: "#4348C9",
    hasButton: true
  }
];

function smoothstep(edge0: number, edge1: number, x: number): number {
  if (edge0 === edge1) return x < edge0 ? 0 : 1;
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function computeCardStyle(
  i: number,
  rendered: number,
  safeItemsLength: number,
  cardStep: number,
  cycle: number,
  sideRotation: number,
  sideTilt: number
) {
  const basePosition = i * cardStep;
  // Continuous mathematical modulo in [-cycle / 2, cycle / 2]
  let relativePosition = ((basePosition - rendered) % cycle + cycle) % cycle;
  if (relativePosition > cycle / 2) {
    relativePosition -= cycle;
  }

  const absDistance = Math.abs(relativePosition) / cardStep;
  const clampedDistance = Math.min(absDistance, 3.5);
  const direction = relativePosition === 0 ? 0 : relativePosition > 0 ? 1 : -1;
  const eased = Math.min(1, clampedDistance / 2.2);
  const depthEase = Math.pow(eased, 0.85);

  const translateX = relativePosition;
  const rotateY = -direction * depthEase * sideRotation;
  const rotateZ = direction * depthEase * sideTilt;
  const scale = Math.max(0.72, 1 - depthEase * 0.22);
  const translateZ = 120 - depthEase * 220;
  const zIndex = 1000 - Math.round(clampedDistance * 100);

  // Cards fade to 0 well before the wrap boundary (cycle / 2 = safeItemsLength / 2)
  const fadeStartDistance = 1.8;
  const fadeEndDistance = 3.4;
  const edgeOpacity = Math.max(
    0,
    Math.min(1, 1 - smoothstep(fadeStartDistance, fadeEndDistance, absDistance))
  );

  return {
    zIndex,
    opacity: edgeOpacity,
    visibility: (edgeOpacity > 0.005 ? "visible" : "hidden") as "visible" | "hidden",
    transform: `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
    absDistance
  };
}

export interface Infinite3DCarouselProps {
  items?: CarouselItem[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  blurAmount?: number;
  dragSensitivity?: number;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  autoPlayDirection?: "Forward" | "Backward";
  perspective?: number;
  sideRotation?: number;
  sideTilt?: number;
  overlap?: number;
  className?: string;
  style?: React.CSSProperties;
  onSelectCard?: (item: CarouselItem) => void;
}

export default function Infinite3DCarousel({
  items = DEFAULT_ITEMS,
  cardWidth: propCardWidth,
  cardHeight: propCardHeight,
  radius = 26,
  blurAmount = 0,
  dragSensitivity = 1.1,
  autoPlay = true,
  autoPlaySpeed = 22,
  autoPlayDirection = "Forward",
  perspective = 1800,
  sideRotation = 14,
  sideTilt = 6,
  overlap: propOverlap,
  className = "",
  style,
  onSelectCard
}: Infinite3DCarouselProps) {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true);
  const isHoveredRef = useRef(false);
  const [activeDot, setActiveDot] = useState(0);
  const lastActiveRef = useRef(0);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = useMemo(() => {
    if (propCardWidth) return propCardWidth;
    if (windowWidth < 640) return 260;
    if (windowWidth < 1024) return 300;
    return 340;
  }, [propCardWidth, windowWidth]);

  const cardHeight = useMemo(() => {
    if (propCardHeight) return propCardHeight;
    if (windowWidth < 640) return 360;
    if (windowWidth < 1024) return 410;
    return 460;
  }, [propCardHeight, windowWidth]);

  const overlap = useMemo(() => {
    if (propOverlap !== undefined) return propOverlap;
    if (windowWidth < 640) return 120;
    if (windowWidth < 1024) return 140;
    return 160;
  }, [propOverlap, windowWidth]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pointerActiveRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const dragMovedRef = useRef(false);
  const lastPointerTimeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const renderedVelocityRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const renderedOffsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const stepRef = useRef<(time: number) => void>(() => {});

  const baseItems = useMemo(() => {
    return items.length > 0 ? items : DEFAULT_ITEMS;
  }, [items]);

  // Triplicate list (at least 15 items) so circular wrap is mathematically hidden
  const safeItems = useMemo(() => {
    const times = Math.max(3, Math.ceil(15 / baseItems.length));
    const multiplied: CarouselItem[] = [];
    for (let i = 0; i < times; i++) {
      multiplied.push(
        ...baseItems.map((item, index) => ({
          ...item,
          id: `${item.id || index}-${i}`
        }))
      );
    }
    return multiplied;
  }, [baseItems]);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardStep = useMemo(() => {
    return Math.max(80, cardWidth - overlap);
  }, [cardWidth, overlap]);

  const cycle = useMemo(() => {
    return safeItems.length * cardStep;
  }, [safeItems.length, cardStep]);

  const shouldAnimateRef = useRef(false);
  const maxMomentumVelocity = useMemo(() => {
    return Math.max(1200, cardStep * 12);
  }, [cardStep]);

  const autoPlayDirectionFactor = useMemo(() => {
    return autoPlayDirection === "Backward" ? -1 : 1;
  }, [autoPlayDirection]);

  // Direct 60FPS DOM styling without CSS transition fighting
  const applyFrameStyles = useCallback(
    (rendered: number) => {
      if (safeItems.length === 0) return;

      for (let i = 0; i < safeItems.length; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        const st = computeCardStyle(i, rendered, safeItems.length, cardStep, cycle, sideRotation, sideTilt);

        cardEl.style.zIndex = String(st.zIndex);
        cardEl.style.opacity = String(st.opacity);
        cardEl.style.visibility = st.visibility;
        cardEl.style.transform = st.transform;

        const isCenter = st.absDistance < 0.5;
        const currentCenterState = cardEl.getAttribute("data-center");
        const nextCenterState = isCenter ? "true" : "false";
        if (currentCenterState !== nextCenterState) {
          cardEl.setAttribute("data-center", nextCenterState);
          const btnEl = cardEl.querySelector('.carousel-btn') as HTMLElement;
          if (btnEl) {
            btnEl.style.opacity = isCenter ? "1" : "0.75";
            btnEl.style.pointerEvents = "auto";
          }
        }
      }

      // Sync active pagination dot
      const currentActive =
        ((Math.round(rendered / cardStep) % baseItems.length) + baseItems.length) % baseItems.length;
      if (currentActive !== lastActiveRef.current) {
        lastActiveRef.current = currentActive;
        setActiveDot(currentActive);
      }
    },
    [baseItems.length, cardStep, cycle, safeItems.length, sideRotation, sideTilt]
  );

  const requestAnimationIfNeeded = useCallback(() => {
    if (typeof window === "undefined") return;
    if (rafRef.current !== null) return;
    lastFrameTimeRef.current = 0;
    rafRef.current = window.requestAnimationFrame(stepRef.current);
  }, []);

  // Physics animation loop
  const step = useCallback(
    (time: number) => {
      rafRef.current = null;
      const previousTime = lastFrameTimeRef.current;
      const dt =
        previousTime > 0
          ? Math.min(Math.max((time - previousTime) / 1000, 1 / 240), 1 / 30)
          : 1 / 60;
      lastFrameTimeRef.current = time;

      let target = targetOffsetRef.current;
      let rendered = renderedOffsetRef.current;
      let renderedVelocity = renderedVelocityRef.current;

      // Continuous forward ambient autoplay when not hovered or dragged
      if (isInView && autoPlay && !pointerActiveRef.current && !isHoveredRef.current) {
        target += autoPlayDirectionFactor * autoPlaySpeed * dt;
      }

      // Drag inertia / momentum damping
      target += velocityRef.current * dt;
      velocityRef.current *= Math.pow(0.92, dt * 60);
      if (Math.abs(velocityRef.current) < 0.2) velocityRef.current = 0;

      // Smooth spring relaxation towards target
      const springStiffness = pointerActiveRef.current ? 240 : 160;
      const springDamping = pointerActiveRef.current ? 30 : 26;
      const displacement = target - rendered;
      const acceleration = displacement * springStiffness - renderedVelocity * springDamping;
      renderedVelocity += acceleration * dt;
      rendered += renderedVelocity * dt;

      targetOffsetRef.current = target;
      renderedOffsetRef.current = rendered;
      renderedVelocityRef.current = renderedVelocity;

      applyFrameStyles(rendered);

      const remainingDisplacement = Math.abs(
        targetOffsetRef.current - renderedOffsetRef.current
      );
      const remainingRenderedVelocity = Math.abs(renderedVelocityRef.current);
      const shouldContinue =
        isInView &&
        (pointerActiveRef.current ||
          (autoPlay && !isHoveredRef.current) ||
          remainingDisplacement > 0.02 ||
          remainingRenderedVelocity > 0.02 ||
          Math.abs(velocityRef.current) > 0.02);

      shouldAnimateRef.current = shouldContinue;
      if (shouldContinue && typeof window !== "undefined") {
        rafRef.current = window.requestAnimationFrame(step);
      }
    },
    [applyFrameStyles, autoPlay, autoPlayDirectionFactor, autoPlaySpeed, isInView]
  );

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    applyFrameStyles(renderedOffsetRef.current);
  }, [applyFrameStyles]);

  useEffect(() => {
    const shouldStart = isInView && autoPlay;
    shouldAnimateRef.current = shouldStart;
    if (shouldStart) {
      requestAnimationIfNeeded();
    } else if (rafRef.current !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    return () => {
      if (rafRef.current !== null && typeof window !== "undefined") {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [autoPlay, isInView, requestAnimationIfNeeded]);

  // Pointer event handlers with full momentum physics
  const endPointerInteraction = useCallback(
    (event: React.PointerEvent) => {
      if (pointerIdRef.current !== event.pointerId) return;
      pointerActiveRef.current = false;
      const target = event.currentTarget;
      if (
        typeof target.hasPointerCapture === "function" &&
        typeof target.releasePointerCapture === "function" &&
        target.hasPointerCapture(event.pointerId)
      ) {
        target.releasePointerCapture(event.pointerId);
      }
      pointerIdRef.current = null;

      // Magnetic gentle snapping to nearest card when released with low velocity
      if (Math.abs(velocityRef.current) < 120) {
        targetOffsetRef.current = Math.round(targetOffsetRef.current / cardStep) * cardStep;
      }

      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    },
    [cardStep, requestAnimationIfNeeded]
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      pointerActiveRef.current = true;
      pointerIdRef.current = event.pointerId;
      dragMovedRef.current = false;
      lastXRef.current = event.clientX;
      lastPointerTimeRef.current = event.timeStamp;
      velocityRef.current = 0;
      renderedVelocityRef.current = 0;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch (_) {}
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    },
    [requestAnimationIfNeeded]
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!pointerActiveRef.current || pointerIdRef.current !== event.pointerId) return;
      const dx = event.clientX - lastXRef.current;
      if (!dragMovedRef.current && Math.abs(dx) > 4) {
        dragMovedRef.current = true;
      }
      const dt = Math.max((event.timeStamp - lastPointerTimeRef.current) / 1000, 0.001);
      lastXRef.current = event.clientX;
      lastPointerTimeRef.current = event.timeStamp;

      // Swiping right moves cards right (decreases targetOffset), swiping left advances cards (increases targetOffset)
      const scaledDx = -dx * dragSensitivity;
      const next = targetOffsetRef.current + scaledDx;
      targetOffsetRef.current = next;

      const instantaneousVelocity = scaledDx / dt;
      const clampedVelocity = Math.max(
        -maxMomentumVelocity,
        Math.min(maxMomentumVelocity, instantaneousVelocity)
      );
      const smoothing = 1 - Math.exp(-20 * dt);
      velocityRef.current =
        velocityRef.current + (clampedVelocity - velocityRef.current) * smoothing;
    },
    [dragSensitivity, maxMomentumVelocity]
  );

  const goToNext = useCallback(() => {
    targetOffsetRef.current = (Math.floor(targetOffsetRef.current / cardStep) + 1) * cardStep;
    velocityRef.current = 0;
    shouldAnimateRef.current = true;
    requestAnimationIfNeeded();
  }, [cardStep, requestAnimationIfNeeded]);

  const goToPrev = useCallback(() => {
    targetOffsetRef.current = (Math.ceil(targetOffsetRef.current / cardStep) - 1) * cardStep;
    velocityRef.current = 0;
    shouldAnimateRef.current = true;
    requestAnimationIfNeeded();
  }, [cardStep, requestAnimationIfNeeded]);

  const goToProject = useCallback(
    (index: number) => {
      const currentStepIndex = Math.round(targetOffsetRef.current / cardStep);
      const currentOrig = ((currentStepIndex % baseItems.length) + baseItems.length) % baseItems.length;
      let diff = index - currentOrig;
      if (diff > baseItems.length / 2) diff -= baseItems.length;
      if (diff < -baseItems.length / 2) diff += baseItems.length;
      targetOffsetRef.current = (currentStepIndex + diff) * cardStep;
      velocityRef.current = 0;
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    },
    [baseItems.length, cardStep, requestAnimationIfNeeded]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    },
    [goToNext, goToPrev]
  );

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    shouldAnimateRef.current = true;
    requestAnimationIfNeeded();
  }, [requestAnimationIfNeeded]);

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, item: CarouselItem) => {
      if (dragMovedRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (onSelectCard) {
        onSelectCard(item);
        return;
      }
      const link = item.link || "/contact";
      if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        navigate(link);
      }
    },
    [navigate, onSelectCard]
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate("/contact");
    },
    [navigate]
  );

  return (
    <section
      ref={trackRef}
      role="region"
      aria-label="Infinite 3D Project Showcase Carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endPointerInteraction}
      onPointerCancel={endPointerInteraction}
      onKeyDown={onKeyDown}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing focus:outline-none ${className}`}
      style={{
        touchAction: "pan-y",
        WebkitUserSelect: "none",
        ...style
      }}
    >
      {/* 3D Scene Viewport */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <div
          className="relative w-full h-full"
          style={{
            perspective: `${perspective}px`,
            transformStyle: "preserve-3d"
          }}
        >
          {safeItems.map((item, index) => {
            const initStyle = computeCardStyle(index, 0, safeItems.length, cardStep, cycle, sideRotation, sideTilt);
            return (
              <div
                key={item.id || index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={(e) => handleCardClick(e, item)}
                data-link={item.link || "/contact"}
                data-center={initStyle.absDistance < 0.5 ? "true" : "false"}
                className="group absolute left-1/2 top-1/2 flex flex-col overflow-hidden border border-white/20 shadow-2xl rounded-[24px] pointer-events-auto select-none"
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  borderRadius: `${radius}px`,
                  backgroundColor: item.bg || "#0096A8",
                  transformStyle: "preserve-3d",
                  transform: initStyle.transform,
                  opacity: initStyle.opacity,
                  visibility: initStyle.visibility,
                  zIndex: initStyle.zIndex,
                  willChange: "transform, opacity",
                  cursor: "grab"
                }}
              >
                {/* Card Image Area with Crisp WebP Graphic */}
                <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-black/20">
                  <img
                    src={encodeURI(item.image.replace('.webp', '-400w.webp'))}
                    srcSet={`${encodeURI(item.image.replace('.webp', '-300w.webp'))} 300w, ${encodeURI(item.image.replace('.webp', '-400w.webp'))} 400w, ${encodeURI(item.image.replace('.webp', '-600w.webp'))} 600w`}
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                    alt={item.alt || item.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Card Gradient & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Card Header & Footer Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 pointer-events-none">
                    <div className="flex justify-between items-start w-full">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-white/90 uppercase">
                        {item.category || "Project"}
                      </span>
                      <div
                        onClick={handleButtonClick}
                        className="carousel-btn pointer-events-auto inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                        style={{
                          opacity: initStyle.absDistance < 0.5 ? 1 : 0.85
                        }}
                      >
                        <span>Start Project</span>
                        <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-extrabold">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col text-left">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white tracking-tight leading-snug drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Navigation Arrow: Previous */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
        aria-label="Previous project"
        className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/80 dark:bg-black/60 backdrop-blur-md border border-border/80 text-primary hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-lg flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
      </button>

      {/* Floating Navigation Arrow: Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        aria-label="Next project"
        className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/80 dark:bg-black/60 backdrop-blur-md border border-border/80 text-primary hover:bg-background hover:scale-110 active:scale-95 transition-all shadow-lg flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        <ChevronRight className="w-5 h-5 translate-x-0.5" />
      </button>

      {/* Interactive Pagination Indicator Dots */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 pointer-events-auto px-4 py-1.5 rounded-full bg-background/40 dark:bg-black/40 backdrop-blur-sm border border-border/50">
        {baseItems.map((item, idx) => (
          <button
            key={item.id || idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToProject(idx);
            }}
            aria-label={`Go to ${item.title}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeDot === idx
                ? "w-6 h-2 bg-primary shadow-sm"
                : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
