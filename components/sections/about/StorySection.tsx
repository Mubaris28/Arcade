"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Story Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Recently, we led development at innovative startups for 5 years—companies
              committed to building the future of technology and digital experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our journey began over a decade ago, fueled by a passion for crafting
              exceptional web experiences. We've had the privilege of working with
              ambitious startups, established agencies, and forward-thinking brands
              across various industries.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe in the power of thoughtful design, clean code, and meaningful
              interactions. Every project is an opportunity to push boundaries and
              create something remarkable.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Today, we continue to build digital products that matter—solutions that
              solve real problems and create lasting value for users and businesses
              alike.
            </p>
          </motion.div>

          {/* Right: Studio Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <p className="text-sm">Studio/Team Photo</p>
                <p className="text-xs opacity-70 mt-2">
                  Add image to /public/images/
                </p>
              </div>
            </div>
            {/* Uncomment when you have an image */}
            {/* <Image
              src="/images/about/studio-photo.jpg"
              alt="Arcade Studios"
              fill
              className="object-cover"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

