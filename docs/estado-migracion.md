# Estado de la migración — Jetour Ecuador Site

> Movido desde `CLAUDE.md` §10 y §11 el 2026-10-22, sin cambios de contenido. Es la foto a
> 2026-06-11 (con la nota de noticias del 2026-09-21). El estado operativo más reciente está en
> [MIGRACION-STATUS.md](../MIGRACION-STATUS.md) (status a 2026-08-12, cutover completado el 2026-07-30).

## 10. Fases de la migración

| # | Fase | Estado |
|---|---|---|
| 0 | Auditoría del repo + assets entregados | ✅ Completada |
| 0.5 | Limpieza técnica (fixes, postgresql, build limpio) | ✅ Completada |
| 1 | Provisionar infra propia de Jetour | 🟡 Parcial (Sanity `j182601n` y Vercel bajo cuenta personal; pendiente traspaso a Jetour) |
| 2 | Importar Sanity + DB + assets | ✅ Leads ✅ · News ✅ · Vehicles ✅ (10/10 en production, 241 imageAssets) · Concesionarios/Posventa = deuda técnica (hardcoded, sprint post-cutover) |
| 3 | Deploy en staging + QA | 🟡 Pendiente |
| 4 | Protección SEO + cutover | 🟡 Pendiente |
| 5 | Monitoreo post-launch (T+72h y T+30d) | 🟡 Pendiente |

### Estado de la migración a 2026-06-11

**Cerrado:**
- Schema `vehicleModel` reescrito + script `scripts/migrate-vehicles.js` (idempotente, dry-run, confirmación interactiva en production).
- **Migración de vehículos a Sanity `production` EJECUTADA (2026-06-11): 10/10 vehicleModel creados, 241 imageAssets subidos, 0 errores, 12 warnings (imágenes locales inexistentes — referencias muertas en `page-data.js`, sobre todo thumbnails `*-video-1.jpg` y 2 logos; los `videoUrl` de GCS sí quedaron preservados).**
- Build de producción local limpio: 24/24 páginas estáticas, exit 0.

**Fase 2 cerrada técnicamente.** Lo que queda (staging, DNS, cutover) depende de los bloqueantes externos (§11).

**Deuda técnica conocida (no tocar hasta post-cutover con QA):**
- ~~`lib/data-site.js` aún tiene `newsData` hardcoded...~~ **Resuelto 2026-09-21** (pedido de
  Carlos): `NewsGrid`, `FeaturedNews`, `RelatedNews`, `ArticleDetail` y `app/noticias/[slug]`
  se reconectaron a Sanity (`getFeaturedNews`/`getAllNews`/`getNewsCategories`/
  `getNewsArticleBySlug`/`getRelatedNews` en `lib/sanity.js`). `lib/data-site.js` quedó sin
  consumidores — nadie lo importa, se puede borrar cuando alguien lo confirme. `/noticias`
  vuelve al menú y al sitemap. Hay 18 `newsArticle` "zombie" en production (migrados de
  `data-site.js` en una prueba anterior, sin imagen, excerpt Lorem ipsum) — las queries los
  excluyen con `defined(mainImage.asset)` en vez de borrarlos; limpiarlos desde Studio es
  opcional. `/noticias` va a mostrarse vacío en producción hasta que Cris/Carlos carguen
  noticias reales desde `/studio`.

**Pendientes que requieren acción externa (ver §11).**

## 11. Pendientes críticos (bloqueantes)

| # | Item | Owner | Estado |
|---|---|---|---|
| 1 | Credenciales GoDaddy del dominio `jetourecuador.com` | Cris / Jetour | ⏳ Solicitado |
| 2 | Dump SQL de la BD (3 tablas) de la agencia anterior | Agencia anterior | ⏳ Solicitado (correo enviado) |
| 3 | Confirmar modelos en Sanity vs hardcoded en código | Equipo McCann | ⏳ Pendiente |
| 4 | Crear GitHub org `jetour-ecuador` para hostear el repo | Carlos | 🟡 Por decidir |
| 5 | Crear cuenta Vercel Pro a nombre de Jetour | Cris / Jetour | 🟡 Por decidir |
| 6 | Crear nuevo Sanity project a nombre de Jetour | Cris / Jetour | 🟡 Por decidir |
