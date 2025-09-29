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

  return (
    <motion.div className="border border-blue-500 p-8 rounded-lg">
      <motion.h3 className="text-2xl font-bold text-white mb-6">
        ¡Ponte en <span className="font-bold">contacto!</span>
      </motion.h3>

      {/* Mensaje de éxito/error */}
      {state.message && (
        <div
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
        </div>
      )}

      <form action={action} noValidate className="space-y-6">
        {/* Nombre */}
        <div className="flex items-center border-b border-blue-500 pb-2">
          <User className="w-5 h-5 text-blue-500 mr-3" />
          <Input
            type="text"
            name="nombre"
            defaultValue={state.values?.nombre || ""}
            placeholder="Nombre y apellido"
            className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center border-b border-blue-500 pb-2">
          <Mail className="w-5 h-5 text-blue-500 mr-3" />
          <Input
            type="email"
            name="email"
            defaultValue={state.values?.email || ""}
            placeholder="Correo electrónico"
            className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
            required
          />
        </div>

        {/* Teléfono */}
        <div className="flex items-center border-b border-blue-500 pb-2">
          <Phone className="w-5 h-5 text-blue-500 mr-3" />
          <Input
            type="tel"
            name="telefono"
            defaultValue={state.values?.telefono || ""}
            placeholder="Teléfono"
            className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0"
            required
          />
        </div>

        {/* Ciudad con SELECT */}
        <div className="flex items-center border-b border-blue-500 pb-2">
          <MapPin className="w-5 h-5 text-blue-500 mr-3" />
          <select
            name="ciudad"
            defaultValue={state.values?.ciudad || ""}
            className="flex-1 bg-black text-white focus:outline-none text-sm"
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
          <ChevronDown className="w-5 h-5 text-blue-500 mr-3" />
          <select
            name="asunto"
            defaultValue={state.values?.asunto || ""}
            className="bg-transparent border-none text-white focus:ring-0 focus:border-none p-0 w-full appearance-none cursor-pointer text-sm"
            required
          >
            <option value="" disabled>
              Selecciona un asunto
            </option>
            <option value="Modelos">Modelos</option>
            <option value="Talleres">Talleres</option>
            <option value="Concesionarios">Concesionarios</option>
          </select>
        </div>

        {/* Mensaje */}
        <div className="flex items-start border-b border-blue-500 pb-2">
          <MessageCircle className="w-5 h-5 text-blue-500 mr-3 mt-2" />
          <Textarea
            name="mensaje"
            defaultValue={state.values?.mensaje || ""}
            placeholder="Mensaje"
            className="bg-transparent border-none text-white placeholder:text-gray-300 focus:ring-0 focus:border-none p-0 resize-none min-h-[80px]"
            required
          />
        </div>

        {/* Botón */}
        <div className="text-center">
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
        </div>
      </form>
    </motion.div>
  );
}
