import React from 'react'

function AHerosectiin() {
    return (

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

    )
}

export default AHerosectiin

