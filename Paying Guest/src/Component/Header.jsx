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
    {
      id: 3,
      name: "About Us",
      path: "aboutus",
      status: !status

    }

  ]
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-black/40 to-black/10 border-b border-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo + Brand */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto drop-shadow-lg"
                src="https://cdn-icons-png.flaticon.com/512/235/235861.png"
                alt="PG Finder"
              />
              <span className="ml-2 text-xl font-extrabold text-white drop-shadow-md tracking-wide">
                PG Finder
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigat(item.path)}
                  data-protected
                  className="relative text-white font-medium transition-all duration-300 hover:text-yellow-300 nav-link"
                >
                  {item.name}
                </button>
              ))}
              {status ? (
                <button className="btn-primary" onClick={() => console.log("Logout")}>
                  Logout
                </button>
              ) : (
                <button onClick={() => navigat("/login")} className="btn-primary">
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-yellow-300 focus:outline-none transition"
              >
                <svg
                  className="w-7 h-7"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-lg animate-slideDown">
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
                <button className="btn-primary w-full">Logout</button>
              ) : (
                <button onClick={() => navigat("/login")} className="btn-primary w-full">
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
