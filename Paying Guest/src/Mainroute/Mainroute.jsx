import { createBrowserRouter } from "react-router";
import Register from "../Component/Register";
import Login from "../Component/Login";
import Home from "../Component/Home";
import Header from "../Component/Header";

const Mainroute = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Login />
            </>
    },
    {
        path: "/register",
        element:
            <>
                <Register />
            </>

    },
    {
        path: "/header",
        element:
            <>
                <Header />
            </>
    }
])

export default Mainroute