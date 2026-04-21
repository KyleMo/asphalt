"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PageLayoutProps {
    children: React.ReactNode;
}

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function PageLayout({
    children,
    hero,
}: {
    children: React.ReactNode;
    hero?: React.ReactNode;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((open) => !open);
    };
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-neutral-900 shadow-lg border-b border-primary-500/20 z-20 relative">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-24">
                        {/* Logo (hidden on mobile) */}
                        <a href="/" className="flex items-center gap-2">
                            <span className="hidden md:block">
                                <Image
                                    src="/logo/star-asphalt.webp"
                                    alt="Star Asphalt & Concrete Logo"
                                    width={64}
                                    height={64}
                                    priority
                                />
                            </span>
                            <span className="font-bold text-xl md:text-2xl tracking-wide text-primary-500">
                                Star Asphalt & Concrete
                            </span>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`$${
                                            link.href === "/"
                                                ? "text-primary-500"
                                                : "text-gray-300"
                                        } hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="text-gray-300 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Animated Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 right-0 h-full w-4/5 transition-transform duration-300 ease-in-out bg-neutral-900/95 backdrop-blur-sm ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{ zIndex: 2147483647, position: "fixed" }}
                >
                    <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <Image
                                src="/logo/star-asphalt.webp"
                                alt="Star Asphalt & Concrete Logo"
                                width={64}
                                height={64}
                                className="mr-3"
                                priority
                            />
                            <span className="text-lg font-bold text-primary-500">
                                Star Asphalt & Concrete
                            </span>
                        </div>
                        <button
                            type="button"
                            className="text-gray-300 hover:text-primary-500 focus:outline-none"
                            aria-label="Close menu"
                            onClick={closeMobileMenu}
                        >
                            <svg
                                className="block h-7 w-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col items-center mt-8 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-xl font-semibold text-white hover:text-primary-500 transition-colors py-2 px-6 rounded"
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Optional Hero Section (full width, no padding) */}
            {hero}

            {/* Main Content Wrapper with consistent horizontal padding */}
            <main className="flex-1 w-full px-4 md:px-8 lg:px-16 mx-auto">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-neutral-900 border-t border-primary-500/20">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/logo/star-asphalt.webp"
                                    alt="Star Asphalt & Concrete Logo"
                                    width={40}
                                    height={40}
                                    className="mr-3"
                                />
                                <h3 className="text-lg font-semibold text-primary-500">
                                    Star Asphalt & Concrete
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Professional asphalt and concrete services for
                                all your paving needs. Quality workmanship and
                                reliable service.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                                Services
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/services/asphalt-paving"
                                        className="text-gray-300 hover:text-primary-500 text-sm transition-colors"
                                    >
                                        Asphalt Paving
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/concrete"
                                        className="text-gray-300 hover:text-primary-500 text-sm transition-colors"
                                    >
                                        Concrete Work
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/sealcoating"
                                        className="text-gray-300 hover:text-primary-500 text-sm transition-colors"
                                    >
                                        Sealcoating
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/repairs"
                                        className="text-gray-300 hover:text-primary-500 text-sm transition-colors"
                                    >
                                        Repairs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-gray-300 text-sm">
                                    <span className="font-medium text-secondary-500">
                                        Phone:
                                    </span>{" "}
                                    (555) 123-4567
                                </li>
                                <li className="text-gray-300 text-sm">
                                    <span className="font-medium text-secondary-500">
                                        Email:
                                    </span>{" "}
                                    info@starasphalt.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-8 pt-8 border-t border-primary-500/20">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Star Asphalt &
                                Concrete. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a
                                    href="/privacy"
                                    className="text-gray-400 hover:text-primary-500 text-sm transition-colors"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="/terms"
                                    className="text-gray-400 hover:text-primary-500 text-sm transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
