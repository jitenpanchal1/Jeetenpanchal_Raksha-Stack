import React from 'react'
import "../Css/About.css"

function About() {
    return (
        <div>
            <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 animate-slideInLeft">About PG Finder</h2>
                        <p className="text-gray-700 mb-4 hover:scale-[1.01] transition-transform duration-300">
                            PG Finder helps you discover the best Paying Guest accommodations across the city.
                            Whether you're a student, a working professional, or new in town, we make finding your home away from home effortless.
                        </p>
                        <p className="text-gray-700 hover:scale-[1.01] transition-transform duration-300">
                            With verified listings, transparent pricing, and reliable support, we ensure your stay is comfortable and worry-free.
                        </p>

                        {/* Feature Points */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: "🏠", title: "Verified PGs", desc: "All listings are verified for safety & comfort." },
                                { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges, only honest pricing." },
                                { icon: "📍", title: "Citywide Reach", desc: "Find PGs in every corner of the city." },
                                { icon: "📞", title: "24/7 Support", desc: "We are here to help anytime you need." }
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="PG Accommodation"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
