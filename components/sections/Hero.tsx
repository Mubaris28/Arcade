"use client";

import { motion } from "framer-motion";
import { ANIMATION_TIMINGS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
        {/* Main Headline */}
        <div className="max-w-7xl mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-black">
            We build modern web applications, digital products, and innovative solutions for startups, agencies, and next-gen brands.
          </h1>
        </div>

        {/* Bottom Row: Content and Arrow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Spacer */}
          <div className="lg:col-span-7"></div>
          
          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="lg:col-span-5"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We're <span className="bg-black text-white px-2 py-1 rounded">Arcade Studios</span>—a web development agency specializing in React, Next.js, and full-stack solutions. We transform ideas into scalable digital products that drive business growth.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-12"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M19 12L12 19L5 12"
                  stroke="#DC2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

