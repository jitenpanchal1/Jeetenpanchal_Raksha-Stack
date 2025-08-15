import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchuser, setStatus } from '../Reduxwork/AdduserSlice'
import { Link, useNavigate } from 'react-router'
import ReuseInput from '../ReuseInput'
import "../Css/Login.css"

function Login() {

    const [form, setform] = useState({
        Useremail: "",
        UserPassword: ""
    })

    const [errmsg, seterrmsg] = useState("")
    const [msg, setmsg] = useState("")
    const navigate = useNavigate()

    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const diapach = useDispatch()

    const submit = async (e) => {

        e.preventDefault()

        if (!form.Useremail && form.UserPassword) {
            seterrmsg("All field need to be filed")
            return;
        }
        if (!form.Useremail) {
            seterrmsg("Emial is required")
            return
        }
        if (!form.UserPassword) {
            seterrmsg("Password is required")
            return
        }

        try {
            const call = await diapach(fetchuser())
            const users = call.payload
            const check = users.find((u) => u.Useremail === form.Useremail)
            if (!check) {
                seterrmsg("User Not find with this mail id")
                return
            }
            if (check.UserPassword !== form.UserPassword) {
                seterrmsg("password Not valid with this mail id")
                return
            }
        } catch (error) {
            seterrmsg("Error at Server side try after some time")
        }
        seterrmsg("")
        setmsg("User Log in succesfully redirect...")
        setform({
            Useremail: "",
            UserPassword: ""
        })

        setTimeout(() => {
            diapach(setStatus(true))
            navigate("/")
        }, 2000);
    }

    return (
        <div className="login-page flex items-center justify-center min-h-screen relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-yellow-50">

            {/* Background overlay for glass effect */}
            <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm z-0 transition-opacity duration-700"></div>

            {/* Card */}
            <div className="relative z-10 bg-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 w-full max-w-md animate-fade-in-up transition-all duration-700 border border-white/30">

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6 animate-fade-in">
                    Welcome to <span className="text-yellow-500">PG Finder 🏠</span>
                </h2>

                {/* Form */}
                <form onSubmit={submit} className="space-y-5 sm:space-y-6">
                    <ReuseInput
                        label="Email"
                        type="email"
                        value={form.Useremail}
                        name="Useremail"
                        onchange={handchange}
                        placeholder="e.g. xyz@gmail.com"
                    />
                    <ReuseInput
                        label="Password"
                        type="password"
                        value={form.UserPassword}
                        name="UserPassword"
                        onchange={handchange}
                        placeholder="Enter your password"
                    />
                    <input
                        className="w-full px-4 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-300 cursor-pointer"
                        type="submit"
                        value="Log in"
                    />
                </form>

                {/* Messages */}
                <div className="mt-4 text-center text-sm">
                    {msg && <p className="text-green-500 animate-fade-in">{msg}</p>}
                    {errmsg && <p className="text-red-500 animate-fade-in">{errmsg}</p>}
                </div>

                {/* Register Link */}
                <p className="mt-6 text-sm text-center text-gray-700 animate-fade-in">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-indigo-700 font-medium hover:underline transition duration-300"
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </div>

    )
}

export default Login