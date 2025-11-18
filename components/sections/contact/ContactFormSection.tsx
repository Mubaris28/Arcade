"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <ContactForm />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="space-y-8 md:sticky md:top-32"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-lg">{SITE_CONFIG.location}</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-lg hover:opacity-70 transition-opacity block"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Social Links
              </h3>
              <div className="space-y-2">
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-70 transition-opacity"
                >
                  GitHub
                </a>
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-70 transition-opacity"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries,
                please email us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

