"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const quoteSchema = z
  .object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    celular: z.string().min(10, "El celular debe tener al menos 10 dígitos"),
    mail: z.string().email("Ingresa un email válido"),
    cedula: z.string().min(6, "La cédula debe tener al menos 6 caracteres"),
    ciudad: z.string().min(2, "La ciudad debe ser alguna de la lista"),
    // Permitimos cualquiera de los dos (vehiculo o selectedModel)
    selectedModel: z.string().min(1).optional(),
    vehiculo: z.string().min(1).optional(),
    source: z.string().min(1, "Debes seleccionar una fuente"),
  })
  .refine((d) => !!(d.selectedModel || d.vehiculo), {
    message: "Debes seleccionar un vehículo",
    path: ["selectedModel"],
  });

export async function submitQuoteForm(prevState, formData) {
  const data = Object.fromEntries(formData.entries());
  const validated = quoteSchema.safeParse(data);

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: "Existen errores en el formulario",
      success: false,
      values: data,
    };
  }

  // Normalizamos: si viene 'vehiculo', lo usamos como 'selectedModel'
  const modelo = validated.data.selectedModel ?? validated.data.vehiculo;

  // 1) Guardar en BD
  try {
    await prisma.quote.create({
      data: {
        ...validated.data,
        selectedModel: modelo,
      },
    });
  } catch (error) {
    console.error("Error guardando en BD:", error);
    return {
      errors: {},
      message: "Error interno del servidor. Intenta nuevamente.",
      success: false,
      values: data,
    };
  }

  // 2) Payload CRM
  const crmPayload = {
    full_name: validated.data.nombre,
    email: validated.data.mail,
    phone_number: validated.data.celular,
    ci: validated.data.cedula,
    ciudad: validated.data.ciudad,
    modelo_jetour: modelo,
    source: validated.data.source,
    webhook: "3gsucehc5964ebuy3ttxlblx",
  };

  // 3) Enviar a CRM y Zapier en paralelo (sin romper UX si fallan)
  try {
    const [crmResponse, zapierResponse] = await Promise.all([
      fetch("https://crm.jacecuador.com/slt_crm/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
        // @ts-ignore
        cache: "no-store",
      }),
      fetch("https://hooks.zapier.com/hooks/catch/3497280/uhtax59/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validated.data,
          selectedModel: modelo, // también normalizado
          formType: "quote",
          timestamp: new Date().toISOString(),
        }),
        // @ts-ignore
        cache: "no-store",
      }),
    ]);

    if (!crmResponse.ok) {
      console.error("CRM error:", crmResponse.status, await crmResponse.text());
    } else {
      console.log("✅ CRM recibió los datos");
    }

    if (!zapierResponse.ok) {
      console.error("Zapier error:", zapierResponse.status, await zapierResponse.text());
    } else {
      console.log("✅ Zapier recibió los datos");
    }
  } catch (err) {
    console.error("Error en envío a CRM/Zapier:", err);
  }

  // 4) Sin redirect aquí: el cliente hará window.location.href
  return {
    errors: {},
    message: "OK",
    success: true,
    values: { ...validated.data, selectedModel: modelo },
  };
}
