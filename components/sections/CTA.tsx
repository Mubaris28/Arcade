"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

interface CTAProps {
  title?: string;
  href?: string;
}

export default function CTA({ 
  title = "Let's build something extraordinary", 
  href = "/contact",
}: CTAProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div style={{ scale }}>
          <Link href={href} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex flex-col md:flex-row items-center justify-between bg-black rounded-3xl p-12 md:p-16 overflow-hidden shadow-elegant-xl group-hover:shadow-elegant-xl transition-all"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Content */}
              <div className="relative z-10 mb-8 md:mb-0">
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl"
                >
                  {title}
                </motion.h2>
              </div>

              {/* Arrow Button */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-elegant">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black -rotate-45"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
