"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";

export default function FullWidthImage() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="w-full py-10"
    >
      <div className="relative aspect-video md:aspect-[21/9] bg-gray-200 overflow-hidden">
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <p className="text-sm">Team/Studio Photo</p>
            <p className="text-xs opacity-70 mt-2">
              Add landscape image to /public/images/
            </p>
          </div>
        </div>
        {/* Uncomment when you have an image */}
        {/* <Image
          src="/images/about/team-landscape.jpg"
          alt="Arcade Studios Team"
          fill
          className="object-cover"
        /> */}
      </div>
    </motion.section>
  );
}





