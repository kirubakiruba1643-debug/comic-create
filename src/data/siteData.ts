export interface ServiceItem {
  id: string;
  category: 'web' | 'cloud' | 'design' | 'performance';
  categoryLabel: string;
  title: string;
  description: string;
  keyDeliverables: string[];
  techStack: string[];
  typicalTimeline: string;
  startingRange: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  year: string;
  headline: string;
  summary: string;
  keyMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
  challenge: string;
  solution: string;
  architectureDetails: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Engineering' | 'Architecture' | 'Performance' | 'Design Systems';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: 'Engagement' | 'Technical' | 'Delivery' | 'Security';
  question: string;
  answer: string;
}

export const SITE_INFO = {
  brandName: 'Kiruba Digital',
  legalName: 'Kiruba Digital Solutions',
  tagline: 'Engineering High-Performance Web Applications & Cloud Architectures',
  subheading:
    'We partner with ambitious enterprises and emerging technology companies to architect, build, and deploy production-grade software platforms with exceptional user experience and measurable business velocity.',
  email: 'kirubakiruba1643@gmail.com',
  phone: '+1 (800) 492-7821',
  location: 'Global Engineering & Remote Operations',
  officeHours: 'Monday – Friday, 09:00 – 18:00 UTC',
  responseTime: 'Under 24 business hours',
};

export const CORE_STATS = [
  {
    value: '140+',
    label: 'Platforms Deployed',
    detail: 'Across enterprise SaaS, fintech, and digital commerce',
  },
  {
    value: '99.98%',
    label: 'Target SLA Reliability',
    detail: 'Engineered for resilient high-concurrency availability',
  },
  {
    value: '< 1.1s',
    label: 'Average LCP Speed',
    detail: 'Strict optimization for sub-second Core Web Vitals',
  },
  {
    value: '4.95 / 5',
    label: 'Client Satisfaction',
    detail: 'Based on verified post-deployment client audits',
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: '2022',
    title: 'Studio Foundation',
    description: 'Formed as an engineering collective focused on modern TypeScript and distributed web apps.',
  },
  {
    year: '2023',
    title: 'Fintech & Cloud Practice',
    description: 'Expanded specialized practice for high-throughput transactional systems and HIPAA/SOC2 compliance.',
  },
  {
    year: '2024',
    title: 'Global Delivery Network',
    description: 'Scaled delivery infrastructure serving enterprise clients across North America, Europe, and APAC.',
  },
  {
    year: '2025–2026',
    title: 'Edge & Next-Gen Systems',
    description: 'Pioneered serverless edge orchestration, sub-second web performance, and automated CI/CD workflows.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-apps',
    category: 'web',
    categoryLabel: 'Web Engineering',
    title: 'Bespoke Web Applications & Portals',
    description:
      'End-to-end full-stack engineering utilizing modern React 19, TypeScript, and robust server frameworks. Engineered with zero-compromise security, role-based access control, and instant client-side responsiveness.',
    keyDeliverables: [
      'Multi-tenant enterprise SaaS applications',
      'Interactive customer and partner portals',
      'Real-time collaborative web interfaces',
      'Strict TypeScript and end-to-end test automation',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js / Express', 'Vite / Next.js'],
    typicalTimeline: '6–10 weeks',
    startingRange: '$12,000+',
  },
  {
    id: 'cloud-infrastructure',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    title: 'Cloud Architecture & Microservices',
    description:
      'Resilient serverless and containerized backend architectures designed to handle unpredictable traffic spikes without performance degradation or runaway cloud expenditures.',
    keyDeliverables: [
      'Kubernetes and container orchestration',
      'Serverless event-driven microservices',
      'Automated zero-downtime CI/CD deployment pipelines',
      'Cloud cost optimization and audit audits',
    ],
    techStack: ['Docker', 'AWS / GCP / Cloud Run', 'PostgreSQL', 'Redis', 'Terraform'],
    typicalTimeline: '4–8 weeks',
    startingRange: '$10,000+',
  },
  {
    id: 'design-systems',
    category: 'design',
    categoryLabel: 'UI/UX Systems',
    title: 'Product-Led UI/UX & Design Systems',
    description:
      'Accessible, scalable design systems and component libraries crafted for rapid developer velocity, uncompromising visual polish, and seamless cross-device ergonomics.',
    keyDeliverables: [
      'WCAG 2.2 AA compliant accessible components',
      'Comprehensive design tokens and Figma-to-code pipelines',
      'Responsive multi-viewport touch ergonomics',
      'Interactive component documentation and style guides',
    ],
    techStack: ['Figma', 'Storybook', 'Tailwind CSS', 'Framer Motion', 'Radix Primitives'],
    typicalTimeline: '4–6 weeks',
    startingRange: '$8,500+',
  },
  {
    id: 'performance-seo',
    category: 'performance',
    categoryLabel: 'Performance & SEO',
    title: 'Web Vitals & Technical SEO Optimization',
    description:
      'Rigorous performance auditing and code refactoring to maximize Core Web Vitals (LCP, INP, CLS) and organic search engine discovery through semantic structured data.',
    keyDeliverables: [
      'Core Web Vitals sub-second LCP optimization',
      'Schema.org JSON-LD structured data implementation',
      'Asset pipeline compression and intelligent caching',
      'Internationalization and canonical link structure',
    ],
    techStack: ['Lighthouse', 'Chrome DevTools', 'Cloudflare Workers', 'Edge Caching'],
    typicalTimeline: '2–4 weeks',
    startingRange: '$6,000+',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'stratix-fintech',
    client: 'Stratix Financial Global',
    industry: 'Institutional FinTech',
    year: '2025',
    headline: 'Real-Time Portfolio Risk Engine with Sub-70ms Telemetry',
    summary:
      'Architected and delivered an enterprise web platform processing over 12,000 real-time market data points per second with zero browser thread blocking.',
    keyMetrics: [
      {
        label: 'Transaction Speed',
        value: '+180%',
        description: 'Throughput increased from legacy bottlenecks',
      },
      {
        label: 'Processing Latency',
        value: '65ms',
        description: 'Global 99th percentile response time',
      },
      {
        label: 'Data Integrity',
        value: '100%',
        description: 'Zero transaction dropped during peak volatility',
      },
    ],
    challenge:
      'The client was operating on a legacy single-threaded dashboard that experienced severe UI freezes during market opening spikes, causing lost trading opportunities.',
    solution:
      'Rebuilt the frontend using React 19 concurrent features and web workers, backed by an event-driven edge ingestion pipeline with WebSocket message compression.',
    architectureDetails: [
      'Web Worker offloaded data serialization',
      'Binary WebSocket payload streaming',
      'Virtual scrolling rendering 50,000+ data rows at 60fps',
      'Strict SOC 2 compliant auth and audit logs',
    ],
    testimonial: {
      quote:
        'Kiruba Digital rebuilt our core interface in eight weeks. The platform responsiveness during intense volatility spikes went from a major liability to our primary competitive advantage.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Stratix Financial Global',
    },
  },
  {
    id: 'lumina-health',
    client: 'Lumina Care Network',
    industry: 'Digital Health & Telemedicine',
    year: '2025',
    headline: 'HIPAA-Compliant Patient Coordination & Teleconsultation Portal',
    summary:
      'Engineered an ultra-secure, intuitive web portal connecting over 45,000 active patients with healthcare specialists across 12 clinical branches.',
    keyMetrics: [
      {
        label: 'Patient Engagement',
        value: '+320%',
        description: 'Increase in self-service consultation bookings',
      },
      {
        label: 'No-Show Rate',
        value: '-44%',
        description: 'Drop in missed appointments via smart reminders',
      },
      {
        label: 'Compliance Audit',
        value: 'Zero Findings',
        description: 'Passed independent third-party HIPAA validation',
      },
    ],
    challenge:
      'Disconnected clinic phone lines and cumbersome desktop-only software created frustrating wait times and a 28% appointment no-show rate.',
    solution:
      'Created a responsive, mobile-first patient application with biometric authentication, automated SMS/email notifications, and peer-to-peer WebRTC video rooms.',
    architectureDetails: [
      'Encrypted client-side medical record viewer',
      'Automated time zone detection & smart calendar sync',
      'Progressive Web App support with offline appointment passes',
      'WCAG 2.2 AA accessibility verification across screen readers',
    ],
    testimonial: {
      quote:
        'Our patients span all age groups. Kiruba Digital designed an interface that is so clean and intuitive that patient support tickets dropped by over 60% in month one.',
      author: 'Dr. Elena Rostova',
      role: 'VP of Digital Health Operations',
      company: 'Lumina Care Network',
    },
  },
  {
    id: 'nordic-living',
    client: 'Nordic Artisan Living',
    industry: 'Direct-to-Consumer Luxury Goods',
    year: '2024',
    headline: 'Headless Global Commerce Platform Delivering 84% Higher Conversion',
    summary:
      'Transformed an international luxury interior retailer from an outdated monolithic storefront to a lightning-fast headless commerce platform.',
    keyMetrics: [
      {
        label: 'Checkout Conversion',
        value: '+84%',
        description: 'Mobile checkout completion rate improvement',
      },
      {
        label: 'Lighthouse Score',
        value: '99 / 100',
        description: 'Consistently maintained Core Web Vitals',
      },
      {
        label: 'Server Overhead',
        value: '-42%',
        description: 'Reduction in annual cloud hosting infrastructure costs',
      },
    ],
    challenge:
      'Monolithic e-commerce plugins caused slow page transitions (>4.2s), resulting in high cart abandonment and poor international search rankings.',
    solution:
      'Implemented a decoupled frontend utilizing edge-rendered dynamic pages, localized multi-currency checkouts, and image CDN micro-optimizations.',
    architectureDetails: [
      'Statically cached product catalogs with incremental regeneration',
      'Sub-second instant search with fuzzy product filtering',
      'Native Apple Pay and Google Pay one-click checkout flows',
      'Automated OpenGraph and structured data generation',
    ],
    testimonial: {
      quote:
        'The speed and polish of the new store completely elevated our luxury brand perception. Kiruba Digital delivered ahead of schedule and the ROI was evident within weeks.',
      author: 'Henrik Lindqvist',
      role: 'Head of Global E-Commerce',
      company: 'Nordic Artisan Living',
    },
  },
];

export const RESOURCES: ResourceArticle[] = [
  {
    id: 'performance-beyond-basics',
    title: 'Modern Web Performance: Core Web Vitals Beyond the Basics',
    category: 'Performance',
    readTime: '6 min read',
    date: 'February 2026',
    summary:
      'A deep dive into optimizing Interaction to Next Paint (INP), script hydration budgets, and sub-resource integrity in modern single-page applications.',
    content: [
      'As modern web applications grow in complexity, conventional optimizations like image compression and code minification are no longer sufficient to guarantee top-tier responsiveness.',
      'The modern performance bottleneck almost invariably lives on the main browser thread. Long-running JavaScript tasks delay user input feedback, causing sluggish perceptions and deteriorating INP scores.',
      'By decoupling non-critical state updates with React 19 transitions and utilizing background Web Workers for intensive calculations, teams can achieve effortless 60fps fluidity across low-end mobile devices.',
    ],
    tags: ['Core Web Vitals', 'INP Optimization', 'React 19', 'Browser Architecture'],
  },
  {
    id: 'modular-cloud-migration',
    title: 'Migrating Monoliths to Modular Cloud Architectures',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'January 2026',
    summary:
      'Pragmatic architectural patterns for decomposing legacy backends into maintainable, independently deployable services without service downtime.',
    content: [
      'Large-scale platform rewrites notoriously fail due to shifting requirements and extended deployment freezes. A disciplined strangler fig migration strategy provides continuous business value.',
      'We discuss establishing an API gateway layer that progressively routes domain traffic from legacy databases to modern event-driven microservices.',
      'Key considerations include distributed transaction tracing, idempotency keys, and automated canary deployments to protect production reliability.',
    ],
    tags: ['Microservices', 'System Design', 'Cloud Architecture', 'DevOps'],
  },
  {
    id: 'design-systems-scale',
    title: 'Zero-Waste Design Systems: Bridging Figma and Production Code',
    category: 'Design Systems',
    readTime: '5 min read',
    date: 'December 2025',
    summary:
      'How we establish design token contracts and accessible UI component registries that eliminate developer guesswork and speed up release cadences.',
    content: [
      'A design system is only as good as its adoption rate among product engineers. When components require complex overrides or brittle wrappers, developers inevitably fork styles.',
      'By anchoring design tokens to Tailwind CSS variables and enforcing strict TypeScript prop contracts, we ensure complete alignment between design mockups and live production releases.',
      'Accessibility must be baked into the foundational primitives—visible focus indicators, screen reader labels, and keyboard navigation should require zero extra engineer effort.',
    ],
    tags: ['Design Systems', 'Tailwind CSS', 'Accessibility', 'Figma Tokens'],
  },
  {
    id: 'engineering-security-first',
    title: 'Defensive Frontend Architecture: Sanitization, Auth & CSP',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'November 2025',
    summary:
      'Hardening client-side applications against XSS, clickjacking, and session hijacking through modern headers and token management.',
    content: [
      'Client-side security is often relegated to an afterthought behind backend security perimeters. However, compromised client environments expose sensitive customer tokens and business data.',
      'We examine strict Content Security Policy (CSP) configurations, HTTP-only secure cookie strategies, and defensive state management in high-compliance sectors.',
      'Implementing automated dependency auditing in CI/CD pipelines ensures that zero known vulnerabilities slip into client-facing bundles.',
    ],
    tags: ['Security', 'CSP', 'Auth & RBAC', 'TypeScript'],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Engagement',
    question: 'How does an engagement with Kiruba Digital typically begin?',
    answer:
      'We start with a complimentary 30-minute discovery call to evaluate your project scope, technical constraints, and strategic goals. Within 48 hours, we provide an architectural brief outlining recommended milestones, technology stack, and an itemized fixed-price or sprint-based investment model.',
  },
  {
    id: 'faq-2',
    category: 'Delivery',
    question: 'What are typical project timelines from kickoff to deployment?',
    answer:
      'Specialized MVPs and targeted audit refactors typically deliver in 3–5 weeks. Comprehensive bespoke web applications and enterprise portals average 6–10 weeks. We work in structured two-week sprints with continuous staging preview deployments so you always see working progress.',
  },
  {
    id: 'faq-3',
    category: 'Technical',
    question: 'Can you integrate with our existing backend, APIs, or legacy database?',
    answer:
      'Absolutely. A substantial portion of our work involves building high-performance modern web frontends on top of existing enterprise APIs (REST, GraphQL, gRPC), legacy SQL databases, or third-party platforms (Salesforce, Stripe, Shopify, Supabase, Firebase).',
  },
  {
    id: 'faq-4',
    category: 'Technical',
    question: 'How do you guarantee cross-browser compatibility and mobile responsiveness?',
    answer:
      'Every interface is tested on actual mobile, tablet, and desktop hardware spanning iOS Safari, Android Chrome, and modern desktop browsers. We maintain automated visual regression and accessibility checks (WCAG 2.2 AA) in our continuous integration pipeline.',
  },
  {
    id: 'faq-5',
    category: 'Security',
    question: 'How do you handle data privacy, security, and intellectual property?',
    answer:
      'All source code, documentation, and digital assets are 100% owned by your organization upon deployment. We sign standard NDAs before technical discovery and adhere to industry standard security practices including zero-secret client bundles and encrypted credentials.',
  },
  {
    id: 'faq-6',
    category: 'Engagement',
    question: 'Do you offer ongoing post-launch maintenance and SLA support?',
    answer:
      'Yes. Following project deployment, we provide a 30-day warranty period for defect resolution, along with flexible monthly maintenance retainers covering security updates, dependency upgrades, performance monitoring, and continuous feature enhancements.',
  },
];
