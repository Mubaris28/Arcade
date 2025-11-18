"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

interface CTAProps {
  title: string;
  href: string;
  theme?: "light" | "dark";
}

export default function CTA({ title, href, theme = "light" }: CTAProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Link
            href={href}
            className="block group"
          >
            <motion.div 
              className="flex items-center justify-between bg-black rounded-3xl p-8 md:p-12 lg:p-16"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 0.99 }
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <motion.div
                className="flex-shrink-0 text-white"
                variants={{
                  initial: { x: 0 },
                  hover: { x: 10 }
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }}
              >
                <motion.svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                  animate={{ 
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
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
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

