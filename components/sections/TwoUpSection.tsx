"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, target audience, and competitive landscape to create a solid foundation for your project.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=800&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Our design team creates stunning interfaces and interactive prototypes that bring your vision to life with pixel-perfect precision.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1200&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "We build your product using modern technologies, following best practices and conducting thorough testing to ensure quality.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=800&fit=crop&q=80",
  },
];

export default function TwoUpSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-medium uppercase tracking-wider rounded-full mb-8">
            Our Approach
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-[0.95] tracking-tighter mb-8">
            Crafting digital excellence
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            We combine strategic thinking, creative design, and cutting-edge
            technology to build digital products that stand out and deliver
            measurable results.
          </p>
        </motion.div>

        {/* Steps - FeaturedWork-style scroll animations */}
        <div className="space-y-24 md:space-y-32">
          {STEPS.map((step, index) => {
            const stepRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: stepRef,
              offset: ["start end", "end start"],
            });

            // FeaturedWork-style scroll animations
            const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
            const opacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
            const y = useTransform(cardProgress, [0, 0.5, 1], [100, 0, -50]);

            // Content card - moves up slightly
            const contentY = useTransform(cardProgress, [0, 0.5, 1], [100, -20, -80]);
            const contentOpacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

            // Image - moves down slightly
            const imageY = useTransform(cardProgress, [0, 0.5, 1], [100, 20, -20]);
            const imageOpacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

            return (
              <motion.div
                key={index}
                ref={stepRef}
                style={{ scale, opacity, y }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Content Side - Left, positioned up */}
                <motion.div
                  style={{ y: contentY, opacity: contentOpacity }}
                  className="lg:col-span-5 lg:col-start-1"
                >
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl hover:shadow-elegant transition-all duration-300 group">
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight group-hover:text-red-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Step Number - Large, below content, light pink/red */}
                    <div className="mt-8">
                      <span className="text-8xl md:text-9xl font-bold text-red-600/10 group-hover:text-red-600/20 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-2 left-8 right-8 h-1 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                </motion.div>

                {/* Image Side - Right, positioned down */}
                <motion.div
                  style={{ y: imageY, opacity: imageOpacity }}
                  className="lg:col-span-7 lg:col-start-7"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant-xl group">
                    <motion.div
                      className="absolute inset-0 scale-110"
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Step indicator badge on image - top right */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-elegant">
                      {step.number}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
