"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      thumbnail: "/video.jpg",
      title:
        "Reseña del Jetour Dashing | Incluye rendimiento, precio y consumo de combustible",
      description: "Comprehensive review of the Jetour Dashing model",
      duration: "15:30",
    },
    {
      id: 2,
      thumbnail: "/video.jpg",
      title: "2025 Jetour Dashing Review: Top 10 cosas que debes saber",
      description: "Essential information about the 2025 Dashing model",
      duration: "12:45",
    },
    {
      id: 3,
      thumbnail: "/video.jpg",
      title: "Jetour T1: Prueba de manejo en carretera",
      description: "Road test and driving experience of the T1 model",
      duration: "18:20",
    },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-black py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Headlines */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Mira el JETOUR T1 en acción
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Videos Oficiales con reviews que te Inspirarán
          </motion.p>
        </motion.div>

        {/* Video Gallery */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos
              .slice(currentVideo, currentVideo + 2)
              .map((video, index) => (
                <motion.div
                  key={video.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className="relative h-64 lg:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                    {/* Video Thumbnail Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Play Button Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 transition-opacity duration-300 z-20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white/20 hover:bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </motion.div>

                    {/* Watch Video Button */}
                    <motion.button
                      className="absolute top-4 right-4 bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver video
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Video Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-4"
                  >
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {video.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Video Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {Array.from({ length: Math.ceil(videos.length / 2) }).map(
            (_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentVideo(index * 2)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentVideo === index * 2
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
