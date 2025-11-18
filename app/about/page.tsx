import { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import StorySection from "@/components/sections/about/StorySection";
import ExperienceSection from "@/components/sections/about/ExperienceSection";
import ServicesSection from "@/components/sections/about/ServicesSection";
import FullWidthImage from "@/components/sections/about/FullWidthImage";
import PhilosophySection from "@/components/sections/about/PhilosophySection";

export const metadata: Metadata = {
  title: "About Kyson | Creative Director & Designer | Arcade Studios",
  description:
    "Meet Kyson Dana, award-winning creative director with 10+ years experience. Former lead designer at Rivian for 5 years. Specializing in brand transformation, product design, and digital storytelling for innovative companies.",
  keywords: [
    "about kyson dana",
    "creative director biography",
    "rivian designer",
    "brand transformation expert",
    "product design expertise",
    "digital storytelling",
    "design philosophy",
  ],
  openGraph: {
    title: "About Kyson | Creative Director & Designer",
    description: "Former Rivian lead designer with 10+ years transforming brands and creating digital products.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
        <AboutHero />
      </div>
      <StorySection />
      <ExperienceSection />
      <ServicesSection />
      <FullWidthImage />
      <PhilosophySection />
    </div>
  );
}

