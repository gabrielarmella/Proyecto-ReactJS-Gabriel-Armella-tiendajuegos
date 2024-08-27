import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda🕹️Juegos</h1>
        <nav>
            <ul>
                <li>PC</li>
                <li>Xbox</li>
                <li>PlayStation</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar