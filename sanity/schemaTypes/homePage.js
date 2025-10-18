const homePage = {
  name: "homePage",
  title: "Página de Inicio",
  type: "document",
  __experimental_singleton: true, // Marca como singleton
  fields: [
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
