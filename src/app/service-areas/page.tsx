import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LOCATIONS } from "@/lib/landing-pages";
import { AREA_SERVED, BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
    title: `Service Areas — West & Central Los Angeles | ${BUSINESS_NAME}`,
    description:
        "LA Precision Asphalt serves commercial and private properties across West and Central Los Angeles — Vernon, Santa Monica, Culver City, Hollywood, Torrance, Mid City, Westlake, and surrounding industrial areas.",
    alternates: { canonical: `${SITE_URL}/service-areas` },
};

export default function ServiceAreasPage() {
    return (
        <>
            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    { name: "Service Areas", href: "/service-areas" },
                ]}
            />

            <PageHero
                eyebrow="Service Areas"
                title="Serving West to Central Los Angeles"
                subtitle="We focus on commercial and private properties across the West-to-Central LA corridor — from coastal retail lots to Vernon's industrial truck yards. Find your city below or just send us the address."
                image="/la-skyline.webp"
                imageAlt="Photo needed: an aerial or skyline view of the West-to-Central Los Angeles corridor, with industrial districts and commercial areas visible under the LA skyline."
                estimateHref="/contact#estimate"
            />

            <main>
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="Where we work"
                            title="Cities we serve"
                            desc="Click your area for local details, or call us — if you're nearby, there's a good chance we cover you."
                        />

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {LOCATIONS.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/${loc.slug}`}
                                    className="group overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)]"
                                >
                                    <div className="relative h-36 w-full">
                                        <Image
                                            src={loc.heroImage}
                                            alt={loc.heroImageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-base font-semibold text-[var(--text)]">
                                            {loc.navLabel}, CA
                                        </div>
                                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent-hover)]">
                                            View area →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="Surrounding communities"
                            title="Industrial corridor & beyond"
                            desc="In addition to the cities above, we regularly work throughout the surrounding industrial areas:"
                        />
                        <div className="mt-6 flex flex-wrap gap-2">
                            {AREA_SERVED.map((area) => (
                                <span
                                    key={area}
                                    className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--text-muted)]"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <CTABand estimateHref="/contact#estimate" />
        </>
    );
}
