export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroHeadline: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  domain: string;
  siteUrl: string;
  description: string;
  email: string;
  location: string;
  socials: {
    twitter: string;
    linkedin: string;
    medium: string;
    dev: string;
    discord: string;
    instagram: string;
  };
  navigation: {
    main: { label: string; href: string }[];
    services: { label: string; href: string; slug: string }[];
    company: { label: string; href: string }[];
  };
  services: Record<string, ServiceItem>;
}

export const siteConfig: SiteConfig = {
  name: "GRAVIT",
  legalName: "GRAVIT STUDIO",
  tagline: "High-Performance Digital Engineering Studio",
  domain: "gravit.agency",
  siteUrl: "https://gravit.agency",
  description: "GRAVIT is a high-performance digital engineering studio building bespoke web experiences, interactive 3D environments, spatial computing, and scalable web applications.",
  email: "hellogravit.agency@gmail.com",
  location: "Bangalore, KA [IN] · Remote Global",
  socials: {
    twitter: "https://x.com/gravit_agency",
    linkedin: "https://www.linkedin.com/in/gravit-agency-235943427",
    medium: "https://medium.com/@hellogravit.agency",
    dev: "https://dev.to/gravit_agency_7b1d6e18903",
    discord: "https://discord.gg/gravit",
    instagram: "https://instagram.com/gravit_agency"
  },
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" }
    ],
    services: [
      { label: "Web Development", href: "/services/web-development", slug: "web-development" },
      { label: "Web Design", href: "/services/web-design", slug: "web-design" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", slug: "ui-ux-design" },
      { label: "3D Web Experiences", href: "/services/3d-web-experiences", slug: "3d-web-experiences" },
      { label: "Web Applications", href: "/services/web-applications", slug: "web-applications" }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  services: {
    "web-development": {
      slug: "web-development",
      title: "Web Development",
      shortDesc: "High-speed, SEO-architected frontend and full-stack solutions built with React, Next.js, and modern TypeScript.",
      heroHeadline: "Bespoke Web Development Built for Extreme Performance & Scale",
      fullDesc: "We engineer pixel-perfect, lightning-fast web architectures engineered to convert visitors into loyal customers. No clunky CMS bloat, no pre-baked templates—just raw, optimized code.",
      features: [
        "React 19 & Next.js Architecture",
        "Sub-100ms Core Web Vitals Optimization",
        "SEO-First Semantic HTML Structure",
        "Server-Side & Edge Rendering",
        "Zero-Bloat Custom Asset Pipelines"
      ],
      technologies: ["React 19", "TypeScript", "Vite", "Next.js", "Tailwind CSS v4"],
      deliverables: ["Production Web App", "Core Web Vitals Audit Report", "SEO & Metadata Setup", "CI/CD Deployment Pipelines"]
    },
    "web-design": {
      slug: "web-design",
      title: "Web Design",
      shortDesc: "Editorial, brutalist, and modern visual design systems designed to differentiate digital brands.",
      heroHeadline: "Distinctive Web Design That Eliminates Brand Blindness",
      fullDesc: "Generic SaaS templates are dead. We craft bespoke visual languages, bold typography, and intuitive layouts that leave an unforgettable impression.",
      features: [
        "Bespoke Brand Identity Systems",
        "Editorial Typography & Grid Alignment",
        "Dark Mode & Fluid Color Schemes",
        "Responsive Mobile-First Interfaces",
        "Interactive Prototype Wireframing"
      ],
      technologies: ["Figma", "Design Tokens", "Tailwind CSS", "GSAP Animations"],
      deliverables: ["Design System", "Interactive Prototypes", "Asset Design Guidelines", "Responsive Layouts"]
    },
    "ui-ux-design": {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      shortDesc: "Human-centric user interface design and seamless user experience flows that maximize conversion.",
      heroHeadline: "Intuitive UI/UX Design Engineered for Conversion",
      fullDesc: "Every click, scroll, and micro-interaction is calculated to guide users toward action. We blend cognitive psychology with clean interface architecture.",
      features: [
        "User Journey Mapping & Wireframing",
        "Micro-Interaction & Motion Design",
        "Design System Token Architecture",
        "Accessibility (WCAG 2.2 AA) Compliance",
        "Conversion Rate Optimization (CRO)"
      ],
      technologies: ["Framer Motion", "Figma", "User Testing", "A/B Testing Frameworks"],
      deliverables: ["User Flow Maps", "UI Component Library", "Design System Specs", "User Research Summary"]
    },
    "3d-web-experiences": {
      slug: "3d-web-experiences",
      title: "3D Web Experiences",
      shortDesc: "Immersive WebGL, Three.js, and spatial computing environments embedded natively into the web browser.",
      heroHeadline: "Immersive 3D WebGL Experiences Built for the Web Browser",
      fullDesc: "We bring real-time 3D graphics, particle systems, shader art, and spatial interaction into web experiences without compromising page speed or mobile responsiveness.",
      features: [
        "Custom WebGL & Three.js Shaders",
        "Scroll-Driven 3D Scene Animations",
        "Optimized 3D Model Asset Pipelines",
        "Cross-Device 60FPS Performance",
        "Spatial Audio & Interactive Physics"
      ],
      technologies: ["Three.js", "React Three Fiber", "GLSL Shaders", "WebGL 2.0", "GSAP ScrollTrigger"],
      deliverables: ["Interactive 3D Scenes", "Custom Shaders", "Compressed 3D Assets", "Fallback 2D Views"]
    },
    "web-applications": {
      slug: "web-applications",
      title: "Web Applications",
      shortDesc: "Full-stack cloud applications, administrative dashboards, and real-time platforms backed by robust backend APIs.",
      heroHeadline: "Robust Full-Stack Web Applications Engineered for Scale",
      fullDesc: "From administrative portals to complex SaaS products, we build scalable web applications backed by real-time databases, secure APIs, and responsive frontends.",
      features: [
        "Real-Time Database Synchronization",
        "Role-Based Access Control (RBAC)",
        "REST & GraphQL API Engineering",
        "Serverless & Edge Middleware Architecture",
        "Automated Testing & CI/CD Workflows"
      ],
      technologies: ["React", "Supabase", "TypeScript", "Node.js / Express", "Zod Validation"],
      deliverables: ["Full-Stack Application", "API Specification", "Database Schema", "Admin Dashboard"]
    }
  }
};
