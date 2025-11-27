"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description: "Building high-performance applications with React, Next.js, and modern technologies.",
    features: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
  },
  {
    number: "02",
    title: "Product Design",
    description: "Creating intuitive interfaces that users love and businesses trust.",
    features: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
  },
  {
    number: "03",
    title: "Strategy & Consulting",
    description: "Providing expert guidance to transform your digital presence.",
    features: ["Digital Strategy", "Technical Consulting", "Code Review", "Team Training"],
  },
  {
    number: "04",
    title: "E-Commerce",
    description: "Building scalable online stores that drive sales and growth.",
    features: ["Shopify Development", "Custom Solutions", "Payment Integration", "Analytics"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Consistent parallax for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden bg-black"
    >
      {/* Parallax background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-8"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] tracking-tighter mb-8"
          >
            What we do best
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            Comprehensive digital solutions tailored to your business needs.
          </motion.p>
        </div>

        {/* Services Grid with BrandShowcase scroll effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });

            // BrandShowcase-style scroll effects - cards move with scroll
            const y = useTransform(cardProgress, [0, 1], [50, -50]);
            const opacity = useTransform(
              cardProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0.5]
            );

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-zinc-900 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <span className="text-6xl md:text-7xl font-bold text-white/10 group-hover:text-red-600/20 transition-colors duration-300">
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-400 text-sm"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-red-600 mr-3 flex-shrink-0"
                        >
                          <path
                            d="M5 12L10 17L20 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow icon */}
                  <motion.div
                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
