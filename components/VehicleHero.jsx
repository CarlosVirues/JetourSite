"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VehicleHero({
  backgroundImage,
  backgroundVideo,
  vehicleName,
  vehicleDescription,
  height,
  logoImage,
  logoAlt,
  highlights,
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative ${height || 'h-screen'} w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800`}
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video fails */}
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt={`${vehicleName} Background`}
                fill
                className="object-cover"
              />
            )}
          </video>
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={`${vehicleName} Background`}
            fill
            className="object-cover"
          />
        ) : null}
        {/* Lighter overlay to keep video visible */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 lg:px-12"
      >
        {/* Vehicle Logo - Centered */}
        {logoImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto"
          >
            <Image
              src={logoImage}
              alt={logoAlt || `${vehicleName} Logo`}
              width={300}
              height={300}
              className="object-contain object-center"
              priority
            />
          </motion.div>
        )}

        {/* Vehicle Description - Hidden but available */}
        {vehicleDescription && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-center max-w-3xl mx-auto hidden"
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              {vehicleDescription}
            </p>
          </motion.div>
        )}
      </div>

      {/* Highlights Section - Bottom of screen */}
      {highlights && highlights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-30 pb-12 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="border-l-2 border-white/60 pl-4 py-2">
                    <p className="text-white text-lg md:text-xl font-light leading-tight">
                      {highlight.text || highlight.title}
                    </p>
                    {highlight.subtitle && (
                      <p className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-1">
                        {highlight.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Vehicle-specific decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20">
        {/* Speed lines or vehicle-inspired shapes */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-white/10 to-transparent transform skew-x-12" />
          <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-gradient-to-t from-white/5 to-transparent transform -skew-x-6" />
          <div className="absolute bottom-0 left-1/2 w-1/5 h-2/5 bg-gradient-to-t from-white/8 to-transparent" />
        </div>
      </div>

      {/* Right side decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-15">
        <div className="absolute bottom-0 right-0 w-full h-full">
          <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-t from-white/10 to-transparent transform skew-x-12" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-white/5 to-transparent transform -skew-x-6" />
        </div>
      </div>
    </motion.section>
  );
}
