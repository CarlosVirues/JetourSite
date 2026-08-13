const posventaPage = {
  name: "posventaPage",
  title: "Página de Posventa",
  type: "document",
  __experimental_singleton: true,
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      description:
        "Cómo se ve /posventa en Google. Hoy hereda el title y description globales.",
    },
    {
      name: "title",
      title: "Título de la Página",
      type: "string",
      initialValue: "Posventa",
    },
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      initialValue: "El respaldo que esperas con la calidad que exiges",
    },
    {
      name: "heroBackgroundImage",
      title: "Imagen de Fondo del Hero",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "serviceHero",
      title: "Sección Service Hero",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título Principal",
          type: "string",
          initialValue: "¿Por qué elegir el servicio oficial Jetour?",
        },
        {
          name: "logo",
          title: "Logo (Grupo Roldán)",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "features",
          title: "Características del Servicio",
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
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                },
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
                  name: "imagePosition",
                  title: "Posición de la Imagen",
                  type: "string",
                  options: {
                    list: [
                      { title: "Izquierda", value: "left" },
                      { title: "Derecha", value: "right" },
                    ],
                  },
                  initialValue: "left",
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
      name: "originalParts",
      title: "Sección Repuestos Originales",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título",
          type: "string",
          initialValue: "Repuestos originales",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
          initialValue: "Garantía y calidad para tu JETOUR",
        },
        {
          name: "description",
          title: "Descripción",
          type: "text",
          rows: 3,
          initialValue:
            "Mantén tu vehículo en óptimas condiciones con repuestos originales JETOUR. Cada pieza está diseñada específicamente para tu modelo, garantizando el mejor rendimiento y durabilidad.",
        },
        {
          name: "parts",
          title: "Repuestos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Imagen del Repuesto",
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
                {
                  name: "name",
                  title: "Nombre del Repuesto (Opcional)",
                  type: "string",
                },
              ],
              preview: {
                select: {
                  title: "alt",
                  subtitle: "name",
                  media: "image",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "serviceCenters",
      title: "Centros de Servicio",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título de la Sección",
          type: "string",
          initialValue: "Centros de Servicio",
        },
        {
          name: "subtitle",
          title: "Subtítulo",
          type: "string",
          initialValue: "Red de talleres especializados en todo el país",
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
          name: "cities",
          title: "Ciudades",
          type: "array",
          of: [
            {
              type: "object",
              name: "city",
              title: "Ciudad",
              fields: [
                {
                  name: "id",
                  title: "ID de la Ciudad",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  description: "ID único para la ciudad (ej: quito, guayaquil)",
                },
                {
                  name: "name",
                  title: "Nombre de la Ciudad",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "serviceCenters",
                  title: "Centros de Servicio",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      name: "serviceCenter",
                      title: "Centro de Servicio",
                      fields: [
                        {
                          name: "name",
                          title: "Nombre del Centro",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        },
                        {
                          name: "address",
                          title: "Dirección",
                          type: "string",
                          validation: (Rule) => Rule.required(),
                        },
                        {
                          name: "nearBy",
                          title: "Referencia Cercana",
                          type: "string",
                          description: "Punto de referencia opcional",
                        },
                        {
                          name: "phone",
                          title: "Teléfono (Opcional)",
                          type: "string",
                        },
                        {
                          name: "mobile",
                          title: "Celular (Opcional)",
                          type: "string",
                        },
                        {
                          name: "schedule",
                          title: "Horarios",
                          type: "object",
                          fields: [
                            {
                              name: "weekdays",
                              title: "Lunes - Viernes",
                              type: "string",
                              initialValue: "LUN - VIE 8:00 a 18:30",
                            },
                            {
                              name: "weekends",
                              title: "Sábados",
                              type: "string",
                              initialValue: "SÁB 9:00 - 14:00",
                            },
                          ],
                        },
                        {
                          name: "image",
                          title: "Imagen del Centro (Opcional)",
                          type: "image",
                          options: {
                            hotspot: true,
                          },
                        },
                        {
                          name: "location",
                          title: "Ubicación (Latitud y Longitud)",
                          type: "geopoint",
                          description: "Ubicación opcional para mapas",
                        },
                      ],
                      preview: {
                        select: {
                          title: "name",
                          subtitle: "address",
                          media: "image",
                        },
                      },
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "serviceCenters.length",
                },
                prepare(selection) {
                  const { title, subtitle } = selection;
                  return {
                    title: title,
                    subtitle: `${subtitle || 0} centros de servicio`,
                  };
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
      title: "title",
      subtitle: "subtitle",
    },
  },
};

export default posventaPage;
