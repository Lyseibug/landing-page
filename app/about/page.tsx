import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";
import AboutHero from "@/components/About/AboutHero";
import VisionMission from "@/components/About/VisionMission";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <WhyUs />
      {/* <CaseStudies /> */}
      <CTA />
    </>
  );
}
