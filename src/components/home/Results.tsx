import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { GlowingEffect } from '../ui/glowing-effect';

const Counter = ({ end, suffix = '', duration = 1400 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
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
    <div ref={ref} className="text-6xl md:text-7xl lg:text-8xl font-bold tabular-nums text-white tracking-tighter">
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
      description: "Flawless execution delivered precisely when promised, every single time. Your deadlines are our absolute baseline.",
    },
    {
      title: "Web Specialists",
      content: <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">3D</div>,
      description: "Pioneering interactive spatial computing, WebGL, and immersive browser experiences that captivate.",
    },
    {
      title: "Response Time",
      content: <Counter end={24} suffix="H" />,
      description: "Rapid communication loops ensuring your project never stalls. We're always online when you need us.",
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10" ref={containerRef}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase block mb-6">[07. RESULTS]</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-heading">
            Metrics that <span className="text-white/60">matter.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[350px] md:h-[400px] rounded-3xl border border-white/5 bg-black/40 backdrop-blur-md overflow-hidden group"
          >
            <GlowingEffect 
              blur={0} 
              borderWidth={1} 
              spread={40} 
              glow={true} 
              disabled={false} 
              proximity={64} 
              inactiveZone={0.01} 
              variant="brand"
            />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 pointer-events-none">
              <div className="text-white/60 text-xs font-mono uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                {String(idx + 1).padStart(2, '0')} // {card.title}
              </div>
              
              <div>
                {card.content}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-white/60 text-sm font-body leading-relaxed max-w-[95%]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background dynamic gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6a00]/0 via-[#ff6a00]/0 to-[#ff6a00]/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-700 ease-out pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
