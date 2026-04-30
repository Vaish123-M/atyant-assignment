import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://chat.whatsapp.com/F3qcw7JZRIK5vbPgvUfaOA?mode=gi_t"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300"
    >
      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex h-6 w-6 items-center justify-center">
        <MessageCircle className="h-5 w-5" />
      </motion.div>
      <span className="hidden sm:inline">Get Instant Clarity</span>
    </motion.a>
  );
}
