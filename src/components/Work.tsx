import SEO from './SEO';
import PageIntro from './ui/PageIntro';
import SelectedWork from './home/SelectedWork';
import CtaPanel from './CtaPanel';

// Case-study data, read by CaseStudy.tsx via /work/:slug
export const projectsData: Record<string, any> = {
 "ssvemhs": {
 category: 'EdTech Portal',
 title: 'SSVEMHS',
 desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
 results: [
 { metric: '99.9%', label: 'Uptime SLA' },
 { metric: '0.4s', label: 'LCP Load Time' },
 { metric: '+340%', label: 'Engagement Growth' }
 ],
 tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
 year: '2026',
 link: 'https://ssvemhs.pages.dev/',
 color: ' ',
 image: '/images/SSVEMHS.webp',
 },
 "little-stars": {
 category: 'Playgroup Academy',
 title: 'Little Stars',
 desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
 results: [
 { metric: '<0.5s', label: 'Mobile Paint Time' },
 { metric: '82%', label: 'Online Intake Ratio' },
 { metric: '100%', label: 'Lighthouse Score' }
 ],
 tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
 year: '2026',
 link: 'https://little-stars-academy.pages.dev/',
 color: ' ',
 image: '/images/Little_Stars.webp',
 },
 "wonderkids": {
 category: 'Academy Dashboard',
 title: 'WonderKids',
 desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
 results: [
 { metric: '4.8x', label: 'Admin Efficiency' },
 { metric: '0.00', label: 'Cumulative Layout Shift' },
 { metric: '12.4k', label: 'Monthly Active Parents' }
 ],
 tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
 year: '2026',
 link: 'https://wonderkids-67h.pages.dev/',
 color: ' ',
 image: '/images/WonderKids.webp',
 }
};

export default function Work() {
  return (
    <div className="w-full bg-background text-primary">
      <SEO 
 title="Selected Work & Case Studies | GRAVIT®" 
 description="Explore our portfolio of high-performance web applications, SaaS platforms, and digital products." 
 path="/work"
 />
      <PageIntro eyebrow="Work" title="Work that ships." subtitle="Sites and products we've designed, built and launched." />
      <SelectedWork showHeader={false} />
      <CtaPanel />
    </div>
  );
}
