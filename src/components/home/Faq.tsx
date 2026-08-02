import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How long does a school website project take?',
    answer: 'Most projects run 4–8 weeks depending on package, from kickoff to go-live.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes — every project includes a 30-day warranty, with optional Annual Maintenance Contracts for ongoing updates.'
  },
  {
    question: 'Who owns the website once it\'s built?',
    answer: 'You do. Full ownership of the design and code transfers to you on final payment.'
  },
  {
    question: 'Can you work with our existing content, or do we need everything ready first?',
    answer: 'We can help with copywriting and photography if needed, but a completed content checklist speeds up the timeline significantly.'
  },
  {
    question: 'What does a typical project cost?',
    answer: 'Packages start at ₹20,000 for a Starter site, scaling up based on features and design complexity. We\'ll quote based on a short discovery call.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.faq-item');
      
      gsap.fromTo(items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 w-full border-t border-white/20 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff6a00] uppercase">[09. FAQ]</span>
      </div>

      <div ref={listRef} className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b border-white/10 group">
            <button
              onClick={() => toggle(index)}
              className="w-full py-8 flex items-center justify-between text-left cursor-pointer outline-none"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-white/40 group-hover:text-[#ff6a00] transition-colors duration-300">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl font-medium tracking-tight text-white group-hover:text-white/80 transition-colors duration-300">
                  {faq.question}
                </span>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div 
                  className={`text-2xl font-mono text-white/40 group-hover:text-[#ff6a00] transition-all duration-400 ease-[0.16,1,0.3,1] flex items-center justify-center w-8 h-8 ${openIndex === index ? 'rotate-45 !text-white' : ''}`}
                >
                  +
                </div>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-white/60 leading-relaxed pb-8 pl-10 md:pl-[3.25rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
