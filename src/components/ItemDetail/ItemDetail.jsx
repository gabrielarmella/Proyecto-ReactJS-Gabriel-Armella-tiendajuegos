import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({idCat, nombre, precio, imgFondo}) => {
  return (
    <div className='contenedorItem'>
        <div className='contenedorImg'>
          <img src={imgFondo} alt={nombre} />
        </div>
        <div className='infoItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h3>Consola: {idCat}</h3>
            <p className='contenedorDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum rem ipsa possimus cupiditate reiciendis cumque, 
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