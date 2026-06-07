"use client";

import { useEffect, useMemo, useState, forwardRef } from "react";
import { PHONE_DISPLAY, PHONE_E164, AREA_SERVED } from "@/lib/constants";

type FormState = {
    name: string;
    phone: string;
    company: string;
    address: string;
    city: string;
    service:
        | "Pothole Repair"
        | "Crack Filling"
        | "Asphalt Replacement"
        | "Industrial/Warehouse"
        | "Not sure";
    urgency: "ASAP" | "This week" | "This month" | "Planning";
    details: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
};

const DEFAULT: FormState = {
    name: "",
    phone: "",
    company: "",
    address: "",
    city: "Vernon, CA",
    service: "Not sure",
    urgency: "This week",
    details: "",
};

export const EstimateForm = forwardRef<HTMLDivElement>((props, ref) => {
    const [state, setState] = useState<FormState>(DEFAULT);
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [error, setError] = useState<string>("");

    const cities = useMemo(() => AREA_SERVED, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setState((s) => ({
            ...s,
            utm_source: params.get("utm_source") ?? undefined,
            utm_medium: params.get("utm_medium") ?? undefined,
            utm_campaign: params.get("utm_campaign") ?? undefined,
        }));
    }, []);

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setState((s) => ({ ...s, [key]: value }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("submitting");
        setError("");

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(state),
            });

            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt || "Request failed");
            }

            setStatus("success");
            setState(DEFAULT);
        } catch (err: any) {
            setStatus("error");
            setError(err?.message ?? "Something went wrong");
        }
    }

    return (
        <section id="home-estimate" ref={ref} className="scroll-mt-24">
            <div className="rounded-2xl border p-6 md:p-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold">
                        Request an Estimate
                    </h2>
                    <p className="opacity-80">
                        Share a few details and we’ll dispatch a local asphalt
                        partner for pricing and scheduling. Prefer phone? Call{" "}
                        <a className="underline" href={`tel:${PHONE_E164}`}>
                            {PHONE_DISPLAY}
                        </a>
                        .
                    </p>
                </div>

                {status === "success" && (
                    <div className="mt-4 rounded-xl border p-4">
                        <div className="font-medium">Request received.</div>
                        <div className="text-sm opacity-80">
                            We’ll reach out shortly to confirm details.
                        </div>
                    </div>
                )}

                {status === "error" && (
                    <div className="mt-4 rounded-xl border p-4">
                        <div className="font-medium">Couldn’t submit.</div>
                        <div className="text-sm opacity-80">{error}</div>
                    </div>
                )}

                <form
                    onSubmit={onSubmit}
                    className="mt-6 grid gap-4 md:grid-cols-2"
                >
                    <input
                        className="rounded-xl border p-3"
                        placeholder="Name*"
                        required
                        value={state.name}
                        onChange={(e) => update("name", e.target.value)}
                    />
                    <input
                        className="rounded-xl border p-3"
                        placeholder="Phone*"
                        required
                        value={state.phone}
                        onChange={(e) => update("phone", e.target.value)}
                    />

                    <input
                        className="rounded-xl border p-3"
                        placeholder="Company (optional)"
                        value={state.company}
                        onChange={(e) => update("company", e.target.value)}
                    />
                    <select
                        className="rounded-xl border p-3"
                        value={state.city}
                        onChange={(e) => update("city", e.target.value)}
                    >
                        {cities.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>

                    <input
                        className="rounded-xl border p-3 md:col-span-2"
                        placeholder="Property address*"
                        required
                        value={state.address}
                        onChange={(e) => update("address", e.target.value)}
                    />

                    <select
                        className="rounded-xl border p-3"
                        value={state.service}
                        onChange={(e) =>
                            update("service", e.target.value as any)
                        }
                    >
                        <option>Not sure</option>
                        <option>Pothole Repair</option>
                        <option>Crack Filling</option>
                        <option>Asphalt Replacement</option>
                        <option>Industrial/Warehouse</option>
                    </select>

                    <select
                        className="rounded-xl border p-3"
                        value={state.urgency}
                        onChange={(e) =>
                            update("urgency", e.target.value as any)
                        }
                    >
                        <option>ASAP</option>
                        <option>This week</option>
                        <option>This month</option>
                        <option>Planning</option>
                    </select>

                    <textarea
                        className="rounded-xl border p-3 md:col-span-2"
                        placeholder="Describe the issue (potholes count/size, crack areas, loading dock zone, access constraints, etc.)"
                        rows={5}
                        value={state.details}
                        onChange={(e) => update("details", e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="rounded-xl bg-black text-white py-3 font-semibold md:col-span-2 disabled:opacity-60"
                    >
                        {status === "submitting"
                            ? "Sending…"
                            : "Submit Request"}
                    </button>

                    <p className="text-xs opacity-70 md:col-span-2">
                        By submitting, you agree we may contact you about your
                        request.
                    </p>
                </form>
            </div>
        </section>
    );
});

EstimateForm.displayName = "EstimateForm";
