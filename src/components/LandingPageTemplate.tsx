import Image from "next/image";
import Link from "next/link";
import { LandingPage } from "@/lib/landing-types";
import { getRelated } from "@/lib/landing-pages";
import { AREA_SERVED } from "@/lib/constants";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { SectionTitle } from "./SectionTitle";
import { FaqList } from "./FaqList";
import { CTABand } from "./CTABand";
import { EstimateForm } from "./EstimateForm";
import { SchemaService } from "./schemas/ServiceSchema";

export function LandingPageTemplate({ page }: { page: LandingPage }) {
    const related = getRelated(page.related);
    const crumbRoot =
        page.kind === "service"
            ? { name: "Services", href: "/services" }
            : { name: "Service Areas", href: "/service-areas" };

    return (
        <>
            <SchemaService
                name={page.h1}
                description={page.metaDescription}
                areaServed={AREA_SERVED}
                serviceType={page.serviceType}
                url={`/${page.slug}`}
            />

            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    crumbRoot,
                    { name: page.navLabel, href: `/${page.slug}` },
                ]}
            />

            <PageHero
                eyebrow={page.eyebrow}
                title={page.h1}
                subtitle={page.heroSubtitle}
                image={page.heroImage}
                imageAlt={page.heroImageAlt}
            />

            <main>
                {/* OVERVIEW */}
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1.4fr_1fr] lg:py-14">
                        <div className="space-y-5">
                            <SectionTitle
                                eyebrow="Overview"
                                title={
                                    page.kind === "service"
                                        ? "What's involved"
                                        : "Working in your area"
                                }
                            />
                            {page.intro.map((p) => (
                                <p
                                    key={p.slice(0, 24)}
                                    className="leading-relaxed text-[var(--text-muted)]"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text)]">
                                What you get
                            </div>
                            <ul className="mt-4 space-y-3">
                                {page.highlights.map((h) => (
                                    <li key={h} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                                        <span className="text-sm leading-relaxed text-[var(--text-muted)]">
                                            {h}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="Why it matters"
                            title={
                                page.kind === "service"
                                    ? "The payoff for getting it done right"
                                    : "Why property managers call us"
                            }
                        />
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {page.benefits.map((b) => (
                                <div
                                    key={b.title}
                                    className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[var(--accent)]"
                                >
                                    <div className="text-base font-semibold text-[var(--text)]">
                                        {b.title}
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                        {b.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="Our Process"
                            title="Simple, fast, operations-friendly"
                            desc="We confirm the details and dispatch a local asphalt partner who can quote and schedule the job around your operations."
                        />
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {page.process.map((item) => (
                                <div
                                    key={item.step}
                                    className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-xl)] bg-[var(--accent)] font-extrabold text-[var(--accent-text)] shadow-sm">
                                            {item.step}
                                        </div>
                                        <div className="text-base font-semibold text-[var(--text)]">
                                            {item.title}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED */}
                {related.length > 0 && (
                    <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                        <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                            <SectionTitle
                                eyebrow="Keep exploring"
                                title="Related services & areas"
                            />
                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {related.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/${r.slug}`}
                                        className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--background)] transition hover:border-[var(--accent)]"
                                    >
                                        <div className="relative h-36 w-full">
                                            <Image
                                                src={r.heroImage}
                                                alt={r.heroImageAlt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <div className="text-base font-semibold text-[var(--text)]">
                                                {r.navLabel}
                                            </div>
                                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                                                {r.metaDescription.split(".")[0]}
                                                .
                                            </p>
                                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent-hover)]">
                                                Learn more →
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ */}
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="FAQ"
                            title="Quick answers"
                            desc="Don't see your situation? Request an estimate and we'll confirm scope and coverage."
                        />
                        <FaqList faqs={page.faqs} />
                    </div>
                </section>

                {/* ESTIMATE */}
                <section className="bg-[var(--muted-surface)]">
                    <div
                        id="estimate"
                        className="mx-auto max-w-4xl scroll-mt-24 px-6 py-10 lg:py-14"
                    >
                        <EstimateForm />
                    </div>
                </section>
            </main>

            <CTABand />
        </>
    );
}
