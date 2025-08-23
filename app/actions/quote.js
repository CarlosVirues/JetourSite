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
  ciudad: z.string().min(2, "La ciudad debe tener al menos 2 caracteres"),
  selectedModel: z.string().min(1, "Debes seleccionar un modelo"),
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

  // Redirect to thank you page on success (outside try/catch)
  redirect("/gracias#quote-form");
}
