import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Pglisting() {
  const [allpgs, setAllpgs] = useState([]);
  const [currentitem, setcurrentitem] = useState([])
  const [filterpage, setfilterpage] = useState([])
  const [pagecount, setpagecount] = useState(0)
  const [offset, setofset] = useState(0)

  const [search, setsearch] = useState("")
  const [faciliti, setfaciliti] = useState("")
  const [maxprice, setmaxprice] = useState(50000)

  const perpage = 6

  const callpg = async () => {
    try {
      const pglist = await axios.get("http://localhost:3000/pglistings");
      setAllpgs(pglist.data);
    } catch (error) {
      console.error("Error fetching PG listings:", error);
    }
  };

  useEffect(() => {
    callpg();
  }, []);

  useEffect(() => {
    const endset = offset + perpage
    setcurrentitem(filterpage.slice(offset, endset))
    setpagecount(Math.ceil(filterpage.length / perpage))
  }, [offset, perpage, filterpage])

  const searchbar = () => {

    setTimeout(() => {
      let filter = allpgs
      if (search.trim() !== "") {
        filter = allpgs.filter(
          (pg) =>
            pg.name.toLowerCase().includes(search.toLowerCase()) ||
            pg.location.toLowerCase().includes(search.toLowerCase())
        )
      }

      if (faciliti) {
        filter = filter.filter((pg) =>
          (pg.facilities.includes(faciliti)))
      }

      filter = filter.filter((pg) => pg.price <= maxprice)

      setfilterpage(filter)
      setofset(0)
    }, 3000);
  }

  useEffect(() => {
    searchbar()
  }, [allpgs, search, faciliti,])

  const handcount = (e) => {
    const newset = (e.selected * perpage) % filterpage.length
    setofset(newset)
  }

  const allfacilities = [...new Set(allpgs.flatMap((pg) => pg.facilities))]

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-6 bg-white shadow-md rounded-lg my-5">
        <div className="flex flex-col md:flex-row items-center gap-4">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name or location"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />

          {/* Facilities Dropdown */}
          <select
            value={faciliti}
            onChange={(e) => setfaciliti(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">All facilities</option>
            {allfacilities.map((fas, ind) => (
              <option key={ind} value={fas}>
                {fas}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <div className="flex flex-col items-start">
            <label htmlFor="pri" className="text-sm font-medium text-gray-600">
              Price: <span className="text-yellow-600 font-bold">₹{maxprice}</span>
            </label>
            <input
              type="range"
              id="pri"
              min="500"
              max="50000"
              value={maxprice}
              onChange={(e) => setmaxprice(Number(e.target.value))}
              className="w-48 accent-yellow-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {currentitem.map((pg) => (
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
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                    More detaile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next ›"
            onPageChange={handcount}
            pageRangeDisplayed={3}
            pageCount={pagecount}
            previousLabel="‹ Prev"
            renderOnZeroPageCount={null}
            containerClassName="flex items-center gap-2"
            pageClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
            activeClassName="bg-yellow-500 text-white"
            previousClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
            nextClassName="px-3 py-1 border rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      </div>
    </>
  );
}

export default Pglisting;
