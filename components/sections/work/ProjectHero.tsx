"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectHeroProps {
  title: string;
  client: string;
  year?: string;
  services?: string[];
}

export default function ProjectHero({ 
  title, 
  client, 
  year = "2023",
  services = ["Strategy", "Design", "Development"] 
}: ProjectHeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center pt-32 pb-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Client Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <span className="text-sm font-bold tracking-wider">{client.toUpperCase()}</span>
            </div>
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-12"
          >
            {title}
          </motion.h1>

          {/* Project Meta */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 pt-12 border-t border-white/20"
          >
            {/* Year */}
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Year</p>
              <p className="text-xl font-medium">{year}</p>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Services</p>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <span 
                    key={service}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={staggerItem}
            className="mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/60"
              >
                <path
                  d="M12 5V19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M19 12L12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

