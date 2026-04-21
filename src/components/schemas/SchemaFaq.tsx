import { JsonLd } from "./JsonLd";

export function SchemaFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };
    return <JsonLd data={data} />;
}
