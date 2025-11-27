"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <footer ref={containerRef} className="bg-white pb-4 px-4 lg:px-6">
      {/* Footer Content */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl shadow-elegant py-16 md:py-20 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16"
          >
            {/* Brand Section */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-black">
                  {SITE_CONFIG.name.split(' ')[0]}<span className="text-red-600">.</span>
                </span>
              </Link>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm">
                {SITE_CONFIG.tagline}
              </p>
              
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-3">
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:text-black hover:border-black transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:text-black hover:border-black transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:text-black hover:border-black transition-colors"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-black mb-6 uppercase tracking-wider">Navigation</h4>
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-black mb-6 uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-600 hover:text-black transition-colors text-base underline-reveal"
                >
                  {SITE_CONFIG.email}
                </a>
                <p className="text-gray-500 text-base">
                  {SITE_CONFIG.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-500 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
