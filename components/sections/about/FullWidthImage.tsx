"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const SERVICES = [
  {
    title: "Web Development",
    description: "React, Next.js, and full-stack solutions",
    items: [
      "React & Next.js Applications",
      "Full-Stack Development",
      "API Development & Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Digital Products",
    description: "End-to-end product development",
    items: [
      "Product Strategy",
      "UI/UX Design",
      "Design Systems",
      "User Experience Optimization",
    ],
  },
  {
    title: "Consulting",
    description: "Technical guidance and support",
    items: [
      "Technical Consulting",
      "Code Reviews",
      "Architecture Planning",
      "Team Training & Workshops",
    ],
  },
];

export default function FullWidthImage() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full py-20 md:py-32"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Background Image */}
        <div className="relative z-0 rounded-3xl overflow-hidden">
          <div className="relative w-full aspect-video md:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
              alt="Sunset landscape with silhouetted crowd"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 lg:px-12 py-12 md:py-16">
            {/* Section Title */}
            <motion.div
              variants={staggerItem}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                We deliver comprehensive web development solutions tailored to your business needs
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white/90 flex items-start text-base"
                      >
                        <span className="mr-3 text-[#DC2626] font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
