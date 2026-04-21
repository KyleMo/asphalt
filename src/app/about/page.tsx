import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
    return (
        <PageLayout>
            <section className="max-w-2xl mx-auto py-12 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-neutral-700 mb-4">
                    Star Asphalt has proudly served customers throughout the
                    Pacific Northwest and Southern California for over five
                    years. Our commitment to quality, reliability, and customer
                    satisfaction has made us a trusted partner for both
                    residential and commercial projects.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                    Our team brings over a decade of hands-on experience in
                    asphalt and concrete services. We combine industry expertise
                    with a dedication to craftsmanship, ensuring every project
                    is completed to the highest standards.
                </p>
                <p className="text-lg text-neutral-700">
                    Whether you need asphalt paving, concrete work, or
                    comprehensive site solutions, you can count on us for
                    professional results and a seamless experience from start to
                    finish.
                </p>
            </section>
            <section
                id="who-we-are"
                className="max-w-2xl mx-auto py-12 px-4 text-center"
            >
                <h2 className="text-3xl font-bold mb-4 text-primary-600">
                    Who We Are
                </h2>
                <p className="text-lg text-neutral-700 mb-4">
                    We are a locally owned and operated family business that
                    cares about our clients and performs the highest quality
                    work for a fair price. We help the local workforce and keep
                    your money in the community.
                </p>
            </section>
            <section
                id="why-us"
                className="max-w-2xl mx-auto py-12 px-4 text-center"
            >
                <h2 className="text-3xl font-bold mb-4 text-primary-600">
                    Why Us
                </h2>
                <p className="text-lg text-neutral-700 mb-4">
                    Our biggest differentiators are found in our company values:
                    integrity, commitment to excellence, and quality work. See
                    the other 7 values we live and work by below.
                </p>
            </section>
            <section
                id="what-we-do"
                className="max-w-2xl mx-auto py-12 px-4 text-center"
            >
                <h2 className="text-3xl font-bold mb-4 text-primary-600">
                    What We Do
                </h2>
                <p className="text-lg text-neutral-700 mb-4">
                    We do all types of Asphalt Preservation, Concrete, and
                    Earthwork. Call or email us to set up a call or job walk to
                    see how we can serve you and your organization.
                </p>
            </section>
        </PageLayout>
    );
}
