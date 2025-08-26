export type NavItem = { label: string; href: string };

export const BRAND_NAME = "Lyseibug";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const NAV_TEXT = {
  morePages: "More pages",
  getStarted: "Get started",
  toggleAriaLabel: "Toggle menu",
};

export const HERO_CONTENT = {
  statPills: [
    "85% Business growth",
    "4.5% Conversion rate",
    "60% Leads generated",
    "55% Increased views",
    "50% Increased sales",
    "Top 3 search rankings",
  ],
  tagline: "Reach new heights with Zenith",
  headline: {
    pre: "Expert",
    highlight: "strategies",
    post: "from our",
    line2: "marketing agency",
  },
  description:
    "Zenith is a dynamic digital marketing agency dedicated to propelling businesses to the pinnacle of success in the digital realm.",
  ctas: {
    primary: { label: "Get Started", href: "#get-started" },
    secondary: { label: "Contact Us", href: "#contact" },
  },
} as const;

export const ABOUT_CONTENT = {
  badge: "About us",
  heading: "Welcome to Zenith",
  description:
    "What sets us apart is our holistic approach to digital marketing. We don't just focus on one aspect of your online presence – we take a comprehensive view of your brand, your goals, and your target audience to develop tailored strategies that drive real, measurable results.",
  cta: { label: "More about us", href: "#about" },
  image: {
    src: "/about.jpg",
    alt: "Team celebrating a successful project",
  },
  stats: [
    { value: "10", label: "Years of experience" },
    { value: "3K", label: "Satisfied clients" },
    { value: "2.5k", label: "Projects completed" },
    { value: "10M+", label: "Revenue generated" },
  ],
} as const;

export type ServiceText = { title: string; description: string };

export const SERVICES_CONTENT = {
  badge: "Our services",
  heading: "What We Offer",
  description:
    "we offer a comprehensive suite of digital marketing services designed to help businesses thrive in today’s competitive online landscape.",
  items: [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Our SEO experts are dedicated to helping your website rank higher in search engine results pages (SERPs).",
    },
    {
      title: "Content Marketing",
      description:
        "Engage your audience and establish your brand as a thought leader with our content marketing services.",
    },
    {
      title: "Social Media Marketing",
      description:
        "We help you connect with your audience, build relationships, and drive engagement across various platforms.",
    },
    {
      title: "Email Marketing",
      description:
        "Nurture leads and drive conversions with our email marketing services, from newsletters to automated drip campaigns.",
    },
  ] as ServiceText[],
  moreDetailsLabel: "More details",
  viewAll: { label: "View all services", href: "#services" },
} as const;

export const WHY_US_CONTENT = {
  badge: "Why choose us",
  heading: "Why go with Zenith?",
  description:
    "At Zenith, we understand that choosing the right digital marketing partner is a crucial decision for your business.",
  reasons: [
    {
      title: "Proven Track Record",
      description:
        "With years of experience in the industry, we have a proven track record of delivering exceptional results for our clients.",
    },
    {
      title: "Tailored Solutions",
      description:
        "Whether you're a small startup or a large enterprise, we'll work closely with you to develop customized strategies that align with your objectives and budget.",
    },
    {
      title: "Results-Driven Approach",
      description:
        "Whether your goal is to boost sales, increase brand awareness, or drive website traffic, we'll work tirelessly to help you achieve success.",
    },
    {
      title: "Exceptional Customer Service",
      description:
        "Your satisfaction is our top priority. Our dedicated team is here to ensure that your experience with us is nothing short of exceptional.",
    },
  ],
  image: {
    src: "/about.jpg",
    alt: "Team meeting in a bright office",
  },
} as const;

export type CaseStat = { icon: "chart" | "growth"; label: string };
export type CaseStudy = {
  client: string;
  title: string;
  image: { src: string; alt: string };
  stats: CaseStat[];
  cta: { label: string; href: string };
};

export const CASE_STUDIES_CONTENT = {
  badge: "Case studies",
  heading: "Our success stories",
  description:
    "Discover how Zenith has helped businesses like yours achieve their digital marketing goals with our comprehensive solutions.",
  items: [
    {
      client: "FitWell Fitness",
      title: "Email marketing automation",
      image: { src: "/cases/gmail.jpg", alt: "Laptop with Gmail logo" },
      stats: [
        { icon: "growth", label: "50% Member engagement" },
        { icon: "chart", label: "20% Upsell opportunities" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
    {
      client: "Healthy Habits",
      title: "Content marketing ROI",
      image: { src: "/cases/desk.jpg", alt: "Workspace top view" },
      stats: [
        { icon: "growth", label: "50% Website traffic" },
        { icon: "chart", label: "Increased engagement" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
    {
      client: "Tech Innovations",
      title: "Lead generation campaign",
      image: { src: "/cases/laptop-social.jpg", alt: "Laptop with social media" },
      stats: [
        { icon: "growth", label: "60% Lead generated" },
        { icon: "chart", label: "45% Increased sales" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
    {
      client: "City Cafe",
      title: "Local SEO Success Story",
      image: { src: "/cases/analytics.jpg", alt: "Analytics dashboard" },
      stats: [
        { icon: "growth", label: "Top 3 search rankings" },
        { icon: "chart", label: "40% Foot traffic" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
  ] as CaseStudy[],
  viewAll: { label: "View all case studies", href: "#" },
} as const;

export const CTA_CONTENT = {
  headingLine1: "Ready to take your digital",
  headingLine2: "marketing to the next level?",
  description:
    "Ready to discuss your digital marketing goals and how we can help you achieve them? Schedule a complimentary consultation with one of our experts.",
  cta: { label: "Schedule a free consultation", href: "#contact" },
} as const;

