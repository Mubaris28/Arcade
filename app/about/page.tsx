import { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import StorySection from "@/components/sections/about/StorySection";
import TeamSection from "@/components/sections/about/TeamSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import FullWidthImage from "@/components/sections/about/FullWidthImage";

export const metadata: Metadata = {
  title: "About Us | Arcade Studios | Web Development Agency",
  description:
    "Meet the Arcade Studios team—a web development agency building modern digital products for startups, agencies, and next-gen brands. Specializing in React, Next.js, and full-stack solutions.",
  keywords: [
    "about arcade studios",
    "web development team",
    "react developers",
    "next.js agency",
    "full-stack development",
    "web development company",
    "software development team",
  ],
  openGraph: {
    title: "About Us | Arcade Studios",
    description: "A web development agency building modern digital products for next-gen brands.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
        <AboutHero />
      </div>
      <StorySection />
      <TeamSection />
      <ValuesSection />
      <FullWidthImage />
    </div>
  );
}

