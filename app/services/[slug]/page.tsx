import type { Metadata } from "next";
import ServicesDetailHero from "@/components/Services/ServicesDetail";
import OurApproach from "@/components/Services/OurApproach";
import Services from "@/components/Services";
import { SERVICE_DETAILS, SERVICES_CONTENT, SERVICES_PAGE_LIST } from "@/constants/services";
import { BRAND_NAME } from "@/constants/content";
import { notFound } from "next/navigation";
import { absoluteUrl, buildOpenGraph, buildTwitterCard, buildServiceJsonLd } from "@/constants/seo";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  const slugs = [
    ...SERVICES_CONTENT.items.map((i) => i.slug),
    ...SERVICES_PAGE_LIST.map((i) => i.slug),
  ];
  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const detail = SERVICE_DETAILS[params.slug as keyof typeof SERVICE_DETAILS];
  if (!detail) return {};
  const titleText = `${detail.hero.title.line1} ${detail.hero.title.line2} | ${BRAND_NAME}`;
  const descriptionText = detail.hero.description;
  const url = absoluteUrl(`/services/${detail.slug}`);
  const imageUrl = detail.hero.image?.src;
  return {
    title: titleText,
    description: descriptionText,
    alternates: { canonical: url },
    openGraph: buildOpenGraph({
      title: titleText,
      description: descriptionText,
      url,
      images: imageUrl ? [{ url: imageUrl, alt: detail.hero.image.alt }] : undefined,
    }),
    twitter: buildTwitterCard({
      title: titleText,
      description: descriptionText,
      images: imageUrl ? [imageUrl] : undefined,
    }),
  };
}

export default function DetailPage({ params }: PageProps) {
  const detail = SERVICE_DETAILS[params.slug as keyof typeof SERVICE_DETAILS];
  if (!detail) return notFound();

  return (
    <>
      <ServicesDetailHero content={detail.hero} />
      <OurApproach content={detail.approach} />
      <Services />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildServiceJsonLd({
              name: `${detail.hero.title.line1} ${detail.hero.title.line2}`,
              description: detail.hero.description,
              url: absoluteUrl(`/services/${detail.slug}`),
              image: detail.hero.image?.src,
            })
          ),
        }}
      />
    </>
  );
}
