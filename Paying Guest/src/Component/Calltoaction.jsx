import React from 'react';
import { useNavigate } from 'react-router';

function Calltoaction() {
    const navigate = useNavigate();

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
        <section className="py-16 bg-yellow-400 text-center text-black md:py-24">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Ready to Find Your Perfect PG?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base sm:text-lg md:text-xl px-4 sm:px-6 leading-relaxed md:leading-loose">
                Discover comfortable, affordable, and well-located paying guest accommodations
                tailored to your lifestyle. From budget-friendly rooms to premium stays,
                we’ve got something for everyone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-8 mb-10">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white text-black px-6 py-6 md:px-8 md:py-10 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center md:hover:scale-105"
                    >
                        <div className="text-4xl md:text-5xl mb-3">{feature.icon}</div>
                        <h3 className="font-bold text-lg md:text-xl mb-2">{feature.title}</h3>
                        <p className="text-sm md:text-base leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={() => navigate("/pglistning")}
                className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 rounded-full font-semibold text-base sm:text-lg md:text-xl hover:bg-gray-800 transition shadow-lg md:hover:scale-105"
            >
                Browse Listings Now
            </button>
            <p className="mt-6 text-xs sm:text-sm md:text-base opacity-80 px-4">
                *Limited-time offers available on select PGs. Book early to save more.
            </p>
        </section>
    );
}

export default Calltoaction;
