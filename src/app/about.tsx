import PageLayout from "@/components/PageLayout";

export default function About() {
    return (
        <PageLayout>
            <section className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-primary-500">
                    About Us
                </h1>
                <p className="text-lg mb-4">
                    Welcome to Star Asphalt & Concrete! We are a locally owned
                    and operated business dedicated to providing high-quality
                    asphalt, concrete, and construction services. Our team is
                    committed to excellence, integrity, and customer
                    satisfaction.
                </p>
                <p className="text-lg mb-4">
                    With years of experience in the industry, we take pride in
                    our workmanship and our ability to deliver reliable results
                    for every project, big or small. Thank you for considering
                    us for your paving and construction needs.
                </p>
                <p className="text-lg text-gray-600">
                    (More about our story, team, and values coming soon!)
                </p>
            </section>
        </PageLayout>
    );
}
