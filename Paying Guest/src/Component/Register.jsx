import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Adduser } from '../Reduxwork/AdduserSlice'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import ReuseInput from '../ReuseInput'

function Register() {

    const [form, setform] = useState({
        username: "",
        Useremail: "",
        UserPassword: ""
    })
    const navigate = useNavigate()
    const [msg, setmsg] = useState("")
    const dispatch = useDispatch()
    const [msg2, setmsg2] = useState("")


    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {

        e.preventDefault()

        if (!form.username && !form.Useremail && !form.UserPassword) {
            setmsg("All Field need to be fillled")
            return
        }
        if (!form.username) {
            setmsg("Username is Pending")
            return
        }
        if (!form.Useremail) {
            setmsg("Useremail is Pending")
            return
        }
        if (!form.UserPassword) {
            setmsg("UserPassword is Pending")
            return
        }

        const check = await axios.get("http://localhost:5000/Users")
        const read = check.data.find((exist) => {
            if (exist.Useremail === form.Useremail) {
                setmsg("Email is already Exist")
                return true
            }
            return false
        })

        if (read) {
            return;
        }

        if (!read) {
            dispatch(Adduser({
                username: form.username,
                Useremail: form.Useremail,
                UserPassword: form.UserPassword,
            }))
            setform({
                username: "",
                Useremail: "",
                UserPassword: ""
            })
            setmsg("")
            setmsg2("User registered successfully. Redirecting...")
            navigate("/login")
            return true
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Create an Account</h2>

                <form onSubmit={submit} className="space-y-5">
                    <ReuseInput
                        label="Enter User name"
                        type="text"
                        value={form.username}
                        name="username"
                        onchange={handchange}
                        placeholder="e.g. jeeten" />
                    <ReuseInput
                        label="Enter email"
                        type="email"
                        value={form.Useremail}
                        name="Useremail"
                        onchange={handchange}
                        placeholder="e.g. xyz@gmail.com" />
                    <ReuseInput
                        label="Enter Password"
                        type="password"
                        value={form.UserPassword}
                        name="UserPassword"
                        onchange={handchange}
                        placeholder="password" />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Register
                    </button>
                </form>
                {msg && (
                    <div className="mt-5 text-center text-red-600 font-medium animate-pulse">
                        <h1>{msg}</h1>
                    </div>
                )}
                {msg2 && (
                    <div className="mt-5 text-center text-green-700 font-medium animate-pulse">
                        <h1>{msg2}</h1>
                    </div>
                )}
                <p className="text-sm text-gray-600 mt-4 text-center">
                    If you already registered, go to{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 font-semibold hover:underline hover:text-indigo-800 transition duration-200"
                    >
                        Log in page
                    </Link>
                </p>
            </div>
        </div>


    )
}

export default Register
