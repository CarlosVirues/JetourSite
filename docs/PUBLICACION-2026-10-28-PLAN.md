# Plan de publicación — Landing de posventa (red de talleres + banners)

Fecha: 2026-10-28 · Proyecto: jetour-site (Vercel, team Epifania Pro) · URL: https://www.jetourecuador.com/posventa

## Qué se publica

La rama `feat/posventa-talleres` (2 commits, ya revisada en preview el 2026-10-08) hacia `main` → push → deploy automático de Vercel en producción.

| Commit | Contenido |
|---|---|
| `c5aaa48` | Red de talleres en /posventa: mapa + listado (17 talleres, 9 ciudades) reusando `ConcesionariosMap`, datos del Excel del cliente en `lib/talleres.js` |
| `0a5ae0d` | Banners nuevos: hero `bg-posventa-2026.jpg` (223 KB) y bloque WhatsApp `posventa-whatsapp-g700.jpg` (141 KB), con título movido a izquierda/abajo para no tapar al técnico |

Merge verificado en seco con `git merge-tree`: **sin conflictos** (main solo cambió `next.config.mjs` — proxy hybrid-month — desde el merge-base).

Sin cambios de DNS. Sin variables de entorno nuevas. Sin migraciones de base de datos. El flujo de formularios no se toca (solo cambió el banner de `/posventa/gracias`).

## Cambios, en orden

1. **Fix de coordenada Riobamba** (commit nuevo en la rama) — `lib/talleres.js`: reemplaza la coordenada `// aprox.` (-1.6494366, -78.6700196) por la de la ficha real de Google Maps "Jetour Riobamba" (-1.6419872, -78.6766773, inventario GBP del 2026-08-25). `lectura` + `escritura` repo — confirmación normal.
2. **Push de la rama** actualizada a origin (solo actualiza preview). `escritura` — normal.
3. **Merge a `main`** local. `escritura` — normal.
4. **Push de `main`** → Vercel construye y promueve a producción automáticamente. `escritura` — **producción** (deploy de rutina; el sitio ya está en vivo desde 2026-07-30, no es primer deploy ni toca DNS).
5. Verificación en el dominio real (ver abajo).

## Registros DNS

Ninguno. El dominio queda intacto.

## Variables de entorno

Ninguna nueva. `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` ya existe en Vercel y autoriza `www.jetourecuador.com` — por eso el mapa de talleres se verá solo en el dominio real (en preview sale gris por restricción de referente; conocido y esperado).

## Rollback

- **Vía git**: `git revert -m 1 <merge-commit>` + push → Vercel redeploya el estado anterior.
- **Vía Vercel**: rollback directo al deployment previo (`vercel rollback` en el proyecto `jetour-site`).
- Ningún otro sistema se toca, así que no hay más estados que restaurar.

## Riesgos y supuestos (lo que NO queda implícito)

- **3 coordenadas siguen aproximadas** (Quito Norte, Cuenca Av. España, Yantzaza): pin en la avenida correcta con posible desvío de unas cuadras. No hay ficha GBP verificable para esos locales. → Se piden los links de Google Maps a Roldán en el borrador de entrega; se corrigen en un deploy chico posterior.
- **El Coca**: el teléfono es el celular personal del jefe de taller (así vino en el Excel del cliente). Se publica tal cual y se pide número oficial.
- **17 celulares de jefes de taller publicados**: el listado lo mandó el cliente (Ana Cristina, 2026-09-30) para esta landing. El hub quedó con "confirmar si se publican" — supuesto: sí se publican, salvo indicación de Carlos.
- **Hub 2026-10-06 decía "esperando aprobación del cliente"**: las imágenes las mandó el propio cliente el 2026-10-07 según las specs de McCann. Supuesto: esa era la aprobación; Carlos decide publicar ahora.
- **Hero a 2000×814**, no a los 2732×1112 pedidos en el correo del 2026-10-05. Ya está montado así en preview y se ve correcto; se anota en la entrega, no bloquea.
- **El mapa no se puede verificar por curl** (render client-side): se verifica con navegador real.
- **Consumo Google Maps**: cada visita a /posventa con mapa visible = 1 carga del cupo compartido de 10.000/mes. Con el tráfico actual no se espera excederlo; revisar el primer mes.

## Lo que NO se verificará

- **Envío real del formulario de posventa**: crearía un lead real en el CRM del cliente. La rama no toca el flujo del form (solo banner de la página de gracias). Omitido con esta razón.
- **Lighthouse / web-perf**: omitido salvo que Carlos lo pida.

## Qué hace Carlos a mano

- Nada para el deploy. Después: enviar el borrador de cierre a Verónica (yo lo redacto, "listo para pegar") y pedir a Roldán los 3 links de Maps + teléfono oficial de El Coca.
