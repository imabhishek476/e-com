import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './routes/Login'
import Signup from './routes/Signup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import Sidebar from './components/Navbar/Sidebar.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/customer/login",
    element: <Login/>,
  },
  {
    path: "/customer/signup",
    element: <Signup/>,
  },
  {
    path: "/profile",
    element: <div className='flex'><Sidebar/><div>Profile</div></div>,
  },
  {
    path: "/sale",
    element: <div className='flex'><Sidebar/><div>On Sale</div></div>,
  },
  {
    path: "/customize",
    element: <div className='flex'><Sidebar/><div>Customize</div></div>,
  },
  {
    path: "/contact",
    element: <div className='flex'><Sidebar/><div>Contact</div></div>,
  },
  {
    path: "/new",
    element: <div className='flex'><Sidebar/><div>New Arrival</div></div>,
  },
  {
    path: "/popular",
    element: <div className='flex'><Sidebar/><div>Popular</div></div>,
  },
  {
    path: "/mens_wear",
    element: <div className='flex'><Sidebar/><div>Men's Wear</div></div>,
  },
  {
    path: "/womens_wear",
    element: <div className='flex'><Sidebar/><div>Women's Wear</div></div>,
  },
  {
    path: "/cart",
    element: <div className='flex'><Sidebar/><div>Your Cart</div></div>,
  },
  {
    path: "/terms&condition",
    element: <div className='flex'><Sidebar/><div>Terms and Condition</div></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={"978301754993-tddvsu0b8pi903eq6d59u6v2lkqo8cde.apps.googleusercontent.com"}>
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
  </GoogleOAuthProvider>
)
