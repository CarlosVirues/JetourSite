# Riesgos y costos — Jetour Ecuador Site

> Movido desde `CLAUDE.md` §14 y §15 el 2026-10-22, sin cambios de contenido salvo el enlace de
> la referencia "ver §10", que ahora vive en [estado-migracion.md](estado-migracion.md).
> [MIGRACION-STATUS.md](../MIGRACION-STATUS.md) (2026-08-12) indica que el precio de Google Maps
> cambió y que la tabla de §15 quedó desactualizada.

## 14. Riesgos conocidos

1. **Pérdida de posicionamiento SEO** durante cutover. Mitigación: Screaming Frog antes/después, mapa de 301s, sitemap.xml + GSC resubmit.
2. **Bandwidth Vercel sobre 1 TB.** Mitigación: monitorear primer mes, evaluar CDN externo para video.
3. **Si Sanity tiene outage**, secciones del home renderizan vacías (no rompe el sitio gracias al fix de Fase 0.5).
4. ~~`lib/data-site.js` tiene noticias hardcoded.~~ Resuelto 2026-09-21 — ver §10 en [estado-migracion.md](estado-migracion.md). `/noticias`
   ahora depende de que Sanity esté arriba (mismo riesgo que home/concesionarios, ver riesgo 3).
5. **No hay tests automatizados.** Toda regresión depende de QA manual en staging.

## 15. Costos operativos esperados (mensual)

| Item | Mínimo | Realista |
|---|---|---|
| Vercel Pro (1 user) | $20 | $20 |
| Bandwidth overage | $0 | $20–$80 |
| Vercel Postgres | $0 (incluido) | $0 |
| Sanity | $0 (Free tier) | $0 |
| Hotjar | $0 (Free) | $0 o $39 (Business) |
| Google Maps | $0 | $0–$50 |
| Dominio (anual / 12) | $1.67 | $1.67 |
| **TOTAL** | **~$22** | **$45–$190** |

Costo profesional de McCann (migración + mantenimiento) se cotiza aparte.
