"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CASE_STUDIES = [
  {
    slug: "electric-adventures",
    title: "An app for electric adventures",
    subtitle: "Strategic repositioning of a next-gen mobility brand",
    client: "Rivian",
    tags: ["Strategy", "Brand", "Website", "Content"],
    isComingSoon: false,
    image: "https://images.unsplash.com/photo-1617886322207-5baae5fc7c5a?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "automotive-icons",
    title: "Launching next gen automotive icons",
    subtitle: "Digital transformation for sustainable transportation",
    client: "Tesla",
    tags: ["Strategy", "Brand", "Website", "Product"],
    isComingSoon: false,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "outdoor-gear",
    title: "Redesigning the future of outdoor gear",
    subtitle: "E-commerce platform for adventure enthusiasts",
    client: "Black Diamond",
    tags: ["Brand", "Website", "Content", "Product"],
    isComingSoon: false,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&h=900&fit=crop&q=80",
  },
  {
    slug: "solar-innovation",
    title: "Solar energy platform",
    subtitle: "Empowering sustainable energy solutions",
    client: "SolarCity",
    tags: ["Website", "Product", "Content"],
    isComingSoon: false,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop&q=80",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-medium uppercase tracking-wider rounded-full mb-6"
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-[0.95] tracking-tighter mb-8"
          >
            Work we're proud of
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            Scroll to explore our latest projects
          </motion.p>
        </div>

        {/* Scroll-based Cards */}
        <div className="space-y-24 md:space-y-32">
          {CASE_STUDIES.map((study, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });

            const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
            const opacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
            const y = useTransform(cardProgress, [0, 0.5, 1], [100, 0, -50]);

            return (
              <motion.div
                key={study.slug}
                ref={cardRef}
                style={{ scale, opacity, y }}
                className="relative"
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="block group"
                >
                  <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-elegant-xl">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16">
                      {/* Top: Client badge */}
                      <div>
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-black uppercase tracking-wider shadow-lg"
                        >
                          {study.client}
                        </motion.span>
                      </div>

                      {/* Bottom: Title and tags */}
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-[0.95] tracking-tighter"
                        >
                          {study.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="text-white/90 text-lg md:text-xl mb-6"
                        >
                          {study.subtitle}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-3"
                        >
                          {study.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 text-sm text-white/80 border border-white/30 rounded-full backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* View button */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-elegant-xl"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white -rotate-45"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-black font-medium text-lg"
          >
            <span className="underline-reveal">View All Projects</span>
            <motion.span
              className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
