import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import "../Css/Header.css"

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
    },

  ]
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">


            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto drop-shadow-lg"
                src="https://cdn-icons-png.flaticon.com/512/235/235861.png"
                alt="PG Finder"
              />
              <span className="ml-2 text-xl font-extrabold text-white drop-shadow-sm">
                PG Finder
              </span>
            </div>


            <div className="hidden md:flex space-x-6 items-center">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigat(item.path)}
                  data-protected
                  className="relative text-white font-medium transition-all duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </button>
              ))}
              {status ? (
                <button className="px-4 py-1 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigat("/login")}
                  className="px-4 py-1 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                >
                  Login
                </button>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-yellow-300 focus:outline-none"
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
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 shadow-lg animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigat(item.path);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-white font-medium hover:text-yellow-300 transition"
                >
                  {item.name}
                </button>
              ))}
              {status ? (
                <button className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigat("/login")}
                  className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                >
                  Login
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
