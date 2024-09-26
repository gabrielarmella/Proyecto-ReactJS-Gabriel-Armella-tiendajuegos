import React from 'react'
import "./ItemDetail.css";
import Contador from '../Contador/Contador';
import { useState,} from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import {toast} from 'react-toastify';

const ItemDetail = ({id, idCat, descripcion, nombre, precio, imgFondo, stock}) => {


    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
      setAgregarCantidad(cantidad);
      console.log("Producto agregado:" + cantidad)

      const item = {id, nombre, precio}
      agregarAlCarrito(item, cantidad)
      toast.success("su compra fue enviada al carrito",{autoClase:1000, theme:"dark", position:"top-right"})
      
    }
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
            {
             agregarCantidad > 0 ? (<Link to="/cart">Finalizar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
        </div>
    </div>
  )
}

export default ItemDetail