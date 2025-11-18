"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ProjectHeroProps {
  title: string;
  client: string;
}

export default function ProjectHero({ title, client }: ProjectHeroProps) {
  return (
    <section className="min-h-[70vh] bg-black text-white flex items-center justify-center pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-5xl"
        >
          {/* Client Logo Placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 rounded flex items-center justify-center text-xs">
              Logo
            </div>
          </div>

          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {title}
          </h1>

          {/* Client Name */}
          <p className="text-xl md:text-2xl text-gray-400 mt-6">
            Client: {client}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

