import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import Students from './components/Students.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Contact from './components/contact.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />
      },
      {
        path: "Navbar",
        element: <Navbar />
      },
      {
        path: "Products",
        element: <Products />
      },
      {
        path: "Students",
        element: <Students />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "/Login",
        element: <Login />
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
