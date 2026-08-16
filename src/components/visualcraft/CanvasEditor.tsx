import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, ZoomOut, Maximize, MousePointer2, Hand } from 'lucide-react';

interface CanvasEditorProps {
  children: React.ReactNode;
  role: 'builder' | 'client';
}

export function CanvasEditor({ children, role }: CanvasEditorProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [tool, setTool] = useState<'select' | 'hand'>('select');
  const canvasRef = useRef<HTMLDivElement>(null);

  // Handle Zooming via Wheel
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        setZoom((prev) => Math.min(Math.max(0.2, prev + delta), 3));
      } else if (tool === 'hand' || e.shiftKey || e.button === 1) {
        setPan((prev) => ({
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY,
        }));
      }
    };

    canvas.addEventListener('wheel', handleWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleWheel);
  }, [tool]);

  // Handle Panning via Drag
  const handlePointerDown = (e: React.PointerEvent) => {
    if (tool === 'hand' || e.button === 1 || e.shiftKey) {
      setIsPanning(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isPanning) {
      setPan((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPanning(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex-1 h-full bg-[#111111] overflow-hidden flex flex-col">
      
      {/* Canvas Toolbar (Floating inside Canvas) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl shadow-2xl">
        <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg">
          <button 
            onClick={() => setTool('select')}
            className={`p-2 rounded-md transition-colors ${tool === 'select' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
          >
            <MousePointer2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setTool('hand')}
            className={`p-2 rounded-md transition-colors ${tool === 'hand' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
          >
            <Hand className="w-4 h-4" />
          </button>
        </div>

        <div className="w-px h-6 bg-neutral-800 mx-1" />

        <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg">
          <button onClick={() => setZoom(z => Math.max(0.2, z - 0.1))} className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-16 text-center text-xs font-mono font-bold text-neutral-300 select-none">
            {Math.round(zoom * 100)}%
          </div>
          <button onClick={() => setZoom(z => Math.min(3, z + 0.1))} className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        <div className="w-px h-6 bg-neutral-800 mx-1" />

        <button onClick={resetView} className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(50,100,255,0.03)_0%,transparent_70%)]" />

      {/* Interactive Canvas Area */}
      <div 
        ref={canvasRef}
        className={`flex-1 w-full h-full relative ${tool === 'hand' ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <motion.div
          animate={{ x: pan.x, y: pan.y, scale: zoom }}
          transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center"
        >
          {/* Website Viewport Frame */}
          <div 
            className="w-[1280px] h-[800px] bg-white shadow-2xl relative overflow-hidden pointer-events-auto ring-1 ring-neutral-800/50 rounded-2xl"
            style={{ 
              transition: 'box-shadow 0.3s ease',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.05)'
            }}
          >
            {/* Mock Browser Header (Premium MacOS Style) */}
            <div className="h-12 bg-[#1A1A1A] border-b border-neutral-800 flex items-center px-4 w-full select-none">
              <div className="flex gap-2 w-24">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#0A0A0A] border border-neutral-800 rounded-md px-32 py-1.5 flex items-center gap-2 shadow-inner">
                  <span className="text-[11px] text-neutral-500">🔒</span>
                  <span className="text-xs text-neutral-300 font-medium tracking-wide">gravit.agency/visualcraft</span>
                </div>
              </div>
              <div className="w-24" /> {/* Spacer for centering */}
            </div>

            {/* The Actual Rendered Content */}
            <div className="w-full h-[calc(100%-3rem)] overflow-y-auto custom-scrollbar bg-canvas">
              {children}
            </div>

            {/* Client Overlay Mode */}
            {role === 'client' && (
              <div className="absolute inset-0 pointer-events-none z-50">
                <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-lg pointer-events-auto">
                  Client Review Mode
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
