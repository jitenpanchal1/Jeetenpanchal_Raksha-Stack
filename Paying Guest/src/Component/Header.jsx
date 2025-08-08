import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState } from 'react'

function Header() {

  const status = useSelector(state => state.user.status)

  const navigat = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      id: 1,
      name: "Home",
      path: "home",
      status: !status
    },
    {
      id: 2,
      name: "PG Listing",
      path: "pglistning",
      status: !status
    }
  ]
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/235/235861.png"
                alt="PG Finder"
              />
              <span className="ml-2 text-xl font-bold text-indigo-600">PG Finder</span>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigat(item.path)}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-100"
                >
                  {item.name}
                </button>
              ))}
              {!status && (
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition">
                  Logout
                </button>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigat(item.path);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {item.name}
                </button>
              ))}
              {!status && (
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
