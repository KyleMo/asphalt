"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants";

const nav = [
    { href: "/pothole-repair-central-los-angeles", label: "Pothole Repair" },
    {
        href: "/asphalt-crack-filling-central-los-angeles",
        label: "Crack Filling",
    },
    { href: "/asphalt-replacement-central-los-angeles", label: "Replacement" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--header-border)] bg-[var(--header-bg)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
                <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-w-0 items-center gap-3"
                >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-xl)] bg-[var(--accent)] font-extrabold text-[var(--accent-text)] shadow-sm">
                        LA
                    </div>

                    <div className="min-w-0 leading-tight">
                        <div className="truncate text-sm font-semibold uppercase tracking-[0.14em] text-[var(--header-text)] sm:text-base">
                            {BUSINESS_NAME}
                        </div>
                        <div className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[var(--header-text-muted)] sm:flex">
                            <span className="inline-block h-[2px] w-6 bg-[var(--accent)]" />
                            Commercial • Private Property
                        </div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-6 lg:flex">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-[var(--header-text-muted)] transition hover:text-[var(--header-text)]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

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

                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-xl)] border border-white/15 text-[var(--header-text)] transition hover:border-white/25 hover:bg-white/5 lg:hidden"
                    >
                        <span className="sr-only">Menu</span>

                        <span className="relative block h-5 w-5">
                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded bg-current transition duration-300 ease-in-out ${
                                    mobileOpen
                                        ? "translate-y-0 rotate-45"
                                        : "-translate-y-1.5 rotate-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded bg-current transition duration-200 ease-in-out ${
                                    mobileOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded bg-current transition duration-300 ease-in-out ${
                                    mobileOpen
                                        ? "translate-y-0 -rotate-45"
                                        : "translate-y-1.5 rotate-0"
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden border-t border-white/10 transition-all duration-300 ease-in-out lg:hidden ${
                    mobileOpen
                        ? "max-h-[420px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div
                    className={`mx-auto max-w-6xl px-4 py-4 transition-all duration-300 ease-in-out ${
                        mobileOpen ? "translate-y-0" : "-translate-y-2"
                    }`}
                >
                    <nav className="flex flex-col">
                        {nav.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`border-b border-white/10 py-3 text-sm font-medium text-[var(--header-text-muted)] transition-all duration-300 hover:text-[var(--header-text)] ${
                                    mobileOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-2 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: mobileOpen
                                        ? `${index * 40}ms`
                                        : "0ms",
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div
                            className={`mt-4 flex flex-col gap-2 transition-all duration-300 ${
                                mobileOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-2 opacity-0"
                            }`}
                            style={{
                                transitionDelay: mobileOpen
                                    ? `${nav.length * 40}ms`
                                    : "0ms",
                            }}
                        >
                            <a
                                href={`tel:${PHONE_E164}`}
                                className="inline-flex items-center justify-center rounded-[var(--radius-xl)] border border-white/15 px-3 py-3 text-sm font-semibold text-[var(--header-text)] transition hover:border-white/25 hover:bg-white/5"
                            >
                                Call {PHONE_DISPLAY}
                            </a>

                            <Link
                                href="/#estimate"
                                onClick={() => setMobileOpen(false)}
                                className="inline-flex items-center justify-center rounded-[var(--radius-xl)] bg-[var(--accent)] px-3 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)]"
                            >
                                Request Estimate
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
