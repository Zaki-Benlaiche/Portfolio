import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = ["", "#about", "#projects", "#experience", "#contact"];

  return sections.map((section) => ({
    url: `${siteConfig.url}/${section}`,
    lastModified,
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8,
  }));
}
