"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-fit px-8 py-2"
      >
        <div className={cn(
          "flex items-center justify-between gap-8 rounded-full shadow-elegant bg-white/90 border border-gray-200 backdrop-blur-lg px-8 py-2",
          scrolled ? "shadow-lg" : ""
        )}>
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <motion.span 
              className="text-xl md:text-2xl font-bold text-black"
              whileHover={{ scale: 1.05 }}
            >
              {SITE_CONFIG.name.split(' ')[0]}<span className="text-red-600">.</span>
            </motion.span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-black hover:text-red-600 transition-colors font-medium group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full overflow-hidden transition-all hover:shadow-elegant-lg"
            >
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 font-medium">Let's Talk</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:text-red-600 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
