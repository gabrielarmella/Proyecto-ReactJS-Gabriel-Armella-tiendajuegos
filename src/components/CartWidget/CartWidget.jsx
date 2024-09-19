import React from 'react'
import { useContext } from 'react'
import "./CartWidget.css"
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  
  return (
    <div className='carritoCompra'>
      <Link to="/cart">
        <img className='imgCarrito' src="/imagenes/carrito-de-compras.png" alt="carrito de compras" />
      </Link>
        {
          cantidadTotal> 0 && <strong>{cantidadTotal}</strong>
        }
    </div>
  )
}

export default CartWidget