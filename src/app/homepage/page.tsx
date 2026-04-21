import Image from "next/image";
import Link from "next/link";

import { StickyMobileCall } from "@/components/Layout/StickyMobileCall";
import { EstimateForm } from "@/components/EstimateForm";

import {
    PHONE_DISPLAY,
    PHONE_E164,
    AREA_SERVED,
    BUSINESS_NAME,
} from "@/lib/constants";
import { SchemaLocalBusiness } from "@/components/schemas/HomepageSchema";
import { SchemaFAQ } from "@/components/schemas/SchemaFaq";

const HOME_FAQS = [
    {
        q: "How fast can I get a quote?",
        a: "Often same day when you include the property address and photos. Larger scopes may require a quick site walk for accuracy.",
    },
    {
        q: "Can work be scheduled around operations?",
        a: "Yes. Many partners can phase repairs by zone and schedule around dock hours or shift changes where available.",
    },
    {
        q: "Do you handle truck yards and loading docks?",
        a: "Yes. Industrial and warehouse properties are common requests in Central Los Angeles and Vernon.",
    },
    {
        q: "Do you work on private property only?",
        a: "Yes—commercial and private properties such as lots, yards, and facilities.",
    },
    {
        q: "What should I send for the fastest estimate?",
        a: "Property address, a few photos, rough dimensions or number of areas, and any access constraints like active docks or gate entry.",
    },
];

const services = [
    {
        title: "Commercial Pothole Repair",
        desc: "Durable patching for high-traffic lots, truck lanes, and loading dock approaches.",
        href: "/pothole-repair-central-los-angeles",
    },
    {
        title: "Asphalt Crack Filling",
        desc: "Seal cracks early to prevent water intrusion, base failure, and pothole formation.",
        href: "/asphalt-crack-filling-central-los-angeles",
    },
    {
        title: "Asphalt Replacement",
        desc: "Remove & replace failed sections, overlays, and resurfacing for industrial properties.",
        href: "/asphalt-replacement-central-los-angeles",
    },
    {
        title: "Industrial & Warehouse Asphalt",
        desc: "Operations-first scheduling for truck yards, turning zones, and heavy wear areas.",
        href: "/industrial-warehouse-asphalt-repair",
    },
];

function SectionTitle({
    eyebrow,
    title,
    desc,
}: {
    eyebrow?: string;
    title: string;
    desc?: string;
}) {
    return (
        <div className="space-y-3">
            {eyebrow ? (
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    <span className="inline-block h-[2px] w-8 bg-[var(--accent)]" />
                    {eyebrow}
                </div>
            ) : null}

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text)]">
                {title}
            </h2>

            {desc ? (
                <p className="max-w-3xl text-[var(--text-muted)] leading-relaxed">
                    {desc}
                </p>
            ) : null}
        </div>
    );
}

export default function HomePage() {
    return (
        <>
            <SchemaLocalBusiness />
            <SchemaFAQ faqs={HOME_FAQS} />

            {/* HERO */}
            <section className="border-b border-[var(--border)] bg-[var(--background)]">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 py-5 lg:grid-cols-2 md:items-center lg:py-10">
                    <div className="relative">
                        <Image
                            src="/la-skyline.webp"
                            alt="Industrial warehouse asphalt repair in Central Los Angeles"
                            fill
                            className="absolute inset-0 object-cover lg:hidden rounded-[var(--radius-2xl)] brightness-50"
                            priority
                        />
                        <div className="relative z-10 space-y-6 p-6 lg:p-0">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-surface)] lg:text-[var(--text-muted)]">
                                <span className="inline-block h-[2px] w-8 bg-[var(--accent)]" />
                                West + Central Los Angeles
                            </div>

                            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--bg)] lg:text-[var(--text)] md:text-5xl">
                                Asphalt repair for private and commercial
                                properties
                            </h1>

                            <p className="max-w-xl text-base leading-relaxed text-[var(--muted-surface)] lg:text-[var(--text-muted)] md:text-lg">
                                Pothole repair, crack filling, and asphalt
                                replacement for high-traffic industrial lots.
                                Request an estimate and we’ll connect you with a
                                local asphalt partner for pricing and
                                scheduling.
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={`tel:${PHONE_E164}`}
                                    className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--muted-surface)]"
                                >
                                    Call {PHONE_DISPLAY}
                                </a>

                                <Link
                                    href="/#estimate"
                                    className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)]"
                                >
                                    Request Estimate
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="overflow-hidden rounded-[var(--radius-2xl)]">
                            <Image
                                src="/la-skyline.webp"
                                alt="Industrial warehouse asphalt repair in Central Los Angeles"
                                width={1200}
                                height={900}
                                className="h-[320px] w-full object-cover md:h-[460px] hidden lg:block"
                                priority
                            />

                            {/*<div className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                                <div className="text-sm font-semibold text-[var(--text)]">
                                    Common industrial failure zones
                                </div>
                                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                                    {[
                                        "Loading dock approaches",
                                        "Truck turning radii",
                                        "Gate entries and exits",
                                        "Parking and service lanes",
                                    ].map((zone) => (
                                        <div
                                            key={zone}
                                            className="rounded-[var(--radius-xl)] bg-[var(--muted-surface)] px-3 py-2 text-sm text-[var(--text-muted)]"
                                        >
                                            {zone}
                                        </div>
                                    ))}
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN */}
            <main className="bg-[var(--dark)]">
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
                        <SectionTitle
                            eyebrow="Services Offered"
                            title="Asphalt repair services for high-traffic properties"
                            desc="We handle the most common failure points in commercial and industrial lots across West and Central Los Angeles — from potholes to full asphalt replacement."
                        />

                        {/* Service Grid */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Pothole Repair",
                                    desc: "Fast patching for active damage in high-traffic areas.",
                                },
                                {
                                    title: "Crack Filling",
                                    desc: "Prevent water intrusion and structural failure.",
                                },
                                {
                                    title: "Asphalt Replacement",
                                    desc: "Remove and replace failed sections of pavement.",
                                },
                                {
                                    title: "Concrete Installation",
                                    desc: "Our team has several years of experience installing concrete driveways, stairs, and more.",
                                },
                                {
                                    title: "Curbing",
                                    desc: "Guide, stop, and redirect traffic with painted curbs.",
                                },
                                {
                                    title: "Striping and Stenciling",
                                    desc: "Revitalize your parking lot with fresh paint.",
                                },
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--background)] p-5 transition hover:border-[var(--accent)]"
                                >
                                    <div className="text-base font-semibold text-[var(--text)]">
                                        {service.title}
                                    </div>
                                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="mx-auto max-w-6xl px-4 py-14 space-y-16">
                    {/* TRUST / PAIN POINTS */}
                    <section className="grid gap-8 md:grid-cols-2 items-start">
                        <div className="space-y-4">
                            <SectionTitle
                                eyebrow="Why Central LA Asphalt Pros"
                                title="Industrial lots fail differently than retail parking lots"
                                desc="Truck turning loads, forklifts, trailer stands, and drainage issues destroy asphalt fast—especially around Vernon. We route your request to partners who handle industrial scopes and can phase work to reduce downtime."
                            />

                            <div className="border-l-4 border-[var(--accent)] pl-4">
                                <p className="text-sm font-semibold text-[var(--text)]">
                                    Serving Vernon and surrounding industrial
                                    areas
                                </p>
                                <p className="mt-1 text-sm text-[var(--text-muted)]">
                                    Los Angeles, Commerce, Huntington Park,
                                    Maywood, Bell, South Gate, Cudahy, Bell
                                    Gardens, and East Los Angeles.
                                </p>
                            </div>

                            <ul className="mt-6 space-y-3 text-white/75 text-sm">
                                {[
                                    "Minimize operational disruption with phased repairs",
                                    "Durable patching for high-stress zones",
                                    "Crack filling programs for large yards",
                                    "Replacement scopes when patching isn’t enough",
                                ].map((x) => (
                                    <li key={x} className="flex gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[#FBBF24]" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <div className="text-white font-semibold">
                                Typical request types
                            </div>
                            <div className="mt-4 grid gap-3">
                                {[
                                    {
                                        t: "Pothole patching",
                                        d: "Hazards in lanes and stalls",
                                    },
                                    {
                                        t: "Dock approach failures",
                                        d: "Shove/rut damage zones",
                                    },
                                    {
                                        t: "Alligator cracking",
                                        d: "Base failure indicators",
                                    },
                                    {
                                        t: "Ponding water",
                                        d: "Drainage low spots",
                                    },
                                ].map((i) => (
                                    <div
                                        key={i.t}
                                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                                    >
                                        <div className="text-white text-sm font-semibold">
                                            {i.t}
                                        </div>
                                        <div className="text-white/65 text-xs mt-1">
                                            {i.d}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SERVICES */}
                    <section className="space-y-6">
                        <SectionTitle
                            eyebrow="Services"
                            title="Commercial asphalt solutions"
                            desc="Choose a service below or request an estimate and we’ll confirm the best approach."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {services.map((s) => (
                                <Link
                                    key={s.title}
                                    href={s.href}
                                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-white font-semibold text-lg">
                                                {s.title}
                                            </div>
                                            <p className="text-white/70 text-sm mt-2 leading-relaxed">
                                                {s.desc}
                                            </p>
                                        </div>
                                        <div className="h-10 w-10 rounded-2xl bg-[#FBBF24] text-[#1A1A1A] grid place-items-center font-extrabold shadow group-hover:scale-105 transition">
                                            →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* BEFORE / AFTER */}
                    <section className="space-y-6">
                        <SectionTitle
                            eyebrow="Results"
                            title="Before & after (industrial lots)"
                            desc="Swap these with your own photos as you collect projects. This section increases trust fast."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                {
                                    before: "/images/before-1.jpg",
                                    after: "/images/after-1.jpg",
                                },
                                {
                                    before: "/images/before-2.jpg",
                                    after: "/images/after-2.jpg",
                                },
                            ].map((pair, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
                                >
                                    <div className="grid grid-cols-2">
                                        <div className="relative">
                                            <Image
                                                src={pair.before}
                                                alt="Before asphalt repair"
                                                width={900}
                                                height={700}
                                                className="h-56 w-full object-cover"
                                            />
                                            <div className="absolute top-3 left-3 rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs text-white/80">
                                                Before
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src={pair.after}
                                                alt="After asphalt repair"
                                                width={900}
                                                height={700}
                                                className="h-56 w-full object-cover"
                                            />
                                            <div className="absolute top-3 left-3 rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs text-white/80">
                                                After
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 text-sm text-white/70">
                                        Common scopes: patching high-stress
                                        zones, sealing cracks, correcting failed
                                        sections near docks and turning radii.
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="space-y-6">
                        <SectionTitle
                            eyebrow="Process"
                            title="Simple, fast, operations-friendly"
                            desc="We confirm details and dispatch a local asphalt partner who can quote and schedule the job."
                        />

                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    n: "1",
                                    t: "Submit request",
                                    d: "Address, photos, service type, and urgency.",
                                },
                                {
                                    n: "2",
                                    t: "Confirm scope",
                                    d: "We validate details and coordinate expectations.",
                                },
                                {
                                    n: "3",
                                    t: "Partner dispatched",
                                    d: "Local crew quotes and schedules around operations.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.n}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-2xl bg-[#FBBF24] text-[#1A1A1A] grid place-items-center font-extrabold shadow">
                                            {step.n}
                                        </div>
                                        <div className="text-white font-semibold">
                                            {step.t}
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                                        {step.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SERVICE AREA */}
                    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div className="grid gap-8 md:grid-cols-2 items-start">
                            <div className="space-y-3">
                                <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                                    Service Area
                                </div>
                                <div className="text-2xl font-semibold tracking-tight text-white">
                                    Vernon + nearby cities
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    We focus on commercial/private properties in
                                    and around Vernon and Central Los Angeles:
                                </p>
                                <p className="text-white/75 text-sm">
                                    {AREA_SERVED.join(", ")}
                                </p>

                                <div className="pt-3 flex gap-3">
                                    <a
                                        href={`tel:${PHONE_E164}`}
                                        className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/5 transition"
                                    >
                                        Call {PHONE_DISPLAY}
                                    </a>
                                    <Link
                                        href="/#estimate"
                                        className="inline-flex items-center justify-center rounded-xl bg-[#FBBF24] px-4 py-3 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F59E0B] transition shadow"
                                    >
                                        Request Estimate
                                    </Link>
                                </div>
                            </div>

                            {/* Optional: swap this for a map image later */}
                            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                                <div className="text-white font-semibold">
                                    Tip for faster quotes
                                </div>
                                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                    Include photos of problem areas and a rough
                                    count/size (example: “6 potholes, ~18–24
                                    inches wide”). If docks are active, share
                                    preferred work windows.
                                </p>

                                <div className="mt-5 grid gap-3">
                                    {[
                                        "Photos (wide + close-up)",
                                        "Address / access notes",
                                        "Urgency (ASAP / this week)",
                                    ].map((x) => (
                                        <div
                                            key={x}
                                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                                        >
                                            {x}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ + ESTIMATE FORM */}
                    <section className="space-y-6">
                        <SectionTitle
                            eyebrow="FAQ"
                            title="Quick answers"
                            desc="If you don’t see your situation here, request an estimate and we’ll confirm scope and coverage."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {HOME_FAQS.map((f) => (
                                <div
                                    key={f.q}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                                >
                                    <div className="text-white font-semibold">
                                        {f.q}
                                    </div>
                                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                        {f.a}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <EstimateForm />
                    </section>
                </div>
            </main>
            <StickyMobileCall />
        </>
    );
}
