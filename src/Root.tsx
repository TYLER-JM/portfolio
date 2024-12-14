import './App.css'
import './styles/navbar.css'
import { NavLink, Outlet } from "react-router";

function Root() {

  return (
    <>
      <nav className="menu" id="menu">
        <ul>
          <li><NavLink viewTransition to="/">About</NavLink></li>
          <li><NavLink viewTransition to="/projects">Projects</NavLink></li>
          <li><NavLink viewTransition to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>&#169; 2024</footer>
    </>
  )
}

export default Root
