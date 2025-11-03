'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Custom T-Shirts',
    image: '/images/portfolio-tshirt.jpg',
    category: 'Brand Wear',
  },
  {
    title: 'Business Cards',
    image: '/images/portfolio-business-card.jpg',
    category: 'Corporate Identity',
  },
  {
    title: 'Flyers & Posters',
    image: '/images/portfolio-flyer.jpg',
    category: 'Marketing',
  },
  {
    title: 'Souvenirs & Gift Items',
    image: '/images/portfolio-souvenir.jpg',
    category: 'Promotional',
  },
  {
    title: 'Signage & Banners',
    image: '/images/portfolio-banner.jpg',
    category: 'Outdoor Branding',
  },
  {
    title: 'Packaging & Boxes',
    image: '/images/portfolio-box.jpg',
    category: 'Product Branding',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
        >
          Our <span className="text-mra-orange">Portfolio</span>
        </motion.h2>

        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          A glimpse of the creative works and print solutions we’ve delivered
          for our amazing clients.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
