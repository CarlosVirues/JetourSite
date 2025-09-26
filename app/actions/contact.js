"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

// Zod schema for contact form validation
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  ciudad: z.string().min(2, "La ciudad debe tener al menos 2 caracteres"),
  asunto: z.enum(["Modelos", "Talleres", "Concesionarios"], {
    errorMap: () => ({ message: "Selecciona una opción válida" }),
  }),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function submitContactForm(prevState, formData) {
  // Convert FormData to object using Object.entries
  const data = Object.fromEntries(formData.entries());

  // Validate with Zod
  const validatedData = contactSchema.safeParse(data);

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
    await prisma.contact.create({
      data: validatedData.data,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      errors: {},
      message: "Error interno del servidor. Intenta nuevamente.",
      success: false,
      values: data, // Return the submitted values to preserve them
    };
  }

  // Send data to Zapier webhook (separate from database operation)
  try {
    await fetch("https://hooks.zapier.com/hooks/catch/3497280/uhtw0kh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...validatedData.data,
        formType: "contact",
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (webhookError) {
    // Log webhook error but don't fail the entire process
    console.error("Error sending data to webhook:", webhookError);
  }

  // Redirect to thank you page on success (outside try/catch)
  redirect("/contacto/gracias#contact-form");
}
