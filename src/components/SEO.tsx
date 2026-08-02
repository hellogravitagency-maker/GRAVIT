import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "Gravit Agency | We Shape Digital Realities", 
  description = "A premium digital agency specializing in immersive 3D experiences, spatial computing, and high-performance web applications.", 
  type = "website", 
  name = "Gravit Agency", 
  image = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop", 
  url = "https://gravit.agency" 
}: SEOProps) {
  
  // Clean up title if it doesn't already contain the agency name
  const formattedTitle = title.includes("Gravit") ? title : `${title} | Gravit Agency`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{formattedTitle}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@gravit_agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
}
