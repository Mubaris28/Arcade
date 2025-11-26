"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectInsightsProps {
  insights: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export default function ProjectInsights({ insights, stats }: ProjectInsightsProps) {
  const defaultStats = [
    { value: "3x", label: "User engagement increase" },
    { value: "50%", label: "Faster load times" },
    { value: "95%", label: "Customer satisfaction" },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
          >
            Key Insights
          </motion.h2>

          {/* Insights Content */}
          <div className="space-y-8 mb-20">
            {insights.map((insight, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                {insight}
              </motion.p>
            ))}
          </div>

          {/* Impact Stats */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-gray-300"
          >
            {displayStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl font-bold text-black mb-3">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

