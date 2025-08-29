import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesProcess from "@/components/Services/Process";
import CTA from "@/components/CTA";

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
