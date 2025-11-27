"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-28 pb-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-8"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Building digital products for next-gen brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl"
          >
            We're a web development agency specializing in React, Next.js, and
            full-stack solutions for startups, agencies, and innovative companies.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/70">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/70"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
