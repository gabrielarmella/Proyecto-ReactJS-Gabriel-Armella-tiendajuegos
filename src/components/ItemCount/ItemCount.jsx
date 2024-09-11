import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    };

  return (
    <div className='contadorBoton'>
        <button className='' onClick={incrementar}>+</button>
        <p>{contador}</p>
        <button onClick={decrementar}>-</button>
        <button className='agregarCarrito'>Agregar al Carrito</button>
    </div>
  )
}


export default ItemCount