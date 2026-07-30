import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  
  const scramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText((prev) => 
        text.split("").map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (char === " ") return " ";
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }).join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
      }
      iteration += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <motion.span 
      className={className}
      onMouseEnter={scramble}
    >
      {displayText}
    </motion.span>
  );
}
