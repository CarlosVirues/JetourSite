"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown, Expand } from "lucide-react";

export default function VehicleFeatureSlides({ featuresData }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (!featuresData || !featuresData.slides || featuresData.slides.length === 0) {
    return null;
  }

  const currentSlide = featuresData.slides[activeSlide];

  const handleNextSlide = () => {
    if (activeSlide < featuresData.slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const nextSlide = featuresData.slides[activeSlide + 1] || null;

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
          key={activeSlide}
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
          <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-20">
            {/* Top Content - Category Title at top left */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category Title */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {featuresData.title}
              </h2>
            </motion.div>

            {/* Bottom Content - Slide details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mb-0"
            >
              {/* Slide Title */}
              {currentSlide.title && (
                <h3 className="text-xl lg:text-3xl font-bold text-white mb-6">
                  {currentSlide.title}
                </h3>
              )}

              {/* Slide Description - Can be paragraph or serve as intro to bullets */}
              {currentSlide.description && !currentSlide.bullets?.length && (
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                  {currentSlide.description}
                </p>
              )}

              {/* If there are bullets, description acts as intro text */}
              {currentSlide.description && currentSlide.bullets?.length > 0 && (
                <p className="text-base lg:text-lg text-white/80 mb-4">
                  {currentSlide.description}
                </p>
              )}

              {/* Bullets - Tamaño ajustado para textos largos */}
              {currentSlide.bullets && currentSlide.bullets.length > 0 && (
                <ul className="space-y-3">
                  {currentSlide.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-white/60 text-base leading-none mt-1">•</span>
                      <span className="text-base lg:text-lg text-white/85 leading-relaxed">{bullet}</span>
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
              disabled={activeSlide === 0}
              className={`absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeSlide === 0
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
              disabled={activeSlide === featuresData.slides.length - 1}
              className={`absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeSlide === featuresData.slides.length - 1
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Next Slide Preview - Bottom right - Hidden on mobile */}
            {nextSlide && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-12 right-12 lg:bottom-20 lg:right-20 [display:none] [@media(min-width:801px)]:[display:block]"
              >
                <div 
                  className="relative group cursor-pointer"
                  onClick={handleNextSlide}
                >
                  <div className="relative w-48 h-32 lg:w-64 lg:h-40 rounded-lg overflow-hidden border-2 border-white/20 transition-all duration-300 group-hover:border-white/40 shadow-2xl">
                    <Image
                      src={nextSlide.backgroundImage}
                      alt="Siguiente"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-2 right-2">
                      <Expand className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Scroll Indicator - Bottom center */}
          {activeSlide < featuresData.slides.length - 1 && (
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