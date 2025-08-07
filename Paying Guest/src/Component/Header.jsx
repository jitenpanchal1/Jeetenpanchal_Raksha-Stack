import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {

  const status = useSelector(state => state.user.status)

  const navigat = useNavigate()

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
      <div>
        <header>
          <nav>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <button onClick={() => navigat(item.path)}>
                    {item.name}
                  </button>
                </li>
              ))}

              {!status && <button>Logout</button>}
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header
