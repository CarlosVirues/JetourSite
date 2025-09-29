"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  CreditCard,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { submitQuoteForm } from "@/app/actions/quote";

export default function QuoteForm({ currentModel = null }) {
  const [state, action, isPending] = useActionState(submitQuoteForm, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

  const carModels = [
    { id: "x50", name: "X50", image: "/mini/mini-x50.png" },
    { id: "x70-sport", name: "X70 Sport", image: "/mini/mini-x70-sport.png" },
    { id: "x70-plus", name: "X70 Plus", image: "/mini/mini-x70-plus.png" },
    { id: "dashing", name: "Dashing", image: "/mini/mini-dashing.png" },
    { id: "t1", name: "T1", image: "/mini/mini-t1.png" },
    { id: "t2", name: "T2", image: "/mini/mini-t2.png" },
    { id: "t2-phev", name: "T2 PHEV", image: "/mini/mini-t2-phev.png" },
  ];

  // Lista de ciudades desde tu Excel
  const ciudades = [
    "ambato",
    "cuenca",
    "guayaquil",
    "guayaquil_samborondon",
    "ibarra",
    "latacunga",
    "loja",
    "macas",
    "machala",
    "manta",
    "quito_norte",
    "quito_sur",
    "quito_cumbaya_tumbaco",
    "quito_sangolqui",
    "riobamba",
    "santo_domingo",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    hover: { scale: 1.05, transition: { duration: 0.2 } },
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
            ¿Estás listo para apostar por ti?
          </motion.h2>
        </motion.div>

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

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="bg-black rounded-2xl p-8 lg:p-12"
        >
          <form action={action} noValidate className="space-y-6" id="quote-form">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre y apellido */}
              {/* ... Los otros inputs siguen igual ... */}

              {/* Ciudad - AHORA SELECT */}
              <motion.div
                variants={formFieldVariants}
                className="relative md:col-span-2"
              >
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  </motion.div>

                  <select
                    name="ciudad"
                    defaultValue={state.values?.ciudad || ""}
                    className="flex-1 bg-black text-white focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Selecciona tu ciudad
                    </option>
                    {ciudades.map((city) => (
                      <option
                        key={city}
                        value={city} // valor que se envía
                        className="bg-black text-white"
                      >
                        {city
                          .replace(/_/g, " ")
                          .split(" ")
                          .map(
                            (w) =>
                              w.charAt(0).toUpperCase() +
                              w.slice(1).toLowerCase()
                          )
                          .join(" ")}
                      </option>
                    ))}
                  </select>
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
            </div>

            {/* Hidden input for selectedModel */}
            <input
              type="hidden"
              name="selectedModel"
              value={state.values?.selectedModel || currentModel || ""}
            />

            {/* Model Selection */}
            {/* ... tu bloque de selección de modelos queda igual ... */}

            {/* Submit Button */}
            {/* ... tu botón queda igual ... */}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
