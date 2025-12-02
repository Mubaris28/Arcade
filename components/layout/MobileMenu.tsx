"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  buttonPosition: { x: number; y: number };
}

export default function MobileMenu({ isOpen, onClose, buttonPosition }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Calculate the clip-path origin based on button position
  const clipPathOrigin = useMemo(() => {
    if (typeof window === 'undefined') return '95% 5%';
    const xPercent = (buttonPosition.x / window.innerWidth) * 100;
    const yPercent = (buttonPosition.y / window.innerHeight) * 100;
    return `${xPercent}% ${yPercent}%`;
  }, [buttonPosition]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Panel with Smooth Wave Effect */}
          <motion.div
            initial={{ 
              clipPath: `circle(0% at ${clipPathOrigin})`,
              opacity: 0
            }}
            animate={{ 
              clipPath: `circle(150% at ${clipPathOrigin})`,
              opacity: 1
            }}
            exit={{ 
              clipPath: `circle(0% at ${clipPathOrigin})`,
              opacity: 0
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed inset-0 w-full bg-white z-50 shadow-elegant-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-bold text-black">
                  {SITE_CONFIG.name.split(' ')[0]}<span className="text-red-600">.</span>
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-black hover:text-red-600 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-6">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.4 + (index * 0.08), 
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="text-3xl font-bold text-black hover:text-red-600 transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.7, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full py-4 bg-black text-white text-center rounded-full font-medium hover:bg-red-600 transition-colors shadow-elegant"
                >
                  Let's Talk
                </Link>
              </motion.div>

              {/* Footer */}
              <motion.div 
                className="p-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.6
                }}
              >
                <p className="text-sm text-gray-600 mb-4">
                  {SITE_CONFIG.tagline}
                </p>
                <div className="flex space-x-4">
                  {SITE_CONFIG.social.twitter && (
                    <a
                      href={SITE_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {SITE_CONFIG.social.linkedin && (
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {SITE_CONFIG.social.instagram && (
                    <a
                      href={SITE_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
