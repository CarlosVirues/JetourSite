// Control de envío de leads a sistemas externos (CRM JAC, Zapier, Google Tag Manager).
//
// Solo disparamos webhooks externos en PRODUCCIÓN REAL. En preview/staging quedan
// suprimidos para que el QA del cliente (probar formularios) NO contamine el CRM en vivo
// ni los embudos de Zapier con leads de prueba.
//
// Vercel setea VERCEL_ENV automáticamente: "production" en deploys de producción,
// "preview" en previews/branches, "development" en local. Por eso al hacer el cutover
// (deploy a producción con el dominio real) los webhooks se reactivan solos, sin tocar
// código ni variables de entorno. En local (undefined) también quedan suprimidos.
export const leadWebhooksEnabled = process.env.VERCEL_ENV === "production";
