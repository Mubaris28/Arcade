"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

// Featured work data with images
const CASE_STUDIES = [
  {
    slug: "electric-adventures",
    title: "An app for electric adventures",
    client: "Rivian",
    isComingSoon: false,
    image: "photo-1617886322207-5baae5fc7c5a?w=1600&h=900&fit=crop",
    bgGradient: "from-blue-900 via-blue-800 to-black",
  },
  {
    slug: "automotive-icons",
    title: "Launching next gen automotive icons",
    client: "Tesla",
    isComingSoon: true,
    image: "photo-1560958089-b8a1929cea89?w=1600&h=900&fit=crop",
    bgGradient: "from-red-900 via-gray-900 to-black",
  },
  {
    slug: "outdoor-gear",
    title: "Redesigning the future of outdoor gear",
    client: "Black Diamond",
    isComingSoon: true,
    image: "photo-1551632811-561732d1e306?w=1600&h=900&fit=crop",
    bgGradient: "from-red-900 via-gray-800 to-black",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight"
        >
          Recent work
        </motion.h2>

        {/* Case Study Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.slug}
              variants={staggerItem}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                href={study.isComingSoon ? "#" : `/work/${study.slug}`}
                className={`block relative group ${
                  study.isComingSoon ? "pointer-events-none" : ""
                }`}
              >
                <div className="relative aspect-[4/3] md:aspect-[21/9] bg-black rounded-3xl overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={`https://images.unsplash.com/${study.image}`}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-60`}></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white z-10">
                    {/* Top: Logo */}
                    <div className="flex items-start">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <span className="text-sm font-bold tracking-wide">{study.client.toUpperCase()}</span>
                      </div>
                    </div>

                    {/* Bottom: Title and Button */}
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {study.title}
                      </h3>

                      {study.isComingSoon ? (
                        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20">
                          Coming soon
                        </div>
                      ) : (
                        <motion.div 
                          className="inline-flex items-center text-white group-hover:text-[#DC2626] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-lg font-medium mr-2">View case study</span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {!study.isComingSoon && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

