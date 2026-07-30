"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "../lib/utils";
import PixelCard from "./PixelCard";

const technologies = [
  { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", invert: true, color: "#ffffff" },
  { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", color: "#06B6D4" },
  { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", color: "#A259FF" },
  { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", color: "#339933" },
  { name: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg", color: "#646CFF" },
  { name: "GraphQL", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg", color: "#E10098" },
  { name: "Vue", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", color: "#4FC08D" },
  { name: "Svelte", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg", color: "#FF3E00" },
];

export const TechStackReveal = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[1.5rem] h-full min-h-[200px]"
          >
            <PixelCard
              variant="default"
              speed={40}
              gap={10}
              colors={`#111111,#222222,${tech.color}`}
              className="w-full h-full relative flex flex-col items-center justify-center p-10 bg-[#050505] border border-white/5 rounded-[1.5rem] hover:border-white/20 transition-all duration-700 cursor-default overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={cn(
                    "w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 mb-6",
                    tech.invert && "invert"
                  )}
                />
                <span className="font-mono text-xs text-white/30 group-hover:text-white/90 tracking-widest uppercase transition-colors duration-700">
                  {tech.name}
                </span>
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
