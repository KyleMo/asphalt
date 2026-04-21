import { AREA_SERVED, BUSINESS_NAME, PHONE_E164 } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function SchemaLocalBusiness() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: BUSINESS_NAME,
        telephone: PHONE_E164,
        areaServed: AREA_SERVED,
        serviceType: [
            "Commercial pothole repair",
            "Asphalt crack filling",
            "Asphalt replacement",
            "Industrial asphalt repair",
        ],
        url: "https://centrallaasphalt.com",
    };

    return <JsonLd data={data} />;
}
