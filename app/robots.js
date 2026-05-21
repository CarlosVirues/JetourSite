export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/_next/", "/private/"],
    },
    sitemap: "https://www.jetourecuador.com/sitemap.xml",
  };
}
