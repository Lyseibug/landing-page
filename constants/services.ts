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


