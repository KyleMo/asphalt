import type { Metadata } from "next";
import Image from "next/image";
import { BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
    title: `About ${BUSINESS_NAME} | Commercial Asphalt in Central LA`,
    description:
        "LA Precision Asphalt delivers honest, durable commercial asphalt repair across Vernon and Central Los Angeles. Learn how we work, what we value, and why property managers trust us with high-traffic lots.",
    alternates: { canonical: `${SITE_URL}/about` },
};

const VALUES = [
    {
        title: "Honest assessments",
        desc: "We tell you whether a lot needs a patch or a full replacement — even when the cheaper answer is the right one. No upselling, no scare tactics.",
    },
    {
        title: "Built to last",
        desc: "Every repair is done to handle the traffic it actually carries. We'd rather do it once, properly, than come back for the same pothole next season.",
    },
    {
        title: "Operations first",
        desc: "Your business doesn't stop for a repair. We phase work by zone and schedule around docks, gates, and shifts so you keep running.",
    },
    {
        title: "Transparent pricing",
        desc: "Clear written quotes with defined scope — no vague ballparks and no surprise line items when the invoice arrives.",
    },
];

const STATS = [
    { value: "7+", label: "Years of combined asphalt & concrete experience" },
    { value: "Same-day", label: "Estimates on most commercial requests" },
    { value: "West→Central", label: "Los Angeles coverage" },
    { value: "Commercial", label: "& private property focus" },
];

export default function AboutPage() {
    return (
        <>
            <Breadcrumbs
                items={[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                ]}
            />

            <PageHero
                eyebrow={`About ${BUSINESS_NAME}`}
                title="Pavement care that keeps your business moving"
                subtitle="We're a commercial asphalt team focused on the high-traffic, high-stress properties of West and Central LA. Our job is simple: keep your lot safe, durable, and presentable — at a price that makes sense and on a schedule that respects your operations."
                image="/concrete-driveway.webp"
                imageAlt="Photo needed: the LA Precision Asphalt crew on a commercial job site in branded gear beside their equipment, conveying professionalism and experience."
                estimateHref="/contact#estimate"
            />

            <main>
                {/* STATS */}
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-10 lg:grid-cols-4 lg:py-12">
                        {STATS.map((s) => (
                            <div key={s.label} className="space-y-1">
                                <div className="text-3xl font-extrabold tracking-tight text-[var(--text)]">
                                    {s.value}
                                </div>
                                <div className="text-sm leading-snug text-[var(--text-muted)]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STORY */}
                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:py-14">
                        <div className="space-y-5">
                            <SectionTitle
                                eyebrow="Who we are"
                                title="Local experience, industrial focus"
                            />
                            <p className="leading-relaxed text-[var(--text-muted)]">
                                {BUSINESS_NAME} was built around a frustration
                                shared by every property manager we meet: asphalt
                                work that doesn’t last, quotes that don’t add up,
                                and crews that treat your operation like an
                                afterthought.
                            </p>
                            <p className="leading-relaxed text-[var(--text-muted)]">
                                We focus on the lots that work the hardest —
                                truck yards, dock approaches, warehouse drives,
                                and busy commercial parking — across Vernon and
                                the West-to-Central LA corridor. With years of
                                combined experience across asphalt and concrete,
                                we know where pavement fails and how to fix it so
                                it stays fixed.
                            </p>
                            <p className="leading-relaxed text-[var(--text-muted)]">
                                When you request an estimate, we assess the
                                scope and connect you with a vetted local
                                asphalt partner for pricing and scheduling — so
                                you get the right crew for the job, every time.
                            </p>
                        </div>

                        <div className="relative h-[360px] w-full overflow-hidden rounded-[var(--radius-2xl)]">
                            <Image
                                src="/asphalt-prep.webp"
                                alt="Photo needed: a crew prepping and grading a commercial lot base before paving, showing careful, methodical industrial workmanship."
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
                        <SectionTitle
                            eyebrow="What we value"
                            title="How we approach every job"
                        />
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {VALUES.map((v) => (
                                <div
                                    key={v.title}
                                    className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--background)] p-6"
                                >
                                    <div className="border-l-4 border-[var(--accent)] pl-4">
                                        <div className="text-base font-semibold text-[var(--text)]">
                                            {v.title}
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                            {v.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <CTABand
                title="Let's talk about your property"
                estimateHref="/contact#estimate"
            />
        </>
    );
}
