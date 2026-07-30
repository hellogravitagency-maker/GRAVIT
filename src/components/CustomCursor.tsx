import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useCursorStore } from '../store/useCursorStore';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { mode, text } = useCursorStore();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const isHidden = mode === 'hidden';
  const isHover = mode === 'hover';
  const isView = mode === 'view';

  let size = 12;
  if (isHover) size = 48;
  if (isView) size = 80;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full mix-blend-difference overflow-hidden bg-white"
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        width: size,
        height: size,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.5,
      }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isView ? 1 : 0, 
          scale: isView ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="text-black text-[10px] font-bold tracking-widest uppercase mix-blend-normal"
      >
        {text || 'VIEW'}
      </motion.span>
    </motion.div>
  );
}
