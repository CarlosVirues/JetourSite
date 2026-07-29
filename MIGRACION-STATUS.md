# Migración Jetour Ecuador — Status a 2026-07-28

Documento operativo. Para contexto completo del proyecto ver [CLAUDE.md](./CLAUDE.md).

> **2026-07-28 — El cliente APROBÓ la migración.** Todo lo técnico que no depende de accesos
> está cerrado y mergeado a `main`. **El cutover está bloqueado por un único item duro: las
> credenciales DNS de GoDaddy** (§3.1). Sin eso no hay forma de apuntar el dominio a nuestro
> Vercel, por más que el resto esté listo.

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
- [x] Build de producción local: ✅ 25/25 static pages, exit 0 (2026-07-28, con `/f700`).
- [x] **Colores por modelo sincronizados a Sanity production — EJECUTADO 2026-07-28.** 9 modelos
      actualizados, 50 imágenes, 1 omisión esperada (`f700`, sin doc en Sanity). Script:
      `npm run update-vehicle-colors -- --dataset=production` (dry-run primero, siempre).
- [x] **Landing `/f700` + colores confirmados por Jetour mergeados a `main`** (2026-07-28).

> ⚠️ **Ojo con `migrate-vehicles.js`: es create-only.** Si el doc ya existe hace `skipping`, así
> que NO sirve para actualizar contenido. Para eso está `scripts/update-vehicle-colors.js`, que
> hace `patch`. El script viejo además (a) no propaga `hidden` — los colores retirados a pedido
> del cliente reaparecerían en el sitio — y (b) reutiliza assets por `originalFilename`, lo que
> deja la imagen vieja cuando una PNG cambia de contenido conservando el nombre.

> Ya no quedan acciones técnicas pendientes sin bloqueante. Todo lo que sigue (§3) depende del cliente.

---

## 3. Bloqueantes externos — requieren acción del cliente

| # | Item | Solicitar a | Qué se necesita |
|---|---|---|---|
| 1 | Credenciales GoDaddy `jetourecuador.com` | Cris / Jetour | Login o acceso delegado para apuntar DNS a Vercel |
| 2 | ~~Cuenta Vercel Pro~~ ✅ RESUELTO 2026-06-11 | — | Cliente aprobó hostear en **server de Epifania** (team `epifania-ec735ce7`, plan Pro). Proyecto ya deployado ahí. |
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
- [x] **Deploy a Vercel HECHO 2026-06-11** en team **Epifania (Pro)** — el cliente aprobó hostear en server de Epifania.
  - Proyecto: `epifania-ec735ce7/jetour-site` (projectId `prj_6S11BAHBc6M10xxc1Bb4e8kvfPUr`).
  - **URL staging estable: https://jetour-ec-staging.vercel.app** (público, con `noindex`).
  - 22 env vars cargadas en production+preview+development (Sanity + Postgres/Neon, copiadas de `.env.local`).
  - Framework preset = `nextjs`, build verde, 24 rutas. Smoke test: 10 rutas → 200.
  - Vercel Authentication DESACTIVADO (Password Protection requiere add-on de pago; se optó por link público + noindex).
- [x] **QA automatizado 2026-06-11**: 30/30 rutas → 200 (home, 10 vehículos, noticias+detalle, posventa, concesionarios, contacto, test-drive, 6 landings, sitemap/robots). 0 errores de consola (home, vehículo, contacto). Imágenes de vehículos desde Sanity CDN.
- [x] **Formularios protegidos para QA del cliente**: contact/quote/service validan + guardan en BD + redirigen a gracias, pero los webhooks externos (CRM JAC, Zapier, GTM) **solo disparan si `SITE_LIVE=true`** (variable que se setea en Vercel recién al cutover). En staging, previews e incluso los deployments de producción pre-cutover quedan suprimidos → nadie puede contaminar el CRM en vivo. (Antes se gateaba por `VERCEL_ENV`, pero los git-push crean deployments target=production en *.vercel.app con webhooks armados — corregido 2026-07-02.)
- [x] **noindex en staging**: `X-Robots-Tag: noindex, nofollow` en preview (producción indexa normal).
- [x] Conectar repo Git al proyecto Vercel (auto-deploys) — HECHO (`CarlosVirues/JetourSite`).
- [x] **Doc de revisión para Cris**: `docs/REVISION-CRIS.md` (link + qué revisar + qué falta).
- [ ] QA visual humano de Cris (contenido/diseño por modelo) — pendiente del cliente.
- [ ] Lighthouse Mobile ≥ 85 — no corrido aún (opcional pre-cutover).
- [ ] Promover a producción (`--prod`) cuando se decida cutover.

> **REWIRE A SANITY (2026-06-11):**
> - ✅ **Vehículos CONECTADOS a Sanity.** `app/vehiculos/[model]/page.js` ahora lee de Sanity vía `getVehicleModelPageDataFromSanity()` (con fallback al hardcode si Sanity cae). Verificado en staging: 10/10 modelos 200, imágenes desde `cdn.sanity.io`, videos GCS preservados. **El contenido de vehículos es editable desde `/studio`.**
> - ⏸️ **News DIFERIDO a propósito.** No conviene rewirear ahora: (1) los 3 componentes (`NewsGrid`, `FeaturedNews`, `RelatedNews`) son `"use client"` con funciones síncronas → refactor invasivo; (2) el schema Sanity no calza (`mainImage` vs `image`, `category` como referencia, `publishedAt` datetime, sin `contentImage1/2/3`) y **los `newsCategory` tienen `name: null`** (categorías sin poblar); (3) el contenido es Lorem ipsum placeholder. Retomar cuando haya contenido real + schema/categorías arregladas. Sigue renderizando del hardcode `lib/data-site.js` (funciona 1:1).

### Fase 4 — SEO + cutover
- [ ] Re-correr Screaming Frog (comparar con `/Users/elsarito/Jeteour/snapshot-pre-cutover/`)
- [x] **Mapa de redirects 301 — NO se necesitan (re-verificado 2026-07-28).** Diff de sitemaps
      en vivo vs nuestro: 18 URLs a cada lado, cero diferencias. `/f700` es net-new y queda
      fuera del sitemap a propósito. Ver `docs/url-map.md`.
- [ ] Ventana de cutover acordada con Cris
- [ ] **Setear `SITE_LIVE=true` en el environment Production de Vercel + redeploy** (activa webhooks CRM/Zapier/GTM y quita el noindex — sin esto el sitio lanzado NO envía leads)
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
5. **El deployment viejo de devxiy sigue en línea, público e indexable** (detectado 2026-07-28):
   `https://jetour-site.vercel.app` responde 200 **sin `noindex`**. Se confirmó que NO es nuestro
   (no tiene LinkedIn en footer ni Jetour Granados, y su X70 Plus no muestra Plomo → no lee
   nuestro Sanity). Post-cutover queda como contenido duplicado compitiendo con el dominio real,
   y no está bajo nuestro control. **Acción: pedir a Cris/devxiy que lo bajen o le pongan
   noindex + canonical al dominio.** Súmalo a la lista de cutover.
6. **`SITE_LIVE` es el único freno de los leads.** Antes del cutover, verificar en el dashboard de
   Vercel que no esté seteada en Production. Proxy rápido para chequearlo sin entrar al dashboard:
   si la URL devuelve el header `x-robots-tag: noindex, nofollow`, `SITE_LIVE` está apagada
   (`next.config.mjs` omite los headers cuando vale `"true"`).

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

*Actualizado 2026-07-28. Mantener sincronizado con [CLAUDE.md §10–§11](./CLAUDE.md).*
