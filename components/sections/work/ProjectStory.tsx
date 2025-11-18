"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

interface ProjectStoryProps {
  story: string[];
}

export default function ProjectStory({ story }: ProjectStoryProps) {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Story Paragraphs */}
          <div className="space-y-6 mb-16">
            {story.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Full-width Image */}
          <motion.div
            variants={fadeInUp}
            className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <p className="text-sm">Project Image</p>
                <p className="text-xs opacity-70 mt-2">
                  Add image to /public/images/
                </p>
              </div>
            </div>
            {/* Uncomment when you have an image */}
            {/* <Image
              src="/images/work/project-image.jpg"
              alt="Project"
              fill
              className="object-cover"
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

