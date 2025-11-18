import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcade Studios | Web Development Agency",
  description:
    "Arcade Studios builds modern web applications, digital products, and innovative solutions for startups, agencies, and next-gen brands.",
  keywords: [
    "web development",
    "digital products",
    "web applications",
    "next.js",
    "react",
    "agency",
  ],
  authors: [{ name: "Arcade Studios" }],
  openGraph: {
    title: "Arcade Studios | Web Development Agency",
    description:
      "Building digital products for next-gen brands. Modern web applications and innovative solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Arcade Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Studios | Web Development Agency",
    description: "Building digital products for next-gen brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

