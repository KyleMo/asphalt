import React from "react";
import { brandClasses } from "@/lib/theme";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
        primary: `${brandClasses.background.primary} text-white hover:bg-secondary-500 focus:ring-primary-500`,
        secondary: `${brandClasses.background.secondary} text-white hover:bg-primary-500 focus:ring-secondary-500`,
        outline: `bg-transparent border-2 ${brandClasses.border.primary} ${brandClasses.text.primary} hover:bg-primary-500 hover:text-white focus:ring-primary-500`,
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
