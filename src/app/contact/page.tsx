import type { Metadata } from "next";
import {
    BUSINESS_NAME,
    PHONE_DISPLAY,
    PHONE_E164,
    SITE_URL,
    AREA_SERVED,
} from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";
import { EstimateForm } from "@/components/EstimateForm";

export const metadata: Metadata = {
    title: `Contact ${BUSINESS_NAME} | Request a Free Asphalt Estimate`,
    description:
        "Contact LA Precision Asphalt for commercial asphalt repair in Vernon and Central Los Angeles. Call 253-709-5434 or request a free estimate online — often answered the same day.",
    alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
    return (
        <>
            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    { name: "Contact", href: "/contact" },
                ]}
            />

            <PageHero
                eyebrow="Contact Us"
                title="Request a free asphalt estimate"
                subtitle="Tell us about your property and we'll connect you with a vetted local asphalt partner for pricing and scheduling — often the same day. Prefer to talk it through? Give us a call."
                image="/asphalt-sealcoat.webp"
                imageAlt="Photo needed: a friendly estimator on a commercial lot reviewing the pavement with a clipboard or tablet, ready to provide a quote."
            />

            <main>
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1fr_1.6fr] lg:py-14">
                        {/* Contact details */}
                        <div className="space-y-8">
                            <SectionTitle
                                eyebrow="Get in touch"
                                title="Two easy ways to start"
                            />

                            <div className="space-y-4">
                                <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                                        Call or text
                                    </div>
                                    <a
                                        href={`tel:${PHONE_E164}`}
                                        className="mt-2 block text-2xl font-bold tracking-tight text-[var(--text)] hover:text-[var(--accent-hover)]"
                                    >
                                        {PHONE_DISPLAY}
                                    </a>
                                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                                        Fastest for urgent repairs and quick
                                        questions.
                                    </p>
                                </div>

                                <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                                        Service area
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                        Commercial & private property across West
                                        to Central Los Angeles, including{" "}
                                        {AREA_SERVED.join(", ")}.
                                    </p>
                                </div>

                                <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                                        For the fastest quote
                                    </div>
                                    <ul className="mt-3 space-y-2">
                                        {[
                                            "Property address",
                                            "A few photos of the damage",
                                            "Rough dimensions or number of areas",
                                            "Any access constraints (docks, gates, hours)",
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm text-[var(--text-muted)]"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Estimate form */}
                        <div
                            id="estimate"
                            className="scroll-mt-24 rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--muted-surface)] p-2"
                        >
                            <EstimateForm />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
