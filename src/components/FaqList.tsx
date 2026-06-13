import { SchemaFAQ } from "./schemas/SchemaFaq";

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <SchemaFAQ faqs={faqs} />
            {faqs.map((f) => (
                <div
                    key={f.q}
                    className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                    <div className="font-semibold text-[var(--text)]">
                        {f.q}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                        {f.a}
                    </p>
                </div>
            ))}
        </div>
    );
}
