import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Lyseibug",
        short_name: "Lyseibug",
        description:
            "Lyseibug builds SEO-friendly websites, mobile apps, and ERP systems—backed by proactive IT support.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#111827",
        icons: [
            { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png", purpose: "any" },
            { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png", purpose: "any" },
            { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
            { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
            { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
    };
}


