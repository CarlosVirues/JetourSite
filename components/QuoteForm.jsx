"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { submitQuoteForm } from "@/app/actions/quote"; // ajusta la ruta si difiere

// (opcional) tus imports de UI/iconos/animaciones…

const initialState = { errors: {}, message: null, success: false, values: {} };

export default function QuoteForm({ currentModel = null, source = "" }) {
  const [state, formAction] = useFormState(submitQuoteForm, initialState);

  // Redirección real desde el cliente cuando se complete con éxito
  useEffect(() => {
    if (state?.success) {
      window.location.href = "/gracias#quote-form"; // o "/gracias"
    }
  }, [state?.success]);

  const carModels = [
    { id: "x50", name: "X50" },
    { id: "x70-sport", name: "X70 Sport" },
    { id: "x70-plus", name: "X70 Plus" },
    { id: "dashing", name: "Dashing" },
    { id: "t1", name: "T1" },
    { id: "t2", name: "T2" },
    { id: "t2-phev", name: "T2 PHEV" },
  ];

  const ciudades = [
    "ambato","cuenca","guayaquil","guayaquil_samborondon","ibarra","latacunga","loja","macas",
    "machala","manta","quito_norte","quito_sur","quito_cumbaya_tumbaco","quito_sangolqui","riobamba","santo_domingo",
  ];

  return (
    <form action={formAction} noValidate className="space-y-6" id="quote-form">
      {/* Nombre */}
      <div>
        <input
          name="nombre"
          placeholder="Nombre y apellido"
          defaultValue={state.values?.nombre || ""}
          required
          className="w-full"
        />
        {state.errors?.nombre && <p className="text-red-500 text-sm">{state.errors.nombre[0]}</p>}
      </div>

      {/* Celular */}
      <div>
        <input
          name="celular"
          placeholder="Celular"
          defaultValue={state.values?.celular || ""}
          required
          className="w-full"
        />
        {state.errors?.celular && <p className="text-red-500 text-sm">{state.errors.celular[0]}</p>}
      </div>

      {/* Mail */}
      <div>
        <input
          type="email"
          name="mail"
          placeholder="Email"
          defaultValue={state.values?.mail || ""}
          required
          className="w-full"
        />
        {state.errors?.mail && <p className="text-red-500 text-sm">{state.errors.mail[0]}</p>}
      </div>

      {/* Cédula */}
      <div>
        <input
          name="cedula"
          placeholder="Cédula"
          defaultValue={state.values?.cedula || ""}
          required
          className="w-full"
        />
        {state.errors?.cedula && <p className="text-red-500 text-sm">{state.errors.cedula[0]}</p>}
      </div>

      {/* Ciudad */}
      <div>
        <select
          name="ciudad"
          defaultValue={state.values?.ciudad || ""}
          required
          className="w-full"
        >
          <option value="">Selecciona el concesionario más cercano</option>
          {ciudades.map((city) => (
            <option key={city} value={city}>
              {city.replace(/_/g, " ").split(" ").map(w => w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" ")}
            </option>
          ))}
        </select>
        {state.errors?.ciudad && <p className="text-red-500 text-sm">{state.errors.ciudad[0]}</p>}
      </div>

      {/* Vehículo / Modelo */}
      {currentModel ? (
        // Si ya viene preseleccionado, mandamos selectedModel oculto
        <input type="hidden" name="selectedModel" value={state.values?.selectedModel || currentModel} />
      ) : (
        // Caso contrario, mostramos un select "vehiculo"
        <div>
          <select
            name="vehiculo"
            defaultValue={state.values?.vehiculo || ""}
            required
            className="w-full"
          >
            <option value="">Selecciona un modelo</option>
            {carModels.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          {/* El mensaje de validación apunta a selectedModel por el refine */}
          {state.errors?.selectedModel && (
            <p className="text-red-500 text-sm">{state.errors.selectedModel[0]}</p>
          )}
        </div>
      )}

      {/* Fuente */}
      <input type="hidden" name="source" value={source || state.values?.source || ""} />

      {/* Mensaje general */}
      {!!state.message && !state.success && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}

      {/* Submit */}
      <button type="submit" className="px-4 py-2 rounded bg-black text-white">
        Enviar
      </button>
    </form>
  );
}
