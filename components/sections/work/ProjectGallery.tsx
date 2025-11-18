"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

// Placeholder gallery - replace with real project images
const GALLERY_IMAGES = [
  { id: 1, layout: "full" },
  { id: 2, layout: "full" },
  { id: 3, layout: "full" },
  { id: 4, layout: "full" },
];

export default function ProjectGallery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="text-sm">Project Screenshot {image.id}</p>
                  <p className="text-xs opacity-70 mt-2">
                    Add screenshot to /public/images/work/
                  </p>
                </div>
              </div>
              {/* Uncomment when you have images */}
              {/* <Image
                src={`/images/work/screenshot-${image.id}.jpg`}
                alt={`Project screenshot ${image.id}`}
                fill
                className="object-cover"
              /> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Process Images Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.h3
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Behind the scenes
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((num) => (
              <motion.div
                key={num}
                variants={staggerItem}
                className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="text-sm">Process Image {num}</p>
                    <p className="text-xs opacity-70 mt-2">
                      Add process photos
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

