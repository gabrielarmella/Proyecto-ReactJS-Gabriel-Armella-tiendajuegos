import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({idCat, descripcion, nombre, precio, imgFondo}) => {
  return (
    <div className='contenedorItem'>
        <div className='contenedorImg'>
          <img src={imgFondo} alt={nombre} />
        </div>
        <div className='infoItem'>
            <h2 style={{textAlign:"center"}}>Nombre: {nombre}</h2>
            <h3 style={{textAlign:"center"}}>Precio: ${precio}</h3>
            <h3 style={{textAlign:"center"}}>Consola: {idCat}</h3>
            <p style={{textAlign:"center", width:"700px", margin:"40px"}}>{descripcion}</p>
            <div className='botonItem'>
                <ItemCount stock={10}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail