# CLAUDE.md — Jetour Ecuador Site

> Archivo maestro del proyecto. Claude Code lo lee en cada sesión.
> Si una decisión no está acá, consultar antes de improvisar.
> El detalle vive en `docs/` (ver §16, Mapa de archivos).

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

Árbol completo de `app/` (24 rutas: 22 estáticas + 2 dinámicas; modelos, noticias, concesionarios, contacto, test-drive, posventa, Sanity Studio en `/studio`, landings de campaña y compliance) y de `lib/`: [docs/arquitectura.md](docs/arquitectura.md) §4. Los leads entran por server actions en `app/actions/` (`contact.js`, `quote.js`, `service.js`).

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

Tabla con fecha y razón de cada decisión de mayo 2026 (MySQL → PostgreSQL, mantener Sanity v4 y Next.js + Vercel, checks defensivos contra Sanity null, alcance mínimo de Sanity, variantes "new" de assets GCS, importación del historial de leads y el registro descartado): [docs/decisiones-migracion.md](docs/decisiones-migracion.md). Para lo que cambió después, ver §10.

## 7. Modelo de datos (Prisma + PostgreSQL)

3 tablas (`Contact`, `Quote`, `ServiceSubmission`) que reciben inserts desde `app/actions/`, validados con Zod antes de tocar Prisma. Sin emails de confirmación automáticos. Detalle: [docs/arquitectura.md](docs/arquitectura.md) §7.

## 8. Modelo de contenido (Sanity)

Schemas en `sanity/schemaTypes/` (singletons `homePage`, `concesionariosPage` y `posventaPage` protegidos contra duplicados; `vehicleModel` múltiple) y hallazgos de la auditoría de mayo 2026: [docs/arquitectura.md](docs/arquitectura.md) §8.

## 9. Assets externos (GCS)

~980 MB de media pesada vive fuera del repo (bucket GCS de la agencia anterior), respaldada en `/Users/elsarito/dev/clientes/jetour/gcs-jetour-export/` (relativa al repo: `../gcs-jetour-export/`). Desglose, peso de `public/` y bandwidth estimado de Vercel: [docs/arquitectura.md](docs/arquitectura.md) §9.

## 10. Fases de la migración

Tabla de fases 0 a 5, estado a 2026-06-11 y deuda técnica conocida: [docs/estado-migracion.md](docs/estado-migracion.md). Estado operativo más reciente (status a 2026-08-12, cutover completado el 2026-07-30): [MIGRACION-STATUS.md](MIGRACION-STATUS.md). **Deuda técnica conocida: no tocar hasta post-cutover con QA** (lista en el detalle).

## 11. Pendientes críticos (bloqueantes)

Tabla de bloqueantes externos con owner y estado (dominio, dump SQL de la agencia anterior, modelos Sanity vs código, GitHub org, Vercel Pro y Sanity a nombre de Jetour): [docs/estado-migracion.md](docs/estado-migracion.md) §11. Los pendientes posteriores al cutover están en [MIGRACION-STATUS.md](MIGRACION-STATUS.md).

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

Pérdida de SEO en el cutover, bandwidth de Vercel sobre 1 TB, outage de Sanity (deja vacías secciones del home; `/noticias` también depende de Sanity) y **no hay tests automatizados**: toda regresión depende de QA manual en staging. Detalle y mitigaciones: [docs/riesgos-y-costos.md](docs/riesgos-y-costos.md) §14.

## 15. Costos operativos esperados (mensual)

Tabla por ítem (~$22 mínimo, $45–$190 realista; el costo profesional de McCann se cotiza aparte): [docs/riesgos-y-costos.md](docs/riesgos-y-costos.md) §15. Según [MIGRACION-STATUS.md](MIGRACION-STATUS.md) (2026-08-12), quedó desactualizada por el nuevo precio de Google Maps.

---

## 16. Mapa de archivos

| Tema | Archivo |
|---|---|
| Rutas, modelo de datos, Sanity y assets externos (§4, §7, §8, §9) | [docs/arquitectura.md](docs/arquitectura.md) |
| Decisiones técnicas de la migración (§6) | [docs/decisiones-migracion.md](docs/decisiones-migracion.md) |
| Fases, estado a 2026-06-11 y bloqueantes (§10, §11) | [docs/estado-migracion.md](docs/estado-migracion.md) |
| Riesgos y costos (§14, §15) | [docs/riesgos-y-costos.md](docs/riesgos-y-costos.md) |
| Estado operativo de la migración (2026-08-12, cutover) | [MIGRACION-STATUS.md](MIGRACION-STATUS.md) |
| Mapa de URLs pre/post cutover | [docs/url-map.md](docs/url-map.md) |
| Ticket DNS para IT de Jetour | [docs/cutover-dns-ticket.md](docs/cutover-dns-ticket.md) |
| Registros TXT para restaurar el sitio | [docs/URGENTE-txt-restaurar-sitio.md](docs/URGENTE-txt-restaurar-sitio.md) |
| Revisión de staging para Cris | [docs/REVISION-CRIS.md](docs/REVISION-CRIS.md) |

---

*Última actualización: 2026-09-21 (reorganizado el 2026-10-22: el detalle pasó a `docs/`, ver §16)*
*Este archivo (con los docs que enlaza en §16) es la fuente de verdad. Si algo no está acá, preguntar antes de decidir.*
