export type FAQ = { q: string; a: string };
export type Benefit = { title: string; desc: string };
export type ProcessStep = { step: string; title: string; desc: string };

export type LandingPage = {
    slug: string;
    kind: "service" | "location";
    /** Short label for related-link cards and lists */
    navLabel: string;
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    heroSubtitle: string;
    heroImage: string;
    heroImageAlt: string;
    /** Body paragraphs for the overview section */
    intro: string[];
    /** Checklist bullets shown beside the overview */
    highlights: string[];
    benefits: Benefit[];
    process: ProcessStep[];
    faqs: FAQ[];
    /** Slugs of related landing pages to cross-link */
    related: string[];
    /** schema.org serviceType value */
    serviceType: string;
};

export const DEFAULT_PROCESS: ProcessStep[] = [
    {
        step: "1",
        title: "Request an Estimate",
        desc: "Send the property address, a few photos, and rough dimensions through the form or by phone. Small jobs can often be quoted right away.",
    },
    {
        step: "2",
        title: "Written Quote",
        desc: "When needed, a pro walks the site, confirms the scope, and gives you a clear written quote — no vague ballparks or surprise line items.",
    },
    {
        step: "3",
        title: "We Do the Work",
        desc: "Once approved, the job is scheduled around your operations. We handle everything start to finish and clean the site before we leave.",
    },
];
