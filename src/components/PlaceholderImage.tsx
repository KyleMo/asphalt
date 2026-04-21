import React from "react";

export default function PlaceholderImage({
    text,
    className = "",
    aspect = "aspect-video",
}: {
    text: string;
    className?: string;
    aspect?: string;
}) {
    return (
        <div
            className={`relative bg-gray-300 flex items-center justify-center rounded overflow-hidden ${aspect} ${className}`}
        >
            <span className="absolute inset-0 flex items-center justify-center text-center text-gray-700 font-semibold px-2 text-base select-none">
                {text}
            </span>
        </div>
    );
}
