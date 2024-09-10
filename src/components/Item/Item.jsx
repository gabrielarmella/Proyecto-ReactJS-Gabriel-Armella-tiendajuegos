import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <button>Ver Detalles</button>
    </div>
  )
}

export default Item