"use client";
import Image from "next/image";
import Link from "next/link";
import { StickyMobileCall } from "@/components/Layout/StickyMobileCall";
import { EstimateForm } from "@/components/EstimateForm";

import { PHONE_DISPLAY, PHONE_E164, BUSINESS_NAME } from "@/lib/constants";
import { SchemaLocalBusiness } from "@/components/schemas/HomepageSchema";
import { SchemaFAQ } from "@/components/schemas/SchemaFaq";
import { useRef, useState } from "react";
import { Pill } from "@/components/Containers/Pill";

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

const serviceAreas: { id: string; name: string; iframeUrl: string }[] = [
    {
        id: "vernon",
        name: "Vernon",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.32403183519875!3d33.99676534214896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c8d3cfe0eeaf%3A0x2165b53b36077693!2sVernon%2C%20CA!5e0!3m2!1sen!2sus!4v1780867952888!5m2!1sen!2sus",
    },
    {
        id: "santamonica",
        name: "Santa Monica",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.52391349868401!3d34.00872023308046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1780868738869!5m2!1sen!2sus",
    },
    {
        id: "culvercity",
        name: "Culver City",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.42962409868841!3d34.0059917331465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba1edb77739d%3A0x3185e9d14beb59fe!2sCulver%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1780869143669!5m2!1sen!2sus",
    },
    {
        id: "midcity",
        name: "Mid City",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.36912041596322!3d34.04111732057725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8f9c97be62b%3A0xde136f8ec360d2a!2sMid-City%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1780869176119!5m2!1sen!2sus",
    },
    {
        id: "hollywood",
        name: "Hollywood",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.34566791594204!3d34.09444387025635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1780869221670!5m2!1sen!2sus",
    },
    {
        id: "torrance",
        name: "Torrance",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.44167717834812!3d33.879933892327564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4ad158b3ded3%3A0xad4bd36e4e0a661e!2sTorrance%2C%20CA!5e0!3m2!1sen!2sus!4v1780869289983!5m2!1sen!2sus",
    },
    {
        id: "westlake",
        name: "Westlake",
        iframeUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31469.609682527942!2d-118.44167717834812!3d33.879933892327564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7a692287f8b%3A0x21ffbf91ef53e292!2sWestlake%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1780869322159!5m2!1sen!2sus",
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
    const estimateRef = useRef<HTMLDivElement>(null);
    const [selectedAreaId, setSelectedAreaId] = useState<string>(
        serviceAreas[0].id,
    );
    const selectedArea = serviceAreas.find((a) => a.id === selectedAreaId)!;

    const handleAreaClick = (areaId: string) => setSelectedAreaId(areaId);

    const triggerScrollIntoView = () => {
        if (estimateRef.current)
            estimateRef.current.scrollIntoView({ behavior: "smooth" });
    };
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
                                Roadway repair for private and commercial
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

                                <div
                                    onClick={triggerScrollIntoView}
                                    className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)]"
                                >
                                    Request Estimate
                                </div>
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
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN */}
            <main>
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
                        <SectionTitle
                            eyebrow="Services Offered"
                            title="Repair services for high-traffic properties"
                            desc="We handle the most common failure points in commercial and industrial lots across West and Central Los Angeles — from potholes to full asphalt replacement."
                        />

                        {/* Service Grid */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Pothole Repair",
                                    desc: "Fast patching for active damage in high-traffic areas.",
                                    image: "/asphalt-paving-service.webp",
                                },
                                {
                                    title: "Crack Filling",
                                    desc: "Prevent water intrusion and structural failure.",
                                    image: "/crackfill.jpg",
                                },
                                {
                                    title: "Asphalt Replacement",
                                    desc: "Remove and replace failed sections of pavement.",
                                    image: "/asphalt-prep.webp",
                                },
                                {
                                    title: "Concrete Installation",
                                    desc: "Our team has several years of experience installing concrete driveways, stairs, and more.",
                                    image: "/concrete-driveway.webp",
                                },
                                {
                                    title: "Curbing",
                                    desc: "Guide, stop, and redirect traffic with painted curbs.",
                                    image: "/asphalt-background.webp",
                                },
                                {
                                    title: "Striping and Stenciling",
                                    desc: "Revitalize your parking lot with fresh paint.",
                                    image: "/sealcoating.webp",
                                },
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--background)] transition hover:border-[var(--accent)]"
                                >
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-base font-semibold text-[var(--text)]">
                                            {service.title}
                                        </div>
                                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
                        <SectionTitle
                            eyebrow={`Why ${BUSINESS_NAME}`}
                            title="Reliable pavement care at a price that makes sense"
                            desc={`${BUSINESS_NAME} brings years of hands-on experience delivering timely, meticulous asphalt and concrete repairs — at a cost that won't slow down your business. Focus on keeping operations running; we'll keep your infrastructure in top condition.`}
                        />

                        <div className="flex flex-col gap-10 mt-8 lg:flex-row lg:justify-center">
                            <div className="lg:mt-5">
                                <div className="border-l-4 border-[var(--accent)] pl-4">
                                    <p className="text-md font-semibold text-[var(--text)]">
                                        Serving Vernon and surrounding
                                        industrial areas
                                    </p>
                                    <p className="mt-1 text-md text-[var(--text-muted)]">
                                        Los Angeles, Commerce, Huntington Park,
                                        Maywood, Bell, South Gate, Cudahy, Bell
                                        Gardens, and East Los Angeles.
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3 text-white/75 text-md">
                                    {[
                                        "Repairs scheduled around your operations — not the other way around",
                                        "Durable results built to withstand high-traffic, high-stress environments",
                                        "Over 7 years of combined expertise across asphalt and concrete",
                                        "Transparent pricing with no surprise costs — just honest, quality work",
                                    ].map((x) => (
                                        <li key={x} className="flex gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#FBBF24]" />
                                            <span style={{ color: "black" }}>
                                                {x}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Image + overlay wrapper */}
                            <div className="relative shrink-0 w-full h-[400px] lg:w-[500px] lg:h-[350px]">
                                <Image
                                    src="/concrete-driveway.webp"
                                    alt="Industrial warehouse asphalt repair in Central Los Angeles"
                                    width={1538}
                                    height={1241}
                                    className="object-cover w-full h-full rounded-[var(--radius-2xl)]"
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 rounded-[var(--radius-2xl)] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Text content */}
                                <div className="absolute bottom-0 left-0 p-5">
                                    <p className="text-xs font-semibold tracking-widest uppercase text-[#FBBF24] mb-2">
                                        On the job
                                    </p>
                                    <p className="text-white font-bold text-xl leading-snug mb-1">
                                        Framing and finishing, done right the
                                        first time
                                    </p>
                                    <p className="text-white/70 text-sm leading-snug">
                                        The finish is where craftsmanship shows.
                                        We slow down at the details so the final
                                        surface is something you can take pride
                                        in for years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-b border-[var(--border)] bg-[var(--background)]">
                    <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
                        <SectionTitle
                            eyebrow="Our Process"
                            title="Simple, fast, operations-friendly"
                            desc="We confirm details and dispatch a local asphalt partner who can quote and schedule the job."
                        />

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    step: "1",
                                    title: "Request an Estimate",
                                    desc: "Fill out the short form or give us a call. We collect a few details about your property and so we can ensure a job well done. Sometimes for small jobs we can provide an estimate over the phone.",
                                },
                                {
                                    step: "2",
                                    title: "Written Quote",
                                    desc: "If needed a professional will come out to access the property, confirms the scope, and provid a clear written quote — no vague ballparks or surprise line items.",
                                },
                                {
                                    step: "3",
                                    title: "We Do the Work",
                                    desc: "Once you approve, the job is scheduled around your operations. We handle everything from start to finish and clean up before we leave.",
                                },
                            ].map((item) => (
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
                {/* BEFORE / AFTER */}
                {/*<section className="space-y-6">
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
                    </section>*/}

                {/* SERVICE AREA */}
                <section className="border-b border-[var(--border)] bg-[var(--muted-surface)]">
                    <div className="mx-auto max-w-6xl px-6 py-5 lg:py-10">
                        <SectionTitle
                            eyebrow="Service Area"
                            title="West to Central Los Angeles"
                            desc="We focus on commercial/private properties in and around West to Central Los Angeles:"
                        />

                        <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-10">
                            <div className="flex flex-col gap-8 md:flex-row">
                                <div className="flex flex-1 flex-col gap-5">
                                    <h3 className="text-xl font-bold tracking-tight text-[var(--text)]">
                                        Where We Work
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[var(--text-muted)] p-0">
                                        Industrial corridors, truck yards, dock
                                        approaches, and private lots —
                                        coordinated around your shift schedule.
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {serviceAreas.map((area) => {
                                            return (
                                                <Pill
                                                    key={area.id}
                                                    text={area.name}
                                                    active={
                                                        area.id ===
                                                        selectedAreaId
                                                    }
                                                    onClick={() =>
                                                        handleAreaClick(area.id)
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className="flex shrink-0 items-center gap-2">
                                        <a
                                            href={`tel:${PHONE_E164}`}
                                            className="hidden items-center justify-center rounded-[var(--radius-xl)] border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--header-text)] transition hover:border-white/25 hover:bg-white/5 lg:inline-flex"
                                        >
                                            Call {PHONE_DISPLAY}
                                        </a>

                                        <Link
                                            href="/#estimate"
                                            className="hidden items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)] sm:inline-flex"
                                        >
                                            Request Estimate
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col min-h-[300px]">
                                    <iframe
                                        className="flex-1 w-full rounded-[var(--radius-2xl)]"
                                        src={selectedArea.iframeUrl}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
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

                    <EstimateForm ref={estimateRef} />
                </section>
            </main>
            <StickyMobileCall />
        </>
    );
}
