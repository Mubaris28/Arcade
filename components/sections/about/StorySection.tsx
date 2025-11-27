"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -60]);

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our Story
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Arcade Studios was founded with a simple mission: to build
              exceptional web applications that drive business growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We started as a small team of passionate developers and designers,
              united by our belief that great code and thoughtful design can
              transform businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we've had the privilege of working with ambitious
              startups, established agencies, and forward-thinking brands across
              various industries. From e-commerce platforms to SaaS applications,
              we've helped our clients bring their digital visions to life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of modern web technologies, clean code, and
              meaningful user experiences. Every project is an opportunity to push
              boundaries and create something remarkable that solves real problems.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <p className="text-4xl font-bold text-red-600 mb-1">50+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-600 mb-1">5+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-600 mb-1">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-6 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant-xl"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=1500&fit=crop&q=80"
                alt="Arcade Studios workspace"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
