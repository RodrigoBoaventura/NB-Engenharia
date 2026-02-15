import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5511999999999" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-white text-black text-sm px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium pointer-events-none">
        Fale conosco agora!
      </span>
    </motion.a>
  );
}

export default FloatingWhatsApp;