'use client';

import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349023257308"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      {/* <MessageCircle className="w-6 h-6" /> */}
      <FaWhatsapp className="w-6 h-6"/>
    </a>
  );
}
