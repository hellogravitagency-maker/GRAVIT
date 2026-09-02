import { useRef } from 'react';

const clients = [
  "Little Stars Academy",
  "SSV School",
  "RUCE Campus",
  "Wonderkids Academy"
];

export default function TrustedBy() {
  return (
    <section className="py-8 md:py-12 border-y border-border overflow-hidden">

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left/Right fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {/* Double the array for seamless looping */}
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-8 md:gap-12 px-8 md:px-12 shrink-0"
            >
              <span className="text-sm md:text-base font-medium tracking-tight text-muted whitespace-nowrap uppercase">
                {name}
              </span>
              <span className="text-border text-lg">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
