import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      <motion.div
        initial={{ filter: 'blur(10px)', scale: 0.98 }}
        animate={{ filter: 'blur(0px)', scale: 1 }}
        exit={{ filter: 'blur(10px)', scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

    </>
  );
}
