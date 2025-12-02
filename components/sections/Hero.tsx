"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 3D tilt effect states
  const [leftCardTilt, setLeftCardTilt] = useState({ x: 0, y: 0 });
  const [workCardTilt, setWorkCardTilt] = useState({ x: 0, y: 0 });
  const [projectCardTilt, setProjectCardTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    setter: typeof setLeftCardTilt
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setter({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (setter: typeof setLeftCardTilt) => {
    setter({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-30 pb-16"
    >
      {/* Abstract blurred red shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-red-600/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-red-500/30 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[200px] bg-red-700/30 rounded-full blur-2xl" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Headline + Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseMove={(e) => handleMouseMove(e, setLeftCardTilt)}
            onMouseLeave={() => handleMouseLeave(setLeftCardTilt)}
            style={{
              transform: `perspective(1000px) rotateX(${leftCardTilt.x}deg) rotateY(${leftCardTilt.y}deg) scale3d(1, 1, 1)`,
              transition: "transform 0.1s ease-out",
            }}
            className="group relative rounded-3xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-xl flex flex-col justify-center bg-black"
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 group-hover:from-black/85 group-hover:via-black/75 group-hover:to-black/85 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-6">
                Building digital experiences that inspire action.
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-red-200 leading-relaxed">
                Award-winning web development agency building modern applications
                that drive real business results.
              </p>
            </div>
          </motion.div>

          {/* Right: Two stacked CTA cards */}
          <div className="flex flex-col gap-6">
            {/* View Our Work - taller card */}
            <Link href="/work" className="w-full block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                onMouseMove={(e) => handleMouseMove(e, setWorkCardTilt)}
                onMouseLeave={() => handleMouseLeave(setWorkCardTilt)}
                style={{
                  transform: `perspective(1000px) rotateX(${workCardTilt.x}deg) rotateY(${workCardTilt.y}deg) scale3d(1, 1, 1)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="group relative flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-elegant-xl hover:shadow-2xl h-[320px] lg:h-[360px] bg-gradient-to-br from-black via-red-900 to-black"
              >
                <div className="absolute inset-0 bg-red-900/30 rounded-3xl blur-xl" />
                <div className="relative z-10 p-8 md:p-10 w-full text-center">
                  <h3 className="text-4xl md:text-5xl font-bold">View our work</h3>
                </div>
              </motion.div>
            </Link>

            {/* Start a Project - smaller card */}
            <Link href="/contact" className="w-full block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                onMouseMove={(e) => handleMouseMove(e, setProjectCardTilt)}
                onMouseLeave={() => handleMouseLeave(setProjectCardTilt)}
                style={{
                  transform: `perspective(1000px) rotateX(${projectCardTilt.x}deg) rotateY(${projectCardTilt.y}deg) scale3d(1, 1, 1)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="group relative flex items-center justify-center text-white rounded-3xl overflow-hidden shadow-elegant-lg hover:shadow-2xl h-[200px] lg:h-[220px] bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                <div className="relative z-10 p-6 md:p-8 w-full text-center">
                  <h4 className="text-3xl md:text-4xl font-bold">start a project</h4>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
