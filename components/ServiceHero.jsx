"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              ¿Por qué elegir el
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              servicio oficial Jetour?
            </h2>
          </div>

          {/* Roldan Logo */}
          <div className="flex justify-end mt-8">
            <Image
              src="/logo-roldan-home.png"
              alt="Grupo Roldan"
              width={200}
              height={60}
              className="w-auto h-12 md:h-16"
            />
          </div>
        </motion.div>

        {/* Service Features Grid */}
        <div className="space-y-8">
          {/* Feature 1 - Tecnología - Image left, Text right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image Column */}
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-800">
              <Image
                src="/mechanic1.jpg"
                alt="Tecnología de diagnóstico"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Column with Blue Background */}
            <div className="relative h-64 md:h-80 lg:h-96 flex items-center z-10">
              <div className="p-2 md:p-4 lg:p-6 text-white border-l-12 border-blue-500 -ml-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  Tecnología y diagnóstico de última generación
                </h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  El servicio posventa de JETOUR trasciende lo convencional: integra tecnologías de vanguardia y herramientas de última generación que permiten diagnósticos precisos, ejecutados con la maestría de especialistas formados directamente en fábrica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - Técnicos - Text left, Image right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-center"
          >
            {/* Text Column with Blue Background */}
            <div className="relative h-64 md:h-80 lg:h-96 flex items-center lg:-mr-16 z-10 lg:order-1">
              <div className="p-2 md:p-4 lg:p-6 text-white  border-l-12 border-blue-500">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  Técnicos altamente capacitados
                </h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  y certificados directamente por la marca
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-800 lg:order-2">
              <Image
                src="/mechanic2.jpg"
                alt="Técnicos especializados"
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
