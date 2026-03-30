"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({
  backgroundImage,
  backgroundVideo,
  logoUrl,
  logoAlt,
  logoWidth,
  logoHeight,
  subtitle,
  showScrollIndicator,
  height,
  additionalImage,
  additionalImageAlt,
}) {
  // Ajustar altura para móvil si tiene imagen adicional
  const adjustedHeight = additionalImage 
    ? height?.replace('h-96', 'h-screen').replace('h-[500px]', 'h-screen').replace('h-[600px]', 'h-screen').replace('lg:h-[800px]', 'h-screen') 
    : height;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative ${adjustedHeight || 'h-screen'} w-full overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800`}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video fails to load */}
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt="Hero Background"
                fill
                className="object-cover aspect-video"
              />
            )}
          </video>
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover aspect-video"
          />
        ) : null}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center ${adjustedHeight || "h-screen"} ${
          additionalImage ? "px-3 sm:px-6 lg:px-12" : "px-6 lg:px-12"
        }`}
      >
        <div
          className={`text-center mx-auto w-full ${
            additionalImage ? "max-w-full md:max-w-[800px]" : "max-w-4xl"
          }`}
        >
          {/* Main JETOUR Logo/Text - Optional (omit when additionalImage includes branding) */}
          {logoUrl && logoWidth && logoHeight && !additionalImage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20 md:mb-36"
            >
              <div className="w-[200px] md:w-[280px] lg:w-[350px] xl:w-[400px] mx-auto">
                <Image
                  src={logoUrl}
                  alt={logoAlt || "Logo"}
                  width={logoWidth}
                  height={logoHeight}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          )}

          {/* Additional Image - Replaces subtitle when provided */}
          {additionalImage ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 sm:mb-20 md:mb-36 w-full min-w-0"
            >
              <div className="w-full min-w-0">
                <Image
                  src={additionalImage}
                  alt={additionalImageAlt || "2026 Life is a Ride"}
                  width={4163}
                  height={564}
                  className="w-full h-auto max-w-full"
                  sizes="(max-width: 767px) 100vw, 800px"
                  priority
                />
              </div>
            </motion.div>
          ) : subtitle ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <h2 className="text-base md:text-2xl lg:text-3xl font-light text-white">
                {subtitle}
              </h2>
            </motion.div>
          ) : null}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
      </div>

      {/* Architectural/Building Elements - Background */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-30">
        <div className="absolute bottom-0 right-0 w-3/4 h-full">
          {/* Building silhouette shapes */}
          <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-t from-gray-400/20 to-transparent transform skew-x-12" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-gray-300/15 to-transparent transform -skew-x-6" />
          <div className="absolute bottom-0 right-1/2 w-1/4 h-2/3 bg-gradient-to-t from-gray-500/10 to-transparent" />
        </div>
      </div>
    </motion.section>
  );
}
