"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
      className="relative h-[80vh] w-full overflow-hidden"
    >
      {/* Background image from 360 module */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-360.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 40%' }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center pt-16 lg:pt-20 pb-6 lg:pb-10 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Tu {colorsData.modelName || "vehículo"} disponible en estos colores.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400">
            Son {colorsData.colors.length} colores a tu disposición.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 lg:px-20 pb-4 md:pb-10 lg:pb-20">
          {/* Color Selectors - Horizontal on mobile, above car */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-row gap-3 mb-8 lg:hidden"
          >
            {colorsData.colors.map((color, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                onClick={() => setActiveColor(index)}
                className={`relative w-12 h-12 rounded-full border-3 transition-all duration-300 ${
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

          {/* Vehicle Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[500px] mt-12 md:mt-16 lg:mt-20"
          >
            {/* Vehicle Image */}
            <Image
              src={currentColor.image}
              alt={`${colorsData.modelName} en color ${currentColor.name}`}
              fill
              className="object-contain z-10"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>

          {/* Color Selectors - Desktop (absolute position) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex absolute right-20 lg:right-32 top-1/2 -translate-y-1/2 flex-col gap-4"
          >
            {colorsData.colors.map((color, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                onClick={() => setActiveColor(index)}
                className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full border-3 transition-all duration-300 ${
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

        {/* Color Name - Same position on all screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pb-6 md:pb-10 mt-4 md:mt-6"
        >
          <div className="inline-block">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-2">
              {currentColor.name}
            </h3>
            <div className="h-1 bg-white/30 w-full" />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}