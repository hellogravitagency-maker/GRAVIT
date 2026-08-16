export const FEATURE_CATEGORIES = [
  { id: 'websites', title: 'Websites' },
  { id: 'commerce', title: 'Commerce' },
  { id: 'financial-solutions', title: 'Financial Solutions' },
  { id: 'domains', title: 'Domains' },
  { id: 'content-memberships', title: 'Content & Memberships' },
  { id: 'marketing', title: 'Marketing' },
  { id: 'analytics', title: 'Analytics' },
  { id: 'apps-and-api', title: 'Apps and API' },
  { id: 'connected-services', title: 'Connected Services' },
  { id: 'acuity-scheduling', title: 'Scheduling' },
  { id: 'logo-maker', title: 'Brand Maker' },
  { id: 'resources-support', title: 'Resources & Support' }
];

export const FEATURES: Record<string, { title: string, description: string }[]> = {
  'websites': [
    { title: 'Website Builder', description: 'Build a professional digital presence that brings your idea, brand, or business to life online. No coding required.' },
    { title: 'Engineered Templates', description: 'Start with a premium, designer-made architecture that looks professional from day one, or choose an AI template with curated content that fits your brand.' },
    { title: 'Pre-Built Layouts', description: 'Deploy pages using pre-designed structures for specific purposes such as Contact, About, Blog, Portfolio, Products, and more.' },
    { title: 'GRAVIT Blueprint AI', description: 'Create a personalized web architecture in minutes with AI. Combining the power of technology with rigorous human design expertise.' },
    { title: 'GRAVIT Beacon AI', description: 'Move faster with AI that helps automate routine tasks, streamline setup, and support day-to-day business operations.' },
    { title: 'Precision Layout Engine', description: 'Design with total creative control using a precision drag-and-drop editor for flexible, custom layouts and bento grids.' },
    { title: 'Responsive Design and Editing', description: 'Every page and design automatically adapts to look polished on any device, with flexible editing controls and mobile-specific settings.' },
    { title: 'Advanced Design Tools', description: 'Create an immersive website with intuitive, powerful design controls, advanced styling tools, and polished editing options.' },
    { title: 'Animations and Effects', description: 'Add depth, motion, and personality to interactive, highly customizable animation treatments and transforms.' },
    { title: 'Curated Colors and Fonts', description: 'Apply curated color palettes and font styles site-wide, then fine-tune section themes and typography to match your brand.' },
    { title: 'Custom Font Uploads', description: 'Upload your own typography files to match your brand and create a custom, consistent look across your digital product.' },
    { title: 'Header Styles', description: 'Customize your navigation bar with gradients, transparency, and other visual effects to better match your brand.' },
    { title: 'Text Styles', description: 'Emphasize key text with expressive highlight effects and automatically scale it for a more polished, consistent look.' },
    { title: 'Button Styles', description: 'Customize button text, shape, fill, and outline, then assign styles to primary, secondary, and tertiary button presets.' },
    { title: 'Image Effects', description: 'Apply effects, animations, transforms, overlays, and custom cropping shapes to create dynamic, visually distinctive styling.' },
    { title: 'Background Art', description: 'Use curated art presets or AI-generated image and video backgrounds to add visual depth while keeping content easy to read.' },
    { title: 'AI Blog Posts', description: 'Draft, edit, and polish editorial posts with AI on any topic and at any length, so you can publish quality content faster.' },
    { title: 'Paywalls', description: 'Monetize your editorial content by creating a paywall and selling access to your premium insights.' },
    { title: 'Publishing Workflow', description: 'Publish, draft, and schedule posts with a built-in workflow, including Needs Review status for smoother team collaboration.' },
    { title: 'Email Campaigns Integration', description: 'Turn any published editorial post into a draft email campaign automatically, then customize it before sending.' },
    { title: 'Asset Library', description: 'Organize and reuse images and files from one central Asset Library, replace assets site-wide seamlessly.' },
    { title: 'Portfolios', description: 'Showcase your work with stylized landing pages that organize galleries, projects, and highlights into a polished portfolio.' },
    { title: 'Video Hosting', description: 'Upload and host videos directly on the platform with a fast, clean built-in player, without relying on third-party embeds.' },
    { title: 'Duplicate Pages and Content', description: 'Duplicate pages and content blocks to test ideas, speed up updates, and avoid rebuilding the same layouts.' },
    { title: 'AI Site Scanner', description: 'Scan your site for broken links and other inefficiencies, then get quick-fix recommendations to improve site performance.' },
    { title: 'Contributors and Permissions', description: 'Give each team member the right level of access with granular roles, and manage multiple platform sites from one login.' },
    { title: 'Custom Redirects', description: 'Create 301 and 302 redirects from your dashboard to send visitors from old URLs to the right new destinations.' },
    { title: 'Site Search', description: 'Help visitors find pages, products, and content faster with a built-in algorithmic search experience on your website.' },
    { title: 'Custom CSS', description: 'Add custom CSS in the built-in editor for deeper control over your site\'s brutalist aesthetics and micro-interactions.' }
  ],
  'commerce': [
    { title: 'Sell Products', description: 'Showcase your products at their absolute best. Sell thousands of products through your site with seamless browsing and checkout.' },
    { title: 'Sell Services', description: 'Create a website that helps your business attract new customers so they can book or schedule your premium services.' },
    { title: 'Sell Subscriptions', description: 'Easily sell subscriptions to products and services on a weekly or monthly basis to generate recurring revenue.' },
    { title: 'Intake Forms', description: 'Collect relevant client information with custom intake forms. Set your design, gather key details, and trigger follow-up flows.' },
    { title: 'Pay Links', description: 'A fast, flexible way to get paid. Use a single on-brand link to accept payments via email, text, social media, or QR code.' },
    { title: 'Sell Custom Merch', description: 'Easily design and sell high-quality, custom products without having to handle the logistics of production or inventory.' },
    { title: 'Product Merchandising', description: 'Easily sort, organize, and manage your products with tags, categories, visibility scheduling, and customized detail pages.' },
    { title: 'Discounts', description: 'Create automatic discounts that apply to entire orders or specific products, and limit usage per customer.' },
    { title: 'Related Products', description: 'Show relevant products to increase the chance your customers find what they’re looking for and increase average order value.' },
    { title: 'Inventory Management', description: 'Manage your inventory with an easy-to-use interface and quick views into your variants and stock levels with low-stock alerts.' },
    { title: 'Order Management', description: 'Track outstanding orders, resend customer update emails, and print packing slips from a single unified interface.' },
    { title: 'Flexible Product Variants', description: 'Use a unified inventory management interface with unlimited SKUs, multi-dimensional product variants (size, color), and sale prices.' },
    { title: 'Mobile-Optimized Checkout', description: 'Single page checkout optimized to look brutalist and perform flawlessly on all devices, making it easy to buy anywhere.' },
    { title: 'Express Checkout Mode', description: 'Customers can bypass the shopping cart and jump straight to checkout, a great way for single-product stores to streamline.' },
    { title: 'Checkout on Your Domain', description: 'Direct customers to a secure checkout on your domain for a consistent shopping experience and stronger sense of security.' },
    { title: 'Customer Accounts', description: 'Customers can create accounts and sign in for a faster checkout, increasing sales from repeat buyers.' },
    { title: 'Invoicing', description: 'Invoice clients and get paid for your services. Track invoice status, project milestones, and client information all in one place.' },
    { title: 'Multiple Payment Methods', description: 'Accept credit cards, debit cards, Klarna, Apple Pay, Afterpay, ACH, and more as payment methods at checkout.' },
    { title: 'Accepted Currencies', description: 'Charge in over 25 global currencies to serve an international clientele with localized checkout.' },
    { title: 'Sales Analytics', description: 'Understand exactly how your business is doing by tracking revenue, orders, units sold, purchase funnels, and abandoned carts.' },
    { title: 'Tax Rates', description: 'Simplify tax management by automatically calculating real-time rates at checkout across thousands of global jurisdictions.' },
    { title: 'Commerce APIs', description: 'Build custom integrations to third-party systems to handle your back office, ERP, and bespoke ecommerce needs.' },
    { title: 'AI Product Composer', description: 'Turn a short description into a complete product listing designed to convert browsers into buyers using fine-tuned models.' },
    { title: 'Proposals, Estimates, Contracts', description: 'Create professional proposals, estimates, and contracts to share with clients before finalizing agreements with branded documents.' }
  ],
  'financial-solutions': [
    { title: 'GRAVIT Payments', description: 'A payment solution fully integrated with your platform, so you can accept payments directly—no third-party redirects required.' },
    { title: 'Apple Pay & Google Pay', description: 'Provide a convenient 1-click payment option. Customers check out quickly without manually entering shipping and billing info.' },
    { title: 'Klarna & Afterpay', description: 'Increase sales by offering shoppers flexible payment options, including installments, financing, and buy now, pay later.' },
    { title: 'ACH Payments', description: 'Secure payment method that transfers funds between bank accounts directly on the ACH network.' },
    { title: 'GRAVIT Capital', description: 'Apply for financing directly through the platform. Fast and flexible financing to reach your next business goal.' },
    { title: 'GRAVIT Balance', description: 'A financial account built into the platform to access funds within hours, earn cash rewards, and spend easily.' }
  ],
  'domains': [
    { title: 'Purchasing Domains', description: 'Build your brand with a custom domain registered directly through the platform. Over 400 TLDs and ccTLDs available.' },
    { title: 'Seamless Domain Registration', description: 'Domains are automatically set up to work with your digital product, meaning zero manual DNS configuration.' },
    { title: 'Connected Third-Party Domains', description: 'Easily connect your website to a domain purchased from a third-party provider via streamlined automated linking.' },
    { title: 'Google Workspace Integration', description: 'Create a custom email address matching your domain through direct integration, strengthening your brand identity.' },
    { title: 'Security and Privacy', description: 'Every domain comes with an enterprise-grade SSL certificate and free WHOIS privacy protection.' },
    { title: 'Email Forwarding', description: 'Create free email aliases for your domain, then automatically redirect emails sent to those aliases to an inbox of your choice.' },
    { title: 'Domain Forwarding', description: 'Set up domain redirects to send traffic from one domain to a different site or specific marketing landing page.' },
    { title: 'AI Domain Name Generator', description: 'Describe your business with a short prompt and generate AI-powered ideas for your next premium domain name.' }
  ],
  'content-memberships': [
    { title: 'Editorial Blogs', description: 'Share your writing, images, and videos in a premium editorial layout. Monetize your content with built-in paywalls.' },
    { title: 'Online Courses', description: 'Teach visitors a new skill. Build course content using video and text lessons, organize into chapters, and track progress.' },
    { title: 'Member Sites', description: 'Build an online community by creating gated pages on your site containing exclusive content for a specific audience.' },
    { title: 'Videos Libraries', description: 'Create a beautiful, browsable, Netflix-style library of videos that is securely hidden behind a subscription paywall.' },
    { title: 'Sell Downloadable Content', description: 'Sell digital content like software, music, and ebooks via direct, secure, time-expiring download links.' }
  ],
  'marketing': [
    { title: 'Email Campaigns', description: 'Stand out with integrated email campaigns. Unify your brand voice from homepage to inbox with minimal effort.' },
    { title: 'Social Selling', description: 'Integrate with social platforms to sync your products so you can sell and advertise directly from posts and stories.' },
    { title: 'Banners & Promotions', description: 'Highlight important announcements like seasonal sales or product launches with non-intrusive, brutalist notification banners.' },
    { title: 'Form Blocks', description: 'Capture structured data with forms supporting over 15 data types (addresses, files, dates) directly injected into your CRM.' },
    { title: 'Marketing Analytics', description: 'Monitor KPIs and track metrics from Page Views to unique visitors, top traffic sources, and conversion trend charts.' },
    { title: 'Smart Segments', description: 'Use advanced segmentation to identify leads, re-engage first-time buyers, and reward loyal customers automatically.' },
    { title: 'Automations', description: 'Set up automated campaigns triggered by subscriber actions on your website, managed via an intuitive visual canvas.' },
    { title: 'Integrated Contacts (CRM)', description: 'See a holistic view of everyone who engages with your website. Filter by audience attributes to create custom segments.' },
    { title: 'Built-In SEO Tools', description: 'Essential SEO foundations, AI-powered optimization tools, and best practices built-in without requiring vulnerable plugins.' },
    { title: 'AI Visibility Scanner', description: 'Track how your brand appears across AI platforms (ChatGPT, Perplexity), and optimize for LLM-driven discovery (GEO).' },
    { title: 'Automatic Sitemaps', description: 'Automatically generate and link a proper sitemap.xml, listing every URL with proper priority for perfect indexing.' },
    { title: 'Canonical Tagging', description: 'Generate proper rel="canonical" tags ensuring search engines pick up the correct versions of your pages to prevent penalties.' }
  ],
  'analytics': [
    { title: 'Platform Overview', description: 'View your traffic, visitor geography, and sales. See how visits and pageviews trend over time in beautiful data visualizations.' },
    { title: 'Commerce Analytics', description: 'Track revenue, orders, units sold, and purchase funnels. Identify your most valuable customers and products.' },
    { title: 'Acquisition Analytics', description: 'Get insights into traffic sources and the exact search keywords that drive the highest quality traffic to your site.' },
    { title: 'Engagement Analytics', description: 'Track engagement with an activity log, form conversions, popular content paths, and on-site search queries.' },
    { title: 'Real-time Alerts', description: 'Receive instant notifications for traffic spikes, large orders, or significant system events on your mobile device.' }
  ],
  'apps-and-api': [
    { title: 'Finance Integrations', description: 'Reconcile sales transactions, file sales taxes, manage accounting, and streamline bookkeeping automatically.' },
    { title: 'Inventory Integrations', description: 'Connect with warehouse management systems to sync SKUs, stock levels, and supply chain operations globally.' },
    { title: 'CRM & Marketing APIs', description: 'Promote products across selling channels and push lead data directly into Salesforce, Hubspot, or bespoke systems.' },
    { title: 'Fulfillment Webhooks', description: 'Fulfill orders, ship products, manage returns, and trigger branded tracking notifications programmatically.' },
    { title: 'Identity & Contacts API', description: 'Create, read, update, and delete website user, customer, and subscriber profiles via robust REST APIs.' }
  ],
  'connected-services': [
    { title: 'Data Ingestion', description: 'Pull in live data feeds from social networks, financial markets, or operational dashboards directly into your interface.' },
    { title: 'Identity Providers', description: 'Authenticate users seamlessly via Google, Apple, Microsoft, or enterprise SAML/SSO providers.' },
    { title: 'Mapping Engines', description: 'Integrate dynamic, styled maps via Google Maps or Mapbox with custom markers and geospatial querying.' },
    { title: 'Booking Systems', description: 'Direct integrations with specialized industry booking systems (OpenTable, Resy, Mindbody) without iframe compromises.' }
  ],
  'acuity-scheduling': [
    { title: 'Multiple Calendars', description: 'Manage a single calendar or multiple parallel calendars for each team member, resource, or physical location.' },
    { title: 'Calendar Syncing', description: 'Real-time two-way sync with Google Calendar, Outlook, iCloud, and Office 365 to prevent double-booking.' },
    { title: 'Custom Payment & Deposits', description: 'Accept payments from clients upfront, vault credit cards for no-shows, and require deposits to secure bookings.' },
    { title: 'Automated Reminders', description: 'Reach clients at every point in the funnel with customized confirmation, SMS reminder, and follow-up sequences.' },
    { title: 'Packages & Subscriptions', description: 'Clients can purchase several appointments at once or recurring appointments with bundled, discounted deals.' },
    { title: 'Video Conferencing Sync', description: 'Automatically generate and embed unique Zoom or Google Meet links for every virtual appointment booked.' },
    { title: 'HIPAA Compliance', description: 'Enterprise-grade security controls and BAA agreements available for healthcare and sensitive data handling.' }
  ],
  'logo-maker': [
    { title: 'Brand Identity Generator', description: 'Instantly create a brutalist, typography-driven logo and brand identity system for your next digital product.' },
    { title: 'Vector Exports', description: 'Download production-ready SVG, PNG, and PDF files in full color, reverse white, and pure black configurations.' },
    { title: 'Brand Guidelines', description: 'Automatically generate a minimalist design system document with exact typography scales, spacing tokens, and hex codes.' }
  ],
  'resources-support': [
    { title: 'Enterprise SLA', description: 'Guaranteed uptime, dedicated account management, and priority routing for mission-critical digital infrastructure.' },
    { title: 'Platform Documentation', description: 'Comprehensive, developer-focused documentation covering APIs, architecture, webhooks, and integration patterns.' },
    { title: '24/7 Priority Support', description: 'Direct access to senior engineers and product specialists, bypassing conventional tier-1 support desks entirely.' },
    { title: 'Strategic Consulting', description: 'Access to our internal strategy team for architecture reviews, conversion optimization, and technical roadmapping.' }
  ]
};
