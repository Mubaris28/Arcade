"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-28 pb-16"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 w-full text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-8"
        >
          Get in Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
        >
          Let's work together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
        >
          Have a project in mind? We'd love to hear about it. Fill out the form
          below and we'll get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
