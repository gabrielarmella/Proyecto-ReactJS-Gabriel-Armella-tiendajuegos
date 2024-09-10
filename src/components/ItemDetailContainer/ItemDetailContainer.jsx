import React, { useState, useEffect } from 'react'
import { getUnJuego } from '../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [juego, setJuegos] = useState(null)

    useEffect(() => {
        getUnJuego(2)
            .then(respuesta => setJuegos(respuesta))
    }, [])

  return (
    <div>
        <ItemDetail {...juego}/>
    </div>
  )
}

export default ItemDetailContainer