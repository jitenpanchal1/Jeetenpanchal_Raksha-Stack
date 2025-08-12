import { createBrowserRouter } from "react-router";
import Register from "../Component/Register";
import Login from "../Component/Login";
import Home from "../Component/Home";
import Header from "../Component/Header";
import Allcomponent from "../Component/Allcomponent";
import Protectroute from "../protect/Protectroute";
import Pglisting from "../Component/Pglisting";

const Mainroute = createBrowserRouter([
    {
        path: "/login",
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
        path: "/",
        element:
            <>
                <Protectroute>
                    <Allcomponent />
                </Protectroute>
            </>,
        children: [
            {
                index: true,
                element:
                    <>
                        <Protectroute>
                            <Home />
                        </Protectroute>
                    </>
            },
            {
                path: "home",
                element:
                    <>
                        <Protectroute>
                            <Home />
                        </Protectroute>
                    </>
            },
            {
                path: "pglistning",
                element:
                    <>
                        <Protectroute>
                            <Pglisting />
                        </Protectroute>
                    </>
            }
        ]
    }
])

export default Mainroute