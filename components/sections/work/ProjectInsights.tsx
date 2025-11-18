"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectInsightsProps {
  insights: string[];
}

export default function ProjectInsights({ insights }: ProjectInsightsProps) {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
          >
            Key Insights
          </motion.h2>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <motion.p
                key={index}
                variants={staggerItem}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {insight}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

