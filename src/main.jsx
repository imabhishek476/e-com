import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Terms from './routes/Terms'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Cart from './routes/Cart'
import Contact from './routes/Contact'
import MensWear from './routes/MensWear'
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
    element: <Contact/>,
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
    element: <MensWear/>,
  },
  {
    path: "/womens_wear",
    element: <div className='flex'><Sidebar/><div>Women's Wear</div></div>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/terms&condition",
    element: <Terms/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='205282664949-3q28rh05dda3f2jkpqa6b137mpls7d0m.apps.googleusercontent.com'>
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
  </GoogleOAuthProvider>
)
