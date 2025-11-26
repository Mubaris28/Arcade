"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    position: "Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
    image: "photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Johnson",
    position: "Product Designer",
    bio: "UI/UX designer specializing in creating intuitive digital experiences for modern brands.",
    image: "photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Rodriguez",
    position: "Technical Lead",
    bio: "Architecture expert focused on building robust, performant systems for growing startups.",
    image: "photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Park",
    position: "Frontend Developer",
    bio: "React specialist passionate about creating beautiful, accessible user interfaces.",
    image: "photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Meet the Team
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            We're a diverse team of developers, designers, and strategists united by our passion for building exceptional digital products.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="relative aspect-square mb-6 rounded-3xl overflow-hidden bg-gray-200">
                <Image
                  src={`https://images.unsplash.com/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg text-[#DC2626] font-medium mb-3">{member.position}</p>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

