"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  cedula: z
    .string()
    .length(10, "La cédula debe tener exactamente 10 dígitos")
    .regex(/^\d{10}$/, "La cédula debe contener solo números"),
  ciudad: z.string().min(2, "La ciudad debe ser alguna de la lista"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function submitContactForm(prevState, formData) {
  const data = Object.fromEntries(formData.entries());

  const validatedData = contactSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Existen errores en el formulario",
      success: false,
      values: data,
    };
  }

  const cleanData = validatedData.data;

  try {
    // Guardar en la base de datos
    await prisma.contact.create({ data: cleanData });
  } catch (error) {
    console.error("Error guardando en BD:", error);
    return {
      errors: {},
      message: "Error interno del servidor. Intenta nuevamente.",
      success: false,
      values: data,
    };
  }

  // Enviar a Zapier
  try {
    await fetch("https://hooks.zapier.com/hooks/catch/3497280/uhtw0kh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...cleanData,
        formType: "contact",
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("Error enviando a Zapier:", err);
  }

  // Enviar al CRM
  try {
    await fetch("https://crm.jacecuador.com/slt_crm/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: cleanData.nombre,
        email: cleanData.email,
        phone_number: cleanData.telefono,
        ci: cleanData.cedula,
        ciudad: cleanData.ciudad,
        mensaje: cleanData.mensaje,
        webhook: "ca8f540qm19akr16s80rd083",
      }),
    });
  } catch (err) {
    console.error("Error enviando a CRM:", err);
  }

  redirect("/contacto/gracias#contact-form");
}
