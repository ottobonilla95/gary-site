import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "PetalBot", disallow: "/" },
      { userAgent: "dotbot", crawlDelay: 10 },
      { userAgent: "AhrefsBot", crawlDelay: 10 },
    ],
    sitemap: "https://www.flyttiva.se/sitemap.xml",
  };
}
