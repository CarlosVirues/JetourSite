"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    ciudad: "",
    asunto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: null, message: "" });

    try {
      const payload = {
        ...formData,
        webhook: "ca8f540qm19akr16s80rd083", // tu clave webhook
      };

      const res = await fetch("https://crm.jacecuador.com/slt_crm/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({
          success: true,
          message: "Formulario enviado correctamente ✅",
        });
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          ciudad: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (err) {
      setStatus({ success: false, message: err.message || "Error inesperado" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-5xl font-bold text-white mb-10 text-center"
        >
          Contáctanos
        </motion.h2>

        {/* Mensaje de estado */}
        {status.message && (
          <div
            className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${
              status.success
                ? "bg-green-500/10 border border-green-500 text-green-400"
                : "bg-red-500/10 border border-red-500 text-red-400"
            }`}
          >
            {status.success ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p>{status.message}</p>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="flex items-center border-b border-blue-500 pb-2">
            <User className="w-5 h-5 text-blue-500 mr-3" />
            <input
              type="text"
              name="full_name"
              placeholder="Nombre y apellido"
              value={formData.full_name}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-blue-500 pb-2">
            <Mail className="w-5 h-5 text-blue-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Teléfono */}
          <div className="flex items-center border-b border-blue-500 pb-2">
            <Phone className="w-5 h-5 text-blue-500 mr-3" />
            <input
              type="tel"
              name="phone_number"
              placeholder="Número de teléfono"
              value={formData.phone_number}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Ciudad */}
          <div className="flex items-center border-b border-blue-500 pb-2">
            <MapPin className="w-5 h-5 text-blue-500 mr-3" />
            <select
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="flex-1 bg-black text-white focus:outline-none"
              required
            >
              <option value="" disabled>
                Selecciona tu ciudad
              </option>
              {ciudades.map((city) => (
                <option key={city} value={city} className="bg-black text-white">
                  {city
                    .replace(/_/g, " ")
                    .split(" ")
                    .map(
                      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </option>
              ))}
            </select>
          </div>

          {/* Asunto */}
          <div className="flex items-center border-b border-blue-500 pb-2">
            <MessageSquare className="w-5 h-5 text-blue-500 mr-3" />
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="border-b border-blue-500 pb-2 flex items-start">
            <MessageSquare className="w-5 h-5 text-blue-500 mr-3 mt-2" />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
              rows="4"
              required
            />
          </div>

          {/* Botón */}
          <div className="text-center mt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
