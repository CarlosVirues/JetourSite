# Resultado de publicación — Home con noticias y nota «Refiere y gana»

Fecha: 2026-11-17 · Aprobado por Carlos en el chat («Sí, publica ambos») · Sitio: https://www.jetourecuador.com

## Qué se publicó

- **Sanity** (`production`): documento `jetour-refiere-y-gana-2026` (slug `jetour-refiere-y-gana`, Lanzamientos, KV 16:9). Se publicó desde el borrador y el borrador se eliminó.
- **Código**: merge `b565e35` (rama `feat/home-noticias-referidos`, commit `a4ddb96`) en `main`. El carrusel «JETOUR en Ecuador y el mundo» muestra las 6 notas más recientes de /noticias.
- Deployment de producción: `jetour-site-izn9pg3ra-epifania-ec735ce7.vercel.app`, estado Ready.

## Verificación

| Check | Resultado | Evidencia |
|---|---|---|
| Home | Pasa | `curl` 200; el home enlaza las 6 notas, incluida `/noticias/jetour-refiere-y-gana` |
| Nota nueva | Pasa | `curl` 200; en el navegador cargan la imagen y los dos subtítulos, y aparece el texto «Owners Jetour» |
| /noticias | Pasa | 200 y la página contiene el slug nuevo |
| Consola del navegador | Pasa | Sin errores en el home |
| Clic en la tarjeta del home | Pasa en localhost | Abre `/noticias/[slug]` (probado antes del merge, en escritorio y celular) |
| Celular en producción | Omitido | Solo se revisó en localhost |

## Rollback

- Código: promover `jetour-site-b991ugcb1-epifania-ec735ce7.vercel.app` o revertir `b565e35`. El carrusel vuelve a los videos de `homePage.videoGallery`, que siguen intactos en Sanity.
- Nota: despublicarla en /studio.

## Observaciones del boletín (publicado tal cual, salvo la fecha y el contacto)

- Dice «viernes 12 de noviembre 2026»; ese día fue jueves. Se quitó la línea de fecha.
- Usa «Refiere y gana» y también «Refiere y recibe»; el KV dice «Refiere y recibe».
- Errata: «los cuales cuentas su experiencia».
- Se quitó el contacto de prensa (Paula Proaño, Innocomm).
