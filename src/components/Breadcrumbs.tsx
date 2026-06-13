import Link from "next/link";
import { SchemaBreadcrumb } from "./schemas/SchemaBreadcrumb";

export function Breadcrumbs({
    items,
}: {
    items: { name: string; href: string }[];
}) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="border-b border-[var(--border)] bg-[var(--background)]"
        >
            <SchemaBreadcrumb items={items} />
            <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-6 py-3 text-xs text-[var(--text-muted)]">
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    return (
                        <li key={item.href} className="flex items-center gap-2">
                            {isLast ? (
                                <span
                                    aria-current="page"
                                    className="font-semibold text-[var(--text)]"
                                >
                                    {item.name}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={item.href}
                                        className="transition hover:text-[var(--text)]"
                                    >
                                        {item.name}
                                    </Link>
                                    <span className="text-[var(--text-faint)]">
                                        /
                                    </span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
