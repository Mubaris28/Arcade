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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-32 md:pt-30 pb-16"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/2 rounded-full blur-3xl" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Headline + Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative rounded-3xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl transition-all flex flex-col justify-center"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
              }}
            />
            
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 group-hover:from-black/75 group-hover:via-black/65 group-hover:to-black/75 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-6">
                Building digital experiences that inspire action.
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Award-winning web development agency building modern applications
                that drive real business results.
              </p>
            </div>
          </motion.div>

          {/* Right: Two stacked CTA cards */}
          <div className="flex flex-col gap-6">
            {/* View Our Work - taller card */}
            <Link href="/work" className="w-full block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="group relative flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-elegant-xl hover:shadow-2xl transition-all h-[320px] lg:h-[360px]"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')",
                  }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-500" />

                <div className="relative z-10 p-8 md:p-10 w-full text-center">
                  <h3 className="text-4xl md:text-5xl font-bold">View our work</h3>
                </div>
              </motion.div>
            </Link>

            {/* Start a Project - smaller card */}
            <Link href="/contact" className="w-full block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="group relative flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-elegant-lg hover:shadow-2xl transition-all h-[200px] lg:h-[220px] bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                <div className="relative z-10 p-6 md:p-8 w-full text-center">
                  <h4 className="text-3xl md:text-4xl font-bold">start a project</h4>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
