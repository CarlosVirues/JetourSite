# Migración Jetour Ecuador — Status a 2026-06-11

Documento operativo. Para contexto completo del proyecto ver [CLAUDE.md](./CLAUDE.md).

---

## 1. Cerrado ✅

| Item | Detalle |
|---|---|
| Fase 0 — Auditoría | Repo, assets, Sanity, BD documentados en CLAUDE.md |
| Fase 0.5 — Limpieza técnica | Defensive checks, postgres, build limpio (24/24 static) |
| BD migrada MySQL → Postgres | Schema Prisma + Vercel Postgres (Neon) |
| Leads históricos importados | 174 contacts + 8,524 quotes + 88 service_submissions = **8,786** |
| Sanity project nuevo | `j182601n` (bajo cuenta personal Carlos — pendiente traspaso) |
| Initial Prisma migration | Auto-apply en cada deploy |
| News migradas a Sanity | `feat(news): migrate hardcoded news to Sanity CMS` |
| Vehicle migration script + schema | `scripts/migrate-vehicles.js` + `sanity/schemaTypes/vehicleModel.js`. Dry-run production OK (10/10). |
| **Vehículos migrados a Sanity production** | **EJECUTADO 2026-06-11: 10/10 vehicleModel + 241 imageAssets. 0 errores. 12 warnings (imágenes locales inexistentes, ver §6).** |
| Build de producción local | ✅ 24/24 static pages, exit 0 (2026-06-11) |

---

## 2. Acciones técnicas sin bloqueantes — ESTADO

- [x] **Migrar vehículos a Sanity production** — ✅ ejecutado 2026-06-11 (10/10 docs, 241 imageAssets, 0 errores).
- [ ] Verificar visualmente en Sanity Studio: `npm run dev` → http://localhost:3000/studio
- [x] Build de producción local: ✅ 24/24 static pages, exit 0.

> Ya no quedan acciones técnicas pendientes sin bloqueante. Todo lo que sigue (§3) depende del cliente.

---

## 3. Bloqueantes externos — requieren acción del cliente

| # | Item | Solicitar a | Qué se necesita |
|---|---|---|---|
| 1 | Credenciales GoDaddy `jetourecuador.com` | Cris / Jetour | Login o acceso delegado para apuntar DNS a Vercel |
| 2 | Cuenta **Vercel Pro a nombre de Jetour** | Cris / Jetour | Email corporativo Jetour. Transferir el proyecto desde la cuenta personal de Carlos |
| 3 | **Sanity org a nombre de Jetour** | Cris / Jetour | Email corporativo Jetour. Transferir el project `j182601n` |
| 4 | GitHub org `jetour-ecuador` | Carlos | Crear org y transferir `CarlosVirues/JetourSite` |

Sin items 1–3 no hay cutover posible.

---

## 4. Pendientes técnicos (post-bloqueantes)

### Fase 2 — cerrar contenido
- [x] **Correr `migrate-vehicles` en production — HECHO 2026-06-11** (10/10 vehicleModel, 241 imageAssets, 0 errores).
- [x] **DECIDIDO 2026-05-28:** `concesionariosPage` y `posventaPage` quedan como deuda técnica — siguen hardcoded en `lib/page-data.js`. Razón: alineado con principio de migración 1:1, el sitio actual tampoco lee Sanity para esas páginas. Sprint aparte post-cutover.
- [x] **DECIDIDO 2026-05-28:** GCS assets se quedan apuntando al bucket público de devxiy (`xiyimgengine`) hasta que Jetour tenga su propia infra (Vercel Pro + bucket propio). Razón: 980 MB no caben en `public/` (deploy size limit + bandwidth Vercel), y Cloudflare Stream/Mux requiere cuenta nueva. Riesgo: si devxiy borra el bucket el sitio pierde videos. **Mitigación:** backup local completo en `/Users/elsarito/Jeteour/gcs-jetour-export/` (980 MB). Sprint post-cutover: rehosting a bucket Jetour.
- [x] **FIX 2026-05-28:** `vehicle-models.js` apuntaba a `/models/hero/x70-hero.jpg` (inexistente) para X70 Sport y X70 Plus. Corregido a `x70-sport-hero.jpg` y `x70-plus-hero.jpg` (que sí existen). Era campo dead (vehicle-models.js sólo se usa para nav del Header), no había bug visible.

### Fase 3 — staging + QA
- [ ] Deploy preview a `staging.jetourecuador.com` (o `jetour-staging.vercel.app`)
- [ ] QA manual: 24 rutas + 3 forms (contact, quote, service)
- [ ] Lighthouse Mobile ≥ 85
- [ ] 0 errores consola

### Fase 4 — SEO + cutover
- [ ] Re-correr Screaming Frog (comparar con `/Users/elsarito/Jeteour/snapshot-pre-cutover/`)
- [ ] Mapa de redirects 301 si cambia URL alguna
- [ ] Ventana de cutover acordada con Cris
- [ ] Cambio DNS GoDaddy → Vercel
- [ ] Resubmit `sitemap.xml` en Google Search Console

### Fase 5 — post-launch
- [ ] Monitoreo T+72h: errors, GSC coverage, bandwidth Vercel
- [ ] Monitoreo T+30d: rankings vs snapshot pre-cutover

---

## 5. Riesgos abiertos

1. **Bandwidth Vercel >1 TB** si sitio sirve los 1.25 GB de media a 35K visitas/día. Mitigación pendiente: evaluar CDN externo para video tras primer mes.
2. **Sanity outage** → secciones de home renderizan vacías (mitigado en Fase 0.5).
3. **Sin tests automatizados** → toda regresión depende de QA manual.
4. **`lib/data-site.js` con noticias antiguas hardcoded** → revisar si quedó deuda residual tras migración de news.

---

## 6. Warnings de la migración de vehículos (2026-06-11)

12 imágenes locales referenciadas en `lib/page-data.js` no existen en `public/` — son referencias muertas que ya faltaban en el repo original (la migración las omitió y siguió). No bloquean: los `videoUrl` de GCS sí quedaron preservados, solo faltan thumbnails/logos puntuales.

```
models/t1/t1-video-1.jpg              models/t2-phev/t2-phev-video-1.jpg
models/t1/t1-features-2.2.jpg         models/x50/x50-video-1.jpg
models/x70/x70-sport-video-1.jpg      models/x70/x70-sport-logo.png
models/t1-phev/t1-phev-features-2.4.jpg
models/t1/t1-phev-logo.png            (+ duplicados de video-1)
```

Sprint post-cutover: conseguir los assets reales o limpiar las referencias en `page-data.js`. Bajo impacto.

---

*Actualizado 2026-06-11. Mantener sincronizado con [CLAUDE.md §10–§11](./CLAUDE.md).*
