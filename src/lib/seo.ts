import { siteConfig } from '../config/siteConfig';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const normalizedPath = cleanPath === '/' ? '' : cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "alternateName": siteConfig.legalName,
    "url": siteConfig.siteUrl,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl,
      "logo": `${siteConfig.siteUrl}/favicon.svg`
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/favicon.svg`,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "sameAs": [
      siteConfig.socials.twitter,
      siteConfig.socials.linkedin,
      siteConfig.socials.medium,
      siteConfig.socials.dev
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceName,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    },
    "description": serviceDescription,
    "url": getCanonicalUrl(path)
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith('http') ? item.item : `${siteConfig.siteUrl}${item.item.startsWith('/') ? item.item : `/${item.item}`}`
    }))
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished?: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": getCanonicalUrl(url),
    "image": image || `${siteConfig.siteUrl}/og-image.jpg`,
    "datePublished": datePublished || "2026-01-01",
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/favicon.svg`
      }
    }
  };
}
