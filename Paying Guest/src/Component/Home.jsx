import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Css/Home.css"

function Home() {

    const [pgdata, setpgdata] = useState([])

    const call = async () => {
        const Api = await axios.get("http://localhost:3000/pglistings")
        const read = Api.data
        setpgdata(read)
    }

    useEffect(() => {
        call()
    }, [])

    return (
  <div className="bg-gray-50">
  <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6 py-12 sm:py-16 lg:py-0">
    {/* Background Animation Layer */}
    <div className="absolute inset-0 animated-bg"></div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 animate-fadeIn leading-tight">
        Find Your Perfect PG Accommodation
      </h1>
      <p className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 animate-fadeIn delay-200 max-w-2xl">
        Affordable, comfortable, and secure living spaces for students & professionals.
      </p>
      <a
        href="#listings"
        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 animate-fadeIn delay-400"
      >
        Explore PG Listings
      </a>
    </div>
  </section>
</div>

    )
}

export default Home