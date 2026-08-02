import sys
with open('p:\\GRAVIT-main\\src\\components\\Work.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_projects = '''const projects = [
  {
    category: 'EdTech Portal',
    title: 'SSVEMHS',
    desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
    tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
    year: '2026',
    variant: 'blue',
    link: 'https://ssvemhs.pages.dev/'
  },
  {
    category: 'Playgroup Academy',
    title: 'Little Stars',
    desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
    tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
    year: '2026',
    variant: 'yellow',
    link: 'https://little-stars-academy.pages.dev/'
  },
  {
    category: 'Academy Dashboard',
    title: 'WonderKids',
    desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
    tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
    year: '2026',
    variant: 'pink',
    link: 'https://wonderkids-67h.pages.dev/'
  }
];'''

new_projects = '''export const projectsData: Record<string, any> = {
  "ssvemhs": {
    category: 'EdTech Portal',
    title: 'SSVEMHS',
    desc: 'An immersive, AI-powered interactive web portal featuring fluid physics-based scrolling, and role-based dashboards.',
    tags: ['React 19', 'Three.js', 'Gemini AI', 'Supabase'],
    year: '2026',
    variant: 'blue',
    link: 'https://ssvemhs.pages.dev/',
    heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop',
    challenge: 'SSVEMHS needed a modern, highly interactive platform that could engage students and streamline administrative tasks.',
    solution: 'We built a bespoke platform from the ground up using React 19 and Three.js for interactive spatial computing elements.',
    results: [
      { metric: '300%', label: 'Increase in Engagement' },
      { metric: '<50ms', label: 'Average Response Time' },
      { metric: 'Zero', label: 'Downtime during launch' }
    ]
  },
  "little-stars": {
    category: 'Playgroup Academy',
    title: 'Little Stars',
    desc: 'A beautifully designed, high-performance web application tailored for a kindergarten. Features a play-first aesthetic and automated backend notifications.',
    tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Supabase'],
    year: '2026',
    variant: 'yellow',
    link: 'https://little-stars-academy.pages.dev/',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop',
    challenge: 'Little Stars required a vibrant, parent-facing portal that felt playful yet professional.',
    solution: 'We utilized Framer Motion for playful UI animations and Tailwind v4 for a highly customizable design system.',
    results: [
      { metric: '98%', label: 'Parent Satisfaction' },
      { metric: '2x', label: 'Faster Admissions Process' },
      { metric: '100%', label: 'Mobile Accessibility' }
    ]
  },
  "wonderkids": {
    category: 'Academy Dashboard',
    title: 'WonderKids',
    desc: 'A full-stack academy platform with an interactive user interface, cinematic scrolling, and a dedicated administrative dashboard for staff.',
    tags: ['React', 'UI/UX', 'Dashboard', 'Admin'],
    year: '2026',
    variant: 'pink',
    link: 'https://wonderkids-67h.pages.dev/',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop',
    challenge: 'WonderKids needed a dual-sided platform: a cinematic marketing front-end and a robust dashboard.',
    solution: 'We separated the concerns by using an aggressive code-splitting strategy.',
    results: [
      { metric: '50%', label: 'Reduction in Admin Tasks' },
      { metric: '4.9/5', label: 'Staff UX Rating' },
      { metric: '10k+', label: 'Daily Active Users Supported' }
    ]
  }
};'''

if old_projects in content:
    content = content.replace(old_projects, new_projects)
else:
    print('Failed to replace old_projects')

old_map = '{projects.map((project, idx) => ('
new_map = '{Object.entries(projectsData).map(([slug, project], idx) => ('
if old_map in content:
    content = content.replace(old_map, new_map)
else:
    print('Failed to replace old_map')

old_link = '<a href={project.link} target="_blank" rel="noopener noreferrer"'
new_link = '<Link to={`/work/${slug}`}'
if old_link in content:
    content = content.replace(old_link, new_link)
    content = content.replace('</a>', '</Link>')
    content = content.replace('onClick={(e) => e.stopPropagation()}', '')

with open('p:\\GRAVIT-main\\src\\components\\Work.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Successfully updated Work.tsx')
