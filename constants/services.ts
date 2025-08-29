export type ServiceText = { title: string; description: string };

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
      title: "Web Development",
      description:
        "We build high-performing, responsive, and secure websites tailored to your brand and business goals.",
    },
    {
      title: "Mobile App Development",
      description:
        "Our team creates user-friendly Android and iOS apps designed for performance, engagement, and growth.",
    },
    {
      title: "ERP Solutions",
      description:
        "Streamline operations and improve productivity with our customized ERP software built to fit your processes.",
    },
    {
      title: "Software Rescue",
      description:
        "We fix, upgrade, and optimize underperforming or incomplete software projects, saving you time and costs.",
    },
    {
      title: "IT Support & Consultancy",
      description:
        "Get reliable IT support and expert consultancy to keep your systems secure, efficient, and future-ready.",
    },
    {
      title: "Business Solutions",
      description: "Drive growth and efficiency with our tailored business solutions designed to optimize performance and support your success."
    }


  ] as ServiceText[],
  moreDetailsLabel: "More details",
  viewAll: { label: "View all services", href: "/services" },
} as const;


// Services page list section
export type ServicePageItem = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export const SERVICES_PAGE_LIST: ServicePageItem[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO experts are dedicated to helping your website rank higher in search engine results pages (SERPs).",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Analytics dashboard showing SEO metrics",
    },
  },
  {
    title: "Content Marketing",
    description:
      "Engage your audience and establish your brand as a thought leader with our content marketing services.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Hand writing audience with arrows on whiteboard",
    },
  },
  {
    title: "Social Media Marketing",
    description:
      "We help you connect with your audience, build relationships, and drive engagement across various platforms.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Smartphone showing social media app icons",
    },
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and drive conversions with our email marketing services, from newsletters to drip campaigns.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Laptop screen open to an email client",
    },
  },
  {
    title: "Analytics and Reporting",
    description:
      "Gain valuable insights into your digital marketing performance with our analytics and reporting services.",
    image: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      alt: "Laptop showing analytics charts and graphs",
    },
  },
  {
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


// Service detail: Hero (SEO)
export const SERVICE_DETAIL_HERO_CONTENT = {
  badge: "Service",
  title: {
    line1: "Search Engine",
    line2: "Optimization (SEO)",
  },
  description:
    "At Zenith, we understand the critical role that search engine optimization (SEO) plays in driving organic traffic to your website and increasing your online visibility. With our comprehensive SEO services, we'll help you climb the search engine rankings, outrank your competitors, and attract more qualified leads to your business.",
  image: {
    src: "https://images.unsplash.com/photo-1551281044-8d8d276e8b53?q=80&w=1600&auto=format&fit=crop",
    alt: "SEO dashboard showing clicks, impressions, CTR, and position",
  },
} as const;


// Service detail: Our Approach (SEO)
export const SERVICE_DETAIL_APPROACH_CONTENT = {
  introTitle: "Our Approach",
  introText:
    "Our SEO approach is built on a foundation of data-driven insights, strategic planning, and continuous optimization. Here's how we do it:",
  steps: [
    {
      title: "Comprehensive Website Audit",
      text:
        "We'll start by conducting a thorough audit of your website to identify areas for improvement, including technical issues, on-page optimization, and user experience enhancements.",
    },
    {
      title: "Keyword Research",
      text:
        "Using advanced keyword research tools and techniques, we'll identify the most relevant and high-performing keywords for your industry, target audience, and business objectives.",
    },
    {
      title: "On-Page Optimization",
      text:
        "We'll optimize your website's meta tags, headers, content, and internal linking structure to ensure maximum visibility and relevance to search engines.",
    },
    {
      title: "Content Strategy",
      text:
        "Our team of expert content creators will develop a customized content strategy designed to engage your audience, drive traffic, and improve your search engine rankings.",
    },
    {
      title: "Link Building",
      text:
        "We'll help you earn high-quality backlinks from authoritative websites in your industry, boosting your website's authority and credibility in the eyes of search engines.",
    },
    {
      title: "Local SEO",
      text:
        "For businesses with a physical presence, we'll optimize your website for local search, ensuring that you appear prominently in local search results and Google Maps listings.",
    },
    {
      title: "Ongoing Monitoring and Optimization",
      text:
        "We'll continuously monitor your website's performance, track key metrics, and make data-driven adjustments to optimize your SEO strategy for maximum results.",
    },
  ],
  whyTitle: "Why Choose Zenith for Your SEO Needs?",
  whyBullets: [
    {
      title: "Proven Track Record",
      text:
        "We have a proven track record of success, helping businesses like yours achieve higher search engine rankings, increased organic traffic, and improved online visibility.",
    },
    {
      title: "Customized Strategies",
      text:
        "We don't believe in one-size-fits-all solutions. Our SEO strategies are tailored to your unique business goals, industry, and target audience, ensuring maximum effectiveness and ROI.",
    },
    {
      title: "Transparent Reporting",
      text:
        "We provide regular reports and updates detailing the performance of your SEO campaign, including key metrics, insights, and recommendations for future action.",
    },
    {
      title: "Dedicated Support",
      text:
        "Our team of SEO experts is here to support you every step of the way, answering your questions, addressing your concerns, and providing ongoing guidance and support.",
    },
  ],
  cta: {
    title: "Get Started with Zenith Today",
    text:
      "Ready to take your SEO efforts to the next level? Contact us today to learn more about our SEO services and how we can help you achieve your business goals. Let's work together to elevate your online presence and drive success for your business.",
    primary: { label: "Get Started", href: "#get-started" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
} as const;


