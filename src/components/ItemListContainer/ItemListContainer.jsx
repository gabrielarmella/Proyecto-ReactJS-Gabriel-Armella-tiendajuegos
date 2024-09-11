import { useState,useEffect } from 'react';
import { getJuegos, getJuegosPorCategoria } from '../asynmock';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {
  const [juegos, setJuegos] = useState([]);

  const {idCategoria} = useParams()

  useEffect(() =>{
    const funcionJuegos = idCategoria ? getJuegosPorCategoria : getJuegos;
    funcionJuegos(idCategoria)
      .then(res => setJuegos(res))
  /*   getJuegos()
      .then(respuesta => setJuegos(respuesta))
      .catch(error => console.log(error)) */
  }, [idCategoria]) 

  return (
    <>
        {/* <h2 style={{color:"white"}}>{greeting}</h2> */}
        <h2 style={{textAlign:"center"}}>Juegos Destacados </h2>
        <ItemList juegos={juegos}/>
    </>
  )
}

export default ItemListContainer