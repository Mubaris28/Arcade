"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CLIENTS = [
  { name: "Boosted", industry: "E-Mobility" },
  { name: "Rivian", industry: "Automotive" },
  { name: "Tesla", industry: "Technology" },
  { name: "Black Diamond", industry: "Outdoor Gear" },
  { name: "Cardiff", industry: "Lifestyle" },
  { name: "SolarCity", industry: "Clean Energy" },
  { name: "Patagonia", industry: "Outdoor" },
  { name: "Airbnb", industry: "Travel" },
];

export default function BrandShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            Trusted by leading brands
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[0.95] tracking-tighter">
            We've partnered with industry leaders
          </h2>
        </motion.div>

        {/* Clients Grid - Minimal, Clean */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: 0.05 * index,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-elegant transition-all"
            >
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 group-hover:text-red-600 transition-colors">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {client.industry}
                </p>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            And many more innovative companies across the globe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
