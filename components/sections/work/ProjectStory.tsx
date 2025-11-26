"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

interface ProjectStoryProps {
  story: string[];
  images?: {
    hero?: string;
    secondary?: string;
  };
}

export default function ProjectStory({ story, images }: ProjectStoryProps) {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.h2 
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
          >
            The Story
          </motion.h2>

          {/* Story Paragraphs */}
          <div className="space-y-8 mb-20">
            {story.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Hero Image */}
          <motion.div
            variants={fadeInUp}
            className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src={images?.hero || "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop"}
              alt="Project showcase"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Two Column Images */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <motion.div
              variants={staggerItem}
              className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src={images?.secondary || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop"}
                alt="Project detail 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=1000&fit=crop"
                alt="Project detail 2"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

