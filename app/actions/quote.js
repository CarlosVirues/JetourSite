"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
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

  // Payload CRM
  const crmPayload = {
    full_name: validatedData.data.nombre,
    email: validatedData.data.mail,
    phone_number: validatedData.data.celular,
    ci: validatedData.data.cedula,
    ciudad: validatedData.data.ciudad,
    modelo_jetour: validatedData.data.selectedModel,
    source: validatedData.data.source,
    webhook: "3gsucehc5964ebuy3ttxlblx",
  };

  try {
    // Enviar a CRM y Zapier en paralelo
    const [crmResponse, zapierResponse] = await Promise.all([
      fetch("https://crm.jacecuador.com/slt_crm/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      }),
      fetch("https://hooks.zapier.com/hooks/catch/3497280/uhtax59/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validatedData.data,
          formType: "quote",
          testMode: true, // 👈 para identificar la prueba en Zapier
          timestamp: new Date().toISOString(),
        }),
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

  window.location.href = ("/gracias#quote-form");
}