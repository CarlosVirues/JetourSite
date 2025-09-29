"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroShowcase({ heroShowcaseData }) {
  // Validación: no renderizar si no hay datos
  if (
    !heroShowcaseData ||
    !heroShowcaseData.slides ||
    heroShowcaseData.slides.length === 0
  ) {
    return null;
  }

  const { title, subtitle, slides } = heroShowcaseData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    const slideIncrement = isMobile ? 1 : 3;
    setCurrentSlide((prev) => (prev + slideIncrement) % slides.length);
  };

  const prevSlide = () => {
    const slideIncrement = isMobile ? 1 : 3;
    setCurrentSlide(
      (prev) => (prev - slideIncrement + slides.length) % slides.length
    );
  };

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-black lg:pt-8 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Headlines */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            {title || "Experimenta la libertad de ir a donde quieras"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 px-4 md:px-0"
          >
            {subtitle || "Descubre todo lo que te espera a bordo"}
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-6xl mx-auto px-4 md:px-0"
        >
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
            <div className="w-full relative">
              {/* Slides container */}
              <div className="flex gap-4 md:gap-6">
                {slides.length > 0 ? (
                  Array.from({ length: isMobile ? 1 : 3 }).map((_, index) => {
                    const slideIndex = (currentSlide + index) % slides.length;
                    const slide = slides[slideIndex];

                    return (
                      <motion.div
                        key={`${slide.id}-${currentSlide}-${index}`}
                        className="flex-1 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Image container */}
                        <div className="relative h-48 md:h-64 lg:h-80 mb-4">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        {/* Title below image */}
                        <h3 className="text-sm md:text-lg font-bold text-white text-center">
                          {slide.title}
                        </h3>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="flex-1 flex items-center justify-center py-20">
                    <p className="text-white text-lg">
                      No hay contenido disponible
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows - Solo mostrar si hay slides */}
            {slides.length > 0 && (
              <>
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                </motion.button>
              </>
            )}
          </div>

          {/* Slide Indicators - Solo mostrar si hay slides */}
          {slides.length > 0 && (
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
