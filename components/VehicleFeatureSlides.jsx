"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown, Expand } from "lucide-react";

export default function VehicleFeatureSlides({ featuresData }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!featuresData || !featuresData.categories || featuresData.categories.length === 0) {
    return null;
  }

  const currentCategory = featuresData.categories[activeCategory];
  const currentSlide = currentCategory.slides[activeSlide];

  const handleNextSlide = () => {
    if (activeSlide < currentCategory.slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else if (activeCategory < featuresData.categories.length - 1) {
      // Si es el último slide de la categoría, pasar a la siguiente categoría
      setActiveCategory(activeCategory + 1);
      setActiveSlide(0);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else if (activeCategory > 0) {
      // Si es el primer slide de la categoría, volver a la categoría anterior
      setActiveCategory(activeCategory - 1);
      setActiveSlide(featuresData.categories[activeCategory - 1].slides.length - 1);
    }
  };

  const nextSlide = currentCategory.slides[activeSlide + 1] || 
    (activeCategory < featuresData.categories.length - 1 
      ? featuresData.categories[activeCategory + 1].slides[0] 
      : null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${activeSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-screen w-full"
        >
          {/* Background Image */}
          {currentSlide.backgroundImage && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentSlide.backgroundImage}
                alt={currentSlide.title || "Feature"}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
            {/* Top Content */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              {/* Category Title */}
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                {currentCategory.title}
              </h2>

              {/* Slide Content */}
              <div className="space-y-6">
                {/* Slide Title */}
                {currentSlide.title && (
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                    {currentSlide.title}
                  </h3>
                )}

                {/* Slide Description or Bullets */}
                {currentSlide.description && (
                  <p className="text-lg lg:text-xl text-gray-200">
                    {currentSlide.description}
                  </p>
                )}

                {currentSlide.bullets && currentSlide.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {currentSlide.bullets.map((bullet, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-500 text-2xl leading-none">•</span>
                        <span className="text-lg text-gray-200">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>

            {/* Bottom Controls */}
            <div className="flex items-end justify-between">
              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevSlide}
                  disabled={activeCategory === 0 && activeSlide === 0}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeCategory === 0 && activeSlide === 0
                      ? "bg-white/10 text-gray-500 cursor-not-allowed"
                      : "bg-white/20 hover:bg-white/30 text-white"
                  }`}
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextSlide}
                  disabled={
                    activeCategory === featuresData.categories.length - 1 &&
                    activeSlide === currentCategory.slides.length - 1
                  }
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeCategory === featuresData.categories.length - 1 &&
                    activeSlide === currentCategory.slides.length - 1
                      ? "bg-white/10 text-gray-500 cursor-not-allowed"
                      : "bg-white/20 hover:bg-white/30 text-white"
                  }`}
                  aria-label="Siguiente slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Next Slide Preview */}
              {nextSlide && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative group cursor-pointer"
                  onClick={handleNextSlide}
                >
                  <div className="relative w-48 h-32 lg:w-64 lg:h-40 rounded-lg overflow-hidden border-2 border-white/20 transition-all duration-300 group-hover:border-white/40">
                    <Image
                      src={nextSlide.backgroundImage}
                      alt="Siguiente"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Expand className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          {activeCategory < featuresData.categories.length - 1 || 
           activeSlide < currentCategory.slides.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/70 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {currentCategory.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-8 bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}