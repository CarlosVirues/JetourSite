"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroShowcase() {
  const [activeCategory, setActiveCategory] = useState("4x4");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    { id: "motor", label: "Motor" },
    { id: "4x4", label: "4x4" },
    { id: "seguridad", label: "Seguridad" },
    { id: "accesorios", label: "Accesorios" },
  ];

  const slides = [
    {
      id: 1,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor sit, consectetur elit.",
      description: "Steering wheel and dashboard view",
    },
    {
      id: 2,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor",
      description: "Front passenger seat with heating function",
    },
    {
      id: 3,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor conset.",
      description: "Front passenger seat with cooling function",
    },
    {
      id: 4,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor sit amet",
      description: "Dashboard and controls overview",
    },
    {
      id: 5,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor consectetur",
      description: "Interior comfort features",
    },
    {
      id: 6,
      image: "/detail.jpg",
      title: "Lorem ipsum dolor adipiscing",
      description: "Advanced technology integration",
    },
  ];

  const nextSlide = () => {
    const slideIncrement = isMobile ? 1 : 3;
    const maxStartIndex = Math.max(0, slides.length - slideIncrement);
    setCurrentSlide((prev) => Math.min(prev + slideIncrement, maxStartIndex));
  };

  const prevSlide = () => {
    const slideIncrement = isMobile ? 1 : 3;
    setCurrentSlide((prev) => Math.max(prev - slideIncrement, 0));
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-black pt-32 pb-12"
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
            Experimenta la libertad de ir a donde quieras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 px-4 md:px-0"
          >
            Descubre todo lo que te espera a bordo de un T1
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-0">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 border-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? "border-blue-500 text-blue-500 bg-blue-500/10"
                    : "border-white text-white hover:border-blue-500 hover:text-blue-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-6xl mx-auto px-4 md:px-0"
        >
          <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl">
            <AnimatePresence initial={false} custom={currentSlide}>
              <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="w-full h-full relative">
                  {/* Three slides container */}
                  <div className="flex h-full">
                    {slides
                      .slice(currentSlide, currentSlide + (isMobile ? 1 : 3))
                      .map((slide, index) => (
                        <div key={slide.id} className="flex-1 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          {/* Overlay text for each slide */}
                          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                            <motion.h3
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.1,
                              }}
                              className="text-sm md:text-lg font-bold text-white mb-1"
                            >
                              {slide.title}
                            </motion.h3>
                            <p className="text-xs md:text-sm text-gray-300">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
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
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {Array.from({
              length: Math.ceil(slides.length / (isMobile ? 1 : 3)),
            }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index * (isMobile ? 1 : 3))}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index * (isMobile ? 1 : 3)
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
