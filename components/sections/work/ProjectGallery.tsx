"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

interface ProjectGalleryProps {
  images?: string[];
}

const DEFAULT_GALLERY = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&h=900&fit=crop",
];

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const galleryImages = images || DEFAULT_GALLERY;

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Main Gallery Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 md:space-y-12"
        >
          {/* Full Width Images */}
          {galleryImages.slice(0, 2).map((img, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Project screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              variants={staggerItem}
              className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop"
                alt="Project detail"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Project detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Full Width Image */}
          <motion.div
            variants={staggerItem}
            className="relative aspect-[21/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
          >
            <Image
              src={galleryImages[2] || "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"}
              alt="Project showcase"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Process/Behind the Scenes Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32"
        >
          <motion.h3
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
          >
            Behind the scenes
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              variants={staggerItem}
              className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1000&fit=crop"
                alt="Design process"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                alt="Development process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

