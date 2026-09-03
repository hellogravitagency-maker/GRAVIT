import React, { useState, useEffect, useRef } from 'react';

export default function LazySection({ 
  children, 
  rootMargin = '400px', 
  minHeight = '300px' 
}: { 
  children: React.ReactNode, 
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
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }} className="contents">
      {isVisible ? children : null}
    </div>
  );
}
