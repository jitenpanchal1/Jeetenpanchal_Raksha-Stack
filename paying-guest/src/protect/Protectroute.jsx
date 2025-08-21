import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router'

function Protectroute({ children }) {

    const status = useSelector(state => state.user.status)
    const navigate = useNavigate()

    useEffect(() => {
        if (!status) {
            window.open("/login", "_blank")
            navigate("/", { replace: true })
        }
    }, [status, navigate])

    return children
}

export default Protectroute