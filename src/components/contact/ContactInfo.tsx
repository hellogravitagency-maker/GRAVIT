import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <div className="flex flex-col gap-24">
      {/* Block 1 — Direct Contact */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-8 block flex items-center gap-3">
          <span className="w-4 h-[1px] bg-white/20"></span>
          DIRECT
        </span>
        
        <div className="flex flex-col gap-6">
          <motion.a variants={itemVariants} href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@gravit.agency" target="_blank" rel="noopener noreferrer" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>hello@gravit.agency</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
          <motion.a variants={itemVariants} href="https://wa.me/919390009700" target="_blank" rel="noopener noreferrer" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>+91 93900 09700 (Call / WhatsApp)</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
          <motion.a variants={itemVariants} href="https://wa.me/919390009700" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>WhatsApp Direct Message</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
          <motion.span variants={itemVariants} className="font-mono text-sm text-white/70 block py-1">
            Bangalore, Karnataka, India
          </motion.span>
          <motion.a variants={itemVariants} href="https://instagram.com/gravit_agency" target="_blank" rel="noopener noreferrer" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>@gravit_agency</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
          <motion.a variants={itemVariants} href="https://x.com/gravit_agency" target="_blank" rel="noopener noreferrer" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>@gravit_agency (X)</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
          <motion.a variants={itemVariants} href="https://discord.gg/gravit" target="_blank" rel="noopener noreferrer" className="group font-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
            <span>gravit.agency (Discord)</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </motion.a>
        </div>
        
        <motion.div variants={itemVariants} className="mt-12">
          <p className="font-mono text-xs text-white/50">
            We typically respond within 24 hours.
          </p>
        </motion.div>
      </motion.section>

      {/* Block 2 — What Happens Next */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-8 block flex items-center gap-3">
          <span className="w-4 h-[1px] bg-white/20"></span>
          PROCESS
        </span>

        <div className="flex flex-col border-t border-white/10">
          {[
            { step: '01.', title: 'Discovery Call', desc: 'A short call to understand what you need' },
            { step: '02.', title: 'Proposal Sent', desc: 'Scope, timeline, and pricing within 48 hours' },
            { step: '03.', title: 'Agreement Signed', desc: 'Advance payment secures your project slot' },
            { step: '04.', title: 'Kickoff', desc: 'We begin discovery and content collection' }
          ].map((p) => (
            <motion.div 
              variants={itemVariants}
              key={p.step} 
              className="grid grid-cols-1 gap-2 py-6 border-b border-white/10 group hover:bg-white/[0.03] transition-all duration-500 hover:px-4 cursor-default -mx-4 px-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out z-0" />
              
              <div className="relative z-10 font-mono text-white/40 text-sm group-hover:text-white transition-colors duration-500">{p.step}</div>
              <div className="relative z-10 text-white text-base tracking-tight group-hover:translate-x-2 transition-transform duration-500">{p.title}</div>
              <div className="relative z-10 text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
