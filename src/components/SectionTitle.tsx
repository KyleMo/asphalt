export function SectionTitle({
    eyebrow,
    title,
    desc,
    align = "left",
}: {
    eyebrow?: string;
    title: string;
    desc?: string;
    align?: "left" | "center";
}) {
    return (
        <div
            className={`space-y-3 ${
                align === "center" ? "mx-auto max-w-3xl text-center" : ""
            }`}
        >
            {eyebrow ? (
                <div
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)] ${
                        align === "center" ? "justify-center" : ""
                    }`}
                >
                    <span className="inline-block h-[2px] w-8 bg-[var(--accent)]" />
                    {eyebrow}
                </div>
            ) : null}

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text)]">
                {title}
            </h2>

            {desc ? (
                <p
                    className={`text-[var(--text-muted)] leading-relaxed ${
                        align === "center" ? "mx-auto" : ""
                    } max-w-3xl`}
                >
                    {desc}
                </p>
            ) : null}
        </div>
    );
}
