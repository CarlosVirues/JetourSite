"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VehicleFeatures({ featuresData }) {
  // Validación: no renderizar si no hay datos
  if (!featuresData || !featuresData.items || featuresData.items.length === 0) {
    return null;
  }

  const { title, items: features } = featuresData;

  return (
    <section className="relative bg-black text-white py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="relative rounded-none overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-500 group-hover:scale-105">
                {/* Background Image */}
                <div className="relative h-64 aspect-[762/344]">
                  <Image
                    src={feature.image}
                    alt={feature.description}
                    fill
                    className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Title and Description - Outside and Centered */}
              <div className="mt-4 text-center">
                {feature.description && (
                  <p className="text-sm text-gray-300 mt-2 group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
