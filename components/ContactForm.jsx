"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

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

      {/* Success/Error Message */}
      {state.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 mb-4 rounded-lg flex items-center gap-3 ${
            state.success
              ? "bg-green-500/10 border border-green-500 text-green-400"
              : "bg-red-500/10 border border-red-500 text-red-400"
          }`}
        >
          {state.success ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <p>{state.message}</p>
        </motion.div>
      )}

      <form action={action} noValidate className="space-y-6">
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
              defaultValue={state.values?.nombre || ""}
              placeholder="Nombre y apellido"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.nombre && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.nombre[0]}
            </motion.p>
          )}
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
              defaultValue={state.values?.email || ""}
              placeholder="Mail"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.email[0]}
            </motion.p>
          )}
        </motion.div>

        {/* Teléfono */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <Input
              type="tel"
              name="telefono"
              defaultValue={state.values?.telefono || ""}
              placeholder="Teléfono"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.telefono && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.telefono[0]}
            </motion.p>
          )}
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
              defaultValue={state.values?.ciudad || ""}
              placeholder="Ciudad"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.ciudad && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.ciudad[0]}
            </motion.p>
          )}
        </motion.div>

        {/* Asunto */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center border-b border-blue-500 pb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-blue-500 mr-3" />
            </motion.div>
            <select
              name="asunto"
              defaultValue={state.values?.asunto || ""}
              className="bg-transparent border-none text-white focus:ring-0 focus:border-none p-0 w-full appearance-none cursor-pointer text-sm"
              required
            >
              <option value="" disabled className="text-gray-500 bg-gray-800">
                Selecciona un asunto
              </option>
              <option value="Modelos" className="text-white bg-gray-800">
                Modelos
              </option>
              <option value="Talleres" className="text-white bg-gray-800">
                Talleres
              </option>
              <option value="Concesionarios" className="text-white bg-gray-800">
                Concesionarios
              </option>
            </select>
          </div>
          {state.errors?.asunto && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.asunto[0]}
            </motion.p>
          )}
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
              defaultValue={state.values?.mensaje || ""}
              placeholder="Mensaje"
              className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0 resize-none min-h-[80px]"
              required
            />
          </div>
          {state.errors?.mensaje && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {state.errors.mensaje[0]}
            </motion.p>
          )}
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
              disabled={isPending}
              className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Enviando..." : "Enviar"}
              {!isPending && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
}
