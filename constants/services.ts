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


