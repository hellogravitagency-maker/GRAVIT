import React, { useState, useEffect, useRef } from 'react';

export default function LazySection({ 
  children, 
  rootMargin = '100px', 
  minHeight = '300px' 
}: { 
  children: React.ReactNode | (() => React.ReactNode), 
  rootMargin?: string, 
  minHeight?: string 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }} className="w-full relative">
      {isVisible ? (typeof children === 'function' ? (children as () => React.ReactNode)() : children) : null}
    </div>
  );
}
