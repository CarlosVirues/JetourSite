# CLAUDE.md — Jetour Ecuador Site

> Archivo maestro del proyecto. Claude Code lo lee en cada sesión.
> Si una decisión no está acá, consultar antes de improvisar.

---

## 1. Qué es este proyecto

Sitio web institucional de **Jetour Ecuador** (marca automotriz china, distribuida por Grupo Roldán en Ecuador).

URL productiva: **https://www.jetourecuador.com**

Es el **canal principal de leads** del concesionario: solicitudes de cotización, contacto, test-drive y servicio postventa. Tráfico aproximado: ~35,000 visitas/día. Sitio editorial-comercial con foco en catálogo de modelos (10 vehículos), galerías 360°, videos hero pesados y formularios que alimentan el CRM de la marca.

**No somos:** un e-commerce. No se vende online. El sitio captura el lead y la conversión se cierra en el concesionario físico.

---

## 2. Contexto del proyecto

Sitio originalmente desarrollado por **agencia anterior** (devxiy). En 2026 Jetour migra la cuenta a **McCann Erickson Ecuador**. Este repositorio es la migración técnica liderada por **Carlos Virués (Digital Director, McCann)**.

**Stakeholders:**
- **Cris** — contacto cliente Jetour Ecuador
- **Carlos Virués** — Digital Director McCann (dirección del proyecto)
- **Jesús Checa** — lead técnico de la migración SEO

**Estado:** en migración. Sitio en vivo aún corre bajo la infraestructura de la agencia anterior. Cutover programado tras Fases 1-4 (ver §10).

---

## 3. Stack técnico (versiones confirmadas)

```
Framework:     Next.js 15.5.9 (App Router, JS no TS)
React:         19.2.1
Styling:       Tailwind CSS 4.1.17
Animaciones:   Framer Motion 12.23.25
CMS:           Sanity 4.10.3 (Studio embebido en /studio)
ORM:           Prisma 6.19.0
Base de datos: PostgreSQL (migrado de MySQL en mayo 2026 — ver §6)
Validación:    Zod 4.1.13
Iconos:        Lucide React 0.555.0 + Radix Icons
Maps:          @googlemaps/js-api-loader 1.16.10
```

**Lenguaje:** JavaScript (no TypeScript). Si en el futuro se migra a TS, hacerlo gradualmente con `allowJs: true` primero.

**Sin tests automatizados.** QA es manual sobre staging antes de cada cutover.

---

## 4. Estructura de rutas

```
app/
├── page.js                          # Home
├── vehiculos/[model]/               # 10 modelos: t1, t1-phev, t2, t2-phev,
│                                    # dashing, g700, x50, x70-plus, x70-sport (+1)
├── noticias/                        # Listado de noticias (HARDCODED en lib/data-site.js)
│   └── [slug]/                      # Detalle de noticia
├── concesionarios/                  # Mapa de concesionarios (Google Maps)
├── contacto/                        # Form de contacto general
│   └── gracias/
├── test-drive/                      # Form de solicitud de test-drive
├── posventa/                        # Servicios postventa + centros de servicio
│   └── gracias/
├── studio/[[...tool]]/              # Sanity Studio embebido (admin del CMS)
│
├── # Landings de campaña (no editoriales)
├── aeropuerto/
├── bing/
├── diners/
├── gran-piazza/
├── lanzamiento-s06/
├── live-room/
├── mall-del-alto/
│
├── # Compliance
├── proteccion-datos/
├── aviso-proteccion-datos/
├── gracias/                         # Gracias genérico
│
├── # Server actions (no API routes)
├── actions/
│   ├── contact.js                   # Insert en tabla `contacts`
│   ├── quote.js                     # Insert en tabla `quotes`
│   └── service.js                   # Insert en tabla `service_submissions`
│
├── lib/
│   ├── sanity.js                    # Cliente Sanity + queries GROQ
│   ├── db.js                        # Singleton de Prisma client
│   ├── vehicle-models.js            # Config hardcoded de los 10 modelos
│   ├── data-site.js                 # Noticias hardcoded (DEUDA TÉCNICA — debería ir a Sanity)
│   ├── hero-data.js
│   ├── page-data.js
│   └── utils.js
│
├── robots.js                        # Genera /robots.txt
└── sitemap.js                       # Genera /sitemap.xml
```

**Total:** 24 rutas (22 statics + 2 dinámicas).

---

## 5. Variables de entorno

Ver `.env.example` para el listado completo. Resumen de las 4 críticas:

```
NEXT_PUBLIC_SANITY_PROJECT_ID    # Sanity project ID
NEXT_PUBLIC_SANITY_DATASET       # production
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY  # Google Maps (restringir por dominio)
DATABASE_URL                     # postgresql://... (Vercel Postgres)
```

**Sanity project ID original (agencia anterior):** `wjwg4t3x` — solo referencia histórica, NO usar.
**Sanity project ID nuevo (Jetour/McCann):** _por crear en Fase 1_.

---

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

---

## 7. Modelo de datos (Prisma + PostgreSQL)

3 tablas que reciben inserts desde server actions:

```prisma
model Contact          → app/actions/contact.js      → /contacto
model Quote            → app/actions/quote.js        → /vehiculos/[model] (botón cotizar)
model ServiceSubmission → app/actions/service.js     → /posventa
```

Todos los inserts validados con **Zod** antes de tocar Prisma. Cédula ecuatoriana valida 10 dígitos numéricos. RUC valida 10-13 dígitos.

**Sin emails de confirmación automáticos.** Si el cliente quiere, se integra después con Resend o el CRM de Jetour.

---

## 8. Modelo de contenido (Sanity)

5 schemas en `sanity/schemaTypes/`:

| Schema | Tipo | Notas |
|---|---|---|
| `homePage` | Singleton | Hero, GlobalStats, RoldanSection, VideoGallery |
| `concesionariosPage` | Singleton | Lista de ciudades + distribuidores con geolocalización |
| `posventaPage` | Singleton | Hero, servicios, partes originales, centros de servicio |
| `vehicleModel` | Múltiple | Uno por cada modelo (hero, features, galería, 360°, ficha PDF) |
| `index.js` | Barrel | Export de los schemas |

**Singletons protegidos:** El config de Sanity bloquea crear duplicados de `homePage`, `concesionariosPage`, `posventaPage`. Sólo permite `publish`, `discardChanges`, `restore`.

**⚠️ Hallazgos auditoría mayo 2026:**

1. `lib/sanity.js` consulta `*[_type == "homePage"][1]` (índice 1, no 0). En el export NDJSON hay 2 docs homePage — al re-importar, validar cuál es el que se debe mantener.
2. **Sanity es consumido por 2 páginas** (corrección de auditoría inicial):
   - `app/page.js` (home) → `getHomePageData()`
   - `app/concesionarios/page.jsx` → `getConcesionariosPageData()` + `getHomePageData()` (para RoldanSection)

   Las páginas de vehículos y postventa consumen contenido hardcoded de `lib/page-data.js` y `lib/vehicle-models.js`. Los docs `vehicleModel` y `posventaPage` del NDJSON son "zombis" — existen pero nadie los lee.
3. **Slug roto en Sanity:** vehicleModel X70 Sport tiene `slug.current = "70-sport"` en vez de `x70-sport`. Corregir antes de re-importar (aunque hoy no afecta porque la página no consulta Sanity).
4. **Asset faltante:** `/models/hero/x70-hero.jpg` se referencia en código para X70 Sport y X70 Plus pero no existe en `public/`. Bug heredado.

---

## 9. Assets externos (GCS)

Aproximadamente **980 MB** de media pesada vive **fuera del repo** (en bucket GCS de la agencia anterior, ya respaldado en `/Users/elsarito/Jeteour/gcs-jetour-export/`):

```
525M  especificaciones/   videos interior + ficha por modelo
320M  hero/               banners .mp4 por modelo
 66M  360/                vistas 360° de 10 modelos
 17M  3/                  Modelos por color
+ otros videos
```

**Plus** `public/` del repo: **270 MB** (690 imágenes, 9 PDFs, 4 videos).

**Bandwidth Vercel estimado:** sitio sirve ~1.25 GB de media estática. Con 35K visitas/día puede exceder el TB incluido en Pro → overage de $0.15/GB. Considerar mover videos pesados a un CDN externo (Cloudflare Stream, Mux) si el costo se dispara.

---

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
- `lib/data-site.js` aún tiene `newsData` hardcoded y 4 componentes (`NewsGrid`, `FeaturedNews`, `RelatedNews`, `app/noticias/[slug]`) lo consumen. Aunque el dato existe en Sanity, los componentes NO se reconectaron. Rewirearlos ahora dejaría `/noticias` vacío hasta poblar news en Sanity prod. Diferido.

**Pendientes que requieren acción externa (ver §11).**

---

## 11. Pendientes críticos (bloqueantes)

| # | Item | Owner | Estado |
|---|---|---|---|
| 1 | Credenciales GoDaddy del dominio `jetourecuador.com` | Cris / Jetour | ⏳ Solicitado |
| 2 | Dump SQL de la BD (3 tablas) de la agencia anterior | Agencia anterior | ⏳ Solicitado (correo enviado) |
| 3 | Confirmar modelos en Sanity vs hardcoded en código | Equipo McCann | ⏳ Pendiente |
| 4 | Crear GitHub org `jetour-ecuador` para hostear el repo | Carlos | 🟡 Por decidir |
| 5 | Crear cuenta Vercel Pro a nombre de Jetour | Cris / Jetour | 🟡 Por decidir |
| 6 | Crear nuevo Sanity project a nombre de Jetour | Cris / Jetour | 🟡 Por decidir |

---

## 12. Reglas de trabajo

### Branch strategy
- `main` — código en producción
- `migration/mccann` — branch de la migración técnica (actual)
- Feature branches: `feat/<nombre>` desde `main`
- Hotfix branches: `fix/<nombre>` desde `main`

### Commits
- Mensajes en español, formato `tipo: descripción` (`fix:`, `feat:`, `chore:`, `docs:`, `refactor:`)
- Commits atómicos — un fix por commit
- **Nunca commitear `.env.local`** (ya está en `.gitignore`)

### Antes de hacer cambios visuales
- **Esta es una migración técnica 1:1**, no un rediseño
- Cualquier cambio visual debe ser aprobado por Cris vía Carlos
- Si se detecta un bug visual del sitio actual, documentarlo pero no arreglarlo sin aprobación

### Antes de tocar copy
- **No modificar textos del sitio.** Los textos vienen de Sanity o están hardcodeados — son del cliente.
- Si se encuentra un typo, reportarlo, no corregir sin permiso.

### Principio operativo — observar agudo, recomendar siempre, ejecutar con aprobación
Carlos pidió explícitamente lo siguiente:

> "No debo cambiar estructura pero si recomendar si veo algo malo, eso sí tenlo presente."

Esto significa:

- **Observar agudo:** durante cualquier tarea, si se detectan deudas técnicas, bugs heredados, anti-patterns, oportunidades de SEO/performance/UX, riesgos de seguridad o cualquier cosa "rara" — **siempre reportarlo a Carlos**.
- **Recomendar siempre:** no quedarse callado. Hasta el detalle menor merece ser señalado, con prioridad clara (crítico / mejora / nice-to-have).
- **Ejecutar solo con aprobación:** cambios estructurales, refactors, rediseños, eliminación de features, o cualquier modificación que no sea estrictamente la tarea acordada **requiere aprobación explícita** antes de tocar el código.
- **Cotizable aparte:** si un hallazgo justifica un sprint propio (ej. los 4 SEO Quick Wins detectados), preparar brief para presentar al cliente. Nunca incorporarlo silenciosamente al scope actual.

Aplica a todo: código, infraestructura, contenido, procesos.

### Performance targets
- **Lighthouse Mobile:** Performance ≥ 85 (sitio automotriz con video pesado, no se exige 95)
- **LCP < 2.5s** en mobile 4G
- **CLS = 0**
- **0 errores en consola** del navegador

---

## 13. Comandos útiles

```bash
# Desarrollo local
npm run dev                          # Levanta en http://localhost:3000

# Build de producción
npm run build                        # Genera .next/
npm run start                        # Sirve el build

# Prisma
npx prisma generate                  # Regenera el cliente (corre en postinstall)
npx prisma migrate dev               # Crea/aplica migración local
npx prisma migrate deploy            # Aplica migraciones en producción
npx prisma studio                    # GUI de la BD en localhost:5555

# Sanity
npx sanity dataset export production # Exporta el dataset entero
npx sanity dataset import <file>     # Importa un .ndjson
npx sanity logout / login            # Cambiar de cuenta

# Lint
npm run lint
```

---

## 14. Riesgos conocidos

1. **Pérdida de posicionamiento SEO** durante cutover. Mitigación: Screaming Frog antes/después, mapa de 301s, sitemap.xml + GSC resubmit.
2. **Bandwidth Vercel sobre 1 TB.** Mitigación: monitorear primer mes, evaluar CDN externo para video.
3. **Si Sanity tiene outage**, secciones del home renderizan vacías (no rompe el sitio gracias al fix de Fase 0.5).
4. **`lib/data-site.js` tiene noticias hardcoded.** Deuda técnica — migrar a Sanity en sprint posterior.
5. **No hay tests automatizados.** Toda regresión depende de QA manual en staging.

---

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

---

*Última actualización: mayo 2026*
*Este archivo es la fuente de verdad. Si algo no está acá, preguntar antes de decidir.*
