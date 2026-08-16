import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { PageHero, SectionLayout, PremiumCard } from '../components/ui/LayoutElements';

// Placeholder data for dynamic routing demonstration
const serviceData: Record<string, any> = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'High-performance digital products engineered for scale.',
    description: 'We build fast, secure, and accessible websites using modern React frameworks like Next.js and headless CMS architectures. Our engineering approach ensures your digital presence is not just beautiful, but built to drive business results.',
    features: [
      { title: 'Next.js & React', desc: 'Modern component-based architecture for seamless user experiences.' },
      { title: 'Headless CMS', desc: 'Decoupled content management for ultimate flexibility.' },
      { title: 'Performance First', desc: 'Core Web Vitals optimization for blazing-fast load times.' },
      { title: 'SEO Architecture', desc: 'Technical SEO built into the foundation of every project.' }
    ]
  },
  // We'll fall back to this default for any other slug for now
  'default': {
    title: 'Premium Service',
    subtitle: 'Strategic digital engineering.',
    description: 'We partner with ambitious brands to build exceptional digital experiences. Our methodology combines rigorous design thinking with serious engineering to solve complex business challenges.',
    features: [
      { title: 'Strategic Planning', desc: 'Data-driven approach to every project.' },
      { title: 'Premium Design', desc: 'Interfaces that build trust and drive action.' },
      { title: 'Robust Engineering', desc: 'Scalable architecture built for the future.' },
      { title: 'Continuous Optimization', desc: 'Data-backed improvements post-launch.' }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug as string] || serviceData['default'];

  return (
    <div className="w-full bg-transparent text-primary min-h-screen font-sans">
      <SEO 
        title={`${data.title} | GRAVIT®`} 
        description={data.subtitle} 
        path={`/services/${slug}`}
      />
      
      <PageHero 
        title={data.title}
        subtitle={`02 / ${slug?.replace('-', ' ')}`}
        className="border-b border-border"
      />

      <SectionLayout>
        {/* Breadcrumb */}
        <div className="mb-16">
          <Link to="/services" className="text-secondary hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">
            &larr; Back to Services
          </Link>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 border-b border-border pb-24">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              {data.subtitle}
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-start">
            <p className="text-secondary text-xl font-light leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature: any, index: number) => (
              <PremiumCard
                key={index}
                title={feature.title}
                description={feature.desc}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-surface border border-border p-12 md:p-24 text-center rounded-3xl relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter uppercase relative z-10">
            INITIATE PROJECT.
          </h2>
          <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto relative z-10 font-light">
            Let's discuss how our {data.title.toLowerCase()} architecture can help you achieve your technical and business objectives.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-primary text-background px-10 py-6 text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform relative z-10"
          >
            Start a Build &rarr;
          </Link>
        </div>
      </SectionLayout>
    </div>
  );
}
