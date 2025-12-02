"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Brand Identity",
    description: "Creating distinctive brands that resonate with your audience",
  },
  {
    title: "Websites",
    description: "Custom web experiences built with modern technologies",
  },
  {
    title: "SEO",
    description: "Data-driven strategies to boost your online visibility",
  },
  {
    title: "Craft CMS",
    description: "Flexible content management solutions for your business",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div className="relative z-10 w-full mx-auto px-6 lg:px-12 3xl:px-24">
        {/* Glass Container */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 3xl:p-16 border border-white/10">
          {/* Section Header */}
          <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-6"
          >
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 3xl:text-[10rem] font-bold text-white leading-[0.95] tracking-tighter mb-8"
          >
            What We Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl 3xl:text-2xl text-white/70 max-w-3xl"
          >
            We craft digital experiences that combine strategic thinking with beautiful design and robust development.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative border-t border-white/10 hover:border-white/30 transition-all duration-500"
            >
              {/* Hover background effect - White highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative py-8 md:py-12 flex items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-medium text-white tracking-tight group-hover:translate-x-4 transition-transform duration-500 mb-3">
                    {service.title}
                  </h3>
                </div>
                
                {/* Arrow icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                  <svg 
                    className="w-8 h-8 md:w-12 md:h-12 3xl:w-16 3xl:h-16 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Bottom border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 + SERVICES.length * 0.1, duration: 0.6 }}
            className="border-t border-white/10"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
