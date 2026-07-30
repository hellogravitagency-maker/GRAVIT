import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const AnimatedSpan = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export const TypingAnimation = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText((prev) => prev + text[charIndex]);
          charIndex++;
        } else {
          clearInterval(timeout);
        }
      }, 30); // Typing speed
    };

    const initialDelay = setTimeout(startTyping, delay * 1000);

    return () => {
      clearInterval(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, delay]);

  return (
    <div className={cn(className)}>
      {displayedText}
      <span className="animate-pulse font-bold text-white">_</span>
    </div>
  );
};

export const Terminal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full rounded-xl border border-[#2F3336] bg-black shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs sm:text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2F3336] bg-[#16181C]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-50"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-50"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-50"></div>
      </div>
      <div className="p-4 flex flex-col gap-2 h-72 overflow-y-auto">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            // Give sequential delays to children so they appear one after another
            return React.cloneElement(child, { delay: index * 0.4 } as any);
          }
          return child;
        })}
      </div>
    </div>
  );
};

export function TerminalDemo() {
  return (
    <Terminal key={Date.now()}>
      <TypingAnimation text="> pnpm dlx shadcn@latest init" />

      <AnimatedSpan className="text-green-500">
        ✔ Preflight checks.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Verifying framework. Found Next.js.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating Tailwind CSS.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Validating import alias.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Writing components.json.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Checking registry.
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating tailwind.config.ts
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Updating app/globals.css
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Installing dependencies.
      </AnimatedSpan>

      <AnimatedSpan className="text-[#48CAE4] flex flex-col gap-1">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation className="text-[#71767B]" text="Success! Project initialization completed." />

      <TypingAnimation className="text-[#71767B]" text="You may now add components." />
    </Terminal>
  );
}
