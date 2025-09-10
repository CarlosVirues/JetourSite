"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VehicleShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vehicles = [
    {
      id: 1,
      name: "T2",
      slug: "t2",
      image: "/models/model-t2.jpg",
    },
    {
      id: 2,
      name: "T1",
      slug: "t1",
      image: "/models/model-t1.jpg",
    },
    {
      id: 3,
      name: "T2 PHEV",
      slug: "t2-phev",
      image: "/models/model-t2.jpg",
    },
    {
      id: 4,
      name: "X50",
      slug: "x50",
      image: "/models/model-x50.jpg",
    },
    {
      id: 5,
      name: "X70 Sport",
      slug: "x70-sport",
      image: "/models/model-x70.jpg",
    },
    {
      id: 6,
      name: "X70 PLUS",
      slug: "x70-plus",
      image: "/models/model-x70.jpg",
    },
    {
      id: 7,
      name: "DASHING",
      slug: "dashing",
      image: "/models/model-t1.jpg", // Imagen temporal hasta tener la específica
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Jetour no es solo un auto, es la decisión de apostar por ti.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tecnología de vanguardia, diseño que rompe esquemas y espacio
            pensado para cada momento de tu vida.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sea cual sea tu camino, hay un Jetour hecho para ti.
          </p>
        </motion.div>

        {/* Vehicle Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 md:-left-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 md:-right-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>

          {/* Slides Container */}
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {/* Show 4 cards with infinite loop */}
                {Array.from({ length: 4 }, (_, index) => {
                  const vehicleIndex = (currentSlide + index) % vehicles.length;
                  const vehicle = vehicles[vehicleIndex];

                  return (
                    <motion.div
                      key={`${vehicle.id}-${currentSlide}-${index}`}
                      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 aspect-[400/600]`}
                      onClick={() => goToSlide(vehicleIndex)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Vehicle Image Background */}
                      <div
                        className="relative h-full bg-cover bg-center rounded-3xl"
                        style={{
                          backgroundImage: `url(${vehicle.image})`,
                        }}
                      >
                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent">
                          {/* Bottom Content */}
                          <Link href={`/vehiculos/${vehicle.slug}`}>
                            <motion.button
                              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors group self-start"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-sm font-medium">
                                Conoce más
                              </span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
