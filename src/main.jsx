import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/tailwind.css'
import './css/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './features/home/components/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/login' element={<App/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)


// this is the entry point of the react p[roject]