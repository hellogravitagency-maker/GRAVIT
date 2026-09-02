export interface SolutionCategory {
  id: string;
  name: string;
  description: string;
  subcategories: string[];
}

export const solutionsData: SolutionCategory[] = [
  {
    id: "creative-services",
    name: "Creative Services",
    description: "Turn your passion projects into paid projects. Discover tools to manage clients and grow your creative business.",
    subcategories: ["Photographers", "Graphic Designers", "Artists", "Interior Designers", "Architects", "Fashion & Apparel"]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description: "Build trust and authority. Streamline client onboarding, secure document sharing, and complex service delivery.",
    subcategories: ["Consultants", "Law Firms", "Accounting", "Financial Advisors", "Real Estate", "Recruiters"]
  },
  {
    id: "education-training",
    name: "Education & Training",
    description: "Scale your knowledge. Platforms for cohort-based courses, corporate training, and digital curriculum delivery.",
    subcategories: ["Course Creators", "Tutors", "Corporate Trainers", "Universities", "Coaches", "Language Schools"]
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Aesthetic digital experiences that convert. Seamless booking systems and localized commerce for beauty brands.",
    subcategories: ["Salons", "Skincare Brands", "Makeup Artists", "Spas", "Cosmetics", "Barbershops"]
  },
  {
    id: "sports-fitness",
    name: "Sports & Fitness",
    description: "Keep your community moving. Memberships, scheduling, and digital fitness streaming platforms.",
    subcategories: ["Gyms", "Personal Trainers", "Yoga Studios", "Sports Clubs", "Athletic Brands", "Martial Arts"]
  },
  {
    id: "health-wellness",
    name: "Health & Wellness",
    description: "Secure, compliant infrastructure for modern wellness practices, telehealth, and holistic health brands.",
    subcategories: ["Therapists", "Nutritionists", "Medical Clinics", "Wellness Retreats", "Mental Health", "Alternative Medicine"]
  },
  {
    id: "home-services",
    name: "Home Services",
    description: "Reliable platforms for local businesses. Optimize lead generation, dispatch routing, and customer reviews.",
    subcategories: ["Contractors", "Landscaping", "Cleaning Services", "Plumbers", "Electricians", "HVAC"]
  },
  {
    id: "events-experiences",
    name: "Events & Experiences",
    description: "Digital ticketing, immersive landing pages, and attendee management for unforgettable physical and digital events.",
    subcategories: ["Event Planners", "Venues", "Festivals", "Tour Guides", "Conferences", "Pop-ups"]
  },
  {
    id: "charities-nonprofits",
    name: "Charities & Nonprofits",
    description: "Amplify your mission. Secure donation pipelines, volunteer management, and transparent impact reporting.",
    subcategories: ["Foundations", "NGOs", "Community Groups", "Religious Organizations", "Advocacy", "Fundraisers"]
  },
  {
    id: "personal",
    name: "Personal",
    description: "Digital identities that stand out. Personal brands, resumes, and high-impact micro-sites.",
    subcategories: ["Influencers", "Public Figures", "Authors", "Speakers", "Job Seekers", "Hobbyists"]
  }
];
