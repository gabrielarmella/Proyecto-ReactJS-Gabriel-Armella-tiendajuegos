import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [email, setEmail] = useState ("")
    const [emailConfirmacion, setEmailConfirmacion] = useState ("")
    const [error, setError] = useState ("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)

    const manejadorFormulario = (e) => {
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos o moriras maldito!")
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los campos del mail no coinciden, maldito insecto")
            return;
        }
        const orden = {
            items: carrito.map (juego => ({
                id: juego.item.id,
                nombre: juego.item.nombre,
                cantidad: juego.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "juego", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(() =>{
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef =>{
                    setOrdenId(docRef.id)
                    vaciarCarrito();
                    setNombre("")
                    setApellido("")
                    setTelefono("")
                    setEmail("")
                    setEmailConfirmacion("")
                })
                .catch(error=>{
                    console.log("Error al crear la orden", error)
                    setError("¡Se produjo un error al crear la orden!")
                })
        })
        .catch((error) => {
            console.log("No se puede actualizar el stock", error)
            setError ("No se puede actualizar el stock, intente de nuevo en unos minutos.")
        })
}   

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(juego => (
                    <div key={juego.item.id}>
                        <p>{juego.item.nombre}</p>
                        <p>{juego.item.precio} x {juego.cantidad}</p>
                        <p>{juego.item.precio}</p>
                        <hr/>
                    </div>
                ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="number" onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
            </div>
                {
                    error && <p style={{color:"red"}}>{error}</p>
                }
            <button type="submit">Confirmar Compra</button>
                {
                    ordenId &&(
                        <strong>¡Gracias por tu compra! Tu numero de order es: {ordenId}</strong>
                    )
                }
        </form>
    </div>
  )
}


export default Checkout