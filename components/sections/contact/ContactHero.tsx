"use client";

import { motion } from "framer-motion";
import TypingText from "@/components/animations/TypingText";
import { fadeInUp } from "@/lib/animations";

export default function ContactHero() {
  return (
    <section className="min-h-[60vh] bg-white flex items-center justify-center pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <TypingText
            text="Work with us"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            delay={0}
            wordDelay={0.15}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-700"
          >
            Let's build something extraordinary together.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

