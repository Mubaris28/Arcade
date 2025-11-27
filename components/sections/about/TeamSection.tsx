"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    position: "Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Sarah Johnson",
    position: "Product Designer",
    bio: "UI/UX designer specializing in creating intuitive digital experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Marcus Rodriguez",
    position: "Technical Lead",
    bio: "Architecture expert focused on building robust, performant systems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Emily Park",
    position: "Frontend Developer",
    bio: "React specialist passionate about beautiful, accessible interfaces.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&q=80",
  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="bg-gray-50 py-20 md:py-28"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-medium uppercase tracking-wider rounded-full mb-6">
            Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Meet the team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Developers, designers, and strategists united by passion for
            exceptional digital products.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group"
            >
              <div className="relative aspect-square mb-6 rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-elegant-xl transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {member.name}
              </h3>
              <p className="text-base text-red-600 font-medium mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
