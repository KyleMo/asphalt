import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING_PAGES, getLandingPage } from "@/lib/landing-pages";
import { SITE_URL } from "@/lib/constants";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";

export function generateStaticParams() {
    return LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const page = getLandingPage(slug);
    if (!page) return {};

    const url = `${SITE_URL}/${page.slug}`;
    return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            url,
            type: "website",
            images: [{ url: page.heroImage }],
        },
    };
}

export default async function LandingPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const page = getLandingPage(slug);
    if (!page) notFound();

    return <LandingPageTemplate page={page} />;
}
