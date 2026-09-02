import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
 children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
 return (
 <>
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
 className="w-full h-full"
 >
 {children}
 </motion.div>

 </>
 );
}
