import './App.css'
import { NavLink, Outlet } from "react-router";

function Root() {

  return (
    <>
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
        <div>main content outlet below</div>
        <Outlet />
      </main>
      <footer>&#169; 2024</footer>
    </>
  )
}

export default Root
