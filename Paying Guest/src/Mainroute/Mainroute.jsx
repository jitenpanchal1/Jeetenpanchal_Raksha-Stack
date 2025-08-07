import { createBrowserRouter } from "react-router";
import Register from "../Component/Register";
import Login from "../Component/Login";
import Home from "../Component/Home";

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
        path: "/default",
        element:
            <>
                <Home />
            </>
    }
])

export default Mainroute