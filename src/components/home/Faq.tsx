import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm md:text-[17px] font-medium text-accent mb-4">FAQ</p>
          <h2 className="display-editorial text-4xl md:text-6xl lg:text-7xl text-primary">Questions? Answers.</h2>
        </div>

        <div className="gsap-stagger border-t border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg md:text-2xl font-semibold tracking-[-0.025em] text-primary">{faq.question}</span>
                  <Plus size={24} strokeWidth={1.75}
                    className={`shrink-0 text-muted group-hover:text-primary transition ${isOpen ? 'rotate-45 text-primary' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.28, 0.11, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-10 text-base md:text-lg text-secondary leading-relaxed tracking-[-0.015em]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
