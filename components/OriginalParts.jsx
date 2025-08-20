"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OriginalParts() {
  const parts = [
    {
      id: 1,
      image: "/parts1.jpg",
      alt: "Espejo retrovisor original",
    },
    {
      id: 2,
      image: "/parts2.jpg",
      alt: "Motor y componentes internos",
    },
    {
      id: 3,
      image: "/parts3.jpg",
      alt: "Llanta original JETOUR",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Repuestos 100% Originales
          </h2>
        </motion.div>

        {/* Parts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {parts.map((part) => (
            <motion.div
              key={part.id}
              variants={itemVariants}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden bg-gray-800">
                <Image
                  src={part.image}
                  alt={part.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-white font-semibold text-lg">
                      Repuesto Original
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
