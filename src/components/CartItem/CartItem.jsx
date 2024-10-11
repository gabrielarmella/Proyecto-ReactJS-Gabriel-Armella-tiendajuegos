import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div className='cartItem'>
      <div className='itemCarrito'>
        <h4>{item.nombre}</h4>
        <p>cantidad: {cantidad}</p>
        <p>precio: ${item.precio}</p>
        <button className='botonEliminar' onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem