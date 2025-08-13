import React from 'react'

function Calltoaction() {
    
    const featuresData = [
        {
            title: "Fully Furnished",
            description: "All rooms come with beds, cupboards, Wi-Fi, and more.",
            icon: "🛋️", 
        },
        {
            title: "Prime Locations",
            description: "Stay close to your workplace, college, or city hotspots.",
            icon: "📍",
        },
        {
            title: "Affordable Pricing",
            description: "Choose from a variety of plans that fit your budget.",
            icon: "💰",
        },
    ];

    return (
        <section className="py-16 bg-yellow-400 text-center text-black">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect PG?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg px-4 sm:px-6 text-center break-words">
                Discover comfortable, affordable, and well-located paying guest accommodations
                tailored to your lifestyle. From budget-friendly rooms to premium stays,
                we’ve got something for everyone.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white text-black px-6 py-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 w-64 cursor-pointer"
                    >
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate("pglistning")}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition"
            >
                Browse Listings Now
            </button>

            <p className="mt-6 text-sm opacity-80">
                *Limited-time offers available on select PGs. Book early to save more.
            </p>
        </section>
    )
}

export default Calltoaction
