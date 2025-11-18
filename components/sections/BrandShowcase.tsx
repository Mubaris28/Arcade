"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";

// Placeholder client logos - replace with real logos
const CLIENT_LOGOS = [
  { name: "Boosted", placeholder: "BOOSTED" },
  { name: "Rivian", placeholder: "RIVIAN" },
  { name: "Tesla", placeholder: "TESLA" },
  { name: "Black Diamond", placeholder: "BLACK DIAMOND" },
  { name: "Cardiff", placeholder: "CARDIFF" },
  { name: "SolarCity", placeholder: "SolarCity" },
];

export default function BrandShowcase() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Logo Grid - Left Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {CLIENT_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="aspect-square flex items-center justify-center p-6 md:p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                {/* Placeholder - Replace with actual logo images */}
                <div className="text-sm md:text-base font-bold text-black text-center">
                  {logo.placeholder}
                </div>
                {/* Uncomment when you have logo files */}
                {/* <Image
                  src={`/images/logos/${logo.name.toLowerCase().replace(' ', '-')}.svg`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                /> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Content Section - Right Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerItem}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              I transform brands
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              From digital products to creative strategy—I define, design, and
              launch ideas that unlock hidden potential.
            </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 bg-[#DC2626] text-white rounded-full hover:bg-[#B91C1C] transition-all font-medium w-fit shadow-lg hover:shadow-xl"
                  >
                    Meet Kyson
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

