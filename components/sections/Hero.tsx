"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/2 rounded-full blur-3xl" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 w-full text-center"
      >
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-[0.95] tracking-tighter mb-8">
            Building digital
            <br />
            experiences that
            <br />
            inspire action.
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Award-winning web development agency building modern applications
          that drive real business results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all hover:shadow-elegant-lg"
          >
            <motion.div
              className="absolute inset-0 bg-red-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 font-medium">Start a Project</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="relative z-10 ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            <span className="font-medium">View Our Work</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
