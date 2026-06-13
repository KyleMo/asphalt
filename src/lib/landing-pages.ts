import { LandingPage } from "./landing-types";
import { SERVICES } from "./services";
import { LOCATIONS } from "./locations";

export const LANDING_PAGES: LandingPage[] = [...SERVICES, ...LOCATIONS];

const BY_SLUG = new Map(LANDING_PAGES.map((p) => [p.slug, p]));

export function getLandingPage(slug: string): LandingPage | undefined {
    return BY_SLUG.get(slug);
}

export function getRelated(slugs: string[]): LandingPage[] {
    return slugs
        .map((s) => BY_SLUG.get(s))
        .filter((p): p is LandingPage => Boolean(p));
}

export { SERVICES, LOCATIONS };
