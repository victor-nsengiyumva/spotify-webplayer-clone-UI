import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/home/routes/home.jsx'
import Login from "./features/login/components/login_page.jsx"
import ErrorPage from './features/Errors/error_page.jsx'
import Test from './features/mock_tests.jsx/testing.jsx'
import Index from './features/home/routes/index_route.jsx'
import PlayListDetails from './features/home/routes/playlist_details.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index/> },
      {
        path: 'playlist/:playListId',
        element:<PlayListDetails/>
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: 'test',
    element: <Test />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// this is the entry point of the react p[roject]