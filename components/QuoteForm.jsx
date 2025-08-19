"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  CreditCard,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    mail: "",
    cedula: "",
    ciudad: "",
  });
  const [selectedModel, setSelectedModel] = useState("T1");

  const carModels = [
    { id: "x70-sport", name: "X70 Sport", image: "/mini-car.png" },
    { id: "x70-limit", name: "X70 Limit", image: "/mini-car.png" },
    { id: "x50", name: "X50", image: "/mini-car.png" },
    { id: "dashing", name: "Dashing", image: "/mini-car.png" },
    { id: "t2", name: "T2", image: "/mini-car.png" },
    { id: "t2-hibrido", name: "T2 Híbrido", image: "/mini-car.png" },
    { id: "t1", name: "T1", image: "/mini-car.png" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Quote form submitted:", { ...formData, selectedModel });
    // Reset form
    setFormData({
      nombre: "",
      celular: "",
      mail: "",
      cedula: "",
      ciudad: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const modelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Headline */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Estamos listos para brindarte la mejor experiencia
          </motion.h2>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="bg-black rounded-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre y apellido */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <User className="w-5 h-5 text-gray-400 mr-3" />
                  </motion.div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre y apellido"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* Celular */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  </motion.div>
                  <input
                    type="tel"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Celular"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* Mail */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  </motion.div>
                  <input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    placeholder="Mail"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* Cédula */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                  </motion.div>
                  <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    placeholder="Cédula"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* Ciudad */}
              <motion.div
                variants={formFieldVariants}
                className="relative md:col-span-2"
              >
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  </motion.div>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    placeholder="Ciudad"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>
            </div>

            {/* Model Selection */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-semibold text-white mb-4"
              >
                Selecciona tu modelo preferido
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {carModels.map((model, index) => (
                  <motion.div
                    key={model.id}
                    variants={modelVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.button
                      type="button"
                      onClick={() => setSelectedModel(model.id)}
                      className={`w-full aspect-square rounded-lg border-2 transition-all duration-300 ${
                        selectedModel === model.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Image
                            src={model.image}
                            alt={model.name}
                            width={50}
                            height={50}
                          />

                          <p className="text-xs text-white font-medium">
                            {model.name}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="mt-8 text-center">
              <motion.button
                type="submit"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Cotizar ahora
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
