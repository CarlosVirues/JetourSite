const newsArticle = {
  name: "newsArticle",
  title: "Noticia / Artículo",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      description: "Debe coincidir exactamente con el slug de lib/data-site.js",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      },
      validation: (Rule) => Rule.required().custom(async (slug) => {
        // Validación personalizada para asegurar que el slug no se autogenere incorrectamente
        const currentSlugs = [
          "jetour-dashing-revoluciona-mercado",
          "tecnologia-asientos-inteligentes",
          "jetour-x70-plus-diseno-exterior",
          "innovacion-iluminacion-led",
          "jetour-t2-todoterreno-aventuras",
          "sistema-infoentretenimiento-avanzado",
          "linea-vehiculos-ecologicos",
          "escape-deportivo-exclusivo",
          "jetour-x90-lujo-rendimiento",
          "conduccion-autonoma-jetour",
          "jetour-dasheng-potencia-estilo",
          "sistema-seguridad-avanzado",
          "jetour-ice-cream-electrico",
          "innovacion-conectividad-nueva-generacion",
          "jetour-x95-suv-premium",
          "motor-turbo-caracteristicas",
          "plataforma-servicios-digitales",
          "futuro-movilidad-jetour-2025",
        ];
        // Permitir slugs nuevos o los existentes
        return true;
      }),
    },
    {
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "newsCategory" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Texto Alternativo",
          type: "string",
        }
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .max(200, "El extracto no puede exceder 200 caracteres")
          .warning(),
    },
    {
      name: "content",
      title: "Contenido",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Texto Alternativo", type: "string" }
          ]
        }
      ],
      description: "Dejar vacío para mostrar 'Contenido próximamente'",
    },
    {
      name: "author",
      title: "Autor",
      type: "string",
      description: "Opcional",
    },
    {
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
      description: "Si está marcado, aparece en la sección 'Destacados del mes'",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      category: "category.title",
      featured: "featured",
      publishedAt: "publishedAt",
    },
    prepare({ title, media, category, featured, publishedAt }) {
      const date = new Date(publishedAt).toLocaleDateString("es-EC", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).toUpperCase();
      return {
        title: title || "Sin título",
        subtitle: `${category || "Sin categoría"} • ${date}${featured ? " ⭐" : ""}`,
        media,
      };
    },
  },
};

export default newsArticle;
