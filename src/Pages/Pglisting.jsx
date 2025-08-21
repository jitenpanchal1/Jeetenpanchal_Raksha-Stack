import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router';
import { PGLISTINGS_API } from '../api/baseurl';

function Pglisting() {

  const [allpgs, setallpgs] = useState([])
  const [search, setsearch] = useState("")
  const [facility, setfacility] = useState("")
  const [pricerange, setpricerange] = useState([0, 50000])
  const [page, setpage] = useState(0)
  const navigate = useNavigate()

  const perpage = 6

  useEffect(() => {
    axios
      .get(PGLISTINGS_API)
      .then((pg) => setallpgs(pg.data))
      .catch((err) => console.log(err, "data not fetching from the main server"))
  })

  const facilities = useMemo(
    () => [...new Set(allpgs.flatMap((pg) => pg.facilities))],
    [allpgs])

  const [debouncing, setdebouncing] = useState(search)
  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncing(search);
      setpage(0)
    }, 400);
    return () => clearTimeout(handler)
  }, [search])

  const filterpgs = useMemo(() => {
    return allpgs.filter((pg) => {
      const matchsearch =
        debouncing.trim() === "" ||
        pg.name.toLowerCase().includes(debouncing.toLowerCase()) ||
        pg.location.toLowerCase().includes(debouncing.toLocaleUpperCase())

      const matchfaciliti = !facility || pg.facilities.includes(facility)

      const pricecheck = pg.price >= pricerange[0] && pg.price <= pricerange[1]

      return matchsearch && matchfaciliti && pricecheck
    })
  }, [allpgs, debouncing, facility, pricerange])

  const currentitem = useMemo(() => {
    const start = page * perpage
    return filterpgs.slice(start, start + perpage)
  }, [page, filterpgs])

  const pagcount = Math.ceil(filterpgs.length / perpage)

  const pricechange = (e) => {
    if (!e.target.value) {
      setpricerange([0, 50000])
    } else {
      const [min, max] = e.target.value.split("-").map(Number)
      setpricerange([min, max])
    }
    setpage(0)
  }

  const godetail = (id) => {
    navigate(`/pgdetail/${id}`)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-6 bg-gradient-to-r from-yellow-50 to-white shadow-md rounded-2xl my-5">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search here..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl 
                 focus:outline-none focus:ring-2 focus:ring-yellow-400 
                 shadow-sm transition hover:border-yellow-400"
          />

          {/* Facilities */}
          <select
            value={facility}
            onChange={(e) => {
              setfacility(e.target.value);
              setpage(0);
            }}
            className="px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-yellow-400 
                 transition hover:border-yellow-400"
          >
            <option value="">🏠 All Facilities</option>
            {facilities.map((fa, ind) => (
              <option key={ind} value={fa}>
                {fa}
              </option>
            ))}
          </select>

          {/* Price */}
          <select
            onChange={pricechange}
            className="px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-yellow-400 
                 transition hover:border-yellow-400"
          >
            <option value="">💰 All Prices</option>
            <option value="1000-2000">₹1,000 - ₹2,000</option>
            <option value="2000-4000">₹2,000 - ₹4,000</option>
            <option value="4000-6000">₹4,000 - ₹6,000</option>
            <option value="6000-10000">₹6,000 - ₹10,000</option>
            <option value="10000-20000">₹10,000 - ₹20,000</option>
            <option value="20000-50000">₹20,000 - ₹50,000</option>
          </select>
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {currentitem.length === 0 ? (
          <div className="text-center py-10">
            <h1 className="text-gray-500 text-lg font-medium">No Item here</h1>
          </div>
        ) : (
          currentitem.map((pg) => (
            <div
              key={pg.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition border mb-6"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="w-full md:w-1/3 h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="flex-1 p-4">
                  <div className="flex flex-wrap justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">{pg.name}</h1>
                    <span className="text-yellow-600 font-bold text-lg">
                      ₹{pg.price}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-2">{pg.location}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {pg.facilities.map((fa, ind) => (
                      <span
                        key={ind}
                        className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                      >
                        {fa}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">
                    {pg.description || "Comfortable and secure PG accommodation."}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => godetail(pg.id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                      More detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Pagination */}
        {pagcount > 1 && (
          <div className="flex justify-center mt-8">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next ›"
              onPageChange={(e) => setpage(e.selected)}
              pageRangeDisplayed={3}
              pageCount={pagcount}
              previousLabel="‹ Prev"
              renderOnZeroPageCount={null}
              containerClassName="flex items-center gap-2"
              pageClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
              activeClassName="bg-yellow-500 text-white"
              previousClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
              nextClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
              disabledClassName="opacity-50 cursor-not-allowed"
              forcePage={page}
            />
          </div>
        )}
      </div>

    </>
  )
}

export default Pglisting