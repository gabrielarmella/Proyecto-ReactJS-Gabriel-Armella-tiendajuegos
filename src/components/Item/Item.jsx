import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, idCat, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Consola: {idCat}</p>
        <Link to={`/item/${id}`}><button>Ver Detalles</button></Link>
        
        
    </div>
  )
}

export default Item