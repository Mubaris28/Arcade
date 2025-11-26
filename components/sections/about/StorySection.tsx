"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Arcade Studios was founded with a simple mission: to build exceptional web applications that drive business growth. We started as a small team of passionate developers and designers, united by our belief that great code and thoughtful design can transform businesses.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Over the years, we've had the privilege of working with ambitious startups, established agencies, and forward-thinking brands across various industries. From e-commerce platforms to SaaS applications, we've helped our clients bring their digital visions to life.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe in the power of modern web technologies, clean code, and meaningful user experiences. Every project is an opportunity to push boundaries and create something remarkable that solves real problems.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Today, we continue to evolve and grow, always staying at the forefront of web development trends and best practices. Our commitment to excellence and client success remains at the heart of everything we do.
            </p>
          </motion.div>

          {/* Right: Studio Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative aspect-square bg-gray-200 rounded-3xl overflow-hidden"
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
