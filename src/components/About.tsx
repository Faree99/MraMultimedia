'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-[#f9fafb] to-[#eef2f6]"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/logo.png"
              alt="MRA Multimedia team working on design"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-mra-orange">MRA Multimedia</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MRA Multimedia is a creative printing and branding company dedicated
            to helping individuals and businesses bring their ideas to life.
            From concept to print, we combine innovation, precision, and style
            to produce top-quality materials that leave lasting impressions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether it’s business cards, flyers, custom T-shirts, or corporate
            souvenirs, we are your trusted partner for reliable printing and
            design solutions that reflect professionalism and creativity.
          </p>

          <a
            href="#contact"
            style={{ background: "var(--mra-blue)" }}
            className="inline-block text-white px-6 py-3 rounded-full hover:opacity-90 font-medium shadow-md transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
