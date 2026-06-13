import {
    AREA_SERVED,
    BUSINESS_NAME,
    BUSINESS_DESCRIPTION,
    PHONE_E164,
    SITE_URL,
} from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function SchemaLocalBusiness() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: BUSINESS_NAME,
        description: BUSINESS_DESCRIPTION,
        telephone: PHONE_E164,
        url: SITE_URL,
        image: `${SITE_URL}/website_banner.webp`,
        priceRange: "$$",
        areaServed: AREA_SERVED.map((a) => ({ "@type": "City", name: a })),
        address: {
            "@type": "PostalAddress",
            addressLocality: "Vernon",
            addressRegion: "CA",
            addressCountry: "US",
        },
        serviceType: [
            "Commercial pothole repair",
            "Asphalt crack filling",
            "Asphalt sealcoating",
            "Asphalt replacement",
            "Industrial asphalt repair",
        ],
    };

    return <JsonLd data={data} />;
}
