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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm"
            : "bg-white"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-70 transition-opacity"
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-gray-600">Designer</div>
                <div className="text-sm font-bold">{SITE_CONFIG.name}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-normal hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-[#DC2626] text-white rounded-full font-medium hover:bg-[#B91C1C] transition-all shadow-md hover:shadow-lg inline-block"
                    >
                      Work with us
                    </Link>
                  </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

