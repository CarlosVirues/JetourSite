"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function VehicleColorsNew({ colorsData }) {
  const [activeColor, setActiveColor] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!colorsData || !colorsData.colors || colorsData.colors.length === 0) {
    return null;
  }

  const currentColor = colorsData.colors[activeColor];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)"
      }}
    >
      {/* Dark overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, transparent 20%, rgba(0,0,0,0.3) 20.5%, rgba(0,0,0,0.3) 40%, transparent 40.5%)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center pt-20 pb-10"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Tu {colorsData.modelName || "vehículo"} disponible en estos colores.
          </h2>
          <p className="text-lg lg:text-xl text-gray-400">
            Son {colorsData.colors.length} colores a tu disposición.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-between px-8 lg:px-20 pb-20">
          {/* Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-4xl h-[500px]">
              <Image
                src={currentColor.image}
                alt={`${colorsData.modelName} en color ${currentColor.name}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </motion.div>

          {/* Color Selectors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-6 ml-10"
          >
            {colorsData.colors.map((color, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                onClick={() => setActiveColor(index)}
                className={`relative w-20 h-20 rounded-full border-4 transition-all duration-300 ${
                  activeColor === index
                    ? "border-white scale-110 shadow-lg"
                    : "border-gray-600 hover:border-gray-400"
                }`}
                aria-label={`Seleccionar color ${color.name}`}
                style={{ backgroundColor: color.hex }}
              >
                {activeColor === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-full border-2 border-white animate-pulse"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Color Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pb-16"
        >
          <div className="inline-block">
            <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">
              {currentColor.name}
            </h3>
            <div className="h-1 bg-white/30 w-full" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}