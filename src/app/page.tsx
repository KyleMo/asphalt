import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const asphaltServices = [
    "ADA Compliance",
    "Asphalt Repair & Paving",
    "Asphalt Sealcoating",
    "Crack Repair & Sealing",
    "Curb Painting",
    "Pavement Markings",
    "Pressure Washing",
    "Signage",
    "Thermoplastic Striping",
];

const concreteServices = [
    "Driveways",
    "Sealing",
    "New ADA Ramps",
    "Curbs",
    "Sidewalks",
    "Valley Gutters",
    "Crack Repair",
];

const serviceIcons = [
    { label: "ASPHALT PRESERVATION" },
    { label: "STRIPING & SIGNAGE" },
    { label: "ADA COMPLIANCE" },
    { label: "CRACK FILL & POTHOLE REPAIR" },
    { label: "CONCRETE INSTALLATION" },
];

export default function Home() {
    return (
        <PageLayout
            hero={
                <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
                    {/* Full-width Hero Image */}
                    <Image
                        src="/website_banner.webp"
                        alt="Aerial view of fresh asphalt paving (hero image)"
                        fill
                        style={{ objectFit: "cover" }}
                        className="z-0"
                        priority
                    />
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-neutral-900/60 z-5" />
                    {/* Call to Action Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full pb-8">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 uppercase tracking-wide text-white drop-shadow-lg text-center">
                                Full-Service Asphalt <br /> and Paving Services
                            </h1>
                            <p className="text-base font-medium mb-6 text-white/90 text-center">
                                We are a local provider of professional asphalt,
                                concrete, and construction services. Call us or
                                request a quote to get started!
                            </p>
                            <div className="flex justify-center">
                                <a
                                    href="#contact"
                                    className="inline-block bg-primary-500 text-white font-semibold rounded px-6 py-3 text-base shadow hover:bg-primary-600 transition-colors"
                                >
                                    Request a Free Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            }
        >
            {/* ASPHALT, CONCRETE SERVICES (2-column grid on tablet) */}
            <section className="mt-8 md:grid md:grid-cols-2 md:gap-4 md:bg-gradient-to-r md:from-gray-100 md:to-white md:py-8">
                {/* Asphalt Services */}
                <div className="mb-8 md:mb-0 md:rounded md:shadow md:bg-white md:flex md:flex-col">
                    <div className="bg-primary-500 text-white font-bold px-4 py-2 text-left text-2xl md:text-3xl md:rounded-t">
                        Asphalt Services
                    </div>
                    <div className="md:flex md:flex-1">
                        {/* Left side - Services list */}
                        <div className="w-full md:w-1/2 flex-1">
                            <div className="px-4 pt-4"></div>
                            <ul className="bg-white px-4 py-4 text-left text-neutral-900 text-base space-y-2 md:bg-transparent md:p-0 md:pb-4 pl-4">
                                {asphaltServices.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-primary-500 mt-1 ml-4">
                                            ✔️
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right side - Image (only on large screens) */}
                        <div className="hidden lg:block lg:w-1/2 lg:p-4">
                            <div className="relative w-full h-full min-h-[200px] rounded overflow-hidden">
                                <img
                                    src="/asphalt-paving-service.webp"
                                    style={{
                                        objectFit: "cover",
                                        minHeight: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-4 mt-auto">
                        <a
                            href="#"
                            className="block w-full text-center bg-neutral-900 text-white rounded py-2 font-semibold hover:bg-neutral-800 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Concrete Services */}
                <div className="mb-8 md:mb-0 md:rounded md:shadow md:bg-white md:flex md:flex-col">
                    <div className="bg-secondary-500 text-white font-bold px-4 py-2 text-left text-2xl md:text-3xl md:rounded-t">
                        Concrete
                    </div>
                    <div className="md:flex md:flex-1">
                        {/* Left side - Services list */}
                        <div className="w-full md:w-1/2 flex-1">
                            <div className="px-4 pt-4"></div>
                            <ul className="bg-white px-4 py-4 text-left text-neutral-900 text-base space-y-2 md:bg-transparent md:p-0 md:pb-4 pl-4">
                                {concreteServices.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-secondary-500 mt-1 ml-4">
                                            ✔️
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right side - Image (only on large screens) */}
                        <div className="hidden lg:block lg:w-2/3 lg:p-4">
                            <div className="flex justify-center align-center relative w-full h-full min-h-[200px] rounded overflow-hidden">
                                <img
                                    src="/concrete-driveway.webp"
                                    style={{
                                        objectFit: "cover",
                                        minHeight: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-4 mt-auto">
                        <a
                            href="#"
                            className="block w-full text-center bg-neutral-900 text-white rounded py-2 font-semibold hover:bg-neutral-800 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT/WHY/WHAT SECTIONS (3-column grid on tablet) */}
            <section className="mt-8 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
                <div className="bg-white rounded shadow p-4 flex flex-col">
                    <div className="relative bg-gray-300 flex items-center justify-center rounded overflow-hidden aspect-square mb-4 w-full max-w-xs h-40 mx-auto">
                        <span className="absolute inset-0 flex items-center justify-center text-center text-gray-700 font-semibold px-2 text-base select-none">
                            Photo of company team or owner
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase text-primary-600">
                        Who We Are?
                    </h2>
                    <p className="text-base mb-4 text-neutral-800">
                        We are a locally owned and operated family business that
                        cares about our clients and performs the highest quality
                        work for a fair price. We help the local workforce and
                        keep your money in the community.
                    </p>
                    <a
                        href="/about#who-we-are"
                        className="inline-block bg-primary-500 text-white rounded px-4 py-2 font-semibold hover:bg-primary-600 transition-colors mt-auto"
                    >
                        Read More
                    </a>
                </div>
                <div className="bg-white rounded shadow p-4 flex flex-col">
                    <div className="relative bg-gray-300 flex items-center justify-center rounded overflow-hidden aspect-square mb-4 w-full max-w-xs h-40 mx-auto">
                        <span className="absolute inset-0 flex items-center justify-center text-center text-gray-700 font-semibold px-2 text-base select-none">
                            Photo of handshake or customer interaction
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase text-primary-600">
                        Why Us?
                    </h2>
                    <p className="text-base mb-4 text-neutral-800">
                        Our biggest differentiators are found in our company
                        values: integrity, commitment to excellence, and quality
                        work. See the other 7 values we live and work by below.
                    </p>
                    <a
                        href="/about#why-us"
                        className="inline-block bg-primary-500 text-white rounded px-4 py-2 font-semibold hover:bg-primary-600 transition-colors mt-auto"
                    >
                        Read More
                    </a>
                </div>
                <div className="bg-white rounded shadow p-4 flex flex-col">
                    <div className="relative bg-gray-300 flex items-center justify-center rounded overflow-hidden aspect-square mb-4 w-full max-w-xs h-40 mx-auto">
                        <span className="absolute inset-0 flex items-center justify-center text-center text-gray-700 font-semibold px-2 text-base select-none">
                            Photo of completed project or before/after
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase text-primary-600">
                        What We Do?
                    </h2>
                    <p className="text-base mb-4 text-neutral-800">
                        We do all types of Asphalt Preservation, Concrete, and
                        Earthwork. Call or email us to set up a call or job walk
                        to see how we can serve you and your organization.
                    </p>
                    <a
                        href="/about#what-we-do"
                        className="inline-block bg-primary-500 text-white rounded px-4 py-2 font-semibold hover:bg-primary-600 transition-colors mt-auto"
                    >
                        Read More
                    </a>
                </div>
            </section>

            {/* SERVICE ICONS + IMAGE (side by side, vertical list, top-aligned, 50/50 split) */}
            <section
                className="mt-8 md:grid md:grid-cols-2 md:gap-4"
                style={{ minHeight: 400 }}
            >
                {/* Left - Service list (vertical, centered horizontally, top-aligned, 50%) */}
                <div
                    className="flex flex-col items-center justify-start py-4 w-full"
                    style={{
                        backgroundImage: "url('asphalt-background.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="flex flex-col items-center justify-center space-y-6 flex-1">
                        {serviceIcons.map((service) => (
                            <div
                                key={service.label}
                                className="flex items-center"
                            >
                                <span className="font-bold text-2xl tracking-wide text-primary-600 text-center">
                                    {service.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right - Image (top-aligned, 50%) */}
                <div className="flex items-start justify-center w-full p-0 h-full">
                    <iframe
                        title="Service Area Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.434234833635!2d-118.3964666847826!3d34.02112298061337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b97e6e6e6e6e%3A0x8e6b1b1b1b1b1b1b!2sCulver%20City%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus&z=9"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        className="h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* MAP & CONTACT SECTION (2 columns on tablet) */}
            <section
                id="contact"
                className="mt-8 md:grid md:grid-cols-2 md:gap-4"
            >
                <div className="bg-primary-500 text-white rounded p-4 mb-4 md:mb-0 md:ml-0 md:flex md:flex-col md:justify-center md:h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                        Contact Us
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-icons" aria-hidden>
                            location_on
                        </span>
                        <span>Los Angeles, California, USA</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-icons" aria-hidden>
                            call
                        </span>
                        <a href="tel:2537096030" className="underline">
                            253-709-6030
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-icons" aria-hidden>
                            email
                        </span>
                        <a href="mailto:kyle@starac.com" className="underline">
                            kyle@starac.com
                        </a>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:opacity-80"
                        >
                            <span className="material-icons">facebook</span>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="hover:opacity-80"
                        >
                            <span className="material-icons">twitter</span>
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:opacity-80"
                        >
                            <span className="material-icons">Instagram</span>
                        </a>
                    </div>
                </div>
                <form className="bg-white p-4 rounded shadow-md">
                    <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block font-medium mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </PageLayout>
    );
}
