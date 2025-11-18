"use client";

import TypingText from "@/components/animations/TypingText";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl">
          <TypingText
            text="Arcade Studios is a web development agency, storyteller, and innovator. We have a gift for finding meaning and using it to transform brands and products."
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            delay={0}
            wordDelay={0.08}
          />
        </div>
      </div>
    </section>
  );
}

