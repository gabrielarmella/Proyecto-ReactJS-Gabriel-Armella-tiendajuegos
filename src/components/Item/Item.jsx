import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, idCat, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Consola: {idCat}</p>
        <p>ID: {id}</p>
        <h3 style={{textAlign:"center"}}>Stock: {stock}</h3>
        <Link to={`/Item/${id}`}><button>Ver Detalles</button></Link>
    </div>
  )
}

export default Item