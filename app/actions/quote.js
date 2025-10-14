"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

// Validación Zod
const quoteSchema = z
  .object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    celular: z.string().min(10, "El celular debe tener al menos 10 dígitos"),
    mail: z.string().email("Ingresa un email válido"),
    cedula: z.string().min(6, "La cédula debe tener al menos 6 caracteres"),
    ciudad: z.string().min(2, "La ciudad debe ser alguna de la lista"),
    selectedModel: z.string().optional(),
    vehiculo: z.string().optional(),
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

  const modelo = validated.data.selectedModel ?? validated.data.vehiculo;

  // Guardar en BD
  try {
    await prisma.quote.create({
      data: {
        ...validated.data,
        selectedModel: modelo,
      },
    });
  } catch (error) {
    console.error("❌ Error guardando en BD:", error);
    return {
      errors: {},
      message: "Error interno del servidor. Intenta nuevamente.",
      success: false,
      values: data,
    };
  }

  // Payload para CRM
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

  // Envíos paralelos a CRM + Zapier
  try {
    await Promise.all([
      fetch("https://crm.jacecuador.com/slt_crm/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      }),
      fetch("https://hooks.zapier.com/hooks/catch/3497280/uhtax59/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validated.data,
          selectedModel: modelo,
          formType: "quote",
          timestamp: new Date().toISOString(),
        }),
      }),
    ]);
  } catch (err) {
    console.error("⚠️ Error en envío a CRM/Zapier:", err);
  }

  // No redirect: el cliente redirige
  return {
    errors: {},
    message: "OK",
    success: true,
    values: { ...validated.data, selectedModel: modelo },
  };
}
