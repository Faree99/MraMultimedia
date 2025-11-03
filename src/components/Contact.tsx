'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white via-[#f9fafb] to-[#eef2f6]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
        >
          Get in <span className="text-mra-orange">Touch</span>
        </motion.h2>

        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Have a question, want to request a quote, or collaborate on your next printing project?
          We’d love to hear from you.
        </p>

        {/* Grid layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-mra-blue" />  +234 902 325 7308
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-mra-blue" /> mramultimedia225@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-mra-blue" /> Deborah's place, Mohammed Abdullahi Road, <br /> Old Sawmill, Fate/Tanke, Ilorin, Kwara State
                </li>
              </ul>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2349023257308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md"
            >
              <Send className="w-5 h-5" /> Message us on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl shadow-md p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mra-blue outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mra-blue outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mra-blue outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-mra-orange to-mra-blue text-white py-3 rounded-lg font-medium hover:opacity-90"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
