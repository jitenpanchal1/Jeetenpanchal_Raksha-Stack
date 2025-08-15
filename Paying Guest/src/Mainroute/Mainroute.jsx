import { createBrowserRouter } from "react-router";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Header from "../Component/Header";
import Allcomponent from "../Component/Allcomponent";
import Protectroute from "../protect/Protectroute";
import Pglisting from "../Pages/Pglisting";
import AboutUs from "../Pages/Aboutus";
import Contact from "../Pages/Contact";
import Pgdetail from "../Pages/Pgdetail";

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
            },
            {
                path: "aboutus",
                element:
                    <>
                        <Protectroute>
                            <AboutUs />
                        </Protectroute>

                    </>
            },
            {
                path: "contactus",
                element:
                    <>
                        <Protectroute>
                            <Contact />
                        </Protectroute>

                    </>
            },
            {
                path: "pgdetail/:id",
                element:
                    <>
                        <Protectroute>
                            <Pgdetail />
                        </Protectroute>
                    </>
            }
        ]
    }
])

export default Mainroute