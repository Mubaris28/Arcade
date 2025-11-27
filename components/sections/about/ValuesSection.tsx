"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VALUES = [
  {
    number: "01",
    title: "Excellence",
    description:
      "We strive for excellence in every line of code, every design decision, and every interaction. Quality is never compromised.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We stay at the forefront of web technologies, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring transparency, communication, and alignment throughout the entire process.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "We focus on building solutions that create real value—for users, for businesses, and for the communities we serve.",
  },
];

export default function ValuesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-medium uppercase tracking-wider rounded-full mb-6">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            What drives us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            The principles that guide our work and shape our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-elegant transition-all overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 group-hover:text-red-100 transition-colors">
                  {value.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {value.description}
                </p>
              </div>

              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
