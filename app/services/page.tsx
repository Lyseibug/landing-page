import type { Metadata } from "next";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesProcess from "@/components/Services/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Software Development Services | Web, Mobile, ERP, IT Support | Lyseibug",
  description:
    "End-to-end software development and IT services to solve complex challenges, improve efficiency, and accelerate digital growth—with measurable ROI.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <CTA />
    </>
  );
}
