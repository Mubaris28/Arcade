"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactFormSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Contact Details */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-black mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-base text-gray-800">{SITE_CONFIG.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-base text-red-600 hover:text-red-700 transition-colors underline-reveal"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-black mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {SITE_CONFIG.social.linkedin && (
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-black hover:border-black transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {SITE_CONFIG.social.github && (
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-black hover:border-black transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-black hover:border-black transition-colors"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
              <div className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-red-600 flex-shrink-0 mt-0.5"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <h4 className="font-bold text-black mb-1">Quick Response</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries,
                    please email us directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
