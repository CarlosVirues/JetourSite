"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const tiposServicioEnum = [
  "Mantenimiento Preventivo",
  "Mantenimiento Correctivo",
  "Garantía",
  "Pintura y Latonería",
  "Otros",
];

const serviceSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 dígitos"),
  cedulaRuc: z
    .string()
    .regex(/^\d{10,13}$/, "Ingrese una cédula/RUC de 10 a 13 dígitos"),
  ciudad: z.string().min(2, "La ciudad debe ser alguna de la lista"),
  modelo: z.string().min(2, "El modelo debe ser alguno de la lista"),
  placa: z.string().regex(/^[A-Z0-9-]{5,10}$/i, "Ingrese una placa válida"),
  tipoServicioTaller: z.enum(tiposServicioEnum, {
    errorMap: () => ({ message: "Seleccione un tipo de servicio válido" }),
  }),
});

export async function submitServiceForm(prevState, formData) {
  const data = Object.fromEntries(formData.entries());

  const validated = serviceSchema.safeParse(data);
  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: "Existen errores en el formulario",
      success: false,
      values: data,
    };
  }

  const clean = validated.data;

  // Guardar en la base de datos
  try {
    await prisma.serviceSubmission.create({
      data: {
        nombre: clean.nombre,
        ciudad: clean.ciudad,
        telefono: clean.telefono,
        cedulaRuc: clean.cedulaRuc,
        modelo: clean.modelo,
        email: clean.email,
        placa: clean.placa,
        tipoServicioTaller: clean.tipoServicioTaller,
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

  // Enviar a Zapier
  try {
    const zapierRes = await fetch("https://hooks.zapier.com/hooks/catch/3497280/uigvjjf/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...clean,
        formType: "service",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!zapierRes.ok) {
      console.error("Zapier respondió con error:", zapierRes.status, await zapierRes.text());
    } else {
      console.log("Zapier recibió los datos correctamente");
    }
  } catch (err) {
    console.error("Error enviando a Zapier:", err);
  }

  // Enviar al CRM
  try {
    const crmRes = await fetch("https://crm.jacecuador.com/slt_crm/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: clean.nombre,
        modelo_jetour: clean.modelo,
        ciudad: clean.ciudad,
        email: clean.email,
        phone_number: clean.telefono,
        ci: clean.cedulaRuc,
        webhook: "E56QVtTiTKAt8OT5iDEowEaa",
        vehicle_plate: clean.placa,
        workshop_service_type: clean.tipoServicioTaller,
      }),
    });

    if (!crmRes.ok) {
      console.error("CRM respondió con error:", crmRes.status, await crmRes.text());
    } else {
      console.log("CRM recibió los datos correctamente");
    }
  } catch (err) {
    console.error("Error enviando a CRM:", err);
  }

  return {
    success: true,
    redirectTo: "/posventa/gracias#service-form",
  };
}
