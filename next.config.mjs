/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/xiyimgengine/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  async rewrites() {
    // Contador Hybrid Month (19-31 oct 2026): se sirve bajo nuestro dominio pero vive
    // en un Cloudflare Worker con Durable Objects (repo contador-hybrid-month).
    const contador = "https://jetour-contador-hybrid-month.carlos-2ae.workers.dev";
    return [
      { source: "/hybrid-month", destination: `${contador}/hybrid-month` },
      { source: "/hybrid-month/:path*", destination: `${contador}/hybrid-month/:path*` },
    ];
  },
  async headers() {
    // Bloqueamos la indexación en todo lo que no sea EL SITIO PÚBLICO REAL (SITE_LIVE=true,
    // seteado en Vercel recién al cutover). Los deployments de producción pre-cutover en
    // *.vercel.app también quedan con noindex. Ver lib/lead-sinks.js para el mismo gate.
    if (process.env.SITE_LIVE === "true") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
