"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RoldanSection({
  title,
  backgroundImage,
  logo,
  features,
}) {
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
            backgroundImage: `url('${backgroundImage}')`,
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
              src={logo}
              alt={title}
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
            {title}
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
                key={index}
                variants={itemVariants}
                className="relative p-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-left pl-4">
                  <div className="flex items-center mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide leading-tight border-l-4 border-blue-400 pl-2">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed ">
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
