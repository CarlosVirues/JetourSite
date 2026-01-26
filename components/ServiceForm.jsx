"use client";

import { useFormState } from "react-dom";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Car,
  Wrench,
  Hash,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Default stub action to keep the component functional until the server action is wired
async function defaultServiceAction(prevState, formData) {
  return {
    errors: {},
    message: "",
    success: false,
    values: Object.fromEntries(formData.entries()),
  };
}

export default function ServiceForm({
  action = defaultServiceAction,
  success = false,
}) {
  const [state, formAction, isPending] = useActionState(action, {
    errors: {},
    message: "",
    success: false,
    values: {},
  });

  if (state?.redirectTo) {
    window.location.href = state.redirectTo;
  }

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

  const modelos = [
    "x50",
    "x70-plus",
    "x70-sport",
    "dashing",
    "t1",
    "t1-phev",
    "t2",
    "t2-phev",
    "g700",
    
  ];

  const tiposServicio = [
    "Mantenimiento Preventivo",
    "Mantenimiento Correctivo",
    "Garantía",
    "Pintura y Latonería",
    "Otros",
  ];

  if (success) {
    return (
      <div>
        <motion.div className="border border-blue-500 p-8 rounded-lg text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Gracias por tu envío!
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            Hemos recibido tu solicitud de servicio. Nos pondremos en contacto
            contigo a la brevedad para confirmar los detalles de tu servicio.
          </p>
          <p className="text-sm text-gray-400">
            Puedes cerrar esta ventana o navegar a otra sección.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    
    <motion.div className="border border-blue-500 p-8 rounded-lg">
      <motion.h3 className="text-2xl font-bold text-white mb-6">
        Servicio de <span className="font-bold">posventa</span>
      </motion.h3>

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

      <form action={formAction} noValidate className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-white text-sm font-medium mb-2">
            Nombre y Apellido
          </label>
          <div
            className={`flex items-center border-b pb-2 ${
              state.errors?.nombre ? "border-red-500" : "border-blue-500"
            }`}
          >
            <User
              className={`w-5 h-5 mr-3 ${
                state.errors?.nombre ? "text-red-500" : "text-blue-500"
              }`}
            />
            <Input
              type="text"
              id="nombre"
              name="nombre"
              defaultValue={state.values?.nombre || ""}
              placeholder="Ej: Juan Pérez"
              className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.nombre && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.nombre[0]}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Correo Electrónico
          </label>
          <div
            className={`flex items-center border-b pb-2 ${
              state.errors?.email ? "border-red-500" : "border-blue-500"
            }`}
          >
            <Mail
              className={`w-5 h-5 mr-3 ${
                state.errors?.email ? "text-red-500" : "text-blue-500"
              }`}
            />
            <Input
              type="email"
              id="email"
              name="email"
              defaultValue={state.values?.email || ""}
              placeholder="Ej: correo@ejemplo.com"
              className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.email && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.email[0]}
            </p>
          )}
        </div>

         {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-white text-sm font-medium mb-2">
            Teléfono
          </label>
          <div
            className={`flex items-center border-b pb-2 ${
              state.errors?.telefono ? "border-red-500" : "border-blue-500"
            }`}
          >
            <Phone
              className={`w-5 h-5 mr-3 ${
                state.errors?.telefono ? "text-red-500" : "text-blue-500"
              }`}
            />
            <Input
              type="tel"
              id="telefono"
              name="telefono"
              defaultValue={state.values?.telefono || ""}
              placeholder="Ej: 0991234567"
              className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.telefono && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.telefono[0]}
            </p>
          )}
        </div>

        {/* Cédula / RUC */}
        <div>
          <label htmlFor="cedulaRuc" className="block text-white text-sm font-medium mb-2">
            Cédula o RUC
          </label>
          <div
            className={`flex items-center border-b pb-2 ${
              state.errors?.cedulaRuc ? "border-red-500" : "border-blue-500"
            }`}
          >
            <CreditCard
              className={`w-5 h-5 mr-3 ${
                state.errors?.cedulaRuc ? "text-red-500" : "text-blue-500"
              }`}
            />
            <Input
              type="text"
              id="cedulaRuc"
              name="cedulaRuc"
              defaultValue={state.values?.cedulaRuc || ""}
              placeholder="Ej: 0123456789 o 1234567890001"
              className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.cedulaRuc && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.cedulaRuc[0]}
            </p>
          )}
        </div>

        {/* Ciudad */}
        <div>
          <div
            className={`flex items-center border-b py-2 ${
              state.errors?.ciudad ? "border-red-500" : "border-blue-500"
            }`}
          >
            <MapPin
              className={`w-5 h-5 mr-3 ${
                state.errors?.ciudad ? "text-red-500" : "text-blue-500"
              }`}
            />
            <select
              key={state.values?.ciudad || ""}
              name="ciudad"
              defaultValue={state.values?.ciudad || ""}
              className="flex-1 bg-black text-white focus:outline-none text-sm"
              required
            >
              <option value="">Selecciona tu ciudad</option>
              {ciudades.map((city) => (
                <option key={city} value={city} className="bg-black text-white">
                  {city
                    .replace(/_/g, " ")
                    .split(" ")
                    .map(
                      (w) =>
                        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </option>
              ))}
            </select>
          </div>
          {state.errors?.ciudad && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.ciudad[0]}
            </p>
          )}
        </div>

        {/* Modelo */}
        <div>
          <div
            className={`flex items-center border-b py-2 ${
              state.errors?.modelo ? "border-red-500" : "border-blue-500"
            }`}
          >
            <Car
              className={`w-5 h-5 mr-3 ${
                state.errors?.modelo ? "text-red-500" : "text-blue-500"
              }`}
            />
            <select
              key={state.values?.modelo || ""}
              name="modelo"
              defaultValue={state.values?.modelo || ""}
              className="flex-1 bg-black text-white focus:outline-none text-sm"
              required
            >
              <option value="">Selecciona tu modelo</option>
              {modelos.map((m) => (
                <option key={m} value={m} className="bg-black text-white">
                  {m
                    .replace(/_/g, " ")
                    .split(" ")
                    .map(
                      (w) =>
                        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </option>
              ))}
            </select>
          </div>
          {state.errors?.modelo && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.modelo[0]}
            </p>
          )}
        </div>

        {/* Placa */}
        <div>
          <label htmlFor="placa" className="block text-white text-sm font-medium mb-2">
            Placa del Vehículo
          </label>
          <div
            className={`flex items-center border-b pb-2 ${
              state.errors?.placa ? "border-red-500" : "border-blue-500"
            }`}
          >
            <Hash
              className={`w-5 h-5 mr-3 ${
                state.errors?.placa ? "text-red-500" : "text-blue-500"
              }`}
            />
            <Input
              type="text"
              id="placa"
              name="placa"
              defaultValue={state.values?.placa || ""}
              placeholder="Ej: ABC-1234"
              className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:border-none p-0"
              required
            />
          </div>
          {state.errors?.placa && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.placa[0]}
            </p>
          )}
        </div>

        {/* Tipo de servicio de taller */}
        <div>
          <div
            className={`flex items-center border-b py-2 ${
              state.errors?.tipoServicioTaller
                ? "border-red-500"
                : "border-blue-500"
            }`}
          >
            <Wrench
              className={`w-5 h-5 mr-3 ${
                state.errors?.tipoServicioTaller
                  ? "text-red-500"
                  : "text-blue-500"
              }`}
            />
            <select
              key={state.values?.tipoServicioTaller || ""}
              name="tipoServicioTaller"
              defaultValue={state.values?.tipoServicioTaller || ""}
              className="flex-1 bg-black text-white focus:outline-none text-sm"
              required
            >
              <option value="">Selecciona el tipo de servicio</option>
              {tiposServicio.map((t) => (
                <option key={t} value={t} className="bg-black text-white">
    {t}
  </option>
              ))}
            </select>
          </div>
          {state.errors?.tipoServicioTaller && (
            <p className="text-red-400 text-sm mt-1 ml-8">
              {state.errors.tipoServicioTaller[0]}
            </p>
          )}
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
