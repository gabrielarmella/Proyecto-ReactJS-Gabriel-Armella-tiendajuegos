import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({juegos}) => {
  return (
    <div className='contenedorProductos'>
        {juegos.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList