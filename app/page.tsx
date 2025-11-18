import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TwoUpSection from "@/components/sections/TwoUpSection";
import BrandShowcase from "@/components/sections/BrandShowcase";
import Capabilities from "@/components/sections/Capabilities";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CTA from "@/components/sections/CTA";
import VideoSection from "@/components/sections/VideoSection";

export const metadata: Metadata = {
  title: "Arcade Studios | Creative Director & Product Designer",
  description:
    "Award-winning creative director and product designer with 10+ years experience. Specializing in brand transformation, digital product design, and storytelling for next-gen brands. Former lead designer at Rivian.",
  keywords: [
    "creative director",
    "product designer",
    "brand transformation",
    "digital products",
    "web design",
    "UI/UX design",
    "Rivian",
    "portfolio",
    "design agency",
  ],
  openGraph: {
    title: "Arcade Studios | Creative Director & Product Designer",
    description:
      "Award-winning creative director transforming brands and creating digital products that tell stories people believe in.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617886322207-5baae5fc7c5a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Arcade Studios - Creative Director Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Studios | Creative Director & Product Designer",
    description: "10+ years transforming brands and creating digital products for next-gen companies.",
  },
};

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <TwoUpSection />
      <BrandShowcase />
      <FeaturedWork />
      <CTA title="See all work" href="/work" theme="light" />
      <VideoSection />
      
      {/* Footer with Work with me CTA */}
    </div>
  );
}

