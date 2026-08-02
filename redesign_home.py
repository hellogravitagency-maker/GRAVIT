import re

with open(r'p:\GRAVIT-main\src\components\Home.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the Manifesto section
start_idx = content.find('{/* 3. The Manifesto */}')

replacement = """{/* [01] RESEARCH ABSTRACT (Manifesto) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">[01. ABSTRACT]</span>
          </div>
          <div className="md:col-span-9">
            <p className="text-2xl md:text-5xl font-normal text-white leading-[1.2] tracking-tight">
              We reject the mundane. We engineer digital spaces that operate with absolute precision and leave an indelible mark on brand perception.
            </p>
            <div className="mt-16 text-sm font-mono tracking-widest text-white/40 uppercase">
              <p>METHODOLOGY: High-Performance Architecture</p>
              <p className="mt-2">AESTHETIC: Structural Minimalism</p>
            </div>
          </div>
        </div>
      </section>

      {/* [02] METHODOLOGY (Process Pipeline) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">[02. METHODOLOGY]</span>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-white/10">
          {[
            { step: '01.', title: 'Discovery & Thesis', desc: 'We align on absolute business truth and architectural intent.' },
            { step: '02.', title: 'Structural Design', desc: 'Crafting high-fidelity mockups built strictly on utility and contrast.' },
            { step: '03.', title: 'Engineering', desc: 'Rigorous implementation using React, WebGL, and optimized payloads.' },
            { step: '04.', title: 'Deployment', desc: 'Final execution and global edge network distribution.' }
          ].map((p, i) => (
            <div key={p.step} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-white/10 group">
              <div className="md:col-span-3 font-mono text-white/40 text-sm">{p.step}</div>
              <div className="md:col-span-4 text-white text-lg tracking-tight">{p.title}</div>
              <div className="md:col-span-5 text-white/60 text-sm leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* [03] AXIOMS (Core Values) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">[03. AXIOMS]</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
           <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
             <div className="font-mono text-xs text-white/40 mb-8">[+]</div>
             <h3 className="text-xl font-normal text-white mb-4 tracking-tight">Precision Code</h3>
             <p className="text-white/60 text-sm leading-relaxed">Clean architecture and robust systems built without generic frameworks.</p>
           </div>
           <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
             <div className="font-mono text-xs text-white/40 mb-8">[+]</div>
             <h3 className="text-xl font-normal text-white mb-4 tracking-tight">Cinematic Contrast</h3>
             <p className="text-white/60 text-sm leading-relaxed">Motion must be purposeful. We use stark contrasts over colorful noise.</p>
           </div>
           <div className="p-10">
             <div className="font-mono text-xs text-white/40 mb-8">[+]</div>
             <h3 className="text-xl font-normal text-white mb-4 tracking-tight">Unapologetic</h3>
             <p className="text-white/60 text-sm leading-relaxed">If you want to blend in with safe SaaS designs, we are not the agency for you.</p>
           </div>
        </div>
      </section>

      {/* [04] CAPABILITIES (Services Teaser) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">[04. CAPABILITIES]</span>
          </div>
        </div>
        <div className="flex flex-col border-t border-white/10">
           {['Web Engineering', 'Creative Design', 'Motion Graphics'].map((service, i) => (
             <div key={service} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-white/10">
               <div className="md:col-span-3 font-mono text-white/40 text-sm">0{i+1}.</div>
               <div className="md:col-span-9 text-2xl md:text-3xl font-normal tracking-tight text-white">{service}</div>
             </div>
           ))}
        </div>
        <div className="mt-16">
          <Link to="/services" className="inline-block px-6 py-3 text-white border border-white/20 text-xs font-mono tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
            Index: All Services
          </Link>
        </div>
      </section>

      {/* [05] CONCLUSION (Final Footer CTA) */}
      <section className="py-40 px-6 border-t border-white/20 flex items-center justify-center relative bg-[#050505]">
         <div className="relative z-10 text-center max-w-4xl">
           <span className="block text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase mb-12">[05. CONCLUSION]</span>
           <h2 className="text-[clamp(3rem,6vw,7rem)] font-normal tracking-tighter text-white mb-16 leading-[0.9] uppercase">
             Construct<br/>The Ideal.
           </h2>
           <Link to="/contact" className="px-8 py-4 bg-white text-black text-xs font-mono tracking-[0.1em] uppercase hover:bg-gray-200 transition-colors inline-block">
             Initiate Project
           </Link>
         </div>
      </section>
    </div>
  );
}
"""

if start_idx != -1:
    new_content = content[:start_idx] + replacement
    with open(r'p:\GRAVIT-main\src\components\Home.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced content successfully.")
else:
    print("Could not find start index.")
