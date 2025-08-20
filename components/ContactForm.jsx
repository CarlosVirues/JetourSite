"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  MapPin,
  MoreHorizontal,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      nombre: "",
      email: "",
      ciudad: "",
      asunto: "",
      mensaje: "",
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border border-blue-500 p-8 rounded-lg"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-bold text-white mb-6"
      >
        ¡Ponte en <span className="font-bold">contacto!</span>
      </motion.h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre y apellido */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <User className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <Input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre y apellido"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Mail"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
        </motion.div>

        {/* Ciudad */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <Input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              placeholder="Ciudad"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
        </motion.div>

        {/* Asunto */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MoreHorizontal className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <Input
              type="text"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              placeholder="Asunto"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
        </motion.div>

        {/* Mensaje */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-start border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 text-blue-500 mr-3 mt-2" />
            </motion.div>
            <Textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Mensaje"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0 resize-none min-h-[80px]"
              required
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              type="submit"
              className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Enviar
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
}
