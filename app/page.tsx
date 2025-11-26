import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TwoUpSection from "@/components/sections/TwoUpSection";
import BrandShowcase from "@/components/sections/BrandShowcase";
import Capabilities from "@/components/sections/Capabilities";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CTA from "@/components/sections/CTA";
import VideoSection from "@/components/sections/VideoSection";
import FullWidthImage from "@/components/sections/about/FullWidthImage";

export const metadata: Metadata = {
  title: "Arcade Studios | Web Development Agency",
  description:
    "Arcade Studios builds modern web applications, digital products, and innovative solutions for startups, agencies, and next-gen brands. Specializing in React, Next.js, and full-stack development.",
  keywords: [
    "web development",
    "React development",
    "Next.js development",
    "full-stack development",
    "web applications",
    "digital products",
    "startup development",
    "web agency",
    "software development",
  ],
  openGraph: {
    title: "Arcade Studios | Web Development Agency",
    description:
      "Building modern web applications and digital products for startups, agencies, and next-gen brands.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617886322207-5baae5fc7c5a?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Arcade Studios - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Studios | Web Development Agency",
    description: "Building modern web applications and digital products for next-gen brands.",
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
      <FullWidthImage />
      
      {/* Footer with Work with me CTA */}
    </div>
  );
}

