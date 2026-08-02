import { motion } from 'framer-motion';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const testimonials = [
  {
    quote: "Gravit didn't just build our platform; they completely reimagined how our users interact with data in a 3D space.",
    name: "Sarah Jenkins",
    role: "CTO, FinTech Innovators",
    company: "FinTech Innovators",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The visual fidelity and performance they achieved on the web is indistinguishable from a native application. Absolutely stellar.",
    name: "Marcus Aurelius",
    role: "Head of Product, Roma Tech",
    company: "Roma Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Working with Gravit was a paradigm shift. They operate at the bleeding edge of what browsers can handle.",
    name: "Elena Rostova",
    role: "Founder, Spatial Labs",
    company: "Spatial Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "From the initial concept to the final WebGL render, their attention to detail and aesthetic taste is unmatched.",
    name: "David Chen",
    role: "Creative Director, Studio X",
    company: "Studio X",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 w-full relative z-10 overflow-hidden bg-transparent border-t border-white/5">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-24 flex flex-col items-center text-center">
        <h2 className="text-sm font-mono tracking-[0.3em] text-[#ff6a00] uppercase mb-4">Client Feedback</h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter font-['Outfit',sans-serif] text-white">Don't just take our word for it.</h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 md:gap-8 px-4 py-4 cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Double the array for seamless infinite looping */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[450px] shrink-0 p-8 rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-md flex flex-col justify-between min-h-[300px] transition-transform duration-500 hover:scale-[1.02] hover:border-white/20"
            >
              <div className="flex flex-col gap-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ff6a00]/50">
                  <path d="M10 11L8 15H11V18H5V11L7 7H10L10 11ZM19 11L17 15H20V18H14V11L16 7H19L19 11Z" fill="currentColor"/>
                </svg>
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale brightness-75 border border-white/20"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-wide text-sm">{testimonial.name}</span>
                  <span className="text-white/60 text-xs font-mono tracking-widest uppercase">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
