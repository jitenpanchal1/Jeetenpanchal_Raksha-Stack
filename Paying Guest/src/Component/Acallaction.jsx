import React from 'react'
import { useNavigate } from 'react-router'

function Acallaction() {

    const navigate = useNavigate()

    return (
        <section className="bg-yellow-500 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to list your PG with us?</h2>
            <p className="text-white/90 mb-6">
                Join our platform today and reach thousands of potential tenants.
            </p>
            <button
                onClick={() => navigate("/pglistning")} className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition">
                Get Started
            </button>
        </section>
    )
}

export default Acallaction
