"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const tiposServicioEnum = [
  "mantenimiento preventivo",
  "mantenimiento correctivo",
  "colisiones",
  "reclamo del servicio",
  "otros",
];

const serviceSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
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

  try {
    await prisma.serviceSubmission.create({
      data: {
        nombre: clean.nombre,
        ciudad: clean.ciudad,
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

  return {
    success: true,
    redirectTo: "/gracias#service-form",
  };
}
