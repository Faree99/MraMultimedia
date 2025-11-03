"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#ff7a1a]/10 via-white to-[#4169e1]/10 text-gray-800 py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-mra-orange">
            MRA<span className="text-mra-blue"> Multimedia</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Your one-stop shop for creative printing, branding, and digital designs that elevate your brand presence.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-mra-orange transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-mra-orange" />
              <span>+234 812 345 6789</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-mra-orange" />
              <span>info@mramultimedia.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-gray-100 hover:bg-mra-orange hover:text-white transition">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="p-2 rounded-full bg-gray-100 hover:bg-mra-orange hover:text-white transition">
              <BsInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-gray-100 hover:bg-mra-orange hover:text-white transition">
              <BsTwitterX className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} MRA Multimedia. All rights reserved.
      </div>
    </footer>
  );
}
