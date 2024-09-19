import { useState } from "react"
import "./Contador.css"


const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }
    const restarContador = () => {
        if (contador > inicial){
            setContador(contador - 1)
        }
    }

  return (
    <>
        <div className="contadorBoton">
            <button onClick={restarContador}>-</button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}>+</button>
            <button className="agregarCarrito" onClick={()=>funcionAgregar(contador)}>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default Contador