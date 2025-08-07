import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './Reduxwork/Store'
import { RouterProvider } from 'react-router'
import Mainroute from './Mainroute/Mainroute'



createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={Mainroute} />
    </Provider>
)
