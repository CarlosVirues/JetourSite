# Resultado de publicación — Noticias Jetour

Fecha: 2026-10-28 · Sitio: https://www.jetourecuador.com · CMS: Sanity `j182601n` / dataset `production`

## Resultado

Se publicó en producción el soporte para videos en noticias y las cuatro notas del alcance aprobado. La nota nueva de Automundo 2026 incluye dos fotos y el recap convertido a MP4/H.264 (11.96 MB, 19.8 s). Las notas F700, Mall del Alto y Granados se publicaron desde sus borradores sin reescribir su contenido.

| URL | Resultado |
|---|---|
| https://www.jetourecuador.com/noticias/jetour-automundo-2026 | HTTP 200; título, fotos y bloque de video visibles |
| https://www.jetourecuador.com/noticias/f700-autoshow-guayaquil-2026 | HTTP 200 |
| https://www.jetourecuador.com/noticias/jetour-mall-del-alto-cuenca | HTTP 200 |
| https://www.jetourecuador.com/noticias/jetour-concesionario-granados-quito | HTTP 200 |
| https://www.jetourecuador.com/noticias | HTTP 200 |
| https://www.jetourecuador.com/studio | HTTP 200 |

## Verificación técnica

- Deployment Vercel de producción: `dpl_FaUf6ZPb9ydEDs7MwXnSUVmjZQWM`, commit `ad535f7`, estado `Ready`, con alias `jetourecuador.com` y `www.jetourecuador.com`.
- Build de Vercel compiló correctamente; Prisma informó `No pending migrations to apply`.
- El artículo Automundo se abrió en navegador en el dominio real. El elemento `<video>` tiene controles, `type="video/mp4"` y llegó a `readyState: 4` (`HAVE_ENOUGH_DATA`).
- El CDN de Sanity respondió `206 Partial Content` a una petición con rango para el MP4; permite servir el reproductor por partes.
- `/noticias` y las cuatro páginas consultan los documentos publicados esperados en Sanity.
- No se modificaron DNS ni variables de entorno y no se aplicaron migraciones.

## Cambios de código

- `sanity/schemaTypes/newsArticle.js`: objeto de contenido `newsVideo` con archivo MP4 y descripción.
- `lib/sanity.js`: proyección GROQ de la URL del video.
- `components/ArticleDetail.jsx`: reproductor HTML accesible con controles y carga de metadatos.
- Commit de funcionalidad: `a0d0031`; merge a `main`: `ad535f7`.

## Rollback

- Deployment previo a la publicación: `dpl_9yRPgEZMovUHZmowPrYzTTVxvAkY` — https://jetour-site-ex9xred9h-epifania-ec735ce7.vercel.app (Ready antes del cambio).
- Para revertir código, volver a promover el deployment previo de Vercel o revertir `ad535f7` en `main` y dejar que Vercel genere el deployment de reversión.
- Para retirar contenido, despublicar individualmente el documento afectado en Sanity. Si se revierte el reproductor, retirar primero `jetour-automundo-2026` para que no quede un bloque de video sin renderizador.
- No borrar los activos cargados. El video y las fotos pueden permanecer en Sanity sin mostrarse.

## Alcance y límites

La nota publicada es sobre Automundo 2026, de acuerdo con el paquete provisto y la opción seleccionada. No se creó una nota de posventa: no había un borrador de posventa en Sanity y la documentación entregada era de Automundo. La cifra de puntos de venta quedó fuera por la diferencia entre boletín y sitio. Las cifras técnicas publicadas se atribuyen al fabricante.

No se enviaron formularios de prueba ni se crearon leads. Lighthouse y auditoría de rendimiento no formaron parte del plan aprobado.

## Borrador de entrega al cliente

Hola Verónica,

Ya publicamos en jetourecuador.com la nota de Automundo 2026 con el recap liviano y las fotografías del evento. También quedaron al aire las notas aprobadas del lanzamiento de la F700, Mall del Alto y Granados.

Puedes revisarlas en:
- https://www.jetourecuador.com/noticias/jetour-automundo-2026
- https://www.jetourecuador.com/noticias/f700-autoshow-guayaquil-2026
- https://www.jetourecuador.com/noticias/jetour-mall-del-alto-cuenca
- https://www.jetourecuador.com/noticias/jetour-concesionario-granados-quito

Saludos,
Carlos
