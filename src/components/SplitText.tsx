import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden leading-tight">
          {word.split('').map((char, charIndex) => {
            const absoluteIndex = wordIndex * 10 + charIndex; // simple approximation for stagger
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: delay + absoluteIndex * 0.02,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block origin-top-left"
              >
                {char}
              </motion.span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
}
