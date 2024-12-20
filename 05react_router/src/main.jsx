import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/AboutUs.jsx";
import Contact from "./components/contact/ContactUs.jsx";

//way 1
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },

        ]
    }
])

// way 2
const router1 = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router1} > </RouterProvider>
  </StrictMode>,
)
