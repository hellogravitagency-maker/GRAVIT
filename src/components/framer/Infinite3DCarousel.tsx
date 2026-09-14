import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

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
    title: "Project 1",
    category: "Portfolio",
    image: "/images/Yellow Porsche GT3 RS Editorial Landing Page.png",
    alt: "Yellow Porsche GT3 RS",
    link: "/contact",
    accent: "#6355D8",
    bg: "#6355D8",
    hasButton: true
  },
  {
    id: 2,
    title: "Project 2",
    category: "Portfolio",
    image: "/images/Aurelia Academy Brighter Tomorrow.png",
    alt: "Aurelia Academy",
    link: "/contact",
    accent: "#FA5D5D",
    bg: "#FA5D5D",
    hasButton: true
  },
  {
    id: 3,
    title: "Project 3",
    category: "Portfolio",
    image: "/images/KŌZU Ramen Bowls That Bring Good Mood.png",
    alt: "KOZU Ramen Bowls",
    link: "/contact",
    accent: "#0096A8",
    bg: "#0096A8",
    hasButton: true
  },
  {
    id: 4,
    title: "Project 4",
    category: "Portfolio",
    image: "/images/Shadow Garden Portfolio Interface.png",
    alt: "Shadow Garden Portfolio",
    link: "/contact",
    accent: "#79D862",
    bg: "#79D862",
    hasButton: true
  },
  {
    id: 5,
    title: "Project 5",
    category: "Portfolio",
    image: "/images/VÉLORA Style Moves With You.png",
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
  blurAmount = 6,
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
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
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
    if (windowWidth < 640) return 350;
    if (windowWidth < 1024) return 400;
    return 460;
  }, [propCardHeight, windowWidth]);

  const overlap = useMemo(() => {
    if (propOverlap !== undefined) return propOverlap;
    if (windowWidth < 640) return 140;
    if (windowWidth < 1024) return 170;
    return 200;
  }, [propOverlap, windowWidth]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
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

  const safeItems = useMemo(() => {
    const list = items.length > 0 ? items : DEFAULT_ITEMS;
    
    // Duplicate list until it has at least 12 items to prevent wrapping glitch
    // This ensures cards wrap while they are completely out of view.
    if (list.length < 12) {
      const multiplied = [];
      const times = Math.ceil(12 / list.length);
      for (let i = 0; i < times; i++) {
        multiplied.push(...list.map((item, index) => ({ 
          ...item, 
          // Unique ID to avoid React key warnings
          id: `${item.id || index}-${i}` 
        })));
      }
      return multiplied;
    }
    return list;
  }, [items]);
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    return autoPlayDirection === "Backward" ? 1 : -1;
  }, [autoPlayDirection]);

  // Apply 3D math directly to each DOM node based on wrapped relative distance
  const applyFrameStyles = useCallback(
    (rendered: number) => {
      if (safeItems.length === 0) return;

      for (let i = 0; i < safeItems.length; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        const basePosition = i * cardStep;
        let relativePosition = (basePosition - rendered) % cycle;
        
        // Wrap position to [-cycle/2, cycle/2)
        if (relativePosition > cycle / 2) relativePosition -= cycle;
        if (relativePosition < -cycle / 2) relativePosition += cycle;
        
        const absDistance = Math.abs(relativePosition) / cardStep;
        const clampedDistance = Math.min(absDistance, 2.25);
        const direction = relativePosition === 0 ? 0 : relativePosition > 0 ? 1 : -1;
        const eased = Math.min(1, clampedDistance / 2);
        const depthEase = Math.pow(eased, 0.9);

        const translateX = relativePosition;
        const rotateY = -direction * depthEase * sideRotation;
        const rotateZ = direction * depthEase * sideTilt;
        const scale = 1 - depthEase * 0.22;
        const translateZ = 120 - depthEase * 170;
        const zIndex = 1000 - Math.round(clampedDistance * 100);

        const fadeStartDistance = 1.45;
        const fadeEndDistance = Math.max(2.5, safeItems.length / 2);
        const edgeOpacity = Math.max(
          0,
          Math.min(1, 1 - smoothstep(fadeStartDistance, fadeEndDistance, absDistance))
        );

        const blurDepth = smoothstep(0.35, 2.25, absDistance);
        const blurPx = blurAmount <= 0 ? 0 : blurAmount * blurDepth;

        const shadowEase = smoothstep(0, 1.5, absDistance);
        const shadowYOffset = 26 - shadowEase * 12;
        const shadowBlur = 48 - shadowEase * 16;
        const shadowAlpha = 0.32 - shadowEase * 0.12;

        cardEl.style.zIndex = String(zIndex);
        cardEl.style.opacity = String(edgeOpacity);
        cardEl.style.visibility = edgeOpacity > 0.01 ? "visible" : "hidden";
        cardEl.style.transform = `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
        cardEl.style.filter = blurPx > 0 ? `blur(${blurPx}px)` : "none";
        cardEl.style.boxShadow = `0 ${shadowYOffset}px ${shadowBlur}px rgba(0, 0, 0, ${Math.max(
          0.14,
          shadowAlpha
        )}), 0 2px 12px rgba(0,0,0,0.12)`;

        // Highlight center button if active
        const isCenter = absDistance < 0.5;
        cardEl.setAttribute("data-center", isCenter ? "true" : "false");
        
        // Show/hide button based on center focus
        const btnEl = cardEl.querySelector('.carousel-btn') as HTMLElement;
        if (btnEl) {
          btnEl.style.opacity = (safeItems[i].hasButton || isCenter) ? "1" : "0";
          btnEl.style.pointerEvents = (safeItems[i].hasButton || isCenter) ? "auto" : "none";
        }
      }
    },
    [blurAmount, cardStep, cycle, safeItems, sideRotation, sideTilt]
  );

  const requestAnimationIfNeeded = useCallback(() => {
    if (typeof window === "undefined") return;
    if (rafRef.current !== null) return;
    if (!shouldAnimateRef.current) return;
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

      // Auto-play when idle
      if (isInView && autoPlay && !pointerActiveRef.current) {
        target += autoPlayDirectionFactor * autoPlaySpeed * dt;
      }

      // Drag inertia / momentum damping
      target += velocityRef.current * dt;
      velocityRef.current *= Math.pow(0.94, dt * 60);
      if (Math.abs(velocityRef.current) < 0.2) velocityRef.current = 0;

      // Smooth spring relaxation
      const springStiffness = pointerActiveRef.current ? 240 : 170;
      const springDamping = pointerActiveRef.current ? 30 : 24;
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
          autoPlay ||
          remainingDisplacement > 0.015 ||
          remainingRenderedVelocity > 0.015 ||
          Math.abs(velocityRef.current) > 0.015);

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
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    },
    [requestAnimationIfNeeded]
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      pointerActiveRef.current = true;
      pointerIdRef.current = event.pointerId;
      dragMovedRef.current = false;
      lastXRef.current = event.clientX;
      lastPointerTimeRef.current = event.timeStamp;
      targetOffsetRef.current = renderedOffsetRef.current;
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

      const scaledDx = dx * dragSensitivity;
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

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? -1 : 1;
      const nextTarget = targetOffsetRef.current + direction * cardStep;
      targetOffsetRef.current = nextTarget;
      shouldAnimateRef.current = true;
      requestAnimationIfNeeded();
    },
    [cardStep, requestAnimationIfNeeded]
  );

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      endPointerInteraction(event);
    },
    [endPointerInteraction]
  );

  const onPointerCancel = useCallback(
    (event: React.PointerEvent) => {
      if (pointerIdRef.current === event.pointerId) {
        endPointerInteraction(event);
      }
    },
    [endPointerInteraction]
  );

  const onPointerLeave = useCallback(
    (event: React.PointerEvent) => {
      if (pointerActiveRef.current && pointerIdRef.current === event.pointerId) {
        endPointerInteraction(event);
      }
    },
    [endPointerInteraction]
  );

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
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerLeave}
      onKeyDown={onKeyDown}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing focus:outline-none ${className}`}
      style={{
        touchAction: "pan-y",
        WebkitUserSelect: "none",
        ...style
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <div
          className="relative w-full h-full"
          style={{
            perspective: `${perspective}px`,
            transformStyle: "preserve-3d"
          }}
        >
          {safeItems.map((item, index) => (
            <div
              key={item.id || index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={(e) => handleCardClick(e, item)}
              data-link={item.link || "/contact"}
              className="group absolute left-1/2 top-1/2 flex flex-col overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 pointer-events-auto"
              style={{
                width: `${cardWidth}px`,
                minWidth: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: `${radius}px`,
                backgroundColor: item.bg || "#0096A8",
                transformStyle: "preserve-3d",
                transform: "translate3d(-50%, -50%, 0)",
                willChange: "transform, filter, opacity",
                cursor: "grab"
              }}
            >
              {/* Card Image Area */}
              <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Start Project Overlay Button */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 pointer-events-none">
                  <div className="flex justify-end w-full">
                    <div
                      onClick={handleButtonClick}
                      className="carousel-btn pointer-events-auto inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <span>Start Project</span>
                      <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-extrabold">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
