"use client";

import { Clock, MapPin, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DistributorInfo({ distributor, onClose }) {
  if (!distributor) return null;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-4 right-4 bg-white rounded-lg shadow-lg max-w-sm z-10"
      >
        <div className="p-4">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Distributor Image */}
          {/* <motion.div
            variants={itemVariants}
            className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-sm"
            >
              Imagen del Distribuidor
            </motion.div>
          </motion.div> */}

          {/* Distributor Info */}
          <motion.h3
            variants={itemVariants}
            className="font-semibold text-gray-900 mb-2"
          >
            {distributor.name}
          </motion.h3>

          <motion.div variants={itemVariants} className="space-y-2 text-sm">
            <motion.div
              variants={itemVariants}
              className="flex items-center text-gray-600"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-4 h-4 mr-2" />
              </motion.div>
              <span
                className={
                  distributor.status === "Cerrado"
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {distributor.status}
              </span>
              <span className="text-gray-500 ml-2">• {distributor.hours}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-gray-600 flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mr-2" />
              </motion.div>
              {distributor.address}
            </motion.div>

            {distributor.phone && (
              <motion.div
                variants={itemVariants}
                className="text-gray-600 flex items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                </motion.div>
                {distributor.phone}
              </motion.div>
            )}

            {distributor.mobile && (
              <motion.div
                variants={itemVariants}
                className="text-gray-600 flex items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                </motion.div>
                {distributor.mobile}
              </motion.div>
            )}
          </motion.div>

          {/* Action Icons */}
          {/* <motion.div variants={itemVariants} className="flex space-x-4 mt-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2"
              >
                <span className="text-white text-xs">😊</span>
              </motion.div>
              Contactar
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center text-green-500 hover:text-green-600"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mr-2" />
              </motion.div>
              Dirección
            </motion.button>
          </motion.div> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
