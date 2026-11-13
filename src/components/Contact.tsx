import { Mail, MapPin } from 'lucide-react';
import SEO from './SEO';
import PageIntro from './ui/PageIntro';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  return (
    <div className="w-full bg-background text-primary">
      <SEO 
        title="Start a Project | GRAVIT®" 
        description="Contact our engineering team to discuss your next digital product architecture." 
        path="/contact"
      />
      <PageIntro eyebrow="Contact" title="Let's build something." subtitle="Tell us about your project and we'll get back to you." />

      <section className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 pb-24 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 rounded-[28px] bg-surface-hover p-6 sm:p-8 md:p-12">
            <ContactForm />
          </div>

          <aside className="gsap-stagger lg:col-span-5 flex flex-col gap-5">
            <a href="mailto:hello@gravit.agency" className="bento-card !bg-surface-hover !border-transparent p-8 md:p-10 block">
              <Mail size={28} strokeWidth={1.5} className="text-accent" />
              <p className="mt-8 text-sm font-medium text-secondary">Email</p>
              <p className="mt-1 text-xl md:text-2xl font-semibold tracking-[-0.03em] text-primary">hello@gravit.agency</p>
            </a>
            <a href="https://wa.me/919390009700?text=Hi%20GRAVIT%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="bento-card !bg-surface-hover !border-transparent p-8 md:p-10 block">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#25D366]" aria-hidden="true"><path d="M12.031 2C6.511 2 2.016 6.494 2.016 12.014c0 1.763.459 3.483 1.332 5.001L2 22l5.127-1.344a9.988 9.988 0 004.904 1.272h.004c5.518 0 10.014-4.494 10.014-10.014 0-2.673-1.041-5.187-2.932-7.078A9.933 9.933 0 0012.031 2zm0 18.292c-1.503 0-2.975-.404-4.258-1.168l-.306-.182-3.165.83.844-3.084-.199-.317a8.232 8.232 0 01-1.265-4.357c0-4.57 3.719-8.289 8.289-8.289 2.214 0 4.296.862 5.861 2.428 1.565 1.566 2.427 3.648 2.427 5.862 0 4.571-3.719 8.29-8.288 8.29zm4.542-6.202c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.644.81-.789.976-.145.166-.29.187-.539.062-.249-.125-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.125-.56-1.349-.768-1.847-.202-.486-.407-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.681 4.254 3.759.594.257 1.058.41 1.42.525.597.19 1.141.163 1.57.099.479-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" /></svg>
              <p className="mt-8 text-sm font-medium text-secondary">WhatsApp</p>
              <p className="mt-1 text-xl md:text-2xl font-semibold tracking-[-0.03em] text-primary">+91 93900 09700</p>
            </a>
            <div className="bento-card !bg-surface-hover !border-transparent p-8 md:p-10">
              <MapPin size={28} strokeWidth={1.5} className="text-accent" />
              <p className="mt-8 text-sm font-medium text-secondary">Studio</p>
              <p className="mt-1 text-xl md:text-2xl font-semibold tracking-[-0.03em] text-primary">Bengaluru, India</p>
              <p className="mt-1 text-base text-secondary">Indiranagar, Karnataka</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
