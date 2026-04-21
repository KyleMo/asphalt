import Link from "next/link";
import {
    BUSINESS_NAME,
    PHONE_DISPLAY,
    PHONE_E164,
    AREA_SERVED,
} from "@/lib/constants";

export function Footer() {
    return (
        <footer className="mt-20 bg-[#0B1220] text-white border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
                {/* Brand + CTA */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-[#FBBF24] text-[#1A1A1A] grid place-items-center font-extrabold shadow">
                            LA
                        </div>
                        <div className="font-semibold tracking-tight">
                            {BUSINESS_NAME}
                        </div>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed">
                        Commercial asphalt repair for industrial and private
                        properties across Vernon and Central Los Angeles.
                        Request an estimate and we’ll dispatch a local asphalt
                        partner.
                    </p>

                    <div className="flex flex-col gap-2">
                        <a
                            href={`tel:${PHONE_E164}`}
                            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/5 transition"
                        >
                            Call {PHONE_DISPLAY}
                        </a>

                        <Link
                            href="/#estimate"
                            className="inline-flex items-center justify-center rounded-xl bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#1A1A1A] hover:bg-[#F59E0B] transition shadow"
                        >
                            Request Estimate
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <div className="font-semibold text-white mb-4">
                        Services
                    </div>
                    <ul className="space-y-3 text-sm">
                        {[
                            {
                                href: "/pothole-repair-central-los-angeles",
                                label: "Pothole Repair",
                            },
                            {
                                href: "/asphalt-crack-filling-central-los-angeles",
                                label: "Crack Filling",
                            },
                            {
                                href: "/asphalt-replacement-central-los-angeles",
                                label: "Asphalt Replacement",
                            },
                            {
                                href: "/industrial-warehouse-asphalt-repair",
                                label: "Industrial & Warehouse Repair",
                            },
                            {
                                href: "/vernon-ca-asphalt-repair",
                                label: "Vernon, CA",
                            },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-white/70 hover:text-white transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Service Area */}
                <div>
                    <div className="font-semibold text-white mb-4">
                        Service Area
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                        {AREA_SERVED.join(", ")}
                    </p>

                    <div className="mt-6 text-xs text-white/50">
                        Commercial and private properties only.
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-white/50">
                    <div>
                        © {new Date().getFullYear()} {BUSINESS_NAME}. All rights
                        reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/#estimate"
                            className="hover:text-white transition"
                        >
                            Request Estimate
                        </Link>
                        <a
                            href={`tel:${PHONE_E164}`}
                            className="hover:text-white transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
