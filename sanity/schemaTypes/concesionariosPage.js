const concesionariosPage = {
  name: "concesionariosPage",
  title: "Página de Concesionarios",
  type: "document",
  __experimental_singleton: true,
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      description:
        "Cómo se ve /concesionarios en Google. Hoy hereda el title y description globales.",
    },
    {
      name: "title",
      title: "Título Principal",
      type: "string",
      initialValue:
        "Nuestro equipo de especialistas está en 26 puntos de servicio en todo el país.",
    },
    {
      name: "cities",
      title: "Ciudades y Concesionarios",
      type: "array",
      of: [
        {
          type: "object",
          name: "city",
          title: "Ciudad",
          fields: [
            {
              name: "cityName",
              title: "Nombre de la Ciudad",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "distributors",
              title: "Concesionarios",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "distributor",
                  title: "Concesionario",
                  fields: [
                    {
                      name: "name",
                      title: "Nombre del Concesionario",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "address",
                      title: "Dirección",
                      type: "text",
                      rows: 3,
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "phone",
                      title: "Teléfono Fijo",
                      type: "string",
                      description: "Opcional",
                    },
                    {
                      name: "mobile",
                      title: "Teléfono Móvil",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "hours_weekdays",
                      title: "Horarios Lunes a Viernes",
                      type: "string",
                      initialValue: "08:30 - 18:30",
                    },
                    {
                      name: "hours_saturday",
                      title: "Horarios Sábado",
                      type: "string",
                      initialValue: "08:30 - 14:00",
                    },
                    {
                      name: "status",
                      title: "Estado",
                      type: "string",
                      options: {
                        list: [
                          { title: "Abierto", value: "Abierto" },
                          { title: "Cerrado", value: "Cerrado" },
                        ],
                      },
                      initialValue: "Abierto",
                    },
                    {
                      name: "image",
                      title: "Imagen del Concesionario",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: "location",
                      title: "Ubicación GPS",
                      type: "object",
                      fields: [
                        {
                          name: "lat",
                          title: "Latitud",
                          type: "number",
                          validation: (Rule) =>
                            Rule.required().min(-90).max(90),
                        },
                        {
                          name: "lng",
                          title: "Longitud",
                          type: "number",
                          validation: (Rule) =>
                            Rule.required().min(-180).max(180),
                        },
                      ],
                      preview: {
                        select: {
                          lat: "lat",
                          lng: "lng",
                        },
                        prepare({ lat, lng }) {
                          return {
                            title: `${lat}, ${lng}`,
                          };
                        },
                      },
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
              title: "cityName",
              distributorsCount: "distributors.length",
            },
            prepare({ title, distributorsCount }) {
              return {
                title: title,
                subtitle: `${distributorsCount || 0} concesionarios`,
              };
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
    prepare(selection) {
      return {
        title: `Concesionarios: ${selection.title || "Sin título"}`,
      };
    },
  },
};

export default concesionariosPage;
