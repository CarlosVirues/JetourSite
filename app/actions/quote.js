"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const quoteSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  celular: z.string().min(10, "El celular debe tener al menos 10 dígitos"),
  mail: z.string().email("Ingresa un email válido"),
  cedula: z.string().min(6, "La cédula debe tener al menos 6 caracteres"),
  ciudad: z.string().min(2, "La ciudad debe ser alguna de la lista"),
  selectedModel: z.string().min(1, "Debes seleccionar un modelo"),
  source: z.string().min(1, "Debes seleccionar una fuente"),
});

export async function submitQuoteForm(prevState, formData) {
  const data = Object.fromEntries(formData.entries());

  const validatedData = quoteSchema.safeParse(data);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Existen errores en el formulario",
      success: false,
      values: data,
    };
  }

  // 1) Guarda en BD
  try {
    await prisma.quote.create({
      data: validatedData.data,
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

  // 2) Payload CRM (⚠️ corregido: source)
  const crmPayload = {
    full_name: validatedData.data.nombre,
    email: validatedData.data.mail,
    phone_number: validatedData.data.celular,
    ci: validatedData.data.cedula,
    ciudad: validatedData.data.ciudad,
    modelo_jetour: validatedData.data.selectedModel,
    source: validatedData.data.source, // <- antes estaba .s
    webhook: "3gsucehc5964ebuy3ttxlblx",
  };

  // 3) Envíos externos (no bloqueamos UX si fallan)
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
          ...validatedData.data,
          formType: "quote",
          timestamp: new Date().toISOString(),
        }),
        // @ts-ignore
        cache: "no-store",
      }),
    ]);

    if (!crmResponse.ok) {
      console.error("CRM error:", crmResponse.status, await crmResponse.text());
    }
    if (!zapierResponse.ok) {
      console.error("Zapier error:", zapierResponse.status, await zapierResponse.text());
    }
  } catch (webhookError) {
    console.error("Error en envío a CRM/Zapier:", webhookError);
  }

  // 4) Nada de redirect aquí: devolvemos éxito y el CLIENTE navega
  return {
    errors: {},
    message: "OK",
    success: true,
    values: validatedData.data,
  };
}
