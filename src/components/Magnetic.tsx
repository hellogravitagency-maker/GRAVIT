import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useCursorStore } from '../store/useCursorStore';
import { useUISound } from '../hooks/useUISound';

export default function Magnetic({ children, className = "inline-block" }: { children: React.ReactElement, className?: string }) {
  return <div className={className}>{children}</div>;
}
