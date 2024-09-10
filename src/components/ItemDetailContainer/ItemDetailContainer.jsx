import React, { useState, useEffect } from 'react'
import { getUnJuego } from '../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [juego, setJuegos] = useState(null)

    const {idItem} = useParams()

    useEffect(() => {
        getUnJuego(idItem)
            .then(respuesta => setJuegos(respuesta))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...juego}/>
    </div>
  )
}

export default ItemDetailContainer