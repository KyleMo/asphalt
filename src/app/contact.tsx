import PageLayout from "@/components/PageLayout";

export default function Contact() {
    return (
        <PageLayout>
            <section className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-primary-500">
                    Contact Us
                </h1>
                <p className="text-lg mb-6">
                    Have a question or want to request a quote? Fill out the
                    form below or reach out directly and our team will get back
                    to you as soon as possible.
                </p>
                <form className="space-y-4 max-w-xl">
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="you@email.com"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-1 font-semibold"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 text-white font-semibold rounded px-6 py-2 hover:bg-primary-600 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-lg">
                    <div className="mb-2">
                        <span className="font-semibold">Phone:</span>{" "}
                        <a href="tel:2537096030" className="underline">
                            253-709-6030
                        </a>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:kyle@starac.com" className="underline">
                            kyle@starac.com
                        </a>
                    </div>
                    <div>
                        <span className="font-semibold">Location:</span> Los
                        Angeles, California, USA
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
