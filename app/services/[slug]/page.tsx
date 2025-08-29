import ServicesDetailHero from "@/components/Services/ServicesDetail";
import OurApproach from "@/components/Services/OurApproach";
import Services from "@/components/Services";
import { SERVICE_DETAILS, SERVICES_CONTENT, SERVICES_PAGE_LIST } from "@/constants/services";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  const slugs = [
    ...SERVICES_CONTENT.items.map((i) => i.slug),
    ...SERVICES_PAGE_LIST.map((i) => i.slug),
  ];
  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}

export default function DetailPage({ params }: PageProps) {
  const detail = SERVICE_DETAILS[params.slug as keyof typeof SERVICE_DETAILS];
  if (!detail) return notFound();

  return (
    <>
      <ServicesDetailHero content={detail.hero} />
      <OurApproach content={detail.approach} />
      <Services />
    </>
  );
}
