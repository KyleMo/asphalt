import { JsonLd } from "./JsonLd";

export function SchemaService({
    name,
    areaServed,
}: {
    name: string;
    areaServed: string[];
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        areaServed,
        provider: {
            "@type": "LocalBusiness",
            name: "Central LA Asphalt Pros",
            telephone: "+1-253-709-5434",
        },
    };
    return <JsonLd data={data} />;
}
