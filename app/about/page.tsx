import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import AboutHero from "@/components/About/AboutHero";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyUs />
      <CaseStudies />
      <CTA />
      <Footer />
    </>
  );
}
