import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/tailwind.css'
import './css/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/home/components/home.jsx'
import Login from "./features/login/components/login_page.jsx"
import ErrorPage from './features/Errors/error_page.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"login/",
        element: <Login/>
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


// this is the entry point of the react p[roject]