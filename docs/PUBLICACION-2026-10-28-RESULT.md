# Resultado de publicación — Landing de posventa (red de talleres + banners)

Fecha: 2026-10-28 · Plan: [PUBLICACION-2026-10-28-PLAN.md](PUBLICACION-2026-10-28-PLAN.md) — aprobado por Carlos en el chat.
Merge: `55541c1` (`feat/posventa-talleres` → `main`, commits `c5aaa48`, `0a5ae0d`, `94bd406`).

## Checks

| Check | Resultado | Evidencia |
|---|---|---|
| Deploy promocionado en producción | ✅ | `/bg-posventa-2026.jpg` pasó de 404 (deploy viejo) a 200 tras el push de `main` |
| `/posventa` responde | ✅ | `curl -sI` → HTTP/2 200 |
| Indexable (sin noindex) | ✅ | Headers sin `x-robots-tag` (SITE_LIVE activa) |
| Imágenes nuevas | ✅ | `bg-posventa-2026.jpg` (223 KB) y `posventa-whatsapp-g700.jpg` (141 KB) → 200 en www |
| Sección "Red de talleres" | ✅ | Presente en snapshot de navegador con buscador |
| Mapa cargado (no gris) | ✅ | Screenshot de página completa: tiles y pines de talleres en Ecuador |
| Listado por ciudad | ✅ | Acordeón Quito abierto con sus 5 talleres (nombres, dirección, celular) |
| Hero nuevo | ✅ | Screenshot: técnico al centro, título abajo/izquierda con degradado |
| Bloque WhatsApp con G700 | ✅ | Screenshot: imagen a la derecha, botón "Agendar Cita" |
| Formulario "Agenda tu cita" intacto | ✅ | Screenshot de la sección (flujo no tocado por la rama) |
| Rutas vecinas tras el merge | ✅ | `/` 200 · `/concesionarios` 200 · `/hybrid-month` 303 (comportamiento normal del proxy) · `/posventa/gracias` 200 |
| Consola del navegador | ✅ 0 errores | `/posventa` recargada: 0 errores; home: 0. Un 400 intermitente de `bat.bing.com` (UET de Microsoft Ads, instalado 2026-09-08) apareció una vez y no se reproduce; sin relación con este diff |
| Envío real del formulario | ⚪ OMITIDO | Crearía un lead real en el CRM del cliente; la rama no toca el flujo (solo banner de `/posventa/gracias`) |
| Lighthouse / web-perf | ⚪ OMITIDO | No pedido para esta publicación |

## Hoja de entrega

- **URL de producción**: https://www.jetourecuador.com/posventa
- **Hosting**: Vercel, proyecto `jetour-site`, team **Epifania Pro** (`epifania-ec735ce7`). Deploy automático por push a `main`.
- **Repo y rama**: `CarlosVirues/JetourSite`, `main` @ `55541c1` (rama fuente `feat/posventa-talleres`).
- **DNS**: sin cambios; la zona vive en Microsoft/GoDaddy del cliente.
- **Titularidad de recursos**: Vercel → team Epifania Pro (de Carlos). GCP "Jeteour" (API de Maps) → proyecto propio de Carlos, key restringida por referente a `www.jetourecuador.com`. Sanity `j182601n` → org personal de Carlos (deuda de titularidad abierta). Search Console → propiedad verificada de carlos@epifania.ai.
- **Rollback**: `git revert -m 1 55541c1` + push, o rollback directo al deployment previo en Vercel.
- **Accesos faltantes por transferir**: sin cambios en esta publicación (pendientes históricos: segundo admin de Sanity, traspaso GBP, leads jun–jul en poder de devxiy).

## Pendientes posteriores (no bloquean lo publicado)

1. **3 coordenadas aproximadas** (Quito Norte, Cuenca Av. España, Yantzaza): pedir a Grupo Roldán el link de Google Maps de cada local y afinar los pines. Riobamba ya quedó con su ficha real.
2. **Teléfono oficial de El Coca**: el publicado es el celular personal del jefe de taller (así vino en el Excel del cliente).
3. Consumo de Google Maps: revisar el primer mes el cupo compartido de 10.000 cargas/mes (`/concesionarios` + `/posventa`).

## Actualización 2026-10-28 (tarde) — merge `8944890`, con la respuesta de Verónica

| Cambio | Resultado | Evidencia |
|---|---|---|
| Retiro de "Jetour Quito Norte" y "Juan Tanca Marengo · Taller JAC" (pedido de Verónica) | ✅ | HTML servido: 0 apariciones de ambos nombres; la red queda en 9 ciudades / 16 talleres |
| Coordenada real de Cuenca Av. España ("Comercial Roldán - Jac Motors Ecuador", link de Verónica) | ✅ | HTML servido contiene `-2.8913733` |
| Riobamba (ficha GBP) sigue presente | ✅ | HTML servido contiene `-1.6419872` |
| Rutas y consola tras el deploy | ✅ | `/posventa` y `/noticias` 200; consola 0 errores; mapa cargado y 9 ciudades renderizando |

Quedan de pendientes: **Yantzaza** (Verónica: PENDIENTE) y **teléfono oficial de El Coca** (Verónica preguntó por él). Nota: este deploy viajó junto con la publicación de noticias de otra sesión (`a0d0031`+`46b94e3`), sin conflicto.
