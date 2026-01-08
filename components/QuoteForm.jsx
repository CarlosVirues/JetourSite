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

export default function QuoteForm({ currentModel = null, source = null }) {
  const [state, action, isPending] = useActionState(submitQuoteForm, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

  if (state?.redirectTo) {
    window.location.href = state.redirectTo;
  }

  const carModels = [
    { id: "x50", name: "X50", image: "/mini/mini-x50.png" },
    { id: "x50-at", name: "X50 AT", image: "/mini/mini-x50-at.png" },
    { id: "x70-at-sport", name: "X70 AT Sport", image: "/mini/mini-x70-at-sport.png" },
    { id: "x70-sport", name: "X70 Sport", image: "/mini/mini-x70-sport.png" },
    { id: "x70-plus", name: "X70 Plus", image: "/mini/mini-x70-plus.png" },
    { id: "dashing", name: "Dashing", image: "/mini/mini-dashing.png" },
    { id: "t1", name: "T1", image: "/mini/mini-t1.png" },
    { id: "t1-phev", name: "T1 PHEV", image: "/mini/mini-t1-phev.png" },
    { id: "t2", name: "T2", image: "/mini/mini-t2.png" },
    { id: "t2-phev", name: "T2 PHEV", image: "/mini/mini-t2-phev.png" },
  ];

  // Lista de ciudades desde tu Excel (tal cual se deben enviar)
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const modelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
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
          <form
            action={action}
            noValidate
            className="space-y-6"
            id="quote-form"
          >
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre y apellido */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <User className="w-5 h-5 text-blue-500 mr-3" />
                  <input
                    type="text"
                    name="nombre"
                    defaultValue={state.values?.nombre || ""}
                    placeholder="Nombre y apellido"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                {state.errors?.nombre && (
                  <motion.p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {state.errors.nombre[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Celular */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <Phone className="w-5 h-5 text-blue-500 mr-3" />
                  <input
                    type="tel"
                    name="celular"
                    defaultValue={state.values?.celular || ""}
                    placeholder="Celular"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                {state.errors?.celular && (
                  <motion.p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {state.errors.celular[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Mail */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <input
                    type="email"
                    name="mail"
                    defaultValue={state.values?.mail || ""}
                    placeholder="Mail"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                {state.errors?.mail && (
                  <motion.p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {state.errors.mail[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Cédula */}
              <motion.div variants={formFieldVariants} className="relative">
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <CreditCard className="w-5 h-5 text-blue-500 mr-3" />
                  <input
                    type="text"
                    name="cedula"
                    defaultValue={state.values?.cedula || ""}
                    placeholder="Cédula"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                {state.errors?.cedula && (
                  <motion.p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {state.errors.cedula[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Ciudad */}
              <motion.div
                variants={formFieldVariants}
                className="relative md:col-span-2"
              >
                <div className="flex items-center border-b border-blue-500 pb-2">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />

                  <select
                    key={state.values?.ciudad || ""}
                    name="ciudad"
                    defaultValue={state.values?.ciudad || ""}
                    className="flex-1 bg-black text-white focus:outline-none"
                    required
                  >
                    <option value="">
                      Selecciona el concesionario mas cercano
                    </option>
                    {ciudades.map((city) => (
                      <option
                        key={city}
                        value={city}
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
                  <motion.p className="text-red-400 text-sm mt-1 flex items-center gap-1">
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
                      onClick={(e) => {
                        const hiddenInput = e.target
                          .closest("form")
                          .querySelector('input[name="selectedModel"]');
                        hiddenInput.value = model.id;
                        const allButtons = e.target
                          .closest(".grid")
                          .querySelectorAll("button");
                        allButtons.forEach((btn) => {
                          btn.classList.remove(
                            "border-blue-500",
                            "bg-blue-500/10"
                          );
                          btn.classList.add("border-gray-600");
                        });
                        e.target
                          .closest("button")
                          .classList.remove("border-gray-600");
                        e.target
                          .closest("button")
                          .classList.add("border-blue-500", "bg-blue-500/10");
                      }}
                      className={`w-full aspect-square rounded-lg border-2 transition-all duration-300 ${
                        (state.values?.selectedModel || currentModel) ===
                        model.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-gray-600 hover:border-gray-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="relative w-12 h-12 mx-auto mb-px">
                            <Image
                              src={model.image}
                              alt={model.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 64px, 96px"
                            />
                          </div>
                          <p className="text-xs text-white font-medium">
                            {model.name}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
              {state.errors?.selectedModel && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {state.errors.selectedModel[0]}
                </motion.p>
              )}
            </motion.div>

            <input type="hidden" name="source" value={source || ""} />

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="mt-8 text-center">
              <motion.button
                type="submit"
                disabled={isPending}
                className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isPending ? "Enviando..." : "Cotizar ahora"}
                {!isPending && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
