"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="relative w-full overflow-x-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full"
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
              
              {/* Degradados de transición - superior e inferior */}
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-12 lg:p-20">
            {/* All Content Grouped at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mb-8 md:mb-12"
            >
              {/* Category Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                {featuresData.title}
              </h2>
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
                <ul className="space-y-2 md:space-y-3">
                  {currentSlide.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <span className="text-white/60 text-sm md:text-base leading-none mt-1">•</span>
                      <span className="text-sm md:text-base lg:text-lg text-white/85 leading-snug md:leading-relaxed">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* Navigation Arrows - Only show if there are multiple slides */}
            {featuresData.slides.length > 1 && (
              <>
                {activeSlide > 0 && (
                  <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.button>
                )}

                {activeSlide < featuresData.slides.length - 1 && (
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.button>
                )}
              </>
            )}

          </div>

        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}