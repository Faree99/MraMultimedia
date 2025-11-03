"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-linear-to-b from-white via-[#f9fafb] to-[#eef2f6] pt-28 pb-16">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Transform Your Brand with{" "}
            <span className="text-mra-orange">Creative Printing</span> &
            <span className="text-mra-blue"> Branding</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We design and print high-quality materials that make your brand
            stand out — from business cards to banners, souvenirs, and more.
          </p>

          <div className="mt-8 flex gap-4">
           <a href="#services" className="btn-gradient px-6 py-3 rounded-lg">
            Our Services
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>

        {/* Right side - Image or illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]">
            <Image
              src="/logo.png"
              alt="Printing and branding illustration"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
