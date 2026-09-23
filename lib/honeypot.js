// Anti-bot honeypot para los formularios de leads (Contacto, Cotizar, Agendar cita
// posventa). Sin fricción para usuarios reales: un campo invisible que solo un bot
// llena, más un control de tiempo mínimo de llenado. Sin reCAPTCHA/Turnstile por ahora
// — se suma si el spam persiste (2026-09-21, pedido de Carlos).
export const HONEYPOT_FIELD = "website";
export const HONEYPOT_TIMESTAMP_FIELD = "formRenderedAt";

const MIN_FILL_TIME_MS = 1500;

export function isBotSubmission(formData) {
  const honeypotValue = formData.get(HONEYPOT_FIELD);
  if (honeypotValue) return true;

  const renderedAt = Number(formData.get(HONEYPOT_TIMESTAMP_FIELD));
  if (!renderedAt || Date.now() - renderedAt < MIN_FILL_TIME_MS) return true;

  return false;
}
