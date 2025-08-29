export type ServiceText = { slug: string; title: string; description: string };

export const SERVICES_HERO_CONTENT = {
  badge: "Our Services",
  headline: {
    pre: "Transform your",
    highlight: "business",
    post: "with our expert",
    line2: "software solutions",
  },
  description:
    "We provide end-to-end software development and IT services designed to solve complex challenges, drive efficiency, and accelerate your digital growth.",
} as const;

export const SERVICES_CONTENT = {
  badge: "What We Do",
  heading: "Comprehensive Software & IT Services",
  description:
    "From concept to deployment and beyond, our full-stack expertise empowers businesses to innovate, scale, and maintain a competitive edge.",
  items: [
    {
      slug: "web-development",
      title: "Web Development",
      description:
        "Custom, high-performance websites and web applications built for user engagement, security, and scalability to achieve your business objectives.",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps engineered for exceptional user experience, performance, and market success on iOS and Android.",
    },
    {
      slug: "erp-solutions",
      title: "ERP Solutions",
      description:
        "Integrated ERP systems that streamline your operations, centralize data, and provide actionable insights to improve productivity and decision-making.",
    },
    {
      slug: "software-rescue",
      title: "Software Rescue",
      description:
        "Get stalled or problematic software projects back on track. We audit, refactor, and deliver quality code to save you time and resources.",
    },
    {
      slug: "it-support-consultancy",
      title: "IT Support & Consultancy",
      description:
        "Proactive IT management and strategic consulting to ensure your infrastructure is secure, efficient, and aligned with your business goals.",
    },
  ] as ServiceText[],
  moreDetailsLabel: "Explore service",
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
    slug: "web-development",
    title: "Web Development",
    description:
      "We craft responsive, secure, and scalable web solutions that convert visitors into customers and support your business growth.",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1615&auto=format&fit=crop",
      alt: "A developer coding a modern website interface",
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Our team builds intuitive, high-performing mobile applications that deliver seamless user experiences and drive engagement.",
    image: {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
      alt: "Hand holding a smartphone showing a beautifully designed app",
    },
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    description:
      "Implement tailored Enterprise Resource Planning systems to unify your business processes, data, and teams onto a single, efficient platform.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
      alt: "Team collaborating over data dashboards",
    },
  },
  {
    slug: "software-rescue",
    title: "Software Rescue",
    description:
      "Struggling with a difficult software project? We specialize in diagnosing issues, rewriting code, and delivering a robust, functional product.",
    image: {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
      alt: "Developers collaborating to solve a coding problem on a screen",
    },
  },
  {
    slug: "it-support-consultancy",
    title: "IT Support & Consultancy",
    description:
      "Get reliable, ongoing IT support and strategic advice to optimize your technology stack, enhance security, and reduce downtime.",
    image: {
      src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
      alt: "IT consultant explaining network diagrams to a client",
    },
  },
];

// Our process section content (services page)
export const SERVICES_PROCESS_CONTENT = {
  badge: "Our Process",
  heading: "Our Collaborative Approach",
  description:
    "We believe in transparency and partnership. Our proven process ensures your project is delivered on time, on budget, and to the highest standard.",
  steps: [
    {
      title: "Discover & Strategize",
      description:
        "We dive deep into your business goals, challenges, and technical requirements to build a comprehensive project roadmap and strategy.",
    },
    {
      title: "Design & Architect",
      description:
        "Our architects and designers create the blueprint for your solution, focusing on user experience, technology stack, and scalable infrastructure.",
    },
    {
      title: "Develop & Implement",
      description:
        "Using agile methodologies, we build your solution with precision, providing regular updates and demos for continuous feedback.",
    },
    {
      title: "Deploy & Scale",
      description:
        "We manage the full launch process and provide ongoing support, maintenance, and optimization to ensure long-term success and growth.",
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
  "web-development": {
    slug: "web-development",
    hero: {
      badge: "Service",
      title: { line1: "Web", line2: "Development" },
      description:
        "We build secure, fast, and scalable websites and web applications that deliver exceptional user experiences and drive measurable business results.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1615&auto=format&fit=crop",
        alt: "Developer creating a modern web application",
      },
    },
    approach: {
      introTitle: "Our Development Process",
      introText:
        "We combine cutting-edge technology with proven methodologies to deliver robust web solutions that grow with your business.",
      steps: [
        { title: "Strategy & Planning", text: "We define project goals, scope, and key functionalities to create a detailed technical roadmap." },
        { title: "UI/UX Design", text: "Our designers craft intuitive and engaging user interfaces that prioritize usability and conversion." },
        { title: "Agile Development", text: "We build your product iteratively with modern frameworks, ensuring quality and flexibility." },
        { title: "QA & Launch", text: "Rigorous testing and seamless deployment ensure a flawless launch and optimal performance." },
      ],
      whyTitle: "Why Partner With Us",
      whyBullets: [
        { title: "Performance-Driven", text: "We build fast-loading, SEO-friendly websites that rank higher and convert better." },
        { title: "Security First", text: "From code to infrastructure, we implement best practices to protect your data and your users." },
        { title: "Scalable Architecture", text: "We design solutions that can handle growth in users and functionality without costly reworks." },
        { title: "Ongoing Partnership", text: "We provide support and evolution strategies to keep your digital assets ahead of the curve." },
      ],
      cta: {
        title: "Ready to Build Your Digital Presence?",
        text: "Let's create a website that works as hard as you do.",
        primary: { label: "Start a Project", href: "/contact" },
        secondary: { label: "See All Services", href: "/services" },
      },
    },
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    hero: {
      badge: "Service",
      title: { line1: "Mobile App", line2: "Development" },
      description:
        "From concept to launch, we create beautiful, intuitive, and powerful mobile applications that users love and that deliver real business value.",
      image: {
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
        alt: "A sleek mobile app interface on a phone",
      },
    },
    approach: {
      introTitle: "Our App Development Strategy",
      introText: "We focus on user-centric design and robust engineering to create mobile experiences that stand out in a crowded marketplace.",
      steps: [
        { title: "Concept & Validation", text: "We help refine your idea, define core features, and validate market fit to ensure success." },
        { title: "Native & Cross-Platform", text: "We choose the right technology (Native iOS/Android or Cross-Platform) for your budget and goals." },
        { title: "Agile Development", text: "We develop in transparent sprints, allowing for regular feedback and prioritization of features." },
        { title: "Store Deployment & ASO", text: "We handle the entire submission process and optimize listings for maximum visibility." },
      ],
      whyTitle: "Why Choose Us for Your App",
      whyBullets: [
        { title: "User-Focused Design", text: "We create apps with stunning UX/UI that drive engagement and retention." },
        { title: "Performance Engineering", text: "We optimize for speed and smooth operation, even under heavy load or offline." },
        { title: "Data-Driven Insights", text: "We integrate analytics to track performance and inform future development cycles." },
        { title: "End-to-End Service", text: "From initial idea to post-launch updates, we are your single partner for mobile success." },
      ],
      cta: {
        title: "Have a Game-Changing App Idea?",
        text: "Let's turn your vision into a downloadable reality.",
        primary: { label: "Discuss Your App", href: "/contact" },
        secondary: { label: "View Our Work", href: "/portfolio" },
      },
    },
  },
  "erp-solutions": {
    slug: "erp-solutions",
    hero: {
      badge: "Service",
      title: { line1: "ERP", line2: "Solutions" },
      description:
        "Tailored ERP systems to streamline operations, improve visibility, and drive data-informed decisions across your organization.",
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        alt: "Dashboard showing business analytics and KPIs",
      },
    },
    approach: {
      introTitle: "Our Implementation Approach",
      introText: "We take a process-first approach to ERP implementation, ensuring the system fits your business like a glove.",
      steps: [
        { title: "Business Process Analysis", text: "We map your current workflows and identify opportunities for optimization and automation." },
        { title: "Solution Design", text: "We configure and customize the ERP platform to match your specific business requirements." },
        { title: "Data Migration", text: "We securely transfer your existing data into the new system with integrity checks and validation." },
        { title: "Training & Enablement", text: "We provide comprehensive training and documentation to ensure smooth adoption across your team." },
      ],
      whyTitle: "Why Our ERP Solutions Stand Out",
      whyBullets: [
        { title: "Industry Expertise", text: "We understand the unique challenges and opportunities within your specific sector." },
        { title: "Customization Capabilities", text: "We tailor the ERP to your processes, not the other way around." },
        { title: "Integration Proficiency", text: "We seamlessly connect your ERP with existing software ecosystems for unified operations." },
        { title: "Ongoing Optimization", text: "We provide continuous support and system enhancements as your business evolves." },
      ],
      cta: {
        title: "Ready to Streamline Your Operations?",
        text: "Let's implement an ERP solution that grows with your business.",
        primary: { label: "Discuss ERP Options", href: "/contact" },
        secondary: { label: "See All Services", href: "/services" },
      },
    },
  },
  "software-rescue": {
    slug: "software-rescue",
    hero: {
      badge: "Service",
      title: { line1: "Software", line2: "Rescue" },
      description:
        "Revive troubled projects with our expert intervention. We diagnose issues, refactor code, and deliver quality solutions that save time and resources.",
      image: {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
        alt: "Team collaborating to solve complex software problems",
      },
    },
    approach: {
      introTitle: "Our Rescue Process",
      introText: "We systematically assess, stabilize, and improve struggling software projects to get them back on track.",
      steps: [
        { title: "Comprehensive Audit", text: "We conduct a thorough analysis of code quality, architecture, and project documentation." },
        { title: "Issue Prioritization", text: "We identify critical problems and create a phased plan for addressing them efficiently." },
        { title: "Code Refactoring", text: "We improve code structure, implement best practices, and enhance maintainability." },
        { title: "Testing & Quality Assurance", text: "We implement robust testing protocols to ensure stability and prevent future issues." },
      ],
      whyTitle: "Why Choose Our Rescue Services",
      whyBullets: [
        { title: "Proven Track Record", text: "We've successfully rescued dozens of projects across various industries and technologies." },
        { title: "Transparent Communication", text: "We provide clear assessments, regular updates, and realistic timelines throughout the process." },
        { title: "Technical Expertise", text: "Our team possesses deep knowledge across multiple programming languages and frameworks." },
        { title: "Business Focus", text: "We align technical solutions with your business objectives to ensure maximum ROI." },
      ],
      cta: {
        title: "Need to Rescue a Project?",
        text: "Let's diagnose your challenges and create a recovery plan together.",
        primary: { label: "Request Project Audit", href: "/contact" },
        secondary: { label: "View Case Studies", href: "/case-studies" },
      },
    },
  },
  "it-support-consultancy": {
    slug: "it-support-consultancy",
    hero: {
      badge: "Service",
      title: { line1: "IT Support &", line2: "Consultancy" },
      description:
        "Proactive IT management and strategic guidance to keep your systems secure, efficient, and perfectly aligned with your business objectives.",
      image: {
        src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
        alt: "IT consultant discussing technology strategy with clients",
      },
    },
    approach: {
      introTitle: "Our Support Methodology",
      introText: "We provide comprehensive IT services that keep your operations running smoothly while planning for future growth.",
      steps: [
        { title: "Infrastructure Assessment", text: "We evaluate your current IT environment to identify strengths, weaknesses, and opportunities." },
        { title: "Strategic Roadmapping", text: "We develop a customized technology plan aligned with your short and long-term business goals." },
        { title: "Proactive Monitoring", text: "We implement 24/7 monitoring solutions to detect and resolve issues before they impact your business." },
        { title: "Continuous Optimization", text: "We regularly review and enhance your systems to improve performance, security, and cost-efficiency." },
      ],
      whyTitle: "Why Partner With Us for IT",
      whyBullets: [
        { title: "Proactive Approach", text: "We prevent problems before they occur, minimizing downtime and maximizing productivity." },
        { title: "Security Expertise", text: "We implement multi-layered security measures to protect your data and infrastructure from threats." },
        { title: "Strategic Guidance", text: "We help you make informed technology decisions that support business growth and innovation." },
        { title: "Scalable Solutions", text: "Our services grow with your business, providing the right level of support at each stage." },
      ],
      cta: {
        title: "Ready to Optimize Your IT Infrastructure?",
        text: "Let's create a technology environment that empowers your business.",
        primary: { label: "Schedule Consultation", href: "/contact" },
        secondary: { label: "Explore Services", href: "/services" },
      },
    },
  },
} as const;