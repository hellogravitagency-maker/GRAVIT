const clients = [
  { name: "Little Stars Academy", role: "Client" },
  { name: "SSV School", role: "Client" },
  { name: "RUCE Campus", role: "Client" },
  { name: "Wonderkids Academy", role: "Client" },
  { name: "INEX Studio", role: "Photography Partner", highlight: true }
];

export default function TrustedBy() {
  return (
    <section className="py-14 md:py-20 border-b border-border/40">
      <p className="text-center text-xs md:text-sm uppercase tracking-widest text-muted font-mono mb-8 md:mb-10">
        Trusted by ambitious institutions & creative partners
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14 px-6 max-w-6xl mx-auto">
        {clients.map((item) => (
          <li 
            key={item.name} 
            className={`flex items-center gap-2 text-base md:text-lg font-semibold tracking-[-0.02em] transition-all whitespace-nowrap ${
              item.highlight 
                ? 'text-primary bg-surface-hover/80 border border-white/10 px-4 py-1.5 rounded-full hover:border-[#FF4D4D]/40' 
                : 'text-secondary/70 hover:text-primary'
            }`}
          >
            {item.highlight && (
              <span className="h-2 w-2 rounded-full bg-[#FF4D4D] animate-pulse" />
            )}
            <span>{item.name}</span>
            {item.role === 'Photography Partner' && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent ml-1 bg-accent/10 px-2 py-0.5 rounded-full">
                Photography
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
