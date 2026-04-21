import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { StickyMobileCall } from "@/components/Layout/StickyMobileCall";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
                <StickyMobileCall />
            </body>
        </html>
    );
}
