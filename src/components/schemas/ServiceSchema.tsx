import { BUSINESS_NAME, PHONE_E164, SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function SchemaService({
    name,
    description,
    areaServed,
    url,
    serviceType,
}: {
    name: string;
    description?: string;
    areaServed: string[];
    url?: string;
    serviceType?: string;
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        ...(description ? { description } : {}),
        ...(serviceType ? { serviceType } : {}),
        ...(url ? { url } : {}),
        areaServed: areaServed.map((a) => ({ "@type": "City", name: a })),
        provider: {
            "@type": "LocalBusiness",
            name: BUSINESS_NAME,
            telephone: PHONE_E164,
            url: SITE_URL,
        },
    };
    return <JsonLd data={data} />;
}
