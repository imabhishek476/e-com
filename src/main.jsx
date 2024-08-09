import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Terms from './routes/Terms'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Cart from './routes/Cart'
import Contact from './routes/Contact'
import MensWear from './routes/MensWear'
import WomensWear from './routes/WomensWear'
import OnSale from './routes/OnSale'
import NewArrival from './routes/NewArrival'
import MostPopular from './routes/MostPopular'
import Profile from './routes/Profile'
import Customize from './routes/Customize'
import CustomDesign from './routes/CustomDesign'
import ViewProduct from './routes/ViewProduct/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
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
    element: <Profile/>,
  },
  {
    path: "/sale",
    element: <OnSale/>,
  },
  {
    path: "/customize",
    element: <Customize/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/new",
    element: <NewArrival/>,
  },
  {
    path: "/popular",
    element: <MostPopular/>,
  },
  {
    path: "/mens_wear",
    element: <MensWear/>,
  },
  {
    path: "/womens_wear",
    element: <WomensWear/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/terms&condition",
    element: <Terms/>,
  },
  {
    path: "/custom-design/:pid",
    element: <CustomDesign/>,
  },
  {
    path: "/product-info/:url",
    element: <ViewProduct/>,
  },
  {
    path: "/product-review/:url/*",
    element: <div>Review</div>,
  },
  {
    path: "/product-review/:url/*",
    element: <div>Review</div>,
  },
  {
    path: '/*',
    element : <div>Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='205282664949-3q28rh05dda3f2jkpqa6b137mpls7d0m.apps.googleusercontent.com'>
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
  </GoogleOAuthProvider>
)
