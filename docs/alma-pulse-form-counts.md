# Conteos de solicitudes para Alma Pulse

`GET /api/integrations/alma-pulse/form-counts?from=YYYY-MM-DD&to=YYYY-MM-DD`
requiere `Authorization: Bearer <secreto>`. Configurar `ALMA_PULSE_FORM_COUNTS_TOKEN`
en el servidor Vercel de Jetour y el mismo secreto como `JETOUR_FORM_COUNTS_TOKEN`
en el servidor de Alma Pulse. Usar un secreto aleatorio exclusivo, de 32 a 512
caracteres. No usar variables públicas, query keys ni publicar el secreto.

Devuelve exclusivamente fecha local y cantidades de cotizaciones, contacto y
posventa. PostgreSQL agrega los datos: el endpoint no lee ni retorna nombres,
identificadores de envíos, teléfonos, correos, cédulas o mensajes. La base original
y los webhooks CRM existentes conservan su funcionamiento.

Rango inclusivo en America/Guayaquil, hasta 366 días, sin días futuros. El día
actual es parcial. Los ceros indican ausencia de registros en la base consultada;
no certifican que se conservaron todos los históricos anteriores a una migración.
Errores de autenticación: 401; rango inválido: 400; fallo de consulta: 503 sanitizado.
Todas las respuestas incluyen no-store y noindex. La ruta no permite escritura.

Pruebas: `node --test tests/form-counts.test.mjs` desde este repositorio. La prueba
SQL de bordes de medianoche con PostgreSQL embebido está también en Alma Pulse,
`tests/website-forms-source.test.ts` (repositorios vecinos bajo clientes).

Para validar build sin aplicar migraciones: `npx next build`. El script habitual
`npm run build` aplica migraciones antes del build; reservarlo para despliegues
revisados y autorizados.
