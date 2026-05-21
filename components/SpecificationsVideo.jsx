"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SpecificationsVideo({ 
  videoUrl,
  imageUrl,
  title = "Especificaciones técnicas",
  model = "",
  logoImage,
  logoAlt,
  description = ""
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const hasVideo = !!videoUrl;

  useEffect(() => {
    if (!hasVideo) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => { if (videoRef.current) observer.unobserve(videoRef.current); };
  }, [hasVideo]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden bg-black"
    >
      {/* Fondo: video o imagen estática */}
      {hasVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-full max-w-[900px] px-8 md:px-12 text-center -mt-16 md:-mt-20 lg:-mt-24">
          {logoImage && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-6"
            >
              <img
                src={logoImage}
                alt={logoAlt || `${model} Logo`}
                className="w-[120px] md:w-[180px] lg:w-[220px] max-w-[80%] h-auto mx-auto"
              />
            </motion.div>
          )}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-white text-sm md:text-lg lg:text-xl font-medium leading-tight px-4">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Control de reproducción — solo si hay video */}
      {hasVideo && (
        <button
          onClick={togglePlayPause}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 group"
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          )}
        </button>
      )}

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.section>
  );
}