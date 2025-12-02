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
      className="relative py-16 md:py-20 overflow-hidden"
    >
      <div className="w-full mx-auto px-6 lg:px-12 3xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm 3xl:text-base text-white/60 uppercase tracking-widest mb-4 block">
            Trusted by leading brands
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-bold text-white leading-[0.95] tracking-tighter">
            We've partnered with industry leaders
          </h2>
        </motion.div>

        {/* Clients Grid - Minimal, Clean */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 3xl:gap-8">
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
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 3xl:p-10 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <div className="text-center">
                <h3 className="text-lg md:text-xl 3xl:text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {client.name}
                </h3>
                <p className="text-xs 3xl:text-sm text-white/50 uppercase tracking-wider">
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
          <p className="text-white/60 3xl:text-lg">
            And many more innovative companies across the globe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
