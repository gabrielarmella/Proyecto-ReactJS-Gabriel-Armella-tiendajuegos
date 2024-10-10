import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>cantidad: {cantidad}</p>
        <p>precio: {item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem