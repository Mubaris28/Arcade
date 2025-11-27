import { Metadata } from "next";
import { motion } from "framer-motion";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Arcade Studios",
  description:
    "Explore award-winning design work from Rivian, Tesla, Black Diamond, and more. View case studies showcasing brand transformation, digital products, and innovative design solutions for next-generation companies.",
  keywords: [
    "design portfolio",
    "case studies",
    "web development portfolio",
    "digital product design",
    "UI/UX case studies",
  ],
  openGraph: {
    title: "Design Portfolio & Case Studies | Arcade Studios",
    description: "Award-winning design work for innovative next-gen brands.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <FeaturedWork />
      <CTA title="Have a project in mind?" href="/contact" />
    </div>
  );
}
