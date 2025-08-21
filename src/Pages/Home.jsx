import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Css/Home.css"
import { useNavigate } from 'react-router';
import Facilities from '../Component/Facilities';
import About from '../Component/About';
import Calltoaction from '../Component/Calltoaction';
import Userslice from '../Component/UsersSlice';

function Home() {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-image bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center glass-card p-4 sm:p-8 rounded-lg">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 animate-fadeUp leading-tight">
            Find Your Perfect PG Accommodation
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 animate-fadeUp delay-200 max-w-2xl">
            Affordable, comfortable, and secure living spaces for students & professionals.
          </p>
          <button
            onClick={() => navigate("/pglistning")}
            className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-yellow-500 transition duration-300 animate-fadeUp delay-400 w-full sm:w-auto"
          >
            Explore PG Listings
          </button>
        </div>
      </section>

      <Facilities />
      <About />
      <Userslice />
      <Calltoaction />

    </div>

  );



}

export default Home