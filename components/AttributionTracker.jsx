"use client";

import { useEffect } from "react";

// Captura la atribución de campaña (UTMs, gclid/fbclid, landing y referrer) en la
// PRIMERA visita y la persiste 90 días en la cookie `jt_attribution`, para que las
// server actions de los formularios la incluyan en el JSON que va al CRM (Odoo).
//
// Contexto (2026-08-28, reunión con el cliente): los leads llegan a Odoo como "Web"
// sin fuente/medio/campaña. GTM mide conversiones hacia Ads/Meta/TikTok pero NO le
// habla a Odoo — a Odoo solo le llega lo que viaja dentro del payload del webhook,
// y ese payload se arma en app/actions/*.js. Esta cookie es el puente.
//
// Modelo: PRIMER TOQUE (si la cookie ya existe, no se sobreescribe). Propuesto así
// al proveedor del CRM en el correo del 2026-08-31; si piden último clic, basta
// quitar el early-return de abajo.
//
// La cookie se escribe sin HttpOnly a propósito: la generamos en el navegador.
// No lleva datos personales — solo parámetros de campaña ya visibles en la URL.
export default function AttributionTracker() {
  useEffect(() => {
    try {
      if (document.cookie.split("; ").some((c) => c.startsWith("jt_attribution="))) {
        return; // primer toque: ya hay atribución guardada
      }

      const params = new URLSearchParams(window.location.search);
      const get = (k) => (params.get(k) || "").slice(0, 200);

      const data = {
        utm_source: get("utm_source"),
        utm_medium: get("utm_medium"),
        utm_campaign: get("utm_campaign"),
        utm_term: get("utm_term"),
        utm_content: get("utm_content"),
        gclid: get("gclid"),
        fbclid: get("fbclid"),
        landing_page: window.location.pathname.slice(0, 200),
        referrer: (document.referrer || "").slice(0, 200),
        first_visit: new Date().toISOString(),
      };

      // Google Ads suele venir con auto-etiquetado (solo gclid, sin UTMs).
      // Inferimos la convención estándar para que Odoo no lo vea vacío.
      if (data.gclid && !data.utm_source) {
        data.utm_source = "google";
        data.utm_medium = "cpc";
      }
      if (data.fbclid && !data.utm_source) {
        data.utm_source = "facebook";
        data.utm_medium = "paid-social";
      }

      const value = encodeURIComponent(JSON.stringify(data));
      // 90 días; SameSite=Lax para que sobreviva la navegación normal y sea
      // legible por las server actions vía next/headers.
      document.cookie = `jt_attribution=${value}; path=/; max-age=${60 * 60 * 24 * 90}; SameSite=Lax`;
    } catch {
      // La atribución nunca debe romper la página.
    }
  }, []);

  return null;
}
