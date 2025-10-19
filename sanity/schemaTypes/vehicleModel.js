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
      name: "description",
      title: "Descripción General",
      type: "text",
      rows: 3,
      description: "Descripción breve del vehículo",
    },
    {
      name: "hero",
      title: "Sección Hero",
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
          name: "vehicleName",
          title: "Nombre del Vehículo",
          type: "string",
          description: "Nombre mostrado en el hero",
        },
        {
          name: "vehicleDescription",
          title: "Descripción del Hero",
          type: "string",
          description: "Frase descriptiva del hero",
        },
        {
          name: "height",
          title: "Altura del Hero",
          type: "string",
          description: "Clases de Tailwind para la altura",
          initialValue: "h-96 lg:h-[600px]",
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
      ],
    },
    {
      name: "features",
      title: "Características Principales",
      type: "object",
      fields: [
        {
          name: "items",
          title: "Lista de Características",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Título",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Descripción",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "image",
                  title: "Imagen",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                  media: "image",
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
                  name: "image",
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
                  media: "image",
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
      description: "Configuración para la vista 360° (opcional)",
      fields: [
        {
          name: "enabled",
          title: "Habilitar Vista 360°",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "totalFrames",
          title: "Total de Frames",
          type: "number",
          description: "Número total de imágenes para la rotación 360°",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "title",
          title: "Título de la Sección",
          type: "string",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "imagePath",
          title: "Ruta Base de las Imágenes",
          type: "string",
          description: "URL base donde están las imágenes 360°",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "showInstructions",
          title: "Mostrar Instrucciones",
          type: "boolean",
          initialValue: true,
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "colorsPath",
          title: "Ruta de Colores",
          type: "string",
          description: "Ruta donde están las imágenes de colores",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "totalColors",
          title: "Total de Colores",
          type: "number",
          hidden: ({ parent }) => !parent?.enabled,
        },
        {
          name: "colorNames",
          title: "Nombres de Colores",
          type: "array",
          of: [{ type: "string" }],
          hidden: ({ parent }) => !parent?.enabled,
        },
      ],
    },
    {
      name: "heroShowcase",
      title: "Hero Showcase",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "text",
          rows: 2,
        },
        {
          name: "slides",
          title: "Slides del Showcase",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Imagen",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "title",
                  title: "Título del Slide",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  title: "Descripción",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                  media: "image",
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
                  validation: (Rule) => Rule.required(),
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
                  subtitle: "type",
                  media: "thumbnail",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "technicalSheet",
      title: "Ficha Técnica",
      type: "object",
      fields: [
        {
          name: "enabled",
          title: "Habilitar Ficha Técnica",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "pdfFile",
          title: "Archivo PDF",
          type: "file",
          description: "Archivo PDF de la ficha técnica",
          hidden: ({ parent }) => !parent?.enabled,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "hero.backgroundImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Modelo sin nombre",
        subtitle: subtitle || "Sin descripción",
        media,
      };
    },
  },
};

export default vehicleModel;
