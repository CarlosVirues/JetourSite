// Traduce el bloque `seo` de Sanity al objeto `metadata` que espera Next.js (2026-08-12).
//
// Regla de oro: TODO es opcional y con fallback. Si el bloque `seo` viene vacío —que es el
// estado de las 4 páginas hasta que alguien lo llene en Studio— esta función devuelve
// exactamente lo que la página devolvía antes. Agregar los campos no cambia nada por sí solo.
//
// El fallback existe porque la meta description se derivaba de `hero.vehicleDescription`,
// que es el tagline VISIBLE del hero. Ahora se puede escribir para Google sin tocar ese copy,
// pero mientras `metaDescription` esté vacía se sigue usando el tagline, sin regresión.
export function buildMetadata(seo, fallback = {}) {
  const title = seo?.metaTitle || fallback.title;
  const description = seo?.metaDescription || fallback.description;
  const image = seo?.ogImage || fallback.ogImage;

  const metadata = {};
  if (title) metadata.title = title;
  if (description) metadata.description = description;
  if (seo?.canonical) metadata.alternates = { canonical: seo.canonical };
  if (image) {
    metadata.openGraph = {
      ...(title && { title }),
      ...(description && { description }),
      images: [image],
    };
  }
  return metadata;
}
