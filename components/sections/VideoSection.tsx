"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function VideoSection() {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Combine -50% offset with spring values for proper centering
  const centerX = useTransform(xSpring, (val) => `calc(-50% + ${val}px)`);
  const centerY = useTransform(ySpring, (val) => `calc(-50% + ${val}px)`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      
      // Calculate position relative to video container center
      const relativeX = e.clientX - (rect.left + rect.width / 2);
      const relativeY = e.clientY - (rect.top + rect.height / 2);

      x.set(relativeX);
      y.set(relativeY);
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      // Reset to center when not hovering
      x.set(0);
      y.set(0);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, x, y]);

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div
          ref={videoRef}
          className="relative aspect-video md:aspect-[21/9] bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            x.set(0);
            y.set(0);
          }}
        >
          {/* Video Placeholder/Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Static centered play button (default state) */}
            <motion.button
              className="absolute top-1/2 left-1/2 z-10 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#DC2626] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#B91C1C] transition-colors"
              style={{
                x: "-50%",
                y: "-50%",
              }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: isHovering ? 0 : 1,
                opacity: isHovering ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white ml-1"
              >
                <path
                  d="M8 5V19L19 12L8 5Z"
                  fill="currentColor"
                />
              </svg>
            </motion.button>

            {/* Mouse-following play button */}
            <motion.button
              className="absolute top-1/2 left-1/2 z-20 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#DC2626] rounded-full flex items-center justify-center shadow-2xl pointer-events-none"
              style={{
                x: centerX,
                y: centerY,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovering ? 1 : 0,
                opacity: isHovering ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white ml-1"
              >
                <path
                  d="M8 5V19L19 12L8 5Z"
                  fill="currentColor"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

