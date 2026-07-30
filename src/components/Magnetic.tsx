import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useCursorStore } from '../store/useCursorStore';
import { useUISound } from '../hooks/useUISound';

export default function Magnetic({ children, className = "inline-block" }: { children: React.ReactElement, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const { setMode } = useCursorStore();
  const { playHover, playClick } = useUISound();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseEnter = () => {
    setMode('hover');
    playHover();
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setMode('default');
  };

  const handleClick = () => {
    playClick();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={reset}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
