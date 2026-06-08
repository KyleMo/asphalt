import { ReactNode } from "react";

export function Pill({ text, children, onClick, active }: { text?: string; children?: ReactNode; onClick?: () => void; active?: boolean }) {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition
                ${active
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                    : "border-[var(--border)] bg-[var(--muted-surface)] text-[var(--text-muted)]"
                }
                ${onClick ? "cursor-pointer" : ""}`}
            onClick={onClick}
        >
            {children ?? text}
        </span>
    );
}
