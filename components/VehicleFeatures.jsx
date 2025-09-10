"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VehicleFeatures({ vehicleData }) {
  const features = [
    {
      id: 1,
      title: "Potencia que te lleva a todos lados",
      image: "/models/t2/t2-feature-1.jpg",
    },
    {
      id: 2,
      title: "Diseño y tecnología que inspiran",
      image: "/models/t2/t2-feature-2.jpg",
    },
    {
      id: 3,
      title: "Espacio, diseño y elegancia en cada detalle",
      image: "/models/t2/t2-feature-3.jpg",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-500 group-hover:scale-105">
                {/* Background Image */}
                <div className="relative h-64 aspect-[762/344]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Title - Outside and Centered */}
              <h3 className="text-base lg:text-lg text-white mt-4 text-center group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
