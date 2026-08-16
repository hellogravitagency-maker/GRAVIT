import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/siteConfig';
import { getCanonicalUrl, generateWebSiteSchema, generateOrganizationSchema } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
  path?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

export default function SEO({ 
  title = "GRAVIT | High-Performance Digital Engineering", 
  description = siteConfig.description, 
  type = "website", 
  name = siteConfig.name, 
  image = `${siteConfig.siteUrl}/og-image.png`, 
  url,
  path = "/",
  jsonLd,
  noindex = false
}: SEOProps) {
  
  // Format title cleanly
  const formattedTitle = title.includes("GRAVIT") || title.includes("Gravit") 
    ? title 
    : `${title} | GRAVIT`;

  const canonicalUrl = url || getCanonicalUrl(path);

  // Default schemas for global WebSite and Organization
  const baseSchemas = path === "/" ? [generateWebSiteSchema(), generateOrganizationSchema()] : [];
  const customSchemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const allSchemas = [...baseSchemas, ...customSchemas];

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@gravit_agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={canonicalUrl} />

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
