import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/lib/landing-pages";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticRoutes = [
        { path: "/", priority: 1 },
        { path: "/services", priority: 0.9 },
        { path: "/service-areas", priority: 0.8 },
        { path: "/about", priority: 0.6 },
        { path: "/contact", priority: 0.7 },
    ].map((r) => ({
        url: `${SITE_URL}${r.path}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: r.priority,
    }));

    const landingRoutes = LANDING_PAGES.map((p) => ({
        url: `${SITE_URL}/${p.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: p.kind === "service" ? 0.8 : 0.7,
    }));

    return [...staticRoutes, ...landingRoutes];
}
