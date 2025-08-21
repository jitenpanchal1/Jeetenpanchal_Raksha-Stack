import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router'
import "../Css/Detail.css"
import { PGLISTINGS_API } from '../api/baseurl'

function Pgdetail() {

  const { id } = useParams()
  const [detail, setdetail] = useState({})

  useEffect(() => {
    axios.get(`${PGLISTINGS_API}/${id}`)
      .then((pg) => setdetail(pg.data))
      .catch((err) => console.log(err, "not fetch detail"))
  })

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover px-4 sm:px-6"
      style={{
        backgroundImage: `url(${detail.image})`
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-8 my-6 sm:my-10 animate-fadeIn">

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-4 sm:mb-6 drop-shadow-lg">
          {detail.name}
        </h1>

        {/* Image */}
        <div className="overflow-hidden rounded-xl mb-4 sm:mb-6">
          <img
            src={detail.image}
            alt="not found"
            className="w-full h-52 sm:h-72 object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Location & Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">📍 {detail.location}</h1>
          <h1 className="text-lg sm:text-xl font-semibold text-green-700">💰 {detail.price}</h1>
        </div>

        {/* Facilities */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">🏢 Facilities:</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {detail.facilities?.map((facility, index) => (
              <span
                key={index}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {facility.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h1 className="text-sm sm:text-lg text-gray-800">📞 {detail.contactNumber}</h1>
          <h1 className="text-sm sm:text-lg text-gray-800">📧 {detail.email}</h1>
        </div>
      </div>
    </div>

  )
}

export default Pgdetail