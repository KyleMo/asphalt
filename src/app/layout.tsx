import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { StickyMobileCall } from "@/components/Layout/StickyMobileCall";
import {
    BUSINESS_NAME,
    BUSINESS_TAGLINE,
    BUSINESS_DESCRIPTION,
    SITE_URL,
} from "@/lib/constants";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
        template: `%s | ${BUSINESS_NAME}`,
    },
    description: BUSINESS_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName: BUSINESS_NAME,
        title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
        description: BUSINESS_DESCRIPTION,
        url: SITE_URL,
        images: [{ url: "/website_banner.webp" }],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
                <StickyMobileCall />
            </body>
        </html>
    );
}
