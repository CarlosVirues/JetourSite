const newsCategory = {
  name: "newsCategory",
  title: "Categoría de Noticia",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nombre de la Categoría",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
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
    },
  },
};

export default newsCategory;
