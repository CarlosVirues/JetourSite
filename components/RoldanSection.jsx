"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Users } from "lucide-react";

export default function RoldanSection() {
  const features = [
    {
      id: 1,
      icon: Shield,
      title: "COBERTURA A NIVEL NACIONAL",
      description:
        "17 concesionarios en todo el país y talleres autorizados. Repuestos y accesorios continuos.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
    },
    /*{
      id: 2,
      icon: Award,
      title: "LAS MEJORES MARCAS AUTOMOTRICES",
      description:
        "Sin necesidad de pagar extras por elementos clave como sunroof, cámaras 360, o asientos eléctricos.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
    },*/
    {
      id: 2,
      icon: Users,
      title: "MÁS DE 50 AÑOS DE RESPALDO",
      description:
        "Con múltiples sistemas que superan los estándares regionales.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
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
    <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/roldan-section-bg.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Logo and Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Image
              src="/logo-roldan-home.png"
              alt="Grupo Roldan"
              width={300}
              height={100}
              className="w-auto h-16 md:h-20"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            En Ecuador, Jetour tiene el respaldo de Grupo Roldán.
          </motion.h2>
        </motion.div>

        {/* Features Grid - Bottom Section as Blue Boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-24"
        >
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="relative p-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-left pl-4">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 tracking-wide leading-tight border-l-4 border-blue-400 pl-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
