"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function FinalWhatsAppCTA() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Agenda tu cita por whatsapp
          </h2>

          <motion.a
            href="https://wa.me/593997001986"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 w-fit mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Agendar Cita</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
