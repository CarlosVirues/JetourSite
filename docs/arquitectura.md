# Arquitectura — Jetour Ecuador Site

> Movido desde `CLAUDE.md` (§4, §7, §8 y §9) el 2026-10-22, sin cambios de contenido salvo la ruta
> del respaldo de assets en §9 (la carpeta se movió con la reorganización a `~/dev`). Se conservan
> los números de sección originales porque otros documentos los citan.

## 4. Estructura de rutas

```
app/
├── page.js                          # Home
├── vehiculos/[model]/               # 10 modelos: t1, t1-phev, t2, t2-phev,
│                                    # dashing, g700, x50, x70-plus, x70-sport (+1)
├── noticias/                        # Listado de noticias (Sanity `newsArticle`, desde 2026-09-21)
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
│   ├── honeypot.js                  # Anti-bot de los 3 forms de leads (2026-09-21)
│   ├── data-site.js                 # Sin consumidores desde 2026-09-21 — noticias ahora en Sanity. Candidato a borrar.
│   ├── hero-data.js
│   ├── page-data.js
│   └── utils.js
│
├── robots.js                        # Genera /robots.txt
└── sitemap.js                       # Genera /sitemap.xml
```

**Total:** 24 rutas (22 statics + 2 dinámicas).

## 7. Modelo de datos (Prisma + PostgreSQL)

3 tablas que reciben inserts desde server actions:

```prisma
model Contact          → app/actions/contact.js      → /contacto
model Quote            → app/actions/quote.js        → /vehiculos/[model] (botón cotizar)
model ServiceSubmission → app/actions/service.js     → /posventa
```

Todos los inserts validados con **Zod** antes de tocar Prisma. Cédula ecuatoriana valida 10 dígitos numéricos. RUC valida 10-13 dígitos.

**Sin emails de confirmación automáticos.** Si el cliente quiere, se integra después con Resend o el CRM de Jetour.

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

## 9. Assets externos (GCS)

Aproximadamente **980 MB** de media pesada vive **fuera del repo** (en bucket GCS de la agencia anterior, ya respaldado en `/Users/elsarito/dev/clientes/jetour/gcs-jetour-export/`, relativa al repo: `../gcs-jetour-export/`):

```
525M  especificaciones/   videos interior + ficha por modelo
320M  hero/               banners .mp4 por modelo
 66M  360/                vistas 360° de 10 modelos
 17M  3/                  Modelos por color
+ otros videos
```

**Plus** `public/` del repo: **270 MB** (690 imágenes, 9 PDFs, 4 videos).

**Bandwidth Vercel estimado:** sitio sirve ~1.25 GB de media estática. Con 35K visitas/día puede exceder el TB incluido en Pro → overage de $0.15/GB. Considerar mover videos pesados a un CDN externo (Cloudflare Stream, Mux) si el costo se dispara.
