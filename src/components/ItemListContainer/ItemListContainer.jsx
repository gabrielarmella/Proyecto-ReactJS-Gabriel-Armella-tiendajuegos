import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()

  useEffect(()=> {
    setLoading(true)
    const misJuegos = idCategoria ? query(collection(db, "juego"), where("idCat", "==", idCategoria)) : (collection(db,"juego"))

    getDocs(misJuegos)
    .then (res => {
        
        const nuevoJuego = res.docs.map(doc =>{
            const data = doc.data()
            return {id:doc.id , ...data}
        })
        setJuegos(nuevoJuego)
    })
    .catch(error => console.log(error))
    .finally(()=>{
        setLoading(false)
    })
}, [idCategoria])
  
  return (
    <>
        <h2 style={{textAlign:"center"}}>Juegos Destacados </h2>
        {loading ? (<Loader/> ): <ItemList juegos={juegos}/>}
    </>
  )
}

export default ItemListContainer