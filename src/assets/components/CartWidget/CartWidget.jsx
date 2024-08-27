import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='carritoCompra'>
        <img className='imgCarrito' src="../../../public/imagenes/carrito-de-compras.png" alt="carrito de compras" />
        <strong>4</strong>
    </div>
  )
}

export default CartWidget