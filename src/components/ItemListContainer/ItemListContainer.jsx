import { useState,useEffect } from 'react';
import { getJuegos } from '../asynmock';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({}) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() =>{
    getJuegos()
      .then(respuesta => setJuegos(respuesta))
      .catch(error => console.log(error))
  }, []) 

  return (
    <>
        {/* <h2 style={{color:"white"}}>{greeting}</h2> */}
        <h2 style={{textAlign:"center"}}>Mis Productos</h2>
        <ItemList juegos={juegos}/>
    </>
  )
}

export default ItemListContainer