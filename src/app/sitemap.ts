import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

const PAGES = ["", "/gioi-thieu", "/dich-vu", "/danh-gia", "/lien-he"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...PAGES, ...SERVICES.map((s) => `/dich-vu/${s.slug}`)];
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/dich-vu/") ? 0.7 : 0.8,
  }));
}
