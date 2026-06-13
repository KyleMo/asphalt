import Image from "next/image";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants";

export function PageHero({
    eyebrow,
    title,
    subtitle,
    image,
    imageAlt,
    estimateHref = "#estimate",
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    estimateHref?: string;
}) {
    return (
        <section className="border-b border-[var(--border)] bg-[var(--background)]">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-5 lg:grid-cols-2 md:items-center lg:py-12">
                <div className="relative">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="absolute inset-0 object-cover lg:hidden rounded-[var(--radius-2xl)] brightness-50"
                        priority
                    />
                    <div className="relative z-10 space-y-6 p-6 lg:p-0">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-surface)] lg:text-[var(--text-muted)]">
                            <span className="inline-block h-[2px] w-8 bg-[var(--accent)]" />
                            {eyebrow}
                        </div>

                        <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[var(--bg)] lg:text-[var(--text)] md:text-5xl">
                            {title}
                        </h1>

                        <p className="max-w-xl text-base leading-relaxed text-[var(--muted-surface)] lg:text-[var(--text-muted)] md:text-lg">
                            {subtitle}
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href={`tel:${PHONE_E164}`}
                                className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--muted-surface)]"
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
                </div>

                <div className="relative hidden lg:block">
                    <div className="overflow-hidden rounded-[var(--radius-2xl)]">
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={1200}
                            height={900}
                            className="h-[320px] w-full object-cover md:h-[460px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
