'use client';

import { motion } from 'framer-motion';
import { Printer, Shirt, CreditCard, PenTool, Gift, FileText } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'Graphic Design', desc: 'Creative designs that define your brand’s identity.' },
  { icon: Printer, title: 'Printing', desc: 'High-quality printing for banners, flyers, and more.' },
  { icon: Shirt, title: 'Customized T-Shirts', desc: 'Personalized shirts that represent your brand or event.' },
  { icon: CreditCard, title: 'Business Cards', desc: 'Premium and stylish cards that leave a lasting impression.' },
  { icon: Gift, title: 'Souvenirs & Gift Items', desc: 'Perfect branded items for clients, events, and promotions.' },
  { icon: FileText, title: 'Invitation Cards', desc: 'Elegant invitations for weddings, birthdays, and corporate events.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Our <span className="text-mra-orange">Services</span>
        </motion.h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          From creative design to full-scale printing — we bring your ideas to life with precision and flair.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-center items-center w-14 h-14 mx-auto bg-mra-blue/10 rounded-full mb-5">
                  <Icon className="w-7 h-7 text-mra-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
