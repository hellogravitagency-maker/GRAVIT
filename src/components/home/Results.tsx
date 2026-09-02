import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const Counter = ({ end, suffix = '', duration = 1400 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tabular-nums text-primary tracking-tighter">
      {count}{suffix}
    </div>
  );
};

export default function Results() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const cards = [
    {
      title: "On-Time Delivery",
      content: <Counter end={100} suffix="%" />,
      description: "Flawless execution delivered precisely when promised, every single time.",
    },
    {
      title: "Web Specialists",
      content: <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-primary tracking-tighter">3D</div>,
      description: "Pioneering interactive spatial computing, WebGL, and immersive browser experiences.",
    },
    {
      title: "Response Time",
      content: <Counter end={24} suffix="H" />,
      description: "Rapid communication loops ensuring your project never stalls.",
    }
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border" ref={containerRef}>
      <div className="section-editorial">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">Results</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl display-editorial text-primary">
              Metrics that <span className="text-muted">matter.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bento-card group p-8 md:p-10 flex flex-col justify-between min-h-[300px]"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-muted group-hover:text-secondary transition-colors duration-400">
                {String(idx + 1).padStart(2, '0')} — {card.title}
              </div>

              <div className="mt-auto">
                {card.content}
                <p className="text-secondary text-sm leading-relaxed mt-4 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
