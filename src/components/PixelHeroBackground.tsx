import React, { useRef, useEffect } from 'react';

export default function PixelHeroBackground({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const grid = gridRef.current;
    
    const PIXEL_SIZE = 60; // 60px squares for performance
    let cols = 0;
    let rows = 0;
    let cells: HTMLDivElement[] = [];
    
    const createGrid = () => {
      grid.innerHTML = '';
      cols = Math.ceil(window.innerWidth / PIXEL_SIZE);
      rows = Math.ceil(window.innerHeight / PIXEL_SIZE);
      cells = [];
      
      grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      
      for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement('div');
        cell.className = 'w-full h-full transition-colors duration-[2s] ease-out';
        cell.style.border = '1px solid rgba(255,255,255,0.02)';
        cells.push(cell);
        grid.appendChild(cell);
      }
    };
    
    createGrid();
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cols === 0) return;
      const x = Math.floor(e.clientX / PIXEL_SIZE);
      // We must account for scroll position since we use clientY, or use pageY relative to container.
      // Since it's a 100vh hero, we can use e.clientY if the hero is fixed or if we're at the top.
      // Better to use pageY and subtract the grid's top offset.
      const rect = grid.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      const relativeX = e.clientX - rect.left;
      
      if (relativeY < 0 || relativeY > rect.height || relativeX < 0 || relativeX > rect.width) return;
      
      const gridX = Math.floor(relativeX / PIXEL_SIZE);
      const gridY = Math.floor(relativeY / PIXEL_SIZE);
      
      const index = gridY * cols + gridX;
      
      if (cells[index]) {
        const cell = cells[index];
        cell.style.transition = 'none';
        cell.style.backgroundColor = '#ffffff';
        
        setTimeout(() => {
          cell.style.transition = 'background-color 2s ease-out';
          cell.style.backgroundColor = 'transparent';
        }, 10);
      }
    };
    
    window.addEventListener('resize', createGrid);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', createGrid);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-black flex flex-col justify-center items-center text-center">
      {/* Background Matrix Grid */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-0 grid pointer-events-none"
      />
      
      {/* Foreground Content */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center items-center z-10 relative">
        {children}
      </div>
    </section>
  );
}
