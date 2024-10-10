import {useState, useEffect} from 'react'
import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/config'

const Productos = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const misJuegos = query(collection(db, "juego"));
        getDocs(misJuegos)
            .then(respuesta => {
                setProductos (respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})))
            })
    },[productos])
    const restarStock = async (producto) => {
        const productoRef = doc(db, "juego")
        const nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, {stock: nuevoStock})
    }

  return (
    <>
      <h2>Mis Productos desde Firebase</h2>
      <div>
        {
          productos.map(producto => {
            <div key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>Precio: {producto.precio}</p>
              <p>Stock: {producto.stock}</p>
              <button onClick={()=> restarStock(producto)}>Comprar</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Productos