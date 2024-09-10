import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda🕹️Juegos</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/PC">PC</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/xbox">Xbox</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/PlayStation">PlayStation</NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar