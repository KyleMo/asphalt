import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants";

export function StickyMobileCall() {
    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <div className="rounded-2xl border bg-white/90 backdrop-blur p-2 shadow">
                <a
                    href={`tel:${PHONE_E164}`}
                    className="block w-full rounded-xl bg-black text-white py-3 text-center font-semibold"
                >
                    Call {PHONE_DISPLAY}
                </a>
            </div>
        </div>
    );
}
