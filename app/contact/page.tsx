import { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Work With Me | Contact Kyson | Arcade Studios",
  description:
    "Ready to transform your brand? Get in touch with Kyson Dana for creative direction, product design, and brand strategy. Available for select projects with startups, agencies, and next-gen brands.",
  keywords: [
    "hire creative director",
    "contact designer",
    "brand transformation services",
    "product design consultation",
    "freelance creative director",
    "design collaboration",
  ],
  openGraph: {
    title: "Work With Me | Contact Kyson",
    description: "Let's transform your brand. Available for select creative direction and product design projects.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <ContactHero />
      <ContactFormSection />
    </div>
  );
}

