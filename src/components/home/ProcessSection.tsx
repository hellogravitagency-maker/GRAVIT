const steps = [
  { id: '01', category: 'Discovery', title: 'Research & Strategy', desc: 'We learn your business, users and market, then define a clear, actionable strategy.' },
  { id: '02', category: 'Design', title: 'UI/UX Design', desc: 'Wireframes, prototypes and high-fidelity interfaces built around real user needs.' },
  { id: '03', category: 'Development', title: 'Build & Iterate', desc: 'Design becomes clean, scalable code on an architecture made to perform.' },
  { id: '04', category: 'Launch', title: 'Deploy & Grow', desc: 'We ship your product, then keep supporting and optimising it after launch.' },
];

export default function ProcessSection() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-sm md:text-[17px] font-medium text-accent mb-4">Process</p>
          <h2 className="display-editorial text-4xl md:text-6xl lg:text-7xl text-primary">How we work.</h2>
        </div>

        <ol className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {steps.map((s) => (
            <li key={s.id} className="group border-t border-border pt-8">
              <span className="block text-7xl md:text-8xl font-semibold tracking-[-0.06em] leading-none text-border group-hover:text-accent transition-colors duration-500">
                {s.id}
              </span>
              <p className="mt-8 text-sm font-medium text-accent">{s.category}</p>
              <h3 className="mt-2 text-2xl md:text-[28px] font-semibold tracking-[-0.03em] text-primary">{s.title}</h3>
              <p className="mt-3 text-base md:text-[17px] text-secondary leading-relaxed tracking-[-0.015em]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
