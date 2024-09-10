import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <div>
        <img src={img} alt={nombre} />
        </div>
        <div className='infoItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem ipsa possimus cupiditate reiciendis cumque, 
                ab atque harum animi. Dicta officia illum magnam dolor eveniet distinctio nihil assumenda beatae at.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Illum maiores nihil veniam quas officia, odio vel quasi quaerat delectus placeat voluptatum quae a alias, eos similique, repellendus minima animi dolores.</p>
            <div className='botonItem'>
                <ItemCount stock={10}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail