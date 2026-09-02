import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects run 4–8 weeks depending on scope, from kickoff to go-live. Complex web applications may take 10–16 weeks.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes — every project includes a 30-day warranty, with optional Annual Maintenance Contracts for ongoing updates, monitoring, and improvements.'
  },
  {
    question: 'Who owns the website once it\'s built?',
    answer: 'You do. Full ownership of the design and code transfers to you on final payment. No lock-in, no proprietary platforms.'
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely. We can work from existing brand books and design systems, or help you build one from scratch as part of the project scope.'
  },
  {
    question: 'What does a typical project cost?',
    answer: 'Packages start at ₹20,000 for a Starter site, scaling up based on features and design complexity. We quote based on a short discovery call.'
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="section-editorial">
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl display-editorial text-primary">
            Common questions
          </h2>
        </div>

        <div ref={listRef} className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-border group">
              <button
                onClick={() => toggle(index)}
                className="w-full py-7 md:py-8 flex items-center justify-between text-left cursor-pointer outline-none"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-muted group-hover:text-secondary transition-colors duration-300 tabular-nums">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-base md:text-lg font-medium tracking-tight text-primary">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`text-xl font-mono text-muted group-hover:text-primary transition-all duration-400 ease-[0.16,1,0.3,1] flex items-center justify-center w-8 h-8 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
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
                    <p className="text-sm text-secondary leading-relaxed pb-7 pl-10 md:pl-[3.25rem]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
