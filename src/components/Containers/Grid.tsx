import { PropsWithChildren } from "react";

type GridInput = {
    columns: number;
    gap?: number;
};

export function Grid({ columns, gap, children }: PropsWithChildren<GridInput>) {
    return (
        <div
            className={`grid gap-${gap ? gap : 4}`}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
            {children}
        </div>
    );
}
