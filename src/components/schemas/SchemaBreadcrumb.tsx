import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function SchemaBreadcrumb({
    items,
}: {
    items: { name: string; href: string }[];
}) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.href}`,
        })),
    };
    return <JsonLd data={data} />;
}
