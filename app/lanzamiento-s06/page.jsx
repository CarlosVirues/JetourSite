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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { submitQuoteForm } from "@/app/actions/quote";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function LanzamientoS06Page() {
  const [state, action, isPending] = useActionState(submitQuoteForm, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

  if (state?.redirectTo) {
    window.location.href = state.redirectTo;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[260px] aspect-[1920/750] max-h-[80vh] overflow-hidden">
        <Image
          src="/bg-lanzamiento-s06.jpg"
          alt="Lanzamiento JETOUR S06"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* Form Section */}
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
              className="text-3xl lg:text-5xl font-bold text-white mb-4"
            >
              Regístrate para el lanzamiento
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Sé el primero en conocer el nuevo híbrido S06
            </motion.p>
          </motion.div>

          {/* Success / Error Message */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre y Apellido */}
                <motion.div variants={formFieldVariants} className="relative">
                  <label
                    htmlFor="nombre"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Nombre y Apellido
                  </label>
                  <div className="flex items-center border-b border-blue-500 pb-2">
                    <User className="w-5 h-5 text-blue-500 mr-3" />
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      defaultValue={state.values?.nombre || ""}
                      placeholder="Ej: Juan Pérez"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
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
                  <label
                    htmlFor="celular"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Celular
                  </label>
                  <div className="flex items-center border-b border-blue-500 pb-2">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <input
                      type="tel"
                      id="celular"
                      name="celular"
                      defaultValue={state.values?.celular || ""}
                      placeholder="Ej: 0991234567"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
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

                {/* Correo Electrónico */}
                <motion.div variants={formFieldVariants} className="relative">
                  <label
                    htmlFor="mail"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <div className="flex items-center border-b border-blue-500 pb-2">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      defaultValue={state.values?.mail || ""}
                      placeholder="Ej: correo@ejemplo.com"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
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
                  <label
                    htmlFor="cedula"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Cédula
                  </label>
                  <div className="flex items-center border-b border-blue-500 pb-2">
                    <CreditCard className="w-5 h-5 text-blue-500 mr-3" />
                    <input
                      type="text"
                      id="cedula"
                      name="cedula"
                      defaultValue={state.values?.cedula || ""}
                      placeholder="Ej: 0123456789"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
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

                {/* Concesionario */}
                <motion.div
                  variants={formFieldVariants}
                  className="relative md:col-span-2"
                >
                  <label
                    htmlFor="ciudad"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Concesionario
                  </label>
                  <div className="flex items-center border-b border-blue-500 pb-2">
                    <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                    <select
                      key={state.values?.ciudad || ""}
                      id="ciudad"
                      name="ciudad"
                      defaultValue={state.values?.ciudad || ""}
                      className="flex-1 bg-black text-white focus:outline-none w-full"
                      required
                    >
                      <option value="">Seleccionar</option>
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

              {/* Hidden fields — hardcoded, not shown in UI */}
              <input type="hidden" name="selectedModel" value="s06" />
              <input type="hidden" name="source" value="lanzamiento-s06" />

              {/* Submit */}
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
                  {isPending ? "Enviando..." : "Registrarme"}
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

      <Footer />
    </div>
  );
}
