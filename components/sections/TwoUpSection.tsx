"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";

export default function TwoUpSection() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-4"
        >
          {/* Left Image - 2/3 width */}
          <div className="w-full md:w-2/3 aspect-video bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1617886322207-5baae5fc7c5a?w=1200&h=675&fit=crop"
              alt="Mountain landscape with electric vehicle"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Image - 1/3 width */}
          <div className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

