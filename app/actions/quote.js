"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

// Zod schema for quote form validation
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
  // Convert FormData to object using Object.fromEntries
  const data = Object.fromEntries(formData.entries());

  // Validate with Zod
  const validatedData = quoteSchema.safeParse(data);

  if (!validatedData.success) {
    // Return flattened errors for each field and preserve form values
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Existen errores en el formulario",
      success: false,
      values: data, // Return the submitted values to preserve them
    };
  }

  try {
    // Save to database
    await prisma.quote.create({
      data: validatedData.data,
    });
  } catch (error) {
    console.error("Error submitting quote form:", error);
    return {
      errors: {},
      message: "Error interno del servidor. Intenta nuevamente.",
      success: false,
      values: data, // Return the submitted values to preserve them
    };
  }

  // Construir payload para CRM
  const crmPayload = {
    full_name: validatedData.data.nombre,
    email: validatedData.data.mail,
    phone_number: validatedData.data.celular,
    ci: validatedData.data.cedula,
    ciudad: validatedData.data.ciudad,
    modelo_jetour: validatedData.data.selectedModel,
    source: validatedData.data.s,
    webhook: "3gsucehc5964ebuy3ttxlblx", // el webhook del CRM
  };

  // Enviar a CRM y Zapier en paralelo
  try {
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
          timestamp: new Date().toISOString(),
        }),
      }),
    ]);

    if (!crmResponse.ok) {
      console.error("Error enviando datos al CRM:", await crmResponse.text());
    }
    if (!zapierResponse.ok) {
      console.error(
        "Error enviando datos a Zapier:",
        await zapierResponse.text()
      );
    }
  } catch (webhookError) {
    console.error("Error en envío a CRM/Zapier:", webhookError);
  }
await fetch("https://www.googletagmanager.com/collect", {
  method: "POST",
  body: JSON.stringify({ event: "QuoteForm" }),
});
  redirect("/gracias#quote-form");
}
