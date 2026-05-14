"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => { const t = setTimeout(() => setVisible(true), 2000); return () => clearTimeout(t); }, []);
  useEffect(() => { if (visible) { const t = setTimeout(() => setTooltip(false), 6000); return () => clearTimeout(t); } }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-white rounded-xl px-4 py-3 shadow-2xl mb-2 whitespace-nowrap"
          >
            <button onClick={() => setTooltip(false)} className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
              <X className="w-3 h-3 text-gray-500" />
            </button>
            <p className="text-gray-800 text-sm font-medium">¿Tenés alguna duda?</p>
            <p className="text-gray-500 text-xs">Escribime por WhatsApp</p>
            <div className="absolute bottom-0 right-6 translate-y-1/2 w-3 h-3 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/5491112345678?text=Hola%20Javier%2C%20me%20interesa%20una%20consulta%20gastronómica"
        target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
      </motion.a>
    </div>
  );
}
