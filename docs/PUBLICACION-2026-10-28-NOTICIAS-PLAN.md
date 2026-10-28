# Plan de publicación — Noticias Jetour

Fecha: 2026-10-28 · Sitio: https://www.jetourecuador.com · Vercel `jetour-site` / team Epifania Pro · CMS: Sanity `j182601n` / dataset `production`

## Alcance

Publicar los borradores existentes de F700, Mall del Alto y Granados, y preparar una nota de Automundo 2026 a partir del boletín y los activos compartidos por Verónica. La nota nueva será sobre Automundo 2026, según la opción seleccionada. No se publicará una nota de posventa: el paquete recibido es de Automundo y no existe un borrador de posventa en Sanity.

| Nota | Estado actual en Sanity | Acción prevista | URL prevista |
|---|---|---|---|
| F700 | Borrador `drafts.f700-autoshow-guayaquil-2026` | Publicar sin reescribir el contenido aprobado | `/noticias/f700-autoshow-guayaquil-2026` |
| Mall del Alto | Borrador `drafts.jetour-mall-del-alto-cuenca` | Publicar sin reescribir el contenido aprobado | `/noticias/jetour-mall-del-alto-cuenca` |
| Granados | Borrador `drafts.jetour-concesionario-granados-quito` | Publicar sin reescribir el contenido aprobado | `/noticias/jetour-concesionario-granados-quito` |
| Automundo 2026 | No existe todavía en Sanity | Crear una nota de blog basada en el boletín del 15-oct-2026; incluir fotos y el recap final | `/noticias/jetour-automundo-2026` (propuesto) |

El boletín afirma 31 puntos de venta, mientras el sitio hoy comunica 27; la nota nueva omitirá esa cifra para no crear una inconsistencia. La nota de Mall del Alto tiene una imagen cuya descripción interna la llama referencial y pide reemplazarla por una foto real; se mantendrá el activo que aparece en la referencia compartida.

## Cambios, en orden

1. **Aislar el trabajo de código** en una rama de publicación desde `main` @ `03af1ba`, en un worktree separado. El checkout actual contiene cambios locales no relacionados que se preservarán. `lectura`; sin cambio de producción.
2. **Añadir compatibilidad con el recap en las noticias**: un bloque de video en el schema de `newsArticle`, su URL en la consulta GROQ y un reproductor HTML accesible en `ArticleDetail`. Comprobar el codec de `AUTOMUNDO RECAP FINAL.MOV` (30.075 MB) y convertirlo a MP4/H.264 con ffmpeg si hace falta para compatibilidad de navegador. Usar las fotos del evento del paquete como imagen principal y apoyo visual, optimizadas para web. No subir el recap alternativo de 296.376 MB salvo que resulte ser el único archivo indicado por el cliente. `escritura` en repo; requiere build y revisión en preview.
3. **Desplegar la compatibilidad del reproductor** en Vercel: preview de la rama, revisión de la ruta y el Studio, merge a `main` y push. El push a `main` activa el deployment de producción. `escritura` — producción (sitio ya existente; no es primer deploy).
4. **Publicar las cuatro notas en Sanity `production`**: subir el video e imágenes de Automundo, crear y publicar esa nota, y publicar los tres borradores ya aprobados. `escritura` — contenido visible a terceros en producción.
5. **Verificar en el dominio real** las cuatro páginas, el listado `/noticias`, imágenes y reproducción del recap; registrar comandos y resultados en el documento final de publicación.

## DNS, variables y base de datos

- DNS: sin cambios.
- Variables de entorno: ninguna nueva.
- Base de datos / Prisma: sin migraciones. No ejecutar `npm run build`, porque ese script aplica migraciones de producción; usar `npx next build` para el build de validación.
- El proyecto usa Sanity Free y sus activos consumen almacenamiento y tráfico del CDN. Se usará el recap final de 30 MB y solo las fotos necesarias, optimizadas para limitar el peso publicado.

## Rollback

- Si el reproductor o el deployment de código falla, restaurar el deployment anterior de Vercel o revertir el commit de código y publicar el revert.
- Si la nota Automundo o alguno de los tres artículos presenta un problema, retirar individualmente esa nota en Sanity. Si se revierte el reproductor, retirar primero la nota Automundo para que el contenido no quede apuntando a un bloque que el sitio ya no renderiza.
- No se borrarán documentos ni activos de Sanity.

## Riesgos y verificaciones omitidas

- El archivo MOV debe poder leerse y convertirse localmente; se comprobarán códec, duración y reproducción antes de subirlo. Si el enlace deja de estar disponible antes de descargar los activos, el paquete caduca en 14 días y Verónica tendría que compartirlo otra vez.
- Los datos del artículo Automundo saldrán del boletín provisto. Las cifras de desempeño se atribuirán como datos declarados por fabricante; se excluirá la cifra de puntos de venta por la discrepancia señalada.
- No se enviarán formularios de prueba ni se crearán leads. Lighthouse y auditoría de rendimiento quedan fuera de este alcance.
- Verificación inicial de solo lectura: `/noticias` responde HTTP 200; los slugs F700 y Mall del Alto responden 404 antes de publicar. Las tres notas solicitadas constan como borradores en Sanity.

## Responsable manual

No necesitas cambiar DNS, variables ni datos de pago. La publicación requiere la aprobación de este plan; después, el cambio de código y el contenido se aplicarán en el orden indicado. No se enviará aviso al cliente; dejaré un borrador de entrega listo para pegar.

¿Apruebas este plan?
