const vehicleModel = {
  name: "vehicleModel",
  title: "Modelo de Vehículo",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug del Modelo",
      type: "slug",
      description: "URL amigable del modelo (ej: t1, t2, x50, dashing)",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "name",
      title: "Nombre del Modelo",
      type: "string",
      description: "Nombre del vehículo (ej: T1, T2, X50)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hero",
      title: "Sección Hero",
      type: "object",
      fields: [
        {
          name: "backgroundImage",
          title: "Imagen de Fondo (Fallback)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "backgroundVideo",
          title: "Video de Fondo",
          type: "string",
          description: "URL del video MP4 para el hero (Google Cloud Storage)",
        },
        {
          name: "vehicleName",
          title: "Nombre del Vehículo",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "vehicleDescription",
          title: "Descripción del Hero",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "height",
          title: "Altura del Hero",
          type: "string",
          initialValue: "h-screen",
        },
        {
          name: "logoImage",
          title: "Logo del Modelo",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "logoAlt",
          title: "Alt del Logo",
          type: "string",
        },
        {
          name: "highlights",
          title: "Highlights del Hero",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "id",
                  title: "ID",
                  type: "number",
                },
                {
                  name: "text",
                  title: "Texto",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  text: "text",
                },
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
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
                  name: "id",
                  title: "ID",
                  type: "number",
                },
                {
                  name: "title",
                  title: "Título del Video",
                  type: "string",
                  validation: (Rule) => Rule.required(),
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
                  name: "videoUrl",
                  title: "URL del Video",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "views",
                  title: "Texto del Botón",
                  type: "string",
                  initialValue: "Ver video",
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
              ],
              preview: {
                select: {
                  title: "title",
                  media: "thumbnail",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "vehicleGallery",
      title: "Galería del Vehículo",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título de la Galería",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
        },
        {
          name: "images",
          title: "Imágenes de la Galería",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "id",
                  title: "ID",
                  type: "number",
                },
                {
                  name: "src",
                  title: "Imagen",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "alt",
                  title: "Texto Alternativo",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: "alt",
                  media: "src",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "threeSixty",
      title: "Vista 360°",
      type: "object",
      fields: [
        {
          name: "model",
          title: "Modelo",
          type: "string",
          description: "Slug del modelo (ej: t1, t2)",
        },
        {
          name: "totalFrames",
          title: "Total de Frames",
          type: "number",
        },
        {
          name: "title",
          title: "Título de la Sección",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
        },
        {
          name: "imagePath",
          title: "Ruta Base de las Imágenes",
          type: "string",
          description: "URL base de Google Cloud Storage (ej: https://storage.googleapis.com/xiyimgengine/jetour/360/t1)",
        },
        {
          name: "showInstructions",
          title: "Mostrar Instrucciones",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
    {
      name: "vehicleColorsNew",
      title: "Selector de Colores (Nuevo)",
      type: "object",
      fields: [
        {
          name: "modelName",
          title: "Nombre del Modelo",
          type: "string",
        },
        {
          name: "colors",
          title: "Colores Disponibles",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Nombre del Color",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "hex",
                  title: "Código HEX",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Imagen del Color",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
                {
                  name: "hidden",
                  title: "Oculto en el sitio",
                  type: "boolean",
                  description:
                    "Colores retirados a pedido del cliente. No se muestran en el sitio pero quedan guardados por si se piden reactivar.",
                  initialValue: false,
                },
              ],
              preview: {
                select: {
                  title: "name",
                  media: "image",
                  hidden: "hidden",
                },
                prepare({ title, media, hidden }) {
                  return {
                    title: hidden ? `${title} (oculto)` : title,
                    media,
                  };
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "featureSlides",
      title: "Módulos de Características",
      type: "array",
      description: "Módulos dinámicos de features (Tecnología, Confort, Seguridad, etc.)",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Título del Módulo",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "slides",
              title: "Slides del Módulo",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "backgroundImage",
                      title: "Imagen de Fondo",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "bullets",
                      title: "Puntos de Características",
                      type: "array",
                      of: [{ type: "string" }],
                    },
                  ],
                  preview: {
                    select: {
                      media: "backgroundImage",
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    },
    {
      name: "technicalSheet",
      title: "Ficha Técnica",
      type: "boolean",
      initialValue: false,
      description: "Mostrar botón de ficha técnica",
    },
    {
      name: "specificationsVideo",
      title: "Video de Especificaciones",
      type: "object",
      fields: [
        {
          name: "videoUrl",
          title: "URL del Video",
          type: "string",
          description: "URL del video MP4 (Google Cloud Storage)",
        },
        {
          name: "imageUrl",
          title: "URL de Imagen (alternativa)",
          type: "string",
          description: "Para modelos que usan imagen en vez de video",
        },
        {
          name: "title",
          title: "Título",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
        },
        {
          name: "model",
          title: "Modelo",
          type: "string",
        },
        {
          name: "logoImage",
          title: "Logo del Modelo",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "logoAlt",
          title: "Alt del Logo",
          type: "string",
        },
        {
          name: "description",
          title: "Descripción",
          type: "text",
          rows: 2,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "hero.backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title: title || "Modelo sin nombre",
        media,
      };
    },
  },
};

export default vehicleModel;
