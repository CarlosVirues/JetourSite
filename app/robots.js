import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/_next/", "/private/"],
    },
    sitemap: "https://jetour.com.ec/sitemap.xml",
  };
}
