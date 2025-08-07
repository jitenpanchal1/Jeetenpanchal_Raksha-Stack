import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Adduser } from '../Reduxwork/AdduserSlice'

function Register() {

    const [form, setform] = useState({
        username: "",
        Useremail: "",
        UserPassword: ""
    })
    const [msg, setmsg] = useState("")
    const dispatch = useDispatch()

    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {

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

        dispatch(Adduser({
            username: form.username,
            Useremail: form.Useremail,
            UserPassword: form.UserPassword,
        }))

        setmsg("User register Succesfully")

        setform({
            username: "",
            Useremail: "",
            UserPassword: ""
        })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Enter user name : </label>
                    <input type="text" onChange={handchange} value={form.username} id='name' name='username' />
                </div>
                <div>
                    <label htmlFor="email">Enter Mail id : </label>
                    <input type="email" onChange={handchange} value={form.Useremail} id='email' name='Useremail' />
                </div>
                <div>
                    <label htmlFor="pass">Enter Password : </label>
                    <input type="password" onChange={handchange} value={form.UserPassword} id='pass' name='UserPassword' />
                </div>
                <input type="submit" value="Register" />
            </form>
            <div>
                <h1> {msg} </h1>
            </div>
        </div>
    )
}

export default Register
