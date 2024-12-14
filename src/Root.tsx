import './App.css'
import { NavLink, Outlet } from "react-router";

function Root() {

  return (
    <>
      <nav>
        <NavLink viewTransition to="/">About</NavLink>
        <NavLink viewTransition to="/projects">Projects</NavLink>
        <NavLink viewTransition to="/contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>&#169; 2024</footer>
    </>
  )
}

export default Root
