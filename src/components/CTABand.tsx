import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants";

export function CTABand({
    title = "Get your property back in shape",
    desc = "Send a few photos and the address — we'll connect you with a vetted local asphalt partner for pricing and scheduling, often the same day.",
    estimateHref = "#estimate",
}: {
    title?: string;
    desc?: string;
    estimateHref?: string;
}) {
    return (
        <section className="bg-[var(--dark)]">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                        <span className="inline-block h-[2px] w-8 bg-[var(--accent)]" />
                        Free, no-obligation estimate
                    </div>
                    <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {title}
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                        {desc}
                    </p>
                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <a
                        href={`tel:${PHONE_E164}`}
                        className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/5"
                    >
                        Call {PHONE_DISPLAY}
                    </a>
                    <a
                        href={estimateHref}
                        className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)]"
                    >
                        Request Estimate
                    </a>
                </div>
            </div>
        </section>
    );
}
