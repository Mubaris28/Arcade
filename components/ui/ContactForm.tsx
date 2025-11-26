"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 border rounded transition-colors",
              "focus:outline-none focus:border-black",
              errors.name ? "border-red-500" : "border-gray-300"
            )}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-3 border rounded transition-colors",
              "focus:outline-none focus:border-black",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-3 border border-gray-300 rounded transition-colors focus:outline-none focus:border-black"
            placeholder="Your company (optional)"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message")}
            className={cn(
              "w-full px-4 py-3 border rounded transition-colors resize-vertical",
              "focus:outline-none focus:border-black",
              errors.message ? "border-red-500" : "border-gray-300"
            )}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-black text-white rounded font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 font-medium">
            Message sent successfully!
          </p>
          <p className="text-green-700 text-sm mt-1">
            We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800 font-medium">
            Something went wrong.
          </p>
          <p className="text-red-700 text-sm mt-1">
            Please try again or email us directly.
          </p>
        </div>
      )}
    </div>
  );
}






