const homePage = {
  name: "homePage",
  title: "Página de Inicio",
  type: "document",
  __experimental_singleton: true, // Marca como singleton
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      description:
        "Cómo se ve la home en Google. Hoy hereda el title y description globales " +
        "(«JETOUR - Drive Your Future»). Llenar estos campos los reemplaza.",
    },
    {
      name: "hero",
      title: "Sección Hero",
      type: "object",
      fields: [
        {
          name: "backgroundVideo",
          title: "URL del Video de Fondo",
          type: "url",
          description: "URL del video que se reproduce en el hero",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
        {
          name: "backgroundImage",
          title: "Imagen de Respaldo",
          type: "string",
          description: "Ruta de la imagen que se muestra si el video no carga",
          initialValue: "/home-bg.jpg",
        },
        {
          name: "logoImage",
          title: "Logo",
          type: "image",
          description:
            "Sube la imagen del logo. Las dimensiones se detectarán automáticamente.",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              initialValue: "JETOUR",
            },
          ],
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
          initialValue: "Apuesta por ti",
        },
        {
          name: "showScrollIndicator",
          title: "Mostrar indicador de scroll",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "height",
          title: "Altura del Hero",
          type: "string",
          initialValue: "h-96 lg:h-[800px]",
          description: "Clases de Tailwind para la altura del hero",
        },
      ],
    },
    {
      name: "globalStats",
      title: "Estadísticas Globales",
      type: "object",
      fields: [
        {
          name: "stats",
          title: "Estadísticas",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "number",
                  title: "Número",
                  type: "string",
                  description: "Ej: 1M+, 500+, 25+",
                },
                {
                  name: "label",
                  title: "Etiqueta",
                  type: "string",
                  description: "Ej: Vehículos vendidos",
                },
                {
                  name: "description",
                  title: "Descripción",
                  type: "string",
                  description: "Ej: En más de 80 países",
                },
                {
                  name: "backgroundImage",
                  title: "Imagen de Fondo",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "backgroundVideo",
                  title: "Video de Fondo (Opcional)",
                  type: "url",
                  description: "URL del video de fondo para esta estadística",
                },
              ],
              preview: {
                select: {
                  title: "label",
                  subtitle: "number",
                  media: "backgroundImage",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "roldanSection",
      title: "Sección Grupo Roldán",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "En Ecuador, Jetour tiene el respaldo de Grupo Roldán.",
        },
        {
          name: "backgroundImage",
          title: "Imagen de Fondo",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "logo",
          title: "Logo de Roldán",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "features",
          title: "Características",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Título",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Descripción",
                  type: "text",
                  rows: 2,
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "icon",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "videoGallery",
      title: "Galería de Videos",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "JETOUR en Ecuador y el mundo",
        },
        {
          name: "videos",
          title: "Videos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Título",
                  type: "string",
                },
                {
                  name: "thumbnail",
                  title: "Miniatura",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "type",
                  title: "Tipo",
                  type: "string",
                  options: {
                    list: [
                      { title: "Video", value: "video" },
                      { title: "Imagen", value: "image" },
                    ],
                  },
                  initialValue: "video",
                },
                {
                  name: "videoUrl",
                  title: "URL del Video",
                  type: "url",
                  description: "Solo requerido si el tipo es 'video'",
                  hidden: ({ parent }) => parent?.type !== "video",
                },
                {
                  name: "views",
                  title: "Texto del Botón",
                  type: "string",
                  description: "Ej: Ver video, Leer más",
                  initialValue: "Ver video",
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "type",
                  media: "thumbnail",
                },
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "hero.subtitle",
    },
    prepare(selection) {
      return {
        title: `Página de Inicio: ${selection.title || "Sin subtítulo"}`,
      };
    },
  },
};

export default homePage;
