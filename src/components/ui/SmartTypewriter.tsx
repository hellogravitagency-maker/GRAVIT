import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface SmartTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export default function SmartTypewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 30,
  delayBeforeDelete = 2500,
}: SmartTypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (words.length === 0) return;

    // Word completed, wait before deleting
    if (subIndex === words[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      return () => clearTimeout(timeout);
    }

    // Word fully deleted, move to next word
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Typing/Deleting effect
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed + Math.random() * 20);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  if (words.length === 0) return null;

  return (
    <span className="inline-flex items-center">
      <span className="text-primary">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-[0.1em] h-[0.9em] bg-primary ml-[2px] align-baseline rounded-sm"
      />
    </span>
  );
}
