import { LandingPage, DEFAULT_PROCESS } from "./landing-types";

type LocationInput = {
    slug: string;
    city: string;
    /** Short context line about the area's property mix */
    character: string;
    /** Longer descriptive paragraph about working in this area */
    detail: string;
    heroImage: string;
    heroImageAlt: string;
    related: string[];
};

function buildLocation(input: LocationInput): LandingPage {
    const { city, character, detail } = input;
    return {
        slug: input.slug,
        kind: "location",
        navLabel: city,
        metaTitle: `Asphalt Repair in ${city}, CA | LA Precision Asphalt`,
        metaDescription: `Commercial asphalt repair in ${city}, CA — pothole patching, crack filling, sealcoating, and asphalt replacement for lots, yards, and facilities. Local crews, fast estimates, work scheduled around your operations.`,
        eyebrow: `${city}, CA`,
        h1: `Asphalt repair in ${city}, CA`,
        heroSubtitle: `${character} LA Precision Asphalt handles pothole repair, crack filling, sealcoating, and full asphalt replacement for commercial and private properties in ${city} — with work scheduled around the way you operate.`,
        heroImage: input.heroImage,
        heroImageAlt: input.heroImageAlt,
        intro: [
            detail,
            `Whether you manage a single storefront lot or a full industrial yard, the fundamentals are the same: keep water out of the base, fix failure points before they spread, and protect the surface so you're not repaving years early. We bring that maintenance-first approach to every ${city} property and connect you with a vetted local asphalt partner for pricing and scheduling.`,
        ],
        highlights: [
            `Serving commercial & private property in ${city}`,
            "Pothole repair, crack filling, sealcoating & replacement",
            "Fast estimates — often same day with photos",
            "Work phased around your hours and access",
        ],
        benefits: [
            {
                title: "Local knowledge",
                desc: `We work throughout ${city} and the surrounding West-to-Central LA corridor, so we know the property types and traffic these lots see.`,
            },
            {
                title: "Full range of repairs",
                desc: "From a single pothole to a full remove-and-replace, one partner handles the whole scope — no juggling multiple contractors.",
            },
            {
                title: "Scheduled around you",
                desc: "Repairs are sequenced around business hours, docks, and access so your operation keeps running.",
            },
        ],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: `Do you serve all of ${city}?`,
                a: `Yes — we cover commercial and private properties throughout ${city} and the surrounding West and Central Los Angeles area.`,
            },
            {
                q: "How fast can I get an estimate?",
                a: "Often the same day when you include the property address and a few photos. Larger scopes may need a quick site walk for accuracy.",
            },
            {
                q: "What types of property do you work on?",
                a: "Commercial and private property — parking lots, truck yards, loading docks, facilities, and private drives. We don't work on public roadways.",
            },
            {
                q: "Can the work be scheduled around our hours?",
                a: "Yes. We phase repairs by zone and work around your business hours, dock schedule, and gate access wherever possible.",
            },
        ],
        related: input.related,
        serviceType: "Commercial asphalt repair",
    };
}

export const LOCATIONS: LandingPage[] = [
    buildLocation({
        slug: "vernon-ca-asphalt-repair",
        city: "Vernon",
        character:
            "Vernon is one of LA's densest industrial corridors — truck yards, warehouses, and loading docks that grind pavement down fast.",
        detail: "Vernon's pavement works harder than almost anywhere in LA. Continuous trailer traffic, dock approaches, and tight turning radii create the exact failure points — rutting, shoving, and rapid potholing — that we specialize in. We've made industrial and warehouse properties in Vernon a core focus.",
        heroImage: "/la-skyline.webp",
        heroImageAlt:
            "Photo needed: an industrial street scene in Vernon, CA with warehouses, loading docks, and a truck yard, showing worn asphalt and heavy trailer traffic.",
        related: [
            "industrial-warehouse-asphalt-repair",
            "pothole-repair-central-los-angeles",
            "asphalt-replacement-central-los-angeles",
        ],
    }),
    buildLocation({
        slug: "santa-monica-ca-asphalt-repair",
        city: "Santa Monica",
        character:
            "Santa Monica's mix of retail, office, and coastal properties means lots that need to look sharp and hold up to steady customer traffic.",
        detail: "Santa Monica properties balance heavy daytime traffic with high visibility — customers and tenants notice a faded, cracked lot. Sun and salt air accelerate oxidation here, which makes crack sealing and sealcoating especially valuable for protecting the surface and keeping the property presentable.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a clean, freshly sealcoated and striped commercial parking lot in Santa Monica, CA with palm trees and retail storefronts in the background.",
        related: [
            "sealcoat-central-los-angeles",
            "asphalt-crack-filling-central-los-angeles",
            "cleaning-central-los-angeles",
        ],
    }),
    buildLocation({
        slug: "culver-city-ca-asphalt-repair",
        city: "Culver City",
        character:
            "Culver City blends studios, offices, and commercial lots that need clean, professional surfaces and reliable upkeep.",
        detail: "From studio campuses to office parks and retail centers, Culver City properties tend to be customer- and tenant-facing, where appearance and safety both matter. We keep lots smooth, sealed, and clearly striped, and tackle potholes and failed sections before they become liabilities.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a well-maintained commercial parking lot in Culver City, CA with fresh striping and modern office or studio buildings behind it.",
        related: [
            "sealcoat-central-los-angeles",
            "pothole-repair-central-los-angeles",
            "asphalt-crack-filling-central-los-angeles",
        ],
    }),
    buildLocation({
        slug: "mid-city-la-asphalt-repair",
        city: "Mid City",
        character:
            "Mid City's dense mix of commercial strips and private lots sees constant in-and-out traffic that wears entrances and drive lanes.",
        detail: "Mid City lots take steady stop-and-go traffic that concentrates wear at entrances, drive aisles, and parking stalls. Catching cracks early and keeping the surface sealed goes a long way here toward avoiding the potholes that turn into liability and repair costs.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a busy Mid City Los Angeles commercial strip with a street-facing parking lot showing typical wear at the entrance and drive lanes.",
        related: [
            "asphalt-crack-filling-central-los-angeles",
            "pothole-repair-central-los-angeles",
            "sealcoat-central-los-angeles",
        ],
    }),
    buildLocation({
        slug: "hollywood-ca-asphalt-repair",
        city: "Hollywood",
        character:
            "Hollywood properties juggle high foot traffic, tight lots, and a constant need to look their best for visitors.",
        detail: "Hollywood's commercial lots are often compact and heavily used, where every pothole and faded stripe is on display. We keep these high-visibility surfaces safe and sharp — sealing cracks, patching damage, refreshing the finish, and restriping for clean, efficient parking.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a compact, busy commercial parking lot in Hollywood, CA, freshly sealed and striped, with recognizable storefronts or signage nearby.",
        related: [
            "sealcoat-central-los-angeles",
            "asphalt-crack-filling-central-los-angeles",
            "cleaning-central-los-angeles",
        ],
    }),
    buildLocation({
        slug: "torrance-ca-asphalt-repair",
        city: "Torrance",
        character:
            "Torrance spans light industrial, retail, and large commercial lots that benefit from steady, preventive pavement care.",
        detail: "Torrance's broad mix of industrial parks, retail centers, and commercial lots means a wide range of pavement needs — from heavy-duty truck-route repair to routine sealcoating on customer lots. We match the repair to the traffic so each surface gets exactly what it needs to last.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a large commercial or light-industrial parking lot in Torrance, CA with clean asphalt, fresh striping, and low-rise commercial buildings.",
        related: [
            "asphalt-replacement-central-los-angeles",
            "sealcoat-central-los-angeles",
            "industrial-warehouse-asphalt-repair",
        ],
    }),
    buildLocation({
        slug: "westlake-la-asphalt-repair",
        city: "Westlake",
        character:
            "Westlake's dense urban lots and private properties see heavy daily use that wears surfaces quickly.",
        detail: "Just west of Downtown, Westlake packs a lot of traffic into compact commercial and private lots. That constant use makes early crack sealing and timely pothole repair essential for keeping surfaces safe and avoiding bigger, costlier failures down the line.",
        heroImage: "/website_banner.webp",
        heroImageAlt:
            "Photo needed: a dense urban commercial lot in the Westlake district of Los Angeles, with the Downtown LA skyline visible in the background and well-maintained asphalt in the foreground.",
        related: [
            "pothole-repair-central-los-angeles",
            "asphalt-crack-filling-central-los-angeles",
            "sealcoat-central-los-angeles",
        ],
    }),
];
