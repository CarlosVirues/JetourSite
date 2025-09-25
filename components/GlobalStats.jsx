"use client";

import { motion } from "framer-motion";
import { Star, Settings, Globe } from "lucide-react";

export default function GlobalStats() {
  const stats = [
    {
      id: 1,
      icon: Star,
      label: "Más de",
      mainNumber: "12 Millones",
      subtitle: "de Unidades Vendidas Globalmente",
      description: "",
      backgroundVideo: "/video/video-jetour-2023.mp4",
    },
    {
      id: 2,
      icon: Globe,
      label: "Presente en más de",
      mainNumber: "50 países",
      subtitle: "",
      description:
        "Conquistan mercados con diseño de vanguardia e ingeniería robusta.",
      backgroundVideo: "/video/auto-show-gags.mp4",
    },
    {
      id: 3,
      icon: Settings,
      label: "Más de",
      mainNumber: "568,387 unidades vendidas",
      subtitle: "",
      description:
        "a nivel mundial en 2024, con un impresionante crecimiento del 60.5% año tras año",
      backgroundVideo: "/video/jetour-super-factory.mp4",
    },
  ];

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            APUESTA POR EL RESPALDO Y LA CONFIANZA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Jetour, una marca con presencia y garantía mundial.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
                  {/* Background Video */}
                  <div className="absolute inset-0">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={stat.backgroundVideo} type="video/mp4" />
                    </video>
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="self-center mb-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      {stat.label && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.3,
                          }}
                          viewport={{ once: true }}
                          className="text-gray-300 text-sm md:text-base mb-2"
                        >
                          {stat.label}
                        </motion.p>
                      )}

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                      >
                        {stat.mainNumber}
                      </motion.h3>

                      {stat.subtitle && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.5,
                          }}
                          viewport={{ once: true }}
                          className="text-white text-sm md:text-base font-medium mb-2"
                        >
                          {stat.subtitle}
                        </motion.p>
                      )}

                      {stat.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.6,
                          }}
                          viewport={{ once: true }}
                          className="text-white text-xs md:text-sm leading-relaxed"
                        >
                          {stat.description}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
