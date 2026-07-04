// Control de envío de leads a sistemas externos (CRM JAC, Zapier, Google Tag Manager).
//
// Solo disparamos webhooks externos cuando el sitio es EL SITIO PÚBLICO REAL, señalado
// por la variable SITE_LIVE=true. En cualquier otro caso (staging, previews, e incluso
// los deployments de producción de Vercel previos al cutover) quedan suprimidos, para
// que el QA del cliente no contamine el CRM en vivo ni los embudos de Zapier.
//
// ¿Por qué no VERCEL_ENV? Porque los push a main crean deployments target=production
// (VERCEL_ENV=production) en el dominio *.vercel.app del proyecto ANTES del cutover —
// con ese gate, los formularios de esa URL dispararían el CRM real.
//
// CUTOVER: setear SITE_LIVE=true en el environment Production de Vercel y redeployar.
// (Documentado en MIGRACION-STATUS.md.)
export const leadWebhooksEnabled = process.env.SITE_LIVE === "true";
