import { cookies } from "next/headers";

// Lee la cookie `jt_attribution` (escrita por components/AttributionTracker.jsx)
// desde una server action y devuelve los campos de campaña listos para sumar al
// payload del CRM. Si no hay cookie (visita directa, cookies bloqueadas) devuelve
// los campos vacíos: el webhook los ignora y nada se rompe.
export async function getAttribution() {
  const empty = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    fbclid: "",
    landing_page: "",
    referrer: "",
  };

  try {
    const raw = (await cookies()).get("jt_attribution")?.value;
    if (!raw) return empty;
    const data = JSON.parse(decodeURIComponent(raw));
    const clean = (v) => (typeof v === "string" ? v.slice(0, 200) : "");
    return {
      utm_source: clean(data.utm_source),
      utm_medium: clean(data.utm_medium),
      utm_campaign: clean(data.utm_campaign),
      utm_term: clean(data.utm_term),
      utm_content: clean(data.utm_content),
      gclid: clean(data.gclid),
      fbclid: clean(data.fbclid),
      landing_page: clean(data.landing_page),
      referrer: clean(data.referrer),
    };
  } catch {
    // Cookie corrupta o ilegible: la atribución nunca debe tumbar un lead.
    return empty;
  }
}
