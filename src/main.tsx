import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
