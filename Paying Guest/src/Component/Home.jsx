import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Css/Home.css"
import { useNavigate } from 'react-router';
import Facilities from './Facilities';
import About from './About';
import Calltoaction from './Calltoaction';
import Userslice from './UsersSlice';

function Home() {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-image"></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center glass-card">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 animate-fadeUp leading-tight">
            Find Your Perfect PG Accommodation
          </h1>
          <p className="text-lg sm:text-xl mb-10 animate-fadeUp delay-200 max-w-2xl">
            Affordable, comfortable, and secure living spaces for students & professionals.
          </p>
          <button
            onClick={() => navigate("pglistning")}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 animate-fadeUp delay-400">
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