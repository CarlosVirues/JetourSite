# URL Map — Pre/Post Cutover

Comparación entre el sitio actual (devxiy, snapshot 2026-05-21) y el sitio migrado (Next.js 15, branch `main`).

**Conclusión:** URLs son **1:1**. No se requieren redirects 301.

---

## URLs en sitemap.xml — pre vs post

| URL | Pre-cutover | Post-cutover | Acción |
|---|:---:|:---:|---|
| `/` | ✅ | ✅ | OK |
| `/vehiculos` | ✅ | ✅ | OK |
| `/vehiculos/t1` | ✅ | ✅ | OK |
| `/vehiculos/t1-phev` | ✅ | ✅ | OK |
| `/vehiculos/t2` | ✅ | ✅ | OK |
| `/vehiculos/t2-phev` | ✅ | ✅ | OK |
| `/vehiculos/dashing` | ✅ | ✅ | OK |
| `/vehiculos/dashing-phev` | ✅ | ✅ | OK |
| `/vehiculos/g700` | ✅ | ✅ | OK |
| `/vehiculos/x50` | ✅ | ✅ | OK |
| `/vehiculos/x70-plus` | ✅ | ✅ | OK |
| `/vehiculos/x70-sport` | ✅ | ✅ | OK |
| `/concesionarios` | ✅ | ✅ | OK |
| `/contacto` | ✅ | ✅ | OK |
| `/posventa` | ✅ | ✅ | OK |
| `/live-room` | ✅ | ✅ | OK |
| `/proteccion-datos` | ✅ | ✅ | OK |
| `/aviso-proteccion-datos` | ✅ | ✅ | OK |

**Total:** 18 URLs en sitemap, todas presentes en ambos lados.

---

## Rutas extra (no en sitemap, pero accesibles)

Estas son páginas de landing/campaña que el sitio antiguo también tenía (verificable en GA/heatmaps). No están en sitemap intencionalmente:

- `/test-drive`
- `/aeropuerto`, `/bing`, `/diners`, `/gran-piazza`, `/mall-del-alto` — landings de campaña
- `/lanzamiento-s06`
- `/noticias`, `/noticias/[slug]` — listado y detalle
- `/contacto/gracias`, `/posventa/gracias`, `/gracias` — confirmación de forms
- `/studio` — Sanity Studio (admin)

**Pre-cutover:** validar con `gh` o Screaming Frog que ninguna URL de tráfico real (>10 visitas/mes según Hotjar) se quedó fuera. Si aparece alguna, crear redirect en `next.config.mjs`.

---

## Pasos pre-cutover (Fase 4)

1. Re-correr Screaming Frog sobre `https://www.jetourecuador.com/` actual → exportar lista completa de URLs (no sólo sitemap).
2. Levantar staging deployment.
3. Re-correr Screaming Frog sobre staging.
4. Diff de listas → si aparece alguna URL en producción que no está en staging, decidir: agregar ruta, redirect 301, o aceptar pérdida.
5. Resubmit `sitemap.xml` en Google Search Console **después** del cutover.

---

*Generado 2026-05-28*
