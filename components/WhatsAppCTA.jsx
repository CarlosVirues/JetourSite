"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhatsAppCTA() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Agenda tu cita por Whatsapp
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Escríbenos y recibe atención inmediata.
              </p>
            </div>

            <motion.a
              href="https://wa.me/593997001986"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">Agendar Cita</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Content - Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/contact-car.png"
                alt="JETOUR Vehicle"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
