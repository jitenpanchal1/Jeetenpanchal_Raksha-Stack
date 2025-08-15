import React from 'react'

function Ateam() {
    const teamMembers = [
        { name: "Amit Sharma", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Priya Verma", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Rohit Singh", role: "Product Manager", img: "https://randomuser.me/api/portraits/men/47.jpg" },
    ];
    return (
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
    )
}

export default Ateam
