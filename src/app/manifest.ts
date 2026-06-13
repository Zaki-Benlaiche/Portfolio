import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.role}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020408",
    theme_color: "#020408",
    icons: [
      {
        src: "/ARZ.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
