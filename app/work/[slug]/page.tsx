import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHero from "@/components/sections/work/ProjectHero";
import ProjectStory from "@/components/sections/work/ProjectStory";
import ProjectInsights from "@/components/sections/work/ProjectInsights";
import ProjectGallery from "@/components/sections/work/ProjectGallery";
import FooterImage from "@/components/sections/FooterImage";

// Sample case study data - replace with real data or CMS
const CASE_STUDIES: Record<
  string,
  {
    title: string;
    client: string;
    description: string;
    story: string[];
    insights: string[];
  }
> = {
  "electric-adventures": {
    title: "An app for electric adventures",
    client: "Electric Co",
    description:
      "Building the digital experience for the future of electric vehicles and adventure travel.",
    story: [
      "It was the fall of 2021. Our client was now a publicly traded company and the first phase of their new platform was live. We were taking pre-orders in droves and building momentum in the electric vehicle market.",
      "The challenge was clear: create a seamless digital experience that would educate, inspire, and convert visitors into customers. The platform needed to showcase the innovation while maintaining the premium brand feel.",
      "We led the development of the entire digital ecosystem—from the marketing website to the customer portal, reservation system, and mobile apps. Every touchpoint was crafted with precision and purpose.",
    ],
    insights: [
      "The brand promise was to explore the world and be adventurous. However, through research we uncovered a few key insights about the target audience and their needs.",
      "Users wanted transparency in the buying process, detailed specifications, and a clear path to ownership. They also craved community—a place to connect with other enthusiasts.",
      "We designed a system that delivered on all these needs while maintaining the aspirational brand aesthetic.",
    ],
  },
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = CASE_STUDIES[params.slug];

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Arcade Studios",
    };
  }

  return {
    title: `${caseStudy.title} | Arcade Studios`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = CASE_STUDIES[params.slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-[70vh] flex items-center justify-center">
        <ProjectHero title={caseStudy.title} client={caseStudy.client} />
      </div>
      <ProjectStory story={caseStudy.story} />
      <ProjectInsights insights={caseStudy.insights} />
      <ProjectGallery />
      <FooterImage />
    </div>
  );
}

// Generate static params for known case studies
export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
}

