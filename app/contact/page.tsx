import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Lyseibug | Schedule a Free Consultation",
  description:
    "Have a project in mind? Contact Lyseibug to discuss custom software development, mobile apps, ERP solutions, or IT support.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <CTA />
    </>
  );
}
