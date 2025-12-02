"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = () => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setMobileMenuOpen(true);
  };

  const showFullNav = !scrolled || isHovered;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            width: showFullNav ? "auto" : "auto",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex items-center rounded-full shadow-lg bg-white/10 border border-white/20 backdrop-blur-xl px-8 py-2 transition-all duration-300",
            scrolled && !isHovered ? "gap-4" : "gap-8",
            scrolled ? "shadow-2xl bg-white/15" : ""
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center flex-shrink-0">
            <motion.span 
              className="text-xl md:text-2xl font-bold text-white whitespace-nowrap drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {SITE_CONFIG.name.split(' ')[0]}<span className="text-red-400">.</span>
            </motion.span>
          </Link>

          {/* Center Navigation - Desktop - with AnimatePresence */}
          <AnimatePresence>
            {showFullNav && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hidden md:flex items-center space-x-1 overflow-hidden"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-white hover:text-red-300 transition-colors font-medium group whitespace-nowrap drop-shadow"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hamburger Menu Button */}
          <button
            ref={hamburgerRef}
            className="p-2 text-white hover:text-red-300 transition-colors drop-shadow flex-shrink-0"
            onClick={handleMenuOpen}
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
        </motion.div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        buttonPosition={buttonPosition}
      />
    </>
  );
}
