import {useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"


const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
                <h2>No hay productos en el carrito, compra o vete</h2>
                <Link className='verProductos'  to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(juego => <CartItem  key={juego.item.id} {...juego}/>)
        }
        <div className='Carrito'>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <h3>Total: ${total}</h3>
        </div>
        <div className='Carrito2'>
            <button className='botonCarrito' onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
            <Link className='finalizarCompra2' to="/checkout">Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart