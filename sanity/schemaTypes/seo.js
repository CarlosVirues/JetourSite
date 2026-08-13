// Bloque de SEO reutilizable (2026-08-12).
//
// Por qué existe: hasta ahora la meta description de las páginas de modelo se derivaba de
// `hero.vehicleDescription`, que es el tagline VISIBLE del hero ("Más allá del horizonte",
// ~30 caracteres). Optimizarla para buscadores obligaba a reescribir copy aprobado por el
// cliente, y el CLAUDE.md del repo prohíbe tocar copy sin aprobación. Este bloque desacopla
// las dos cosas: lo que ve el visitante y lo que ve Google.
//
// TODOS los campos son opcionales. Si quedan vacíos, cada página conserva exactamente el
// comportamiento que tenía antes (ver los generateMetadata correspondientes). Es decir:
// agregar este schema no cambia nada hasta que alguien llene un campo a propósito.
const seo = {
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description:
        "El título azul que aparece en Google. Ideal 50-60 caracteres. " +
        "Si se deja vacío se usa «Nombre del modelo - JETOUR Ecuador».",
      validation: (Rule) =>
        Rule.max(65).warning("Google suele cortar el título después de ~60 caracteres."),
    },
    {
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description:
        "El párrafo gris debajo del título en Google. Ideal 120-155 caracteres. " +
        "NO se muestra en la página, así que se puede escribir para buscadores sin tocar el copy. " +
        "Si se deja vacía se usa el tagline del hero.",
      validation: (Rule) =>
        Rule.max(165).warning("Google suele cortar la descripción después de ~155 caracteres."),
    },
    {
      name: "canonical",
      title: "URL canónica",
      type: "url",
      description:
        "Solo si esta página duplica contenido de otra y querés que Google indexe la otra. " +
        "En condiciones normales se deja vacío.",
    },
    {
      name: "ogImage",
      title: "Imagen para compartir (Open Graph)",
      type: "image",
      options: { hotspot: true },
      description:
        "La imagen que aparece al pegar el link en WhatsApp, Facebook o X. Ideal 1200×630 px. " +
        "Si se deja vacía, cada red elige por su cuenta.",
    },
  ],
};

export default seo;
