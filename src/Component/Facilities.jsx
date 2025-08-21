import React from 'react'

function Facilities() {
    return (
        <>
            < section className="py-16 bg-white" >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🛏", title: "Fully Furnished Rooms", desc: "Comfortable beds, study tables, and ample storage." },
                            { icon: "🍽", title: "Delicious Meals", desc: "Nutritious and tasty food served daily." },
                            { icon: "📶", title: "High-Speed WiFi", desc: "Stay connected for work and leisure." },
                            { icon: "🛡", title: "24/7 Security", desc: "CCTV monitoring and secure premises." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Facilities
