export type ServiceText = { slug: string; title: string; description: string };

export const SERVICES_HERO_CONTENT = {
  badge: "Our services",
  headline: {
    pre: "Empower your",
    highlight: "growth",
    post: "with our",
    line2: "various services",
  },
  description:
    "we offer a comprehensive suite of digital marketing services designed to help businesses thrive in today's competitive online landscape.",
} as const;

export const SERVICES_CONTENT = {
  badge: "Our services",
  heading: "What We Offer",
  description:
    "We provide end-to-end software development and IT solutions that empower businesses to scale, innovate, and stay competitive in the digital era.",
  items: [
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "We build high-performing, responsive, and secure websites tailored to your brand and business goals.",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Our team creates user-friendly Android and iOS apps designed for performance, engagement, and growth.",
    },
    {
      slug: "erp-solutions",
      title: "ERP Solutions",
      description:
        "Streamline operations and improve productivity with our customized ERP software built to fit your processes.",
    },
    {
      slug: "software-rescue",
      title: "Software Rescue",
      description:
        "We fix, upgrade, and optimize underperforming or incomplete software projects, saving you time and costs.",
    },
    {
      slug: "it-support-consultancy",
      title: "IT Support & Consultancy",
      description:
        "Get reliable IT support and expert consultancy to keep your systems secure, efficient, and future-ready.",
    },
    {
      slug: "business-solutions",
      title: "Business Solutions",
      description: "Drive growth and efficiency with our tailored business solutions designed to optimize performance and support your success."
    }


  ] as ServiceText[],
  moreDetailsLabel: "More details",
  viewAll: { label: "View all services", href: "/services" },
} as const;


// Services page list section
export type ServicePageItem = {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export const SERVICES_PAGE_LIST: ServicePageItem[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO experts are dedicated to helping your website rank higher in search engine results pages (SERPs).",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Analytics dashboard showing SEO metrics",
    },
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    description:
      "Engage your audience and establish your brand as a thought leader with our content marketing services.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Hand writing audience with arrows on whiteboard",
    },
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "We help you connect with your audience, build relationships, and drive engagement across various platforms.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Smartphone showing social media app icons",
    },
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description:
      "Nurture leads and drive conversions with our email marketing services, from newsletters to drip campaigns.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Laptop screen open to an email client",
    },
  },
  {
    slug: "analytics-reporting",
    title: "Analytics and Reporting",
    description:
      "Gain valuable insights into your digital marketing performance with our analytics and reporting services.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Laptop showing analytics charts and graphs",
    },
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Maximize the effectiveness of your digital marketing efforts with our conversion rate optimization services.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Person analyzing conversion data on laptop",
    },
  },
];


// Our process section content (services page)
export const SERVICES_PROCESS_CONTENT = {
  badge: "Our process",
  heading: "How we work",
  description:
    "We believe in taking a strategic and methodical approach to every project we undertake.",
  steps: [
    {
      title: "Discovery",
      description:
        "We start by getting to know you and your business inside and out. We'll schedule a discovery call or meeting to discuss your goals, objectives, target audience, and unique challenges.",
    },
    {
      title: "Strategy Development",
      description:
        "Next, we roll up our sleeves and dive into strategy development. Drawing on our expertise and industry insights, we'll develop a customized digital marketing strategy tailored to your specific needs and objectives.",
    },
    {
      title: "Implementation",
      description:
        "With a solid strategy in place, it's time to put our plan into action. Our team of experts will work diligently to execute the various components of your digital marketing campaign.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Finally, we believe in the power of continuous improvement. We'll work closely with you to gather feedback, assess results, and identify opportunities for growth and refinement.",
    },
  ],
} as const;


export type ServiceDetailHeroContent = {
  badge: string;
  title: { line1: string; line2: string };
  description: string;
  image: { src: string; alt: string };
};

export type ServiceDetailApproachContent = {
  introTitle: string;
  introText: string;
  steps: { title: string; text: string }[];
  whyTitle: string;
  whyBullets: { title: string; text: string }[];
  cta: { title: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
};

export type ServiceDetail = {
  slug: string;
  hero: ServiceDetailHeroContent;
  approach: ServiceDetailApproachContent;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  // Software & IT Services
  "web-development": {
    slug: "web-development",
    hero: {
      badge: "Service",
      title: { line1: "Web", line2: "Development" },
      description:
        "We build secure, fast, and accessible websites and web apps tailored to your goals.",
      image: {
        src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
        alt: "Developer working on responsive web design",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText:
        "From discovery to deployment, we deliver robust web experiences that scale.",
      steps: [
        { title: "Discovery", text: "Requirements, goals, and constraints alignment." },
        { title: "Architecture", text: "Choose the right stack and system design." },
        { title: "Implementation", text: "Iterative delivery with CI/CD and QA." },
        { title: "Launch & Support", text: "Monitoring, analytics, and continuous improvement." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Performance", text: "Lighthouse-optimized and SEO-ready by default." },
        { title: "Security", text: "Best practices from code to infrastructure." },
        { title: "Reliability", text: "Test coverage and observability built-in." },
        { title: "Partnership", text: "We iterate with you, not just for you." },
      ],
      cta: {
        title: "Ready to build?",
        text: "Let's create something users love.",
        primary: { label: "Start a project", href: "/contact" },
        secondary: { label: "See more services", href: "/services" },
      },
    },
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    hero: {
      badge: "Service",
      title: { line1: "Mobile App", line2: "Development" },
      description:
        "Native and cross-platform apps focused on performance and delightful UX.",
      image: {
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
        alt: "Mobile app UI design on smartphone",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Product thinking meets solid engineering and QA.",
      steps: [
        { title: "Research", text: "User journeys and market fit." },
        { title: "Prototyping", text: "Validate quickly with prototypes." },
        { title: "Build", text: "Iterate with analytics-driven insights." },
        { title: "Ship & Iterate", text: "App Store/Play rollout and updates." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "UX-first", text: "Design systems and accessibility included." },
        { title: "Cross-platform", text: "One codebase, native performance." },
        { title: "Observability", text: "Crash analytics and monitoring." },
        { title: "Support", text: "We scale with your roadmap." },
      ],
      cta: {
        title: "Build your app",
        text: "Turn your idea into a loved product.",
        primary: { label: "Talk to us", href: "/contact" },
        secondary: { label: "All services", href: "/services" },
      },
    },
  },
  "erp-solutions": {
    slug: "erp-solutions",
    hero: {
      badge: "Service",
      title: { line1: "ERP", line2: "Solutions" },
      description:
        "Tailored ERP to streamline operations, improve visibility, and drive decisions.",
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        alt: "Dashboard with operational KPIs",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Process-first implementation with change management.",
      steps: [
        { title: "Process Mapping", text: "Understand and document workflows." },
        { title: "Customization", text: "Fit the tool to your business." },
        { title: "Integration", text: "Connect your data sources securely." },
        { title: "Enablement", text: "Training and playbooks for teams." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "ROI", text: "Faster time-to-value with measurable outcomes." },
        { title: "Scalability", text: "Grow without replatforming." },
        { title: "Compliance", text: "Data governance and auditability." },
        { title: "Support", text: "Ongoing optimizations as needs evolve." },
      ],
      cta: {
        title: "Optimize operations",
        text: "Empower teams with the right system.",
        primary: { label: "Discuss ERP", href: "/contact" },
        secondary: { label: "Explore services", href: "/services" },
      },
    },
  },
  "software-rescue": {
    slug: "software-rescue",
    hero: {
      badge: "Service",
      title: { line1: "Software", line2: "Rescue" },
      description:
        "Revive projects with audits, refactors, and targeted fixes to ship reliably.",
      image: {
        src: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
        alt: "Engineer debugging code",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Stabilize, optimize, and deliver with confidence.",
      steps: [
        { title: "Audit", text: "Identify root causes across stack and process." },
        { title: "Prioritize", text: "Address highest-impact issues first." },
        { title: "Refactor", text: "Improve architecture and test coverage." },
        { title: "Handover", text: "Docs and metrics for long-term health." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Experience", text: "Rescued dozens of complex systems." },
        { title: "Transparency", text: "Clear plans and weekly outcomes." },
        { title: "Quality", text: "Automated tests and CI gates." },
        { title: "Speed", text: "Fast stabilization without shortcuts." },
      ],
      cta: {
        title: "Get back on track",
        text: "We turn chaos into clarity.",
        primary: { label: "Request audit", href: "/contact" },
        secondary: { label: "More services", href: "/services" },
      },
    },
  },
  "it-support-consultancy": {
    slug: "it-support-consultancy",
    hero: {
      badge: "Service",
      title: { line1: "IT Support &", line2: "Consultancy" },
      description:
        "Proactive support and strategic guidance to keep systems secure and efficient.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        alt: "Team discussing IT infrastructure",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Reliability, security, and cost-efficiency at the core.",
      steps: [
        { title: "Assessment", text: "Baseline health and risk review." },
        { title: "Roadmap", text: "Prioritized improvements and KPIs." },
        { title: "Execution", text: "Managed services and automation." },
        { title: "Review", text: "Quarterly reviews and tuning." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Security", text: "Zero-trust and best practices." },
        { title: "Uptime", text: "SLA-backed reliability." },
        { title: "Savings", text: "Optimize spend without tradeoffs." },
        { title: "Coverage", text: "24/7 support options available." },
      ],
      cta: {
        title: "Stabilize IT",
        text: "Modernize and secure your stack.",
        primary: { label: "Talk to experts", href: "/contact" },
        secondary: { label: "See services", href: "/services" },
      },
    },
  },
  "business-solutions": {
    slug: "business-solutions",
    hero: {
      badge: "Service",
      title: { line1: "Business", line2: "Solutions" },
      description:
        "Tailored systems and analytics to unlock growth and operational excellence.",
      image: {
        src: "https://images.unsplash.com/photo-1551847677-dc82d764e1df?q=80&w=1600&auto=format&fit=crop",
        alt: "Business team reviewing analytics",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Strategy-led implementations with measurable outcomes.",
      steps: [
        { title: "Discovery", text: "Define goals and key metrics." },
        { title: "Solution Design", text: "Pick tools and data flows." },
        { title: "Implementation", text: "Deliver incrementally with feedback." },
        { title: "Scale", text: "Automate and optimize continuously." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Impact", text: "Focus on business outcomes." },
        { title: "Clarity", text: "Transparent execution and reports." },
        { title: "Expertise", text: "Domain and technical depth." },
        { title: "Longevity", text: "We design for tomorrow." },
      ],
      cta: {
        title: "Unlock growth",
        text: "Let's build a competitive edge.",
        primary: { label: "Contact sales", href: "/contact" },
        secondary: { label: "Explore services", href: "/services" },
      },
    },
  },
  // Digital Marketing Services
  seo: {
    slug: "seo",
    hero: {
      badge: "Service",
      title: { line1: "Search Engine", line2: "Optimization (SEO)" },
      description:
        "Climb rankings, outrank competitors, and attract qualified leads with comprehensive SEO.",
      image: {
        src: "https://images.unsplash.com/photo-1551281044-8d8d276e8b53?q=80&w=1600&auto=format&fit=crop",
        alt: "SEO dashboard showing clicks, impressions, CTR, and position",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText:
        "Data-driven insights, strategic planning, and continuous optimization.",
      steps: [
        { title: "Audit", text: "Technical, on-page, and UX review." },
        { title: "Keyword Research", text: "Find the terms that convert." },
        { title: "On-Page Optimization", text: "Meta, headers, content, linking." },
        { title: "Content Strategy", text: "Editorial plan to win intent." },
        { title: "Link Building", text: "Earn authoritative backlinks." },
        { title: "Local SEO", text: "Optimize for local packs and maps." },
        { title: "Ongoing Optimization", text: "Measure and iterate." },
      ],
      whyTitle: "Why Choose Us",
      whyBullets: [
        { title: "Track Record", text: "Proven lifts in traffic and revenue." },
        { title: "Custom", text: "No one-size-fits-all playbooks." },
        { title: "Transparent", text: "Clear reporting and insights." },
        { title: "Support", text: "Dedicated experts by your side." },
      ],
      cta: {
        title: "Boost organic growth",
        text: "See how SEO can move your KPIs.",
        primary: { label: "Get started", href: "/contact" },
        secondary: { label: "See all services", href: "/services" },
      },
    },
  },
  "content-marketing": {
    slug: "content-marketing",
    hero: {
      badge: "Service",
      title: { line1: "Content", line2: "Marketing" },
      description:
        "Plan, produce, and distribute content that builds trust and drives demand.",
      image: {
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
        alt: "Content planning on a desk",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Editorial calendars backed by research and analytics.",
      steps: [
        { title: "Strategy", text: "Define personas and content pillars." },
        { title: "Production", text: "Create high-quality, optimized assets." },
        { title: "Distribution", text: "Promote across owned and paid channels." },
        { title: "Measurement", text: "Attribute impact on pipeline and revenue." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Quality", text: "Expert writers and editors." },
        { title: "SEO Aligned", text: "Content that ranks and converts." },
        { title: "Consistent", text: "Reliable cadence and governance." },
        { title: "Full-funnel", text: "Awareness to retention." },
      ],
      cta: {
        title: "Scale content",
        text: "Let's build your content engine.",
        primary: { label: "Talk to content lead", href: "/contact" },
        secondary: { label: "All services", href: "/services" },
      },
    },
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    hero: {
      badge: "Service",
      title: { line1: "Social Media", line2: "Marketing" },
      description:
        "Build relationships and drive engagement across the platforms your audience loves.",
      image: {
        src: "https://images.unsplash.com/photo-1517260911058-0fcfd733702f?q=80&w=1600&auto=format&fit=crop",
        alt: "Social media icons and engagement metrics",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Storytelling meets analytics for compounding reach.",
      steps: [
        { title: "Audit", text: "Baseline presence and competitors." },
        { title: "Playbook", text: "Voice, tone, and content themes." },
        { title: "Execution", text: "Publishing, community, and creators." },
        { title: "Optimize", text: "Test creative and formats continuously." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Creativity", text: "On-brand, scroll-stopping content." },
        { title: "Pace", text: "Ship fast, learn faster." },
        { title: "Insights", text: "What works is what scales." },
        { title: "Coverage", text: "From strategy to moderation." },
      ],
      cta: {
        title: "Grow your audience",
        text: "Make social a growth lever.",
        primary: { label: "Plan a campaign", href: "/contact" },
        secondary: { label: "See services", href: "/services" },
      },
    },
  },
  "email-marketing": {
    slug: "email-marketing",
    hero: {
      badge: "Service",
      title: { line1: "Email", line2: "Marketing" },
      description:
        "Lifecycle programs and newsletters that nurture, convert, and retain.",
      image: {
        src: "https://images.unsplash.com/photo-1494336956603-39a2e6ffd468?q=80&w=1600&auto=format&fit=crop",
        alt: "Email campaign dashboards",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Right message, right person, right time.",
      steps: [
        { title: "Segmentation", text: "Data-driven audience building." },
        { title: "Automation", text: "Flows for lifecycle moments." },
        { title: "Creative", text: "Copy and design that converts." },
        { title: "Growth", text: "List growth that respects consent." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Deliverability", text: "Keep your domain reputation high." },
        { title: "Personalization", text: "Dynamic content at scale." },
        { title: "Attribution", text: "Tie emails to revenue." },
        { title: "Tooling", text: "ESP-agnostic expertise." },
      ],
      cta: {
        title: "Upgrade email",
        text: "Turn inbox into impact.",
        primary: { label: "Design my flows", href: "/contact" },
        secondary: { label: "All services", href: "/services" },
      },
    },
  },
  "analytics-reporting": {
    slug: "analytics-reporting",
    hero: {
      badge: "Service",
      title: { line1: "Analytics &", line2: "Reporting" },
      description:
        "Measure what matters and make decisions with confidence.",
      image: {
        src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
        alt: "Analytics dashboards and charts",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "From event design to executive dashboards.",
      steps: [
        { title: "Instrumentation", text: "Define events and taxonomy." },
        { title: "Pipelines", text: "Clean, reliable data flows." },
        { title: "Dashboards", text: "Insights for every level." },
        { title: "Optimization", text: "Experimentation and learning." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Accuracy", text: "Trust your numbers." },
        { title: "Actionable", text: "Insights, not noise." },
        { title: "Speed", text: "Fast time-to-insight." },
        { title: "Enablement", text: "Train teams to self-serve." },
      ],
      cta: {
        title: "See clearly",
        text: "Turn data into growth.",
        primary: { label: "Talk analytics", href: "/contact" },
        secondary: { label: "More services", href: "/services" },
      },
    },
  },
  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    hero: {
      badge: "Service",
      title: { line1: "Conversion Rate", line2: "Optimization (CRO)" },
      description:
        "Increase conversions with experimentation, UX improvements, and performance wins.",
      image: {
        src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
        alt: "A/B testing results dashboard",
      },
    },
    approach: {
      introTitle: "Our Approach",
      introText: "Evidence-based testing and UX science.",
      steps: [
        { title: "Research", text: "Identify friction and hypotheses." },
        { title: "Experiment", text: "A/B and multivariate testing." },
        { title: "Implement", text: "Rollout winning variations." },
        { title: "Scale", text: "Build a culture of experimentation." },
      ],
      whyTitle: "Why choose us",
      whyBullets: [
        { title: "Impact", text: "Lift conversion and revenue." },
        { title: "Rigor", text: "Statistically sound methods." },
        { title: "Speed", text: "From hypothesis to result quickly." },
        { title: "Holistic", text: "CRO + performance + UX." },
      ],
      cta: {
        title: "Lift conversions",
        text: "Let's find the wins.",
        primary: { label: "Start optimizing", href: "/contact" },
        secondary: { label: "All services", href: "/services" },
      },
    },
  },
} as const;

