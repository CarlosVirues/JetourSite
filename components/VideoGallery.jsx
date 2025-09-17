"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight, X } from "lucide-react";
import Image from "next/image";

export default function VideoGallery({
  title = "JETOUR en Ecuador y el mundo",
  videos = [],
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, videos.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, videos.length - 1)) %
        Math.max(1, videos.length - 1)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Función para extraer el ID del video de YouTube
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeVideoModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Validación: no renderizar si no hay videos
  if (!videos || videos.length === 0) {
    return null;
  }

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {title}
          </h2>
        </motion.div>

        {/* Video Carousel */}
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

          {/* Videos Container */}
          <div className="relative overflow-hidden">
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              >
                {/* Main Video (Left) */}
                <motion.div
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    if (videos[currentSlide]?.type === "video") {
                      openVideoModal(videos[currentSlide]);
                    }
                  }}
                >
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-800">
                    {/* Video Thumbnail */}
                    <Image
                      src={
                        videos[currentSlide]?.thumbnail || "/videos/video-1.jpg"
                      }
                      alt={videos[currentSlide]?.title || "Video"}
                      fill
                      className="object-cover"
                    />

                    {/* Play Button Overlay - Only for videos */}
                    {videos[currentSlide]?.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* "Ver video" Text with Arrow */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-2 text-white text-xs md:text-sm">
                        <span>
                          {videos[currentSlide]?.views || "Ver video"}
                        </span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-4 text-center"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                      {videos[currentSlide]?.title ||
                        "Reseña del Jetour T2 Beyond 2.0T XWD 2025: ¿Más de lo que parece?"}
                    </h3>
                  </motion.div>
                </motion.div>

                {/* Secondary Video (Right) */}
                <motion.div
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    const nextVideo =
                      videos[(currentSlide + 1) % videos.length];
                    if (nextVideo?.type === "video") {
                      openVideoModal(nextVideo);
                    }
                  }}
                >
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-800">
                    {/* Video Thumbnail */}
                    <Image
                      src={
                        videos[(currentSlide + 1) % videos.length]?.thumbnail ||
                        "/videos/video-2.jpg"
                      }
                      alt={
                        videos[(currentSlide + 1) % videos.length]?.title ||
                        "Video"
                      }
                      fill
                      className="object-cover"
                    />

                    {/* Play Button Overlay - Only for videos */}
                    {videos[(currentSlide + 1) % videos.length]?.type ===
                      "video" && (
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* "Leer más" Text with Arrow */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-2 text-white text-xs md:text-sm">
                        <span>
                          {videos[(currentSlide + 1) % videos.length]?.views ||
                            "Leer más"}
                        </span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-4 text-center"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                      {videos[(currentSlide + 1) % videos.length]?.title ||
                        "Jetour x Driving to Mars"}
                    </h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {videos.slice(0, -1).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeVideoModal}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Video Title */}
                <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <h3 className="text-lg font-semibold">
                    {selectedVideo.title}
                  </h3>
                </div>

                {/* YouTube Video */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                      selectedVideo.videoUrl
                    )}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
