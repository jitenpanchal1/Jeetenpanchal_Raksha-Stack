import React from "react";

function AboutUs() {
    const teamMembers = [
        { name: "Amit Sharma", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Priya Verma", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Rohit Singh", role: "Product Manager", img: "https://randomuser.me/api/portraits/men/47.jpg" },
    ];

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 to-yellow-600/70"></div>
                <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeIn">
                        About Us
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 animate-fadeIn delay-200">
                        Providing comfortable and affordable PG accommodations with top-notch facilities for students and working professionals.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2020, our mission has always been to make finding PG accommodation simple, transparent, and stress-free.
                            We started with just a few rooms and have now grown into a trusted platform for thousands of students and professionals.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our dedicated team ensures that every PG listed meets our quality standards so that you feel at home, no matter where you are.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="Our Story"
                            className="rounded-2xl shadow-lg object-cover w-full h-80 transform hover:scale-105 transition duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-yellow-600">Our Mission</h3>
                        <p className="text-gray-600">
                            To create a reliable platform where students and professionals can easily find safe, affordable, and comfortable accommodations.
                        </p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-yellow-600">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the most trusted PG listing platform in India, offering a seamless booking experience and verified listings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-yellow-500 py-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Want to list your PG with us?</h2>
                <p className="text-white/90 mb-6">
                    Join our platform today and reach thousands of potential tenants.
                </p>
                <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition">
                    Get Started
                </button>
            </section>
        </div>
    );
}

export default AboutUs;
