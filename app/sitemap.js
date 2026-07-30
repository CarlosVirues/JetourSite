import { getAllModels } from "@/lib/vehicle-models";

export default function sitemap() {
  const baseUrl = "https://www.jetourecuador.com";
  const currentDate = new Date().toISOString();

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vehiculos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // F700: lanzamiento real confirmado por Jetour (2026-07-30). Entra a mano porque vive
    // en /f700 y no en /vehiculos/[model], así que getAllModels() no lo alcanza.
    {
      url: `${baseUrl}/f700`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // {
    //   url: `${baseUrl}/noticias`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    {
      url: `${baseUrl}/concesionarios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/posventa`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/live-room`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Páginas de vehículos
  const vehiclePages = getAllModels().map((model) => ({
    url: `${baseUrl}/vehiculos/${model}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Páginas de políticas y agradecimiento
  const policyPages = [
    {
      url: `${baseUrl}/proteccion-datos`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/aviso-proteccion-datos`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...mainPages, ...vehiclePages, ...policyPages];
}
