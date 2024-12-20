import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import Projects from "./routes/Projects.tsx";
import ProjectDetail from "./routes/ProjectDetail.tsx";

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
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "projects/:slug",
        element: <ProjectDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
