import React from 'react'

function Amission() {
    return (
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
    )
}

export default Amission
