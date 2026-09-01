import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../Layout'
import Contact from '../pages/Contact'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import PrivateRoute from './PrivateRoute'
import ProtectedRoutes from './ProtectedRoutes'
import Profile from '../pages/Profile'
import Shop from '../pages/Shop'
import Blog from '../pages/Blog'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'


const MainRouting = () => {

let allRouters = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/blogs",
            element: <Blog />
          },
          
          {
            path: "/about",
            element: <About />
          },


          {
            element:<ProtectedRoutes />,
            children:[
              {
              path: "/auth/profile",
              element:<Profile />
              },

              {
              path: "/auth/shop",
              element:<Shop />
              },
              {
              path: ":id",
              element:<ProductDetails />
              },

               {
             path: "/contact-us",
             element: <Contact />
               },
                {
             path: "/auth/cart",
             element: <CartPage />
               },
            ]
          },
          
         {
          element: <PrivateRoute />,
          children : [
             {
            path: "/auth/login",
            element: <Login/>
          },

          {
            path: "/auth/register",
            element: <Register/>
          },
            
          ]
         }
        ]
    }
])
  return (
    <RouterProvider router={allRouters}/>
  )
}
export default MainRouting
