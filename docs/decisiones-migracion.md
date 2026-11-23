# Decisiones técnicas de la migración — Jetour Ecuador Site

> Movido desde `CLAUDE.md` §6 el 2026-10-22, sin cambios de contenido. Son decisiones tomadas:
> no se reabren sin aprobación de Carlos (ver `CLAUDE.md` §12).

## 6. Decisiones técnicas tomadas en la migración

| Fecha | Decisión | Razón |
|---|---|---|
| 2026-05 | **MySQL → PostgreSQL** | Vercel Postgres viene incluido en Vercel Pro (ahorro $5–$40/mes vs PlanetScale/Railway). Sólo 3 tablas con tipos simples, conversión trivial. |
| 2026-05 | **Mantener Sanity v4** | Funciona bien, schema ya está, no hay razón para cambiar de CMS. |
| 2026-05 | **Mantener Next.js + Vercel** | Migración 1:1 para minimizar riesgo SEO. Reescritura a otro stack es proyecto aparte. |
| 2026-05 | **Defensive checks contra Sanity null** | Home reventaba con `.map()` undefined si Sanity falla. Ahora renderiza con secciones vacías. |
| 2026-05 | **Defensive Sanity client construction** | `lib/sanity.js` ahora valida que projectId/dataset existan antes de crear el cliente. Sin esto, builds de Vercel sin env vars inyectadas (previews) crashean con ConfigurationError sincrónico. Detectado tras fallo real en primer deploy. |
| 2026-05 | **Eliminar import directo de `next`** | Removido `import { MetadataRoute } from "next"` en `robots.js` y `sitemap.js` — era warning y no servía en JS. |
| 2026-05 | **Mantener Sanity en uso mínimo (solo home)** | Auditoría detectó que /vehiculos/[model], /concesionarios y /posventa NO consumen Sanity — todo viene de `lib/page-data.js` (2669 líneas hardcoded). Se decidió **NO re-cablear** durante esta migración. Activar Sanity para modelos es proyecto aparte futuro. |
| 2026-05 | **Modelos sin Sanity quedan hardcoded** | g700, t1-phev, dashing-phev no tienen doc en Sanity export. Como el sitio igual no lee Sanity para modelos, no se crean. Quedan en `lib/vehicle-models.js`. |
| 2026-05 | **Variantes "new" de assets GCS** | Cuando GCS tiene duplicados (`t2-phev-new`, `x70-sport-new`, `dashing-2`, `banner-t2-phev2.mp4`), se usa la versión "new" / más reciente. La antigua se descarta. |
| 2026-05 | **Historial de leads importado** | Dump MySQL `u425127583_db_jetour.sql` (1.7 MB) de phpMyAdmin/MariaDB convertido a Postgres e importado a Vercel Postgres (Neon). 174 contacts + 8524 quotes + 88 service_submissions = 8,786 leads (oct 2025 - may 2026). |
| 2026-05 | **1 registro descartado** | `service_submissions.id = cmhdf9b980000143mxa3yakzv` (test "afvdvafd" / dev@xiy.com.ec) tenía `telefono = NULL`. Schema Prisma actual lo rechaza (NOT NULL). Schema MySQL original era `DEFAULT NULL` — inconsistencia con la validación Zod del form (`min(7)`). Migrar al schema estricto Postgres eliminó la inconsistencia. |
