import React, { useState, useEffect } from 'react';

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
