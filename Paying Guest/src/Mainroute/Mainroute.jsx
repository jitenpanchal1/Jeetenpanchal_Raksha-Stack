import { createBrowserRouter } from "react-router";
import Register from "../Component/Register";
import Login from "../Component/Login";

const Mainroute = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Register />
            </>
    },
    {
        path: "/login",
        element:
            <>
                <Login />
            </>

    }
])

export default Mainroute