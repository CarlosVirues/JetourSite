"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({
  backgroundImage,
  logoImage,
  logoAlt,
  logoWidth,
  logoHeight,
  subtitle,
  showScrollIndicator,
  height,
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative ${height} w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800`}
    >
      {/* Background Image/Pattern */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover aspect-video"
        />
      </div>

      {/* Main Content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center ${height} px-6 lg:px-12`}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main JETOUR Logo/Text - Optional */}
          {logoImage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <Image
                src={logoImage}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className=""
                priority
              />
            </motion.div>
          )}

          {/* Subtitle - Optional */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black">
                {subtitle}
              </h2>
            </motion.div>
          )}
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
              className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-black/70 rounded-full mt-2"
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
