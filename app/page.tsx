import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
// import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Software Development Company | Web, Mobile, ERP | Lyseibug",
  description:
    "Lyseibug builds SEO-friendly websites, high-performance mobile apps, and scalable ERP systems—backed by proactive IT support—to accelerate your digital growth.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      {/* <CaseStudies /> */}
      <CTA />
    </>
  );
}
