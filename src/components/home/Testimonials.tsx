import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Gravit built an amazing platform that makes it easy for our users to explore data in 3D.",
    name: "Priya Sharma",
    role: "CTO, Bharat FinTech",
    initials: "PS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "The website looks and runs so smoothly, it feels like a high-end mobile app. Outstanding work.",
    name: "Rohan Desai",
    role: "Head of Product, Mumbai Tech",
    initials: "RD",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Working with Gravit changed everything for us. They push the limits of what a website can do.",
    name: "Ananya Patel",
    role: "Founder, Spatial Labs India",
    initials: "AP",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "From the first idea to the final design, their attention to detail is unmatched.",
    name: "Vikram Singh",
    role: "Creative Director, Studio X Delhi",
    initials: "VS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 w-full relative z-10 overflow-hidden border-t border-border">
      <div className="section-editorial mb-10 md:mb-12 flex flex-col items-center text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">Client Feedback</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl display-editorial text-primary max-w-2xl">
          Don't just take our word for it.
        </h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 md:gap-6 px-4 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* Double for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[420px] shrink-0 bento-card p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div className="flex flex-col gap-5">
                {/* Quote mark */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-border">
                  <path d="M10 11L8 15H11V18H5V11L7 7H10L10 11ZM19 11L17 15H20V18H14V11L16 7H19L19 11Z" fill="currentColor" />
                </svg>
                <p className="text-primary text-base md:text-lg font-normal leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-secondary/10 flex items-center justify-center font-mono text-xs font-semibold text-primary shrink-0 relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover absolute inset-0 z-10"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="select-none z-0">{testimonial.initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-semibold text-sm tracking-tight">{testimonial.name}</span>
                  <span className="text-muted text-xs font-mono tracking-wide">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
