import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/landing-pages";
import { BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
    title: `Asphalt Repair Services in Central Los Angeles | ${BUSINESS_NAME}`,
    description:
        "Commercial asphalt services across Central and West LA: pothole repair, crack filling, sealcoating, asphalt cleaning, full replacement, and industrial & warehouse repair. Request a fast estimate.",
    alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
    return (
        <>
            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    { name: "Services", href: "/services" },
                ]}
            />

            <PageHero
                eyebrow="Services"
                title="Commercial asphalt services for Central & West LA"
                subtitle="One partner for the full life of your pavement — from sealing the first crack to replacing a failed section. Everything is scheduled around your operations and quoted with no surprise line items."
                image="/asphalt-paving-service.webp"
                imageAlt="Photo needed: a professional asphalt crew working across a large commercial lot — paving, sealcoating, and striping equipment visible — representing the full range of services."
                estimateHref="/contact#estimate"
            />

            <main>
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="What we do"
                            title="Pick the repair your property needs"
                            desc="Not sure which applies? Request an estimate and we'll assess the lot and recommend the most cost-effective fix."
                        />

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {SERVICES.map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/${s.slug}`}
                                    className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)]"
                                >
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src={s.heroImage}
                                            alt={s.heroImageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-base font-semibold text-[var(--text)]">
                                            {s.navLabel}
                                        </div>
                                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                                            {s.metaDescription.split(".")[0]}.
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
            </main>

            <CTABand estimateHref="/contact#estimate" />
        </>
    );
}
