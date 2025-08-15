import React from 'react'

function Aourstory() {
    return (
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
    )
}

export default Aourstory
