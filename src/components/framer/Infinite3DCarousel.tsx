import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface CarouselItem {
  id?: string | number;
  title: string;
  category?: string;
  image: string;
  alt?: string;
  link?: string;
  accent?: string;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Aetheris AI",
    category: "Next-Gen Intelligence",
    image: "/assets/work/premium_web_ai_1788031024675.jpg",
    alt: "Aetheris AI Platform",
    link: "/work",
    accent: "#3F6B7D"
  },
  {
    id: 2,
    title: "Aethelred & Co.",
    category: "Architecture & Space",
    image: "/assets/work/premium_web_architecture_1788031038602.jpg",
    alt: "Aethelred Architectural Studio",
    link: "/work",
    accent: "#9C5468"
  },
  {
    id: 3,
    title: "Aura Cloud",
    category: "SaaS Ecosystem",
    image: "/assets/work/premium_web_saas_1788031048052.jpg",
    alt: "Aura Cloud SaaS Platform",
    link: "/work",
    accent: "#B0654A"
  },
  {
    id: 4,
    title: "Avant Garde",
    category: "Creative Direction",
    image: "/assets/work/premium_web_portfolio_1788031060883.jpg",
    alt: "Avant Garde Design Portfolio",
    link: "/work",
    accent: "#5A7D62"
  },
  {
    id: 5,
    title: "Nexus DeFi",
    category: "Holographic Web3",
    image: "/assets/work/premium_web_web3_1788031072809.jpg",
    alt: "Nexus DeFi Protocol",
    link: "/work",
    accent: "#6F63A0"
  },
  {
    id: 6,
    title: "Nova Capital",
    category: "Fintech & Banking",
    image: "/assets/work/fintech_landing_page_1788030771863.jpg",
    alt: "Nova Capital Fintech Platform",
    link: "/work",
    accent: "#2563EB"
  },
  {
    id: 7,
    title: "Maison Élan",
    category: "Luxury Fashion",
    image: "/assets/work/luxury_fashion_web_1788030762128.jpg",
    alt: "Maison Élan Luxury E-Commerce",
    link: "/work",
    accent: "#D97706"
  },
  {
    id: 8,
    title: "Veloce Gear",
    category: "Cyberpunk Commerce",
    image: "/assets/work/cyberpunk_ecommerce_1788030750391.jpg",
    alt: "Veloce Gear Cyberpunk Store",
    link: "/work",
    accent: "#EC4899"
  }
];

function toSignedWrap(value: number, cycle: number): number {
  if (cycle <= 0) return 0;
  const wrapped = (((value + cycle / 2) % cycle) + cycle) % cycle - cycle / 2;
  return wrapped;
}

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
}

export default function Infinite3DCarousel({
  items = DEFAULT_ITEMS,
  cardWidth: propCardWidth,
  cardHeight: propCardHeight,
  radius = 20,
  blurAmount = 8,
  dragSensitivity = 1,
  autoPlay = true,
  autoPlaySpeed = 26,
  autoPlayDirection = "Forward",
  perspective = 1800,
  sideRotation = 14,
  sideTilt = 6,
  overlap: propOverlap,
  className = "",
  style
}: Infinite3DCarouselProps) {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Track responsive screen width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute responsive card sizing
  const cardWidth = useMemo(() => {
    if (propCardWidth) return propCardWidth;
    if (windowWidth < 640) return 270;
    if (windowWidth < 1024) return 330;
    return 390;
  }, [propCardWidth, windowWidth]);

  const cardHeight = useMemo(() => {
    if (propCardHeight) return propCardHeight;
    if (windowWidth < 640) return 340;
    if (windowWidth < 1024) return 390;
    return 440;
  }, [propCardHeight, windowWidth]);

  const overlap = useMemo(() => {
    if (propOverlap !== undefined) return propOverlap;
    if (windowWidth < 640) return 180;
    if (windowWidth < 1024) return 230;
    return 270;
  }, [propOverlap, windowWidth]);

  // Safe In View observer
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

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const categoryRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const imageAssignmentCacheRef = useRef<(any)[]>([null, null, null, null, null]);

  const safeItems = useMemo(() => {
    return items.length > 0 ? items : DEFAULT_ITEMS;
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
    return autoPlayDirection === "Backward" ? 1 : -1;
  }, [autoPlayDirection]);

  // Apply 3D math & styling to the 5 virtual card slots
  const applyFrameStyles = useCallback(
    (rendered: number) => {
      if (safeItems.length === 0) return;
      const signed = toSignedWrap(rendered, cycle);
      const activeFloatIndex = -signed / cardStep;
      const nearestCenter = Math.round(activeFloatIndex);

      for (let slot = 0; slot < 5; slot++) {
        const cardEl = cardRefs.current[slot];
        const imageEl = imageRefs.current[slot];
        const titleEl = titleRefs.current[slot];
        const catEl = categoryRefs.current[slot];
        if (!cardEl || !imageEl) continue;

        const virtualIndex = nearestCenter + (slot - 2);
        const wrappedItemIndex =
          ((virtualIndex % safeItems.length) + safeItems.length) % safeItems.length;
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
        const scale = 1 - depthEase * 0.24;
        const translateZ = 110 - depthEase * 160;
        const zIndex = 1000 - Math.round(clampedDistance * 100);

        const fadeStartDistance = 1.4;
        const fadeEndDistance = 2.85;
        const edgeOpacity = Math.max(
          0,
          Math.min(1, 1 - smoothstep(fadeStartDistance, fadeEndDistance, absDistance))
        );

        const blurDepth = smoothstep(0.35, 2.25, absDistance);
        const blurPx = blurAmount <= 0 ? 0 : blurAmount * blurDepth;

        const shadowEase = smoothstep(0, 1.5, absDistance);
        const shadowYOffset = 22 - shadowEase * 10;
        const shadowBlur = 44 - shadowEase * 14;
        const shadowAlpha = 0.28 - shadowEase * 0.1;

        cardEl.style.zIndex = String(zIndex);
        cardEl.style.opacity = String(edgeOpacity);
        cardEl.style.transform = `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
        cardEl.style.filter = blurPx > 0 ? `blur(${blurPx}px)` : "none";
        cardEl.style.boxShadow = `0 ${shadowYOffset}px ${shadowBlur}px rgba(0, 0, 0, ${Math.max(
          0.12,
          shadowAlpha
        )}), 0 2px 10px rgba(0,0,0,0.1)`;

        // Update active center prominence
        const isCenter = absDistance < 0.5;
        cardEl.setAttribute("data-center", isCenter ? "true" : "false");

        // Content updates with cache check to eliminate layout thrashing
        const nextSrc = item.image;
        const nextAlt = item.alt || item.title;
        const nextTitle = item.title;
        const nextCat = item.category || "Case Study";
        const nextLink = item.link || "/work";

        const cached = imageAssignmentCacheRef.current[slot];
        const changed =
          !cached ||
          cached.itemIndex !== wrappedItemIndex ||
          cached.src !== nextSrc ||
          cached.title !== nextTitle;

        if (changed) {
          imageEl.src = nextSrc;
          imageEl.alt = nextAlt;
          if (titleEl) titleEl.textContent = nextTitle;
          if (catEl) catEl.textContent = nextCat;
          cardEl.dataset.link = nextLink;

          imageAssignmentCacheRef.current[slot] = {
            itemIndex: wrappedItemIndex,
            src: nextSrc,
            title: nextTitle,
            category: nextCat,
            link: nextLink
          };
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
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (dragMovedRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const link = e.currentTarget.dataset.link;
      if (link) {
        if (link.startsWith("http")) {
          window.open(link, "_blank", "noopener,noreferrer");
        } else {
          navigate(link);
        }
      }
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
          {[...Array(5)].map((_, slot) => {
            const initialItem = safeItems[slot % safeItems.length];
            return (
              <div
                key={`slot-${slot}`}
                ref={(el) => {
                  cardRefs.current[slot] = el;
                }}
                onClick={handleCardClick}
                data-link={initialItem.link || "/work"}
                className="group absolute left-1/2 top-1/2 flex flex-col overflow-hidden bg-[#0e1015] border border-white/10 dark:border-white/15 shadow-2xl transition-shadow duration-300 pointer-events-auto"
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  borderRadius: `${radius}px`,
                  transformStyle: "preserve-3d",
                  transform: "translate3d(-50%, -50%, 0)",
                  willChange: "transform, filter",
                  cursor: "grab"
                }}
              >
                {/* Visual Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    ref={(el) => {
                      imageRefs.current[slot] = el;
                    }}
                    src={initialItem.image}
                    alt={initialItem.alt || initialItem.title}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 pointer-events-none" />

                  {/* Subtle Top Glare Border */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                  {/* Top Badge: Featured Work Indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-white/90 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span
                        ref={(el) => {
                          categoryRefs.current[slot] = el;
                        }}
                      >
                        {initialItem.category || "Case Study"}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Bottom Info: Title & Action */}
                  <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col pointer-events-none z-10">
                    <h3
                      ref={(el) => {
                        titleRefs.current[slot] = el;
                      }}
                      className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-1 drop-shadow-md"
                    >
                      {initialItem.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
                      <span>Explore Case Study</span>
                      <span>—</span>
                      <span className="text-accent group-hover:underline">View Project</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
