import PageLayout from "@/components/PageLayout";

export default function Services() {
    return (
        <PageLayout>
            <section className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-primary-500">
                    Our Services
                </h1>
                <p className="text-lg mb-4">
                    Star Asphalt & Concrete offers a full range of asphalt,
                    concrete, and construction services for residential,
                    commercial, and municipal clients. Our experienced team is
                    ready to handle projects of any size with professionalism
                    and care.
                </p>
                <ul className="list-disc pl-6 text-lg mb-4">
                    <li>Asphalt Paving & Repair</li>
                    <li>Concrete Driveways & Sidewalks</li>
                    <li>Sealcoating & Crack Repair</li>
                    <li>Pavement Markings & Signage</li>
                    <li>ADA Compliance Upgrades</li>
                    <li>Earthwork & Grading</li>
                    <li>And more!</li>
                </ul>
                <p className="text-lg text-gray-600">
                    (Detailed service descriptions coming soon!)
                </p>
            </section>
        </PageLayout>
    );
}
