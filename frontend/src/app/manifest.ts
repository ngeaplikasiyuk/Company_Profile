import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Company Profile`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8F3",
    theme_color: "#561C24",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
