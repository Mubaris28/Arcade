"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import RunningTextCTA from "@/components/sections/RunningTextCTA";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Image Section Above Work with me */}
      <section className="relative w-full pb-12 md:pb-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="relative aspect-video md:aspect-[21/9] bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden rounded-3xl">
          {/* Desktop Image */}
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2560&h=800&fit=crop"
            alt="Sunset landscape with silhouetted crowd"
            fill
            className="object-cover hidden md:block"
            priority
          />
          {/* Mobile Image */}
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&h=1080&fit=crop"
            alt="Sunset landscape with silhouetted crowd"
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <Link href="/contact" className="block group">
            <motion.div 
              className="flex items-center justify-between bg-[#DC2626] rounded-3xl p-8 md:p-12 lg:p-16"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 0.99 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
              >
                Work with me
              </motion.h2>
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
        </div>
      </section>

      {/* Running Text Marquee Section */}
      <RunningTextCTA />

      {/* Footer Content */}
      <div className="bg-white pb-12 md:pb-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
          >
            {/* Brand Section */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-black rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-400">Designer</div>
                    <div className="text-lg font-bold text-white">{SITE_CONFIG.name}</div>
                  </div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {SITE_CONFIG.tagline}
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.github && (
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
                <p className="text-gray-400 text-sm">
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-gray-900"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

