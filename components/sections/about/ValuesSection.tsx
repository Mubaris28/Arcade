"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const VALUES = [
  {
    title: "Excellence",
    description: "We strive for excellence in every line of code, every design decision, and every interaction. Quality is never compromised.",
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of web technologies, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring transparency, communication, and alignment throughout the entire process.",
  },
  {
    title: "Impact",
    description: "We focus on building solutions that create real value—for users, for businesses, and for the communities we serve.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            The principles that guide our work and shape our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

