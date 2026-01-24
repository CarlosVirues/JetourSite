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
          <div className="relative z-10 h-full flex flex-col p-8 lg:p-16">
            {/* Top Content - Category Title at top left */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-auto"
            >
              {/* Category Title */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {currentCategory.title}
              </h2>
            </motion.div>

            {/* Bottom Content - Slide details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mb-24"
            >
              {/* Slide Title */}
              {currentSlide.title && (
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                  {currentSlide.title}
                </h3>
              )}

              {/* Slide Description */}
              {currentSlide.description && (
                <p className="text-lg lg:text-xl text-white/90 mb-6">
                  {currentSlide.description}
                </p>
              )}

              {/* Bullets */}
              {currentSlide.bullets && currentSlide.bullets.length > 0 && (
                <ul className="space-y-2">
                  {currentSlide.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-white text-xl leading-none mt-1">•</span>
                      <span className="text-lg text-white/90">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* Navigation Arrows - Positioned at sides of screen */}
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevSlide}
              disabled={activeCategory === 0 && activeSlide === 0}
              className={`absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeCategory === 0 && activeSlide === 0
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextSlide}
              disabled={
                activeCategory === featuresData.categories.length - 1 &&
                activeSlide === currentCategory.slides.length - 1
              }
              className={`absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeCategory === featuresData.categories.length - 1 &&
                activeSlide === currentCategory.slides.length - 1
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Next Slide Preview - Bottom right */}
            {nextSlide && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 right-8 lg:bottom-12 lg:right-16"
              >
                <div 
                  className="relative group cursor-pointer"
                  onClick={handleNextSlide}
                >
                  <div className="relative w-56 h-36 lg:w-72 lg:h-48 rounded-lg overflow-hidden border-2 border-white/30 transition-all duration-300 group-hover:border-white/50 shadow-2xl">
                    <Image
                      src={nextSlide.backgroundImage}
                      alt="Siguiente"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-2 right-2">
                      <Expand className="w-6 h-6 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Scroll Indicator - Bottom center */}
          {(activeCategory < featuresData.categories.length - 1 || 
           activeSlide < currentCategory.slides.length - 1) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <ChevronDown className="w-8 h-8 text-white/60" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}